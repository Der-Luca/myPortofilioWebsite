import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "../navbar";
import Footer from "../home/Footer";
import JsonLd from "../seo/JsonLd";

const baseUrl = "https://plessing-consulting.com";

export default function CaseStudyPage({ path, label, title, intro, facts, sections, quote, related }) {
  const url = `${baseUrl}${path}`;
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description: intro,
        author: { "@id": `${baseUrl}/#person` },
        publisher: { "@id": `${baseUrl}/#business` },
        datePublished: "2026-09-19",
        dateModified: "2026-09-19",
        mainEntityOfPage: url,
      }} />
      <Navbar />
      <article>
        <header className="border-b border-white/10 px-6 pb-24 pt-36">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-emerald-300">{label}</p>
            <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[1.05] tracking-[-.04em] text-white sm:text-6xl">{title}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">{intro}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              {facts.map((fact) => <span key={fact} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">{fact}</span>)}
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-5xl px-6 py-24">
          <div className="space-y-16">
            {sections.map(({ heading, text, points }) => (
              <section key={heading}>
                <h2 className="text-3xl font-bold text-white">{heading}</h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">{text}</p>
                {points && <ul className="mt-7 grid gap-4 md:grid-cols-2">{points.map((point) => <li key={point} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[.035] p-5 leading-7 text-slate-300"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />{point}</li>)}</ul>}
              </section>
            ))}
          </div>

          {quote && <blockquote className="mt-16 rounded-[2rem] border border-emerald-400/20 bg-emerald-400/10 p-8 sm:p-10"><p className="text-xl leading-9 text-white">„{quote.text}“</p><footer className="mt-5 text-sm font-bold text-emerald-300">{quote.by}</footer></blockquote>}

          <section className="mt-16 rounded-[2rem] border border-blue-400/20 bg-blue-500/10 p-9 sm:p-12">
            <h2 className="text-3xl font-bold text-white">Ein ähnlicher Engpass muss nicht gleich aussehen.</h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-300">Entscheidend ist, wo in Ihrem Ablauf Zeit, Informationen oder Verlässlichkeit verloren gehen. Das lässt sich an einem konkreten Vorgang schnell greifbar machen.</p>
            <Link href="/contact?source=case-study" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-slate-950">Eigenen Ablauf besprechen <ArrowRight className="h-4 w-4" /></Link>
          </section>

          <nav className="mt-10 flex flex-wrap gap-3" aria-label="Verwandte Inhalte">
            {related.map(({ href, label: itemLabel }) => <Link key={href} href={href} className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 hover:text-white">{itemLabel}</Link>)}
          </nav>
        </div>
      </article>
      <Footer />
    </main>
  );
}
