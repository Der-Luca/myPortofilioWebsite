import { analyzeSnapshot } from "../../../../lib/seo/analysis";
import { hasSeoSyncAccess } from "../../../../lib/seo/auth";
import { fetchSearchConsoleSnapshot } from "../../../../lib/seo/search-console";
import { saveSearchSnapshot } from "../../../../lib/seo/storage";
import { sendSeoTelegramReport } from "../../../../lib/seo/telegram-report";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request) {
  if (!hasSeoSyncAccess(request)) {
    return Response.json({ error: "Nicht autorisiert" }, { status: 401 });
  }

  try {
    const snapshot = await fetchSearchConsoleSnapshot();
    await saveSearchSnapshot(snapshot);
    const analysis = analyzeSnapshot(snapshot);
    const url = new URL(request.url);
    const reportPreference = url.searchParams.get("notify");
    const weeklyReportDue = new Date().getUTCDay() === 1;
    const shouldNotify = reportPreference === "1" || (reportPreference !== "0" && weeklyReportDue);
    const telegramSent = shouldNotify
      ? await sendSeoTelegramReport(snapshot, analysis)
      : false;
    return Response.json({ ok: true, snapshot: snapshot.id, telegramSent });
  } catch (error) {
    return Response.json({ error: error.message || "SEO-Sync fehlgeschlagen" }, { status: 503 });
  }
}
