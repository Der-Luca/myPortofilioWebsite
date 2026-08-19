import Link from "next/link";
import { ArrowRight, CheckCircle2, Code2, Network, Settings2, Workflow } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/home/Footer";

const offers = [
  {
    id: "crm-optimierung",
    icon: Settings2,
    eyebrow: "CRM- und Prozessoptimierung",
    title: "Wenn das CRM da ist, aber der Ablauf trotzdem daneben stattfindet.",
    intro: "Viele Teams pflegen ihr CRM nur teilweise, arbeiten zusätzlich in Excel oder verlieren Informationen zwischen Vertrieb, Administration und Leistungserbringung.",
    questions: ["Welche Daten werden mehrfach eingegeben?", "Wo fehlen klare Status und Zuständigkeiten?", "Welche Schritte lassen sich direkt im bestehenden CRM verbessern?"],
    outcome: "Ein verständlicher, alltagstauglicher Ablauf – ohne vorschnell das gesamte CRM zu ersetzen.",
  },
  {
    id: "systemintegration",
    icon: Network,
    eyebrow: "Systemintegration und APIs",
    title: "Wenn jedes System funktioniert – aber keines mit dem anderen spricht.",
    intro: "CRM, ERP, Online-Portale, Buchhaltung, E-Mail und Fachsoftware enthalten oft dieselben Informationen. Fehlt die Verbindung, übernimmt Ihr Team den Datentransport.",
    questions: ["Welche Systeme müssen Daten austauschen?", "Gibt es APIs, Webhooks oder Exportmöglichkeiten?", "Welche Fehler- und Ausnahmefälle müssen sichtbar bleiben?"],
    outcome: "Zuverlässige Datenflüsse mit nachvollziehbarem Monitoring und klarer Fehlerbehandlung.",
  },
  {
    id: "prozessautomatisierung",
    icon: Workflow,
    eyebrow: "Prozess- und n8n-Automatisierung",
    title: "Wenn ein wiederkehrender Ablauf jeden Tag wieder Zeit kostet.",
    intro: "Erfassen, prüfen, kopieren, weiterleiten, erinnern: Einzelne Schritte wirken klein. In Summe binden sie Zeit und erzeugen vermeidbare Fehler.",
    questions: ["Was löst den Prozess aus?", "Welche Entscheidungen sind regelbasiert?", "Wo braucht es weiterhin einen Menschen?"],
    outcome: "Eine robuste Automatisierung, die Arbeit reduziert, ohne Kontrolle und Transparenz zu verlieren.",
  },
  {
    id: "individuelle-software",
    icon: Code2,
    eyebrow: "Individuelle Software-Erweiterungen",
    title: "Wenn Standardsoftware fast passt – und genau dieses ‚fast‘ zum Problem wird.",
    intro: "Nicht jede Lücke rechtfertigt eine neue Plattform. Oft genügt ein gezieltes internes Tool, ein Kundenportal oder eine schlanke Erweiterung rund um bestehende Systeme.",
    questions: ["Was kann das vorhandene System bereits?", "Welche Funktion fehlt für den tatsächlichen Ablauf?", "Wie lässt sich die Ergänzung langfristig betreiben?"],
    outcome: "So viel Individualsoftware wie nötig – und so wenig zusätzliche Komplexität wie möglich.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <section className="relative overflow-hidden border-b border-white/10 px-6 pb-24 pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_20%,rgba(37,99,235,.18),transparent_35%)]" />
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[.22em] text-cyan-300">Leistungen</p>
          <h1 className="mx-auto mt-5 max-w-4xl text-5xl font-black tracking-[-.04em] text-white sm:text-6xl">Nicht mehr Software. Bessere Abläufe.</h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300">Ich unterstütze Unternehmen dabei, vorhandene Systeme sinnvoller zu nutzen, Datenflüsse zu verbinden und wiederkehrende Arbeit zu reduzieren. Die Technologie folgt dem Problem – nicht umgekehrt.</p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl space-y-7">
          {offers.map(({ id, icon: Icon, eyebrow, title, intro, questions, outcome }, index) => (
            <article id={id} key={id} className="scroll-mt-28 rounded-[2rem] border border-white/10 bg-white/[.035] p-8 sm:p-10 lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[.95fr_1.05fr]">
                <div>
                  <div className="flex items-center gap-3 text-blue-300"><Icon className="h-6 w-6" /><span className="text-sm font-bold uppercase tracking-[.16em]">{eyebrow}</span></div>
                  <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">{title}</h2>
                  <p className="mt-5 leading-7 text-slate-400">{intro}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-6 sm:p-8">
                  <p className="text-sm font-bold uppercase tracking-[.15em] text-slate-500">Dabei klären wir</p>
                  <ul className="mt-5 space-y-4">
                    {questions.map((question) => <li key={question} className="flex gap-3 text-slate-300"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />{question}</li>)}
                  </ul>
                  <p className="mt-7 border-t border-white/10 pt-6 text-sm leading-6 text-slate-300"><span className="font-bold text-emerald-300">Ziel:</span> {outcome}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-blue-400/20 bg-blue-500/10 p-9 text-center sm:p-12">
          <h2 className="text-3xl font-bold text-white">Sie müssen noch nicht wissen, welche Lösung Sie brauchen.</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">Bringen Sie einfach einen Ablauf mit, der zu viel Zeit kostet oder regelmäßig Probleme macht. Gemeinsam prüfen wir Ursache, Hebel und einen realistischen nächsten Schritt.</p>
          <Link href="/contact" data-track="Leistungen: Ablauf besprechen" className="mt-8 inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 font-bold text-slate-950 hover:bg-blue-50">Ablauf besprechen <ArrowRight className="h-5 w-5" /></Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
