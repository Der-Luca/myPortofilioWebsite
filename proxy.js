import { NextResponse } from "next/server";
import { hasBasicSeoAccess, hasSeoSyncAccess } from "./lib/seo/auth";

export function proxy(request) {
  const pathname = request.nextUrl.pathname.replace(/\/+$/, "") || "/";
  const syncRoute = pathname === "/api/seo/sync";
  const authorized = syncRoute
    ? hasSeoSyncAccess(request)
    : hasBasicSeoAccess(request);

  if (authorized) return NextResponse.next();

  return new NextResponse("Anmeldung erforderlich", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Plessing SEO Cockpit"' },
  });
}

export const config = {
  matcher: ["/seo-cockpit/:path*", "/api/seo/:path*"],
};
