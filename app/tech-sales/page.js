import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  Database,
  MessagesSquare,
  PhoneCall,
  RefreshCw,
  Target,
  UserCheck,
  Workflow,
} from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/home/Footer";
import JsonLd from "../components/seo/JsonLd";

const baseUrl = "https://plessing-consulting.com";

export const metadata = {
  title: "Freelance B2B Tech Sales für Software & SaaS",
  description:
    "Technisch versierter Freelance Sales Support für Software-, SaaS- und IT-Unternehmen: deutsche Kaltakquise, Lead-Qualifizierung und Appointment Setting.",
  keywords: [
    "Freelance Tech Sales",
    "B2B Tech Sales",
    "Cold Calling Softwareunternehmen",
    "SaaS Vertrieb Deutschland",
    "IT Vertrieb Freelancer",
    "Appointment Setting B2B",
    "Outbound Sales Software",
  ],
  alternates: {
    canonical: "https://plessing-consulting.com/tech-sales",
  },
  openGraph: {
    title: "B2B Tech Sales für Software- und IT-Unternehmen",
    description:
      "Technisches Verständnis trifft Vertrieb: deutschsprachige Kaltakquise, Lead-Qualifizierung und Terminvereinbarung für Tech-Unternehmen.",
    url: "https://plessing-consulting.com/tech-sales",
    type: "website",
    locale: "de_DE",
    siteName: "Plessing Consulting",
    images: [{ url: "/og.png", width: 1731, height: 909 }],
  },
};

const services = [
  {
    icon: PhoneCall,
    title: "Cold Calling",
    text: "Direkte, deutschsprachige Ansprache von Geschäftsführern und relevanten Entscheidern in Ihrer Zielgruppe.",
  },
  {
    icon: UserCheck,
    title: "Lead-Qualifizierung",
    text: "Prüfung von Bedarf, Relevanz und Rahmenbedingungen, damit Ihr Team auf fundierter Basis weiterarbeiten kann.",
  },
  {
    icon: Target,
    title: "Terminsetzung",
    text: "Vereinbarung passender Erstgespräche mit Interessenten, bei denen ein konkreter Anknüpfungspunkt besteht.",
  },
  {
    icon: RefreshCw,
    title: "Follow-ups",
    text: "Verbindliches Nachfassen bei Kontakten, die nicht beim ersten Gespräch zu einer Entscheidung kommen.",
  },
  {
    icon: Database,
    title: "CRM-Dokumentation",
    text: "Nachvollziehbare Pflege von Gesprächsergebnissen, Status, nächsten Schritten und relevanten Rückmeldungen.",
  },
  {
    icon: MessagesSquare,
    title: "Outbound-Unterstützung",
    text: "Optional unterstütze ich bei Zielgruppen, Gesprächsstruktur, Skripten und einem konsistenten Messaging.",
  },
];

const process = [
  {
    title: "Angebot verstehen",
    text: "Wir klären Produkt, Nutzen, Zielgruppe und die Situationen, in denen Ihr Angebot tatsächlich relevant ist.",
  },
  {
    title: "Messaging abstimmen",
    text: "Wir entwickeln einen Gesprächsleitfaden, der Orientierung gibt und trotzdem Raum für ein echtes Gespräch lässt.",
  },
  {
    title: "Zielkunden kontaktieren",
    text: "Ich spreche ausgewählte Unternehmen und die passenden Entscheider direkt und professionell an.",
  },
  {
    title: "Leads qualifizieren",
    text: "Interesse, Bedarf und nächste Schritte werden strukturiert erfasst, ohne vorschnell etwas zu versprechen.",
  },
  {
    title: "Ergebnisse dokumentieren",
    text: "Termine, Rückmeldungen und Follow-ups werden transparent im vereinbarten CRM oder Prozess festgehalten.",
  },
];

const audiences = [
  "Software- und SaaS-Unternehmen",
  "IT-Dienstleister",
  "Digitalagenturen",
  "Automatisierungsanbieter",
  "Kleine und mittelgroße Tech-Unternehmen",
];

export default function TechSalesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            "@id": `${baseUrl}/tech-sales/#service`,
            name: "B2B Tech Sales für Software- und IT-Unternehmen",
            serviceType: [
              "Freelance B2B Tech Sales",
              "Deutsches B2B Cold Calling",
              "Lead-Qualifizierung",
              "Appointment Setting",
              "Outbound Sales Support",
            ],
            description: "Technisch versierter Freelance Sales Support für Software-, SaaS- und IT-Unternehmen im deutschsprachigen B2B-Outbound.",
            provider: { "@id": `${baseUrl}/#business` },
            areaServed: ["Deutschland", "Österreich", "Schweiz"],
            audience: {
              "@type": "BusinessAudience",
              audienceType: "Softwareunternehmen, SaaS-Unternehmen, IT-Dienstleister, Digitalagenturen und Automatisierungsanbieter",
            },
            url: `${baseUrl}/tech-sales/`,
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Startseite", item: `${baseUrl}/` },
              { "@type": "ListItem", position: 2, name: "B2B Tech Sales", item: `${baseUrl}/tech-sales/` },
            ],
          },
        ],
      }} />
      <Navbar />

      <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden border-b border-white/10 px-6 pb-20 pt-28">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_72%_34%,rgba(37,99,235,0.22),transparent_32%),radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.10),transparent_30%),linear-gradient(#020617,#020617)]" />
        <div className="absolute inset-0 -z-10 opacity-[0.12] [background-image:linear-gradient(rgba(148,163,184,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.25)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.08fr_.92fr]">
          <div>
            <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              Freelance Sales Support · deutschsprachiger Outbound
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              B2B Tech Sales für
              <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                Software- und IT-Unternehmen.
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Technisches Verständnis trifft Vertrieb: Ich unterstütze Software- und IT-Unternehmen bei deutschsprachiger Kaltakquise, Lead-Qualifizierung und Terminvereinbarung.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact?source=tech-sales"
                data-track="Tech Sales Hero: Kennenlernen"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 font-bold text-white shadow-[0_18px_50px_rgba(37,99,235,.28)] transition hover:-translate-y-0.5 hover:bg-blue-500"
              >
                Unverbindlich kennenlernen <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="#leistungen"
                className="inline-flex min-h-14 items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-7 py-4 font-bold text-white transition hover:bg-white/10"
              >
                Leistungen ansehen
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-400">
              {["Technischer Hintergrund", "Direkter Ansprechpartner", "Flexible Zusammenarbeit"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl" aria-label="Darstellung eines strukturierten Outbound-Prozesses">
            <div className="absolute inset-10 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-slate-900/70 p-5 shadow-2xl shadow-blue-950/60 backdrop-blur-xl sm:p-8">
              <div className="mb-7 flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.22em] text-cyan-300">Outbound-Prozess</p>
                  <p className="mt-1 text-sm text-slate-400">Technisch fundiert und sauber dokumentiert</p>
                </div>
                <BadgeCheck className="h-7 w-7 text-emerald-400" />
              </div>
              <div className="space-y-3">
                {[
                  ["01", "Zielkunden ansprechen", "Direkter Kontakt"],
                  ["02", "Bedarf qualifizieren", "Relevanz prüfen"],
                  ["03", "Nächsten Schritt klären", "Termin oder Follow-up"],
                ].map(([number, title, label]) => (
                  <div key={number} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 font-mono text-sm text-blue-300">{number}</span>
                    <div className="min-w-0 flex-1">
                      <p className="font-bold text-white">{title}</p>
                      <p className="mt-1 text-sm text-slate-400">{label}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-slate-600" />
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
                <ClipboardCheck className="h-5 w-5 shrink-0" />
                Ergebnisse nachvollziehbar im CRM dokumentiert
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-400">Wenn Outbound liegen bleibt</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Ein gutes Angebot verkauft sich nicht nebenbei.</h2>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[.035] p-8 sm:p-10">
            <p className="text-lg leading-8 text-slate-300">
              Viele Tech-Unternehmen haben ein überzeugendes Produkt oder eine starke Dienstleistung, aber im Tagesgeschäft fehlen Zeit und Kapazität für kontinuierlichen Outbound.
            </p>
            <p className="mt-5 leading-7 text-slate-400">
              Ich unterstütze dort, wo die aktive Neukundenansprache liegen bleibt – flexibel und projektbezogen, ohne dass direkt eine Vollzeit-SDR-Stelle aufgebaut werden muss.
            </p>
          </div>
        </div>
      </section>

      <section id="leistungen" className="scroll-mt-20 border-y border-white/10 bg-slate-900/35 px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-cyan-400">Leistungen</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Pragmatische Unterstützung für Ihren B2B-Outbound.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">Der genaue Umfang richtet sich nach Ihrem Angebot, Ihrer Zielgruppe und dem bestehenden Vertriebsprozess.</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, text }) => (
              <article key={title} className="group rounded-3xl border border-white/10 bg-slate-950/70 p-7 transition hover:border-blue-400/30 hover:bg-slate-950 sm:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">{title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-400">Warum technischer Sales?</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Kein reines Ablesen eines Call-Skripts.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-400">
              Durch meinen Hintergrund in Softwareentwicklung und IT-Beratung kann ich technische Angebote schneller einordnen, relevante Rückfragen verstehen und auf Augenhöhe mit Entscheidern sprechen.
            </p>
          </div>
          <div className="space-y-5">
            {[
              [Code2, "Softwareentwicklung und IT-Beratung", "Praxiswissen aus technischen Projekten hilft mir, Nutzen und Machbarkeit eines Angebots realistisch zu verstehen."],
              [Workflow, "SaaS, APIs und Automatisierung", "Ich kenne die Konzepte hinter digitalen Produkten, Schnittstellen, CRM-Systemen und verbundenen Prozessen."],
              [MessagesSquare, "Glaubwürdige Gespräche", "Statt starr am Skript zu bleiben, kann ich Zusammenhänge aufnehmen, sinnvoll nachfragen und Rückmeldungen einordnen."],
            ].map(([Icon, title, text]) => (
              <article key={title} className="rounded-3xl border border-white/10 bg-white/[.035] p-7 sm:p-8">
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                    <p className="mt-3 leading-7 text-slate-400">{text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[.025] px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-cyan-400">Ablauf</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Vom Angebot zum strukturierten Outbound.</h2>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {process.map(({ title, text }, index) => (
              <article key={title} className="rounded-3xl border border-white/10 bg-slate-950 p-7">
                <span className="font-mono text-sm text-blue-400">/{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-blue-400/20 bg-blue-500/10 p-8 sm:p-10">
            <Target className="h-8 w-8 text-blue-300" />
            <p className="mt-7 text-sm font-bold uppercase tracking-[.18em] text-blue-300">Passend für</p>
            <h2 className="mt-3 text-3xl font-bold text-white">Tech-Unternehmen mit erklärungsbedürftigen Angeboten.</h2>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {audiences.map((audience) => (
                <li key={audience} className="flex gap-3 text-sm leading-6 text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                  {audience}
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-[2rem] border border-white/10 bg-white/[.035] p-8 sm:p-10">
            <Workflow className="h-8 w-8 text-cyan-300" />
            <p className="mt-7 text-sm font-bold uppercase tracking-[.18em] text-cyan-300">Zusammenarbeit</p>
            <h2 className="mt-3 text-3xl font-bold text-white">Flexibel nach Projekt und Vertriebsprozess.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Die Zusammenarbeit kann je nach Projekt stundenbasiert, als laufende Unterstützung oder mit erfolgsabhängigen Komponenten gestaltet werden.
            </p>
            <p className="mt-4 leading-7 text-slate-400">
              Umfang, Zielsetzung und Dokumentation stimmen wir vorab transparent ab. Dabei geht es um belastbare Vertriebsarbeit – nicht um garantierte Termine oder Abschlüsse.
            </p>
          </article>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-blue-400/20 bg-blue-500/10 p-9 text-center sm:p-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Sie suchen Unterstützung im B2B-Outbound für Ihr Tech-Unternehmen?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">Lassen Sie uns unverbindlich über Ihr Angebot, Ihre Zielgruppe und den passenden Umfang der Unterstützung sprechen.</p>
          <Link
            href="/contact?source=tech-sales"
            data-track="Tech Sales: Abschluss-CTA"
            className="mt-8 inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 font-bold text-slate-950 hover:bg-blue-50"
          >
            Kennenlerngespräch vereinbaren <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
