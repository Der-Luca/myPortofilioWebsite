import { Activity, ArrowDownRight, ArrowUpRight, Eye, MousePointerClick, Search, Target, Users } from "lucide-react";
import { getSeoDashboardData } from "../../lib/seo/dashboard";
import SeoControls from "./SeoControls";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export const metadata = {
  title: "SEO Cockpit | Plessing Consulting",
  robots: { index: false, follow: false },
};

const number = new Intl.NumberFormat("de-DE");

function percent(value) {
  return `${(Number(value || 0) * 100).toFixed(1)} %`;
}

function pathnameFromUrl(value) {
  try {
    return new URL(value).pathname;
  } catch {
    return "/";
  }
}

function Delta({ current, previous, inverse = false }) {
  if (!previous) return <span className="text-slate-500">noch kein Vergleich</span>;
  const change = ((current - previous) / previous) * 100;
  const positive = inverse ? change <= 0 : change >= 0;
  return <span className={positive ? "text-emerald-300" : "text-rose-300"}>{change >= 0 ? "+" : ""}{change.toFixed(0)} %</span>;
}

function Metric({ label, value, delta, icon: Icon }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[.04] p-6">
      <div className="flex items-center justify-between"><p className="text-sm text-slate-400">{label}</p><Icon className="h-5 w-5 text-blue-400" /></div>
      <p className="mt-4 text-3xl font-black text-white">{value}</p>
      <p className="mt-2 text-xs">{delta}</p>
    </article>
  );
}

export default async function SeoCockpitPage() {
  const data = await getSeoDashboardData();
  const { search, traffic, snapshot } = data;

  return (
    <main className="min-h-screen bg-slate-950 px-5 py-10 text-slate-100 sm:px-8">
      <div className="mx-auto max-w-[1500px]">
        <header className="flex flex-col justify-between gap-5 border-b border-white/10 pb-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.22em] text-cyan-300">Plessing Consulting</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">SEO Cockpit</h1>
            <p className="mt-3 text-slate-400">Suchnachfrage erkennen, Änderungen protokollieren und Wirkung messen.</p>
          </div>
          <div className="text-sm text-slate-500">{data.updatedAt ? `Letzter Sync: ${new Date(data.updatedAt).toLocaleString("de-DE")}` : "Noch keine Search-Console-Daten"}</div>
        </header>

        {!data.configured && (
          <section className="mt-8 rounded-2xl border border-amber-400/25 bg-amber-400/5 p-6">
            <h2 className="font-bold text-amber-100">Google Search Console muss noch verbunden werden</h2>
            <p className="mt-2 text-sm leading-6 text-amber-100/75">Der Code ist vorbereitet. Auf dem Server fehlen noch diese Werte:</p>
            <div className="mt-4 flex flex-wrap gap-2">{data.missingConfig.map((item) => <code key={item} className="rounded-lg bg-black/30 px-3 py-2 text-xs text-amber-200">{item}</code>)}</div>
            <p className="mt-4 text-sm text-amber-100/75">Die Service-Account-E-Mail muss anschließend als Nutzer mit Leserechten zur Search-Console-Property hinzugefügt werden.</p>
          </section>
        )}

        <section className="mt-8"><SeoControls defaultPage={pathnameFromUrl(search.opportunities[0]?.page)} /></section>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <Metric label="Google-Impressionen · 28 Tage" value={number.format(search.current.impressions)} icon={Eye} delta={<Delta current={search.current.impressions} previous={search.previous.impressions} />} />
          <Metric label="Google-Klicks · 28 Tage" value={number.format(search.current.clicks)} icon={MousePointerClick} delta={<Delta current={search.current.clicks} previous={search.previous.clicks} />} />
          <Metric label="Klickrate" value={percent(search.current.ctr)} icon={Target} delta={<span className="text-slate-500">Vorher: {percent(search.previous.ctr)}</span>} />
          <Metric label="Ø Google-Position" value={search.current.position ? search.current.position.toFixed(1) : "—"} icon={Search} delta={<span className="text-slate-500">Vorher: {search.previous.position ? search.previous.position.toFixed(1) : "—"}</span>} />
        </section>

        <section className="mt-4 grid gap-4 sm:grid-cols-3">
          <Metric label="Eigene Seitenaufrufe · 28 Tage" value={number.format(traffic.current.pageviews)} icon={Activity} delta={<Delta current={traffic.current.pageviews} previous={traffic.previous.pageviews} />} />
          <Metric label="Zugestimmte Besucher · 28 Tage" value={number.format(traffic.current.visitors)} icon={Users} delta={<Delta current={traffic.current.visitors} previous={traffic.previous.visitors} />} />
          <Metric label="Kontakt-CTA-Klicks · 28 Tage" value={number.format(traffic.current.ctaClicks)} icon={MousePointerClick} delta={<Delta current={traffic.current.ctaClicks} previous={traffic.previous.ctaClicks} />} />
        </section>

        <div className="mt-8 grid gap-8 xl:grid-cols-[1.1fr_.9fr]">
          <section className="rounded-2xl border border-white/10 bg-white/[.03] p-6">
            <div className="flex items-center justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-blue-400">Automatische Auswertung</p><h2 className="mt-2 text-2xl font-bold text-white">Ranking-Chancen</h2></div><Target className="h-7 w-7 text-blue-400" /></div>
            <div className="mt-6 space-y-3">
              {search.opportunities.length ? search.opportunities.slice(0, 10).map((item) => (
                <article key={`${item.type}-${item.title}-${item.page}`} className="rounded-xl border border-white/10 bg-slate-950/70 p-5">
                  <div className="flex items-start justify-between gap-4"><h3 className="font-bold text-white">{item.title}</h3>{item.type === "decline" ? <ArrowDownRight className="h-5 w-5 shrink-0 text-rose-400" /> : <ArrowUpRight className="h-5 w-5 shrink-0 text-emerald-400" />}</div>
                  <p className="mt-2 text-sm text-cyan-200">{item.detail}</p><p className="mt-3 text-sm leading-6 text-slate-400">{item.action}</p><p className="mt-3 truncate text-xs text-slate-600">{item.page}</p>
                </article>
              )) : <p className="rounded-xl border border-dashed border-white/10 p-8 text-center text-sm text-slate-500">Nach dem ersten Search-Console-Sync erscheinen hier konkrete Chancen.</p>}
            </div>
          </section>

          <section className="space-y-8">
            <div className="rounded-2xl border border-white/10 bg-white/[.03] p-6">
              <h2 className="text-xl font-bold text-white">Seiten auf der Website</h2>
              <div className="mt-5 space-y-3">{traffic.pages.length ? traffic.pages.slice(0, 12).map((page) => <div key={page.path} className="grid grid-cols-[1fr_auto_auto_auto] gap-4 rounded-lg bg-slate-950/70 px-4 py-3 text-sm"><span className="truncate text-slate-300">{page.path}</span><span className="text-slate-500">{page.pageviews} Views</span><span className="text-cyan-300">{page.visitors} Pers.</span><span className="text-blue-300">{page.ctaClicks} CTA</span></div>) : <p className="text-sm text-slate-500">Besuchsdaten werden nach einer Zustimmung gesammelt.</p>}</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[.03] p-6">
              <h2 className="text-xl font-bold text-white">Änderungsprotokoll</h2>
              <div className="mt-5 space-y-4">{data.changes.length ? data.changes.map((change) => <article key={change.id} className="border-l-2 border-blue-500 pl-4"><p className="text-sm font-semibold text-white">{change.page}</p><p className="mt-1 text-sm text-slate-400">{change.note}</p><p className="mt-2 text-xs text-slate-600">{new Date(change.createdAt).toLocaleString("de-DE")}</p></article>) : <p className="text-sm text-slate-500">Noch keine SEO-Änderung protokolliert.</p>}</div>
            </div>
          </section>
        </div>

        <section className="mt-8 rounded-2xl border border-white/10 bg-white/[.03] p-6">
          <div><p className="text-xs font-bold uppercase tracking-[.16em] text-cyan-400">Letzte 28 Tage</p><h2 className="mt-2 text-xl font-bold text-white">Konkreter Besuchsverlauf</h2><p className="mt-1 text-sm text-slate-500">Gleiche Besucherkennung bedeutet dasselbe Gerät, solange die Einwilligung und das Cookie bestehen.</p></div>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="text-xs uppercase tracking-wider text-slate-500"><tr><th className="pb-3">Zeit</th><th className="pb-3">Besucher</th><th className="pb-3">Ereignis</th><th className="pb-3">Seite</th><th className="pb-3">Vorher</th></tr></thead>
              <tbody>{traffic.recent.length ? traffic.recent.map((event, index) => <tr key={`${event.at}-${event.sessionId}-${index}`} className="border-t border-white/5"><td className="py-3 pr-5 text-xs text-slate-500">{new Date(event.at).toLocaleString("de-DE")}</td><td className="py-3 pr-5 font-mono text-xs text-cyan-300">#{event.visitorId ? event.visitorId.slice(0, 8) : "anonym"}</td><td className="py-3 pr-5 text-slate-400">{event.event === "cta" ? `CTA: ${event.label}` : "Seitenaufruf"}</td><td className="py-3 pr-5 font-medium text-white">{event.path}</td><td className="py-3 text-slate-500">{event.source === "email-signature" ? "E-Mail-Signatur" : event.fromPath || event.referrerHost || "direkt"}</td></tr>) : <tr><td colSpan="5" className="py-8 text-center text-slate-500">Noch keine zugestimmten Besuche vorhanden.</td></tr>}</tbody>
            </table>
          </div>
        </section>

        <section className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[.03]">
          <div className="border-b border-white/10 p-6"><h2 className="text-xl font-bold text-white">Suchanfragen</h2><p className="mt-1 text-sm text-slate-500">Sortiert nach Impressionen im aktuellen 28-Tage-Zeitraum.</p></div>
          <div className="overflow-x-auto"><table className="w-full min-w-[800px] text-left text-sm"><thead className="bg-white/[.03] text-xs uppercase tracking-wider text-slate-500"><tr><th className="px-6 py-4">Suchanfrage</th><th className="px-4 py-4">Impr.</th><th className="px-4 py-4">Klicks</th><th className="px-4 py-4">CTR</th><th className="px-4 py-4">Position</th><th className="px-6 py-4">Seite</th></tr></thead><tbody>{search.topQueries.length ? search.topQueries.map((row) => <tr key={`${row.query}-${row.page}`} className="border-t border-white/5"><td className="px-6 py-4 font-medium text-white">{row.query}</td><td className="px-4 py-4 text-slate-300">{row.impressions}</td><td className="px-4 py-4 text-slate-300">{row.clicks}</td><td className="px-4 py-4 text-slate-300">{percent(row.ctr)}</td><td className="px-4 py-4 text-slate-300">{row.position.toFixed(1)}</td><td className="max-w-sm truncate px-6 py-4 text-xs text-slate-500">{row.page}</td></tr>) : <tr><td colSpan="6" className="px-6 py-10 text-center text-slate-500">Noch keine Suchanfragen vorhanden.</td></tr>}</tbody></table></div>
        </section>
      </div>
    </main>
  );
}
