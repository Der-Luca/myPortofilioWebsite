import { hasBasicSeoAccess } from "../../../../lib/seo/auth";
import { getSeoDashboardData } from "../../../../lib/seo/dashboard";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request) {
  if (!hasBasicSeoAccess(request)) {
    return Response.json({ error: "Nicht autorisiert" }, { status: 401 });
  }
  return Response.json(await getSeoDashboardData());
}
