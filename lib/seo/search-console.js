import { createSign } from "node:crypto";

const TOKEN_URL = "https://oauth2.googleapis.com/token";
const SEARCH_SCOPE = "https://www.googleapis.com/auth/webmasters.readonly";

const base64url = (value) => Buffer.from(value).toString("base64url");

function isoDate(date) {
  return date.toISOString().slice(0, 10);
}

function shiftedDate(daysAgo) {
  const date = new Date();
  date.setUTCDate(date.getUTCDate() - daysAgo);
  return date;
}

export function getSearchConsoleConfig() {
  const encodedPrivateKey = process.env.GOOGLE_SEARCH_CONSOLE_PRIVATE_KEY_BASE64 || "";
  return {
    clientEmail: process.env.GOOGLE_SEARCH_CONSOLE_CLIENT_EMAIL || "",
    privateKey: encodedPrivateKey
      ? Buffer.from(encodedPrivateKey, "base64").toString("utf8")
      : (process.env.GOOGLE_SEARCH_CONSOLE_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
    property: process.env.GOOGLE_SEARCH_CONSOLE_PROPERTY || "",
  };
}

export function getMissingSearchConsoleConfig() {
  const config = getSearchConsoleConfig();
  return [
    ["GOOGLE_SEARCH_CONSOLE_CLIENT_EMAIL", config.clientEmail],
    ["GOOGLE_SEARCH_CONSOLE_PRIVATE_KEY_BASE64 (oder GOOGLE_SEARCH_CONSOLE_PRIVATE_KEY)", config.privateKey],
    ["GOOGLE_SEARCH_CONSOLE_PROPERTY", config.property],
  ].filter(([, value]) => !value).map(([key]) => key);
}

async function getAccessToken() {
  const { clientEmail, privateKey } = getSearchConsoleConfig();
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const payload = base64url(JSON.stringify({
    iss: clientEmail,
    scope: SEARCH_SCOPE,
    aud: TOKEN_URL,
    iat: now,
    exp: now + 3600,
  }));
  const unsignedToken = `${header}.${payload}`;
  const signer = createSign("RSA-SHA256");
  signer.update(unsignedToken);
  const assertion = `${unsignedToken}.${signer.sign(privateKey, "base64url")}`;

  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Google-Anmeldung fehlgeschlagen (${response.status})`);
  }
  const body = await response.json();
  return body.access_token;
}

async function queryPeriod(accessToken, property, startDate, endDate) {
  const response = await fetch(
    `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(property)}/searchAnalytics/query`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startDate,
        endDate,
        dimensions: ["query", "page"],
        type: "web",
        aggregationType: "auto",
        rowLimit: 25000,
      }),
      cache: "no-store",
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Search Console antwortet mit ${response.status}: ${error.slice(0, 300)}`);
  }

  const body = await response.json();
  return (body.rows || []).map((row) => ({
    query: row.keys?.[0] || "",
    page: row.keys?.[1] || "",
    clicks: Number(row.clicks || 0),
    impressions: Number(row.impressions || 0),
    ctr: Number(row.ctr || 0),
    position: Number(row.position || 0),
  }));
}

async function queryTotals(accessToken, property, startDate, endDate) {
  const response = await fetch(
    `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(property)}/searchAnalytics/query`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
      body: JSON.stringify({ startDate, endDate, type: "web", aggregationType: "byProperty" }),
      cache: "no-store",
    }
  );
  if (!response.ok) {
    throw new Error(`Search-Console-Summen konnten nicht geladen werden (${response.status})`);
  }
  const row = (await response.json()).rows?.[0] || {};
  return {
    clicks: Number(row.clicks || 0),
    impressions: Number(row.impressions || 0),
    ctr: Number(row.ctr || 0),
    position: Number(row.position || 0),
  };
}

export async function fetchSearchConsoleSnapshot() {
  const missing = getMissingSearchConsoleConfig();
  if (missing.length) {
    throw new Error(`Fehlende Konfiguration: ${missing.join(", ")}`);
  }

  const { property } = getSearchConsoleConfig();
  const currentEnd = shiftedDate(3);
  const currentStart = shiftedDate(30);
  const previousEnd = shiftedDate(31);
  const previousStart = shiftedDate(58);
  const accessToken = await getAccessToken();

  const currentStartDate = isoDate(currentStart);
  const currentEndDate = isoDate(currentEnd);
  const previousStartDate = isoDate(previousStart);
  const previousEndDate = isoDate(previousEnd);
  const [currentRows, previousRows, currentTotals, previousTotals] = await Promise.all([
    queryPeriod(accessToken, property, currentStartDate, currentEndDate),
    queryPeriod(accessToken, property, previousStartDate, previousEndDate),
    queryTotals(accessToken, property, currentStartDate, currentEndDate),
    queryTotals(accessToken, property, previousStartDate, previousEndDate),
  ]);

  return {
    id: currentEndDate,
    collectedAt: new Date().toISOString(),
    property,
    current: {
      startDate: currentStartDate,
      endDate: currentEndDate,
      totals: currentTotals,
      rows: currentRows,
    },
    previous: {
      startDate: previousStartDate,
      endDate: previousEndDate,
      totals: previousTotals,
      rows: previousRows,
    },
  };
}
