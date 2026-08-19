import { timingSafeEqual } from "node:crypto";

function equal(left, right) {
  const a = Buffer.from(String(left));
  const b = Buffer.from(String(right));
  return a.length === b.length && timingSafeEqual(a, b);
}

function parseBasic(header) {
  if (!header?.startsWith("Basic ")) return null;
  try {
    const decoded = Buffer.from(header.slice(6), "base64").toString("utf8");
    const separator = decoded.indexOf(":");
    if (separator < 0) return null;
    return { user: decoded.slice(0, separator), password: decoded.slice(separator + 1) };
  } catch {
    return null;
  }
}

export function hasBasicSeoAccess(request) {
  const expectedUser = process.env.SEO_DASHBOARD_USER || "";
  const expectedPassword = process.env.SEO_DASHBOARD_PASSWORD || "";
  if (!expectedUser || !expectedPassword) return false;
  const credentials = parseBasic(request.headers.get("authorization"));
  return Boolean(
    credentials &&
    equal(credentials.user, expectedUser) &&
    equal(credentials.password, expectedPassword)
  );
}

export function hasSeoSyncAccess(request) {
  const header = request.headers.get("authorization") || "";
  const secret = process.env.SEO_SYNC_SECRET || "";
  if (secret && header.startsWith("Bearer ") && equal(header.slice(7), secret)) {
    return true;
  }
  return hasBasicSeoAccess(request);
}
