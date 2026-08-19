import { NextResponse } from "next/server";
import { appendSeoEvent } from "../../../lib/seo/storage";

export const runtime = "nodejs";

globalThis.__visitNotificationBucket ||= {
  startedAt: 0,
  count: 0,
};

const BOT_PATTERN = /bot|crawler|spider|slurp|headless|preview|facebookexternalhit|whatsapp|telegram/i;
const ALLOWED_PATH = /^\/[a-zA-Z0-9/_-]*$/;
const ALLOWED_HOST = /^[a-zA-Z0-9.-]{1,160}$/;
const ALLOWED_LABEL = /^[\p{L}\p{N} .,:&+_-]{1,100}$/u;
const ALLOWED_ID = /^[a-f0-9-]{8,64}$/i;
const ALLOWED_SOURCE = /^[a-z0-9-]{2,60}$/;
const SOURCE_LABELS = {
  "email-signature": "E-Mail-Signatur",
};

export async function POST(req) {
  if (process.env.NODE_ENV !== "production") {
    return new NextResponse(null, { status: 204 });
  }

  const userAgent = req.headers.get("user-agent") || "";
  if (BOT_PATTERN.test(userAgent)) {
    return new NextResponse(null, { status: 204 });
  }

  const now = Date.now();
  const bucket = globalThis.__visitNotificationBucket;
  if (now - bucket.startedAt > 60_000) {
    bucket.startedAt = now;
    bucket.count = 0;
  }
  if (bucket.count >= 20) {
    return new NextResponse(null, { status: 204 });
  }
  bucket.count += 1;

  let body = {};
  try {
    body = await req.json();
  } catch {
    return new NextResponse(null, { status: 204 });
  }

  const path = ALLOWED_PATH.test(body.path || "") ? body.path : "/";
  const fromPath = ALLOWED_PATH.test(body.fromPath || "") ? body.fromPath : "";
  const event = body.event === "cta" ? "cta" : "pageview";
  const label = ALLOWED_LABEL.test(body.label || "") ? body.label : "CTA";
  const referrerHost = ALLOWED_HOST.test(body.referrerHost || "")
    ? body.referrerHost
    : "unbekannt";
  const visitorId = ALLOWED_ID.test(body.visitorId || "") ? body.visitorId : "";
  const sessionId = ALLOWED_ID.test(body.sessionId || "") ? body.sessionId : "";
  const source = ALLOWED_SOURCE.test(body.source || "") ? body.source : "";

  if (!visitorId || !sessionId) {
    return new NextResponse(null, { status: 204 });
  }

  await appendSeoEvent({ event, label, path, fromPath, referrerHost, visitorId, sessionId, source }).catch(() => {});

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_VISIT_CHAT_ID || process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    return new NextResponse(null, { status: 204 });
  }

  const text = [
    event === "cta" ? "🎯 Kontakt-CTA geklickt" : "👋 Neuer Seitenaufruf",
    ...(event === "cta" ? [`🏷️ ${label}`] : []),
    `📄 Seite: ${path}`,
    ...(fromPath && fromPath !== path ? [`⬅️ Vorher: ${fromPath}`] : []),
    ...(source ? [`✉️ Einstieg: ${SOURCE_LABELS[source] || source}`] : []),
    `👤 Besucher: #${visitorId.slice(0, 8)}${event === "pageview" ? ` · Sitzung #${sessionId.slice(0, 8)}` : ""}`,
    `↗️ Quelle: ${referrerHost}`,
    `🕒 ${new Intl.DateTimeFormat("de-DE", {
      dateStyle: "short",
      timeStyle: "short",
      timeZone: "Europe/Madrid",
    }).format(new Date())}`,
  ].join("\n");

  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        disable_web_page_preview: true,
      }),
    });
  } catch {
    // Eine fehlgeschlagene Benachrichtigung bleibt für Besucher unsichtbar.
  }

  return new NextResponse(null, { status: 204 });
}
