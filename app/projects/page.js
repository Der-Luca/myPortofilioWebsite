import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/home/Footer";

const cases = [
  {
    id: "immobot",
    accent: "emerald",
    label: "Systemintegration · Automatisierung",
    title: "Immobot: Anfragen aus mehr als 40 Immobilienportalen zentral verarbeiten",
    situation: "Immobilienanfragen und Objektdaten kommen über viele unterschiedliche Plattformen und Datenformate. Ohne zentrale Logik entsteht wiederkehrende manuelle Arbeit.",
    challenge: "Daten mussten zuverlässig übernommen, vereinheitlicht, gefiltert und für weitere Schritte verfügbar gemacht werden – einschließlich Karten- und Radiussuche.",
    solution: "Automatisierte Datenpipelines, n8n-Workflows und robuste Schnittstellen verbinden Portale, WordPress und die zentrale Anwendung. Flexible Filter und Benachrichtigungen unterstützen die weitere Bearbeitung.",
    benefit: "Statt Informationen aus zahlreichen Quellen einzeln zusammenzuführen, steht ein zentraler, erweiterbarer Ablauf für die tägliche Arbeit zur Verfügung.",
    facts: ["40+ angebundene Portale", "Automatisierte Feeds", "Zentrale Filterlogik"],
    tech: ["n8n", "REST APIs", "WordPress", "Leaflet", "MapTiler"],
    url: "https://immobot.pro",
    detailUrl: "/projekte/immobot",
  },
  {
    id: "peaches",
    accent: "pink",
    label: "Individuelle Software · Geschäftslogik",
    title: "Peaches: Komplexe HR-Abläufe in einer Plattform bündeln",
    situation: "Unterschiedliche Nutzergruppen, Inhalte und administrative Aufgaben sollten in einer gemeinsamen, mehrsprachigen Plattform abgebildet werden.",
    challenge: "Rollen, Rechte, Medien, Kurse und weitere Module benötigten eine stabile Architektur sowie eine verständliche Administrationsoberfläche.",
    solution: "Eine modulare Plattform mit React/Next.js, Express und PostgreSQL bildet die Geschäftslogik ab und lässt sich strukturiert betreiben und erweitern.",
    benefit: "Komplexe HR-Prozesse werden an einem Ort verwaltet, während Nutzer eine klare und sprachunabhängige Oberfläche erhalten.",
    facts: ["Mehrsprachige Nutzung", "Rollen und Rechte", "Modulare Verwaltung"],
    tech: ["Next.js", "Express", "PostgreSQL", "Docker", "Nginx"],
    url: "https://peaches-benefits.com",
  },
  {
    id: "backoffice",
    accent: "blue",
    label: "Anonyme Case Study · Backoffice",
    title: "Wiederkehrenden Backoffice-Aufwand um mehr als 30 Prozent reduzieren",
    situation: "Dateiübernahmen, Benachrichtigungen und Berichte mussten bei jedem Vorgang erneut von Hand angestoßen und kontrolliert werden.",
    challenge: "Routine, notwendige Entscheidungen und echte Ausnahmefälle mussten sauber voneinander getrennt werden.",
    solution: "Der Ablauf wurde neu geordnet. Stabile Routinen werden übernommen, während relevante Entscheidungen und Ausnahmen beim Menschen bleiben.",
    benefit: "Der Zeitaufwand im Team sank um mehr als 30 Prozent und vermeidbare Fehlerquellen wurden reduziert.",
    facts: [">30 % weniger Zeitaufwand", "Klare Ausnahmen", "Weniger Fehlerquellen"],
    tech: ["Prozessanalyse", "Gezielte Automatisierung", "Übersichtlicher Status"],
    detailUrl: "/projekte/backoffice-automatisierung",
  },
];

const accentStyles = {
  emerald: "border-emerald-400/20 bg-emerald-400/5 text-emerald-300",
  pink: "border-pink-400/20 bg-pink-400/5 text-pink-300",
  blue: "border-blue-400/20 bg-blue-400/5 text-blue-300",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <section className="border-b border-white/10 px-6 pb-24 pt-36 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[.22em] text-blue-400">Projekte und Ergebnisse</p>
          <h1 className="mt-5 text-5xl font-black tracking-[-.04em] text-white sm:text-6xl">Technik ist nur ein Teil der Geschichte.</h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300">Entscheidend ist, was danach im Arbeitsalltag besser funktioniert. Deshalb zeigen diese Beispiele Ausgangslage, Herausforderung, Lösung und Nutzen.</p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl space-y-10">
          {cases.map((project) => (
            <article id={project.id} key={project.id} className="scroll-mt-28 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.035]">
              <div className={`border-b p-8 sm:p-10 ${accentStyles[project.accent]}`}>
                <p className="text-sm font-bold uppercase tracking-[.17em]">{project.label}</p>
                <h2 className="mt-4 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl">{project.title}</h2>
                <div className="mt-7 flex flex-wrap gap-3">
                  {project.facts.map((fact) => <span key={fact} className="rounded-full border border-white/10 bg-slate-950/40 px-4 py-2 text-sm text-slate-200">{fact}</span>)}
                </div>
              </div>
              <div className="grid gap-px bg-white/10 md:grid-cols-2">
                {[
                  ["Ausgangssituation", project.situation],
                  ["Herausforderung", project.challenge],
                  ["Umsetzung", project.solution],
                  ["Nutzen", project.benefit],
                ].map(([heading, text]) => (
                  <div key={heading} className="bg-slate-950 p-8 sm:p-10">
                    <h3 className="text-sm font-bold uppercase tracking-[.15em] text-slate-500">{heading}</h3>
                    <p className="mt-4 leading-7 text-slate-300">{text}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col justify-between gap-5 border-t border-white/10 px-8 py-6 sm:flex-row sm:items-center sm:px-10">
                <div className="flex flex-wrap gap-2">{project.tech.map((item) => <span key={item} className="rounded-lg bg-white/5 px-3 py-1.5 text-xs text-slate-400">{item}</span>)}</div>
                <div className="flex flex-wrap gap-4">
                  {project.detailUrl && <Link href={project.detailUrl} className="inline-flex shrink-0 items-center gap-2 font-bold text-blue-300 hover:text-blue-200">Case Study lesen <ArrowRight className="h-4 w-4" /></Link>}
                  {project.url && <Link href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-2 font-bold text-slate-400 hover:text-white">Projekt ansehen <ExternalLink className="h-4 w-4" /></Link>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-slate-900/70 p-9 sm:p-12">
          <p className="text-sm font-bold uppercase tracking-[.18em] text-emerald-300">Ihr Fall muss nicht genauso aussehen</p>
          <h2 className="mt-4 text-3xl font-bold text-white">Ein wiederkehrendes Problem reicht als Ausgangspunkt.</h2>
          <p className="mt-5 max-w-3xl leading-7 text-slate-300">Ob CRM, Branchenlösung oder ein abteilungsübergreifender Vorgang: Wir betrachten zuerst, was heute passiert und welche Verbesserung im Verhältnis zum Aufwand sinnvoll ist.</p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Link href="/contact" data-track="Projekte: Eigenen Ablauf besprechen" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold hover:bg-blue-500">Eigenen Ablauf besprechen <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/services" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 px-6 py-3 font-bold hover:bg-white/5">Leistungen ansehen</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
