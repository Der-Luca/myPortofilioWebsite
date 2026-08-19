import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Database,
  FileSpreadsheet,
  Link2,
  MessageSquareWarning,
  Network,
  PlugZap,
  RefreshCw,
  Search,
  Settings2,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import Navbar from "./components/navbar";
import Footer from "./components/home/Footer";

const problems = [
  {
    icon: FileSpreadsheet,
    title: "Daten werden mehrfach gepflegt",
    text: "Kontakte, Aufträge oder Status landen in mehreren Systemen und müssen immer wieder von Hand übertragen werden.",
  },
  {
    icon: MessageSquareWarning,
    title: "Informationen kommen zu spät an",
    text: "Ein Lead liegt im Postfach, eine Aufgabe im CRM und die entscheidende Rückfrage in einem anderen Tool.",
  },
  {
    icon: RefreshCw,
    title: "Excel hält den Prozess zusammen",
    text: "Die Tabelle funktioniert irgendwie – bis jemand krank ist, eine Spalte ändert oder das Volumen wächst.",
  },
  {
    icon: PlugZap,
    title: "Die Software passt fast, aber nicht ganz",
    text: "Das bestehende System soll bleiben. Es fehlt nur eine Schnittstelle, eine Automatisierung oder ein passendes internes Tool.",
  },
];

const services = [
  {
    number: "01",
    icon: Settings2,
    title: "CRM und Abläufe verbessern",
    text: "Ich analysiere, wo Informationen verloren gehen, Arbeit doppelt anfällt oder Ihr CRM nicht zum tatsächlichen Prozess passt.",
    result: "Weniger Nachpflege, klarere Zuständigkeiten und ein CRM, das im Alltag wirklich genutzt wird.",
  },
  {
    number: "02",
    icon: Network,
    title: "Bestehende Systeme verbinden",
    text: "CRM, ERP, Portale, E-Mail und Fachsoftware werden über APIs, Webhooks oder n8n zuverlässig miteinander verbunden.",
    result: "Daten fließen automatisch und bleiben dort aktuell, wo Ihr Team sie braucht.",
  },
  {
    number: "03",
    icon: Workflow,
    title: "Manuelle Prozesse automatisieren",
    text: "Wiederkehrende Schritte wie Erfassung, Prüfung, Benachrichtigung oder Übergabe werden nachvollziehbar automatisiert.",
    result: "Mehr Zeit für wertvolle Arbeit, weniger Fehler und kürzere Durchlaufzeiten.",
  },
  {
    number: "04",
    icon: Database,
    title: "Software-Lücken gezielt schließen",
    text: "Wenn Standardsoftware nicht ausreicht, ergänze ich sie um ein internes Tool, ein Portal oder eine individuelle Anwendung.",
    result: "Keine unnötige Komplettablösung – nur die Lösung, die für den fehlenden Teil wirklich gebraucht wird.",
  },
];

const process = [
  ["01", "Den echten Ablauf verstehen", "Nicht: Welche Software wollen Sie? Sondern: Wie läuft ein typischer Vorgang heute wirklich ab – und wo stockt er?"],
  ["02", "Den Engpass finden", "Wir trennen Symptome von Ursachen und priorisieren die Stellen, an denen Zeit, Datenqualität oder Umsatz verloren gehen."],
  ["03", "Die einfachste sinnvolle Lösung wählen", "Manchmal reicht eine bessere CRM-Konfiguration. Manchmal braucht es n8n, eine API oder ein kleines eigenes Tool."],
  ["04", "Umsetzen und im Alltag prüfen", "Die Lösung wird schrittweise eingeführt, dokumentiert und gemeinsam mit den Menschen getestet, die täglich damit arbeiten."],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <Navbar />

      <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden border-b border-white/10 px-6 pb-20 pt-28">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_72%_34%,rgba(37,99,235,0.22),transparent_32%),radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.10),transparent_30%),linear-gradient(#020617,#020617)]" />
        <div className="absolute inset-0 -z-10 opacity-[0.12] [background-image:linear-gradient(rgba(148,163,184,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.25)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.08fr_.92fr]">
          <div>
            <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              CRM · Automatisierung · Systemintegration
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Weniger manuelle Arbeit.
              <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                Besser verbundene Systeme.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Ich helfe Unternehmen dabei, bestehende CRM-, ERP- und Fachsysteme sinnvoll zu verbinden, wiederkehrende Abläufe zu automatisieren und Software-Lücken pragmatisch zu schließen.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
              Das Ziel ist nicht möglichst viel neue Software. Das Ziel ist ein Arbeitsalltag mit weniger Übertragen, Nachfragen und Fehlern.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" data-track="Hero: Ablauf besprechen" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 font-bold text-white shadow-[0_18px_50px_rgba(37,99,235,.28)] transition hover:-translate-y-0.5 hover:bg-blue-500">
                Ablauf unverbindlich besprechen <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/projects" className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-7 py-4 font-bold text-white transition hover:bg-white/10">
                Praxisbeispiele ansehen
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-400">
              {["Bestehende Systeme weiter nutzen", "Direkter Ansprechpartner", "Für Unternehmen im DACH-Raum"].map((item) => (
                <span key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" />{item}</span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl" aria-label="Darstellung verbundener Geschäftssysteme">
            <div className="absolute inset-10 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-slate-900/70 p-5 shadow-2xl shadow-blue-950/60 backdrop-blur-xl sm:p-8">
              <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
                <div><p className="text-xs font-bold uppercase tracking-[.22em] text-cyan-300">Ihr Prozess</p><p className="mt-1 text-sm text-slate-400">Ein Datenfluss statt fünf Insellösungen</p></div>
                <ShieldCheck className="h-7 w-7 text-emerald-400" />
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                <div className="space-y-3">
                  {["CRM", "ERP", "E-Mail"].map((system) => <div key={system} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold">{system}</div>)}
                </div>
                <div className="flex flex-col items-center gap-2 text-blue-300"><Link2 className="h-6 w-6" /><span className="h-24 w-px bg-gradient-to-b from-transparent via-blue-400 to-transparent" /></div>
                <div className="rounded-2xl border border-blue-400/30 bg-blue-500/10 p-5">
                  <Workflow className="h-7 w-7 text-cyan-300" />
                  <p className="mt-4 font-bold text-white">Automatisierter Ablauf</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">Erfassen, prüfen, weitergeben und informieren – ohne Copy & Paste.</p>
                </div>
              </div>
              <div className="mt-6 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">✓ Informationen dort, wo sie gebraucht werden</div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-400">Der Ausgangspunkt</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Kommt Ihnen das bekannt vor?</h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">Automatisierung beginnt selten mit einem Tool. Meist beginnt sie mit einem Satz wie: „Das machen wir jeden Dienstag noch von Hand.“</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {problems.map(({ icon: Icon, title, text }) => (
              <article key={title} className="group rounded-3xl border border-white/10 bg-white/[.035] p-7 transition hover:border-blue-400/30 hover:bg-white/[.055] sm:p-8">
                <Icon className="h-7 w-7 text-blue-400" />
                <h3 className="mt-6 text-xl font-bold text-white">{title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/35 px-6 py-24 sm:py-32" id="leistungen">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-sm font-bold uppercase tracking-[.2em] text-cyan-400">Was sich konkret verbessert</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Lösungen rund um Ihren tatsächlichen Ablauf.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-400">Nicht jede Lücke braucht ein neues System. Ich prüfe zuerst, was bereits vorhanden ist und wo eine gezielte Anpassung den größten Hebel hat.</p>
              <Link href="/services" className="mt-8 inline-flex items-center gap-2 font-bold text-blue-300 hover:text-blue-200">Alle Leistungen im Detail <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="space-y-5">
              {services.map(({ number, icon: Icon, title, text, result }) => (
                <article key={title} className="rounded-3xl border border-white/10 bg-slate-950/70 p-7 sm:p-9">
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300"><Icon className="h-6 w-6" /></div>
                    <div>
                      <p className="text-xs font-bold tracking-[.2em] text-slate-500">{number}</p>
                      <h3 className="mt-1 text-2xl font-bold text-white">{title}</h3>
                      <p className="mt-3 leading-7 text-slate-400">{text}</p>
                      <p className="mt-5 border-l-2 border-emerald-400 pl-4 text-sm font-medium leading-6 text-slate-200"><span className="text-emerald-300">Ergebnis:</span> {result}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-32" id="projekte">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-400">Aus der Praxis</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Nicht nur gebaut. Abläufe verbessert.</h2>
            </div>
            <Link href="/projects" className="inline-flex items-center gap-2 font-bold text-blue-300 hover:text-blue-200">Alle Projekte <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-emerald-400/20 bg-gradient-to-br from-emerald-400/10 to-slate-900 p-8 sm:p-10">
              <p className="text-sm font-bold text-emerald-300">IMMOBOT · SYSTEMINTEGRATION</p>
              <h3 className="mt-4 text-3xl font-bold text-white">Anfragen aus über 40 Portalen zentral verarbeiten</h3>
              <p className="mt-5 leading-7 text-slate-300">Statt Informationen aus unterschiedlichen Quellen manuell zusammenzuführen, werden Daten automatisiert übernommen, aufbereitet und für die weitere Bearbeitung bereitgestellt.</p>
              <div className="mt-8 grid grid-cols-3 gap-3 text-center text-sm"><span className="rounded-xl bg-black/20 p-3">40+ Portale</span><span className="rounded-xl bg-black/20 p-3">n8n & APIs</span><span className="rounded-xl bg-black/20 p-3">Zentrale Logik</span></div>
            </article>
            <article className="rounded-[2rem] border border-pink-400/20 bg-gradient-to-br from-pink-400/10 to-slate-900 p-8 sm:p-10">
              <p className="text-sm font-bold text-pink-300">PEACHES · INDIVIDUELLE SOFTWARE</p>
              <h3 className="mt-4 text-3xl font-bold text-white">Komplexe HR-Prozesse in einer Plattform abbilden</h3>
              <p className="mt-5 leading-7 text-slate-300">Eine mehrsprachige Plattform bündelt Rollen, Inhalte, Administration und Geschäftslogik in einer wartbaren Lösung für unterschiedliche Nutzergruppen.</p>
              <div className="mt-8 grid grid-cols-3 gap-3 text-center text-sm"><span className="rounded-xl bg-black/20 p-3">Mehrsprachig</span><span className="rounded-xl bg-black/20 p-3">Rollen & Rechte</span><span className="rounded-xl bg-black/20 p-3">Admin-Workflows</span></div>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[.025] px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-cyan-400">Problemorientierte Zusammenarbeit</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Erst verstehen, dann automatisieren.</h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {process.map(([number, title, text]) => (
              <article key={number} className="rounded-3xl border border-white/10 bg-slate-950 p-7">
                <span className="font-mono text-sm text-blue-400">/{number}</span>
                <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_.8fr]">
          <div className="rounded-[2rem] border border-blue-400/20 bg-blue-500/10 p-8 sm:p-12">
            <Search className="h-9 w-9 text-blue-300" />
            <h2 className="mt-7 text-4xl font-bold tracking-tight text-white">Wo verliert Ihr Team heute unnötig Zeit?</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Beschreiben Sie mir einen wiederkehrenden Ablauf, der nervt, langsam ist oder Fehler produziert. Im Erstgespräch prüfen wir, wo der eigentliche Engpass liegt und ob eine technische Lösung wirtschaftlich sinnvoll ist.</p>
            <Link href="/contact" data-track="Abschluss: Ablauf besprechen" className="mt-8 inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 font-bold text-slate-950 transition hover:bg-blue-50">Ablauf besprechen <ArrowRight className="h-5 w-5" /></Link>
          </div>
          <div className="flex flex-col justify-center rounded-[2rem] border border-white/10 bg-white/[.035] p-8 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[.18em] text-emerald-300">Was Sie mitbringen müssen</p>
            <ul className="mt-6 space-y-4 text-slate-300">
              {["Kein fertiges Lastenheft", "Keine vorab gewählte Technologie", "Keine Entscheidung für ein neues System"].map((item) => <li key={item} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />{item}</li>)}
            </ul>
            <p className="mt-7 border-t border-white/10 pt-6 text-sm leading-6 text-slate-400">Ein konkretes Beispiel aus Ihrem Arbeitsalltag reicht für den Anfang.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
