import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "../navbar";
import Footer from "../home/Footer";
import JsonLd from "../seo/JsonLd";

const baseUrl = "https://plessing-consulting.com";

export default function ServiceLandingPage({
  path,
  eyebrow,
  title,
  intro,
  promise,
  problems,
  outcomes,
  process,
  examples = [],
  faqs,
  related = [],
  ctaTitle = "Welcher Ablauf bremst Ihr Unternehmen gerade aus?",
}) {
  const url = `${baseUrl}${path}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: title,
        description: intro,
        provider: { "@id": `${baseUrl}/#business` },
        areaServed: ["Deutschland", "Österreich", "Schweiz"],
        url,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Startseite", item: baseUrl },
          { "@type": "ListItem", position: 2, name: eyebrow, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <JsonLd data={structuredData} />
      <Navbar />

      <section className="relative overflow-hidden border-b border-white/10 px-6 pb-24 pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(37,99,235,.2),transparent_36%)]" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-cyan-300">{eyebrow}</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[1.05] tracking-[-.04em] text-white sm:text-6xl">{title}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">{intro}</p>
          <p className="mt-5 max-w-3xl border-l-2 border-emerald-400 pl-5 text-base leading-7 text-slate-300">{promise}</p>
          <Link href="/contact?source=service" data-track={`${eyebrow}: Prozess-Sparring`} className="mt-9 inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 font-bold text-white transition hover:bg-blue-500">
            Prozess unverbindlich besprechen <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[.18em] text-blue-400">Typische Ausgangslage</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white">Woran Sie erkennen, dass sich ein genauer Blick lohnt.</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {problems.map((item) => (
              <article key={item} className="rounded-3xl border border-white/10 bg-white/[.035] p-7 text-slate-300">
                <CheckCircle2 className="h-6 w-6 text-cyan-400" />
                <p className="mt-5 leading-7">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/40 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.18em] text-emerald-300">Das Ergebnis</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white">Nicht mehr Technik, sondern ein besserer Arbeitsablauf.</h2>
          </div>
          <ul className="space-y-4">
            {outcomes.map((item) => (
              <li key={item} className="flex gap-4 rounded-2xl border border-white/10 bg-slate-950/70 p-5 leading-7 text-slate-300">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />{item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[.18em] text-cyan-300">Vorgehen</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white">Vom tatsächlichen Ablauf zur tragfähigen Verbesserung.</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {process.map(({ title: stepTitle, text }, index) => (
              <article key={stepTitle} className="rounded-3xl border border-white/10 bg-white/[.035] p-7">
                <span className="font-mono text-sm text-blue-400">/{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 text-xl font-bold text-white">{stepTitle}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {examples.length > 0 && (
        <section className="border-y border-white/10 bg-white/[.025] px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-bold uppercase tracking-[.18em] text-blue-400">Aus der Praxis</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white">Konkrete Situationen statt abstrakter Versprechen.</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {examples.map(({ title: exampleTitle, text, href }) => (
                <article key={exampleTitle} className="rounded-3xl border border-white/10 bg-slate-950 p-8">
                  <h3 className="text-2xl font-bold text-white">{exampleTitle}</h3>
                  <p className="mt-4 leading-7 text-slate-400">{text}</p>
                  {href && <Link href={href} className="mt-6 inline-flex items-center gap-2 font-bold text-blue-300">Praxisbeispiel lesen <ArrowRight className="h-4 w-4" /></Link>}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[.18em] text-cyan-300">Häufige Fragen</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white">Kurz und verständlich beantwortet.</h2>
          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {faqs.map(({ question, answer }) => (
              <article key={question} className="py-7">
                <h3 className="text-xl font-bold text-white">{question}</h3>
                <p className="mt-3 leading-7 text-slate-400">{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="px-6 pb-16">
          <div className="mx-auto flex max-w-4xl flex-wrap gap-3">
            {related.map(({ href, label }) => <Link key={href} href={href} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 hover:border-blue-400/40 hover:text-white">{label}</Link>)}
          </div>
        </section>
      )}

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-blue-400/20 bg-blue-500/10 p-9 text-center sm:p-12">
          <h2 className="text-3xl font-bold text-white">{ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">Ein konkretes Beispiel aus Ihrem Arbeitsalltag reicht. Sie müssen weder die Ursache noch die technische Lösung bereits kennen.</p>
          <Link href="/contact?source=process-sparring" data-track={`${eyebrow}: Abschluss-CTA`} className="mt-8 inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 font-bold text-slate-950 hover:bg-blue-50">Prozess-Sparring anfragen <ArrowRight className="h-5 w-5" /></Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
