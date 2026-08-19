import { hasBasicSeoAccess } from "../../../../lib/seo/auth";
import { addSeoChange } from "../../../../lib/seo/storage";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request) {
  if (!hasBasicSeoAccess(request)) {
    return Response.json({ error: "Nicht autorisiert" }, { status: 401 });
  }
  try {
    const body = await request.json();
    if (!String(body.note || "").trim()) {
      return Response.json({ error: "Beschreibung fehlt" }, { status: 400 });
    }
    return Response.json({ ok: true, change: await addSeoChange(body) });
  } catch {
    return Response.json({ error: "Änderung konnte nicht gespeichert werden" }, { status: 400 });
  }
}
