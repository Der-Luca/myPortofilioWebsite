import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "../navbar";
import Footer from "../home/Footer";
import JsonLd from "../seo/JsonLd";

const baseUrl = "https://plessing-consulting.com";

export default function KnowledgeArticle({ path, title, description, answer, sections, faqs, related }) {
  const url = `${baseUrl}${path}`;
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "Article", headline: title, description, author: { "@id": `${baseUrl}/#person` }, publisher: { "@id": `${baseUrl}/#business` }, datePublished: "2026-09-19", dateModified: "2026-09-19", mainEntityOfPage: url },
          { "@type": "FAQPage", mainEntity: faqs.map(({ question, answer: faqAnswer }) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: faqAnswer } })) },
        ],
      }} />
      <Navbar />
      <article>
        <header className="border-b border-white/10 px-6 pb-20 pt-36">
          <div className="mx-auto max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-cyan-300">Wissen · Prozessoptimierung</p>
            <h1 className="mt-5 text-5xl font-black leading-[1.08] tracking-[-.04em] text-white sm:text-6xl">{title}</h1>
            <p className="mt-7 text-lg leading-8 text-slate-300">{description}</p>
            <p className="mt-5 text-sm text-slate-500">Von Luca-Samuel Pleßing · Aktualisiert am 19. September 2026</p>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-6 py-20">
          <section className="rounded-3xl border border-blue-400/20 bg-blue-500/10 p-7 sm:p-9">
            <h2 className="text-sm font-bold uppercase tracking-[.18em] text-blue-300">Kurzantwort</h2>
            <p className="mt-4 text-xl leading-9 text-white">{answer}</p>
          </section>

          <div className="mt-16 space-y-14">
            {sections.map(({ heading, paragraphs, points }) => (
              <section key={heading}>
                <h2 className="text-3xl font-bold text-white">{heading}</h2>
                <div className="mt-5 space-y-5 text-lg leading-8 text-slate-300">{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                {points && <ul className="mt-6 space-y-3 border-l-2 border-emerald-400 pl-6 text-slate-300">{points.map((point) => <li key={point}>{point}</li>)}</ul>}
              </section>
            ))}
          </div>

          <section className="mt-16">
            <h2 className="text-3xl font-bold text-white">Häufige Fragen</h2>
            <div className="mt-7 divide-y divide-white/10 border-y border-white/10">
              {faqs.map(({ question, answer: faqAnswer }) => <div key={question} className="py-7"><h3 className="text-xl font-bold text-white">{question}</h3><p className="mt-3 leading-7 text-slate-400">{faqAnswer}</p></div>)}
            </div>
          </section>

          <section className="mt-16 rounded-[2rem] border border-white/10 bg-white/[.035] p-8 sm:p-10">
            <h2 className="text-3xl font-bold text-white">Nicht sicher, wo Ihr Ablauf zuerst verbessert werden sollte?</h2>
            <p className="mt-4 leading-7 text-slate-300">Bringen Sie einen konkreten Vorgang mit. Im Prozess-Sparring ordnen wir Engpass, Wirkung und einen sinnvollen nächsten Schritt ein.</p>
            <Link href="/contact?source=knowledge" className="mt-7 inline-flex items-center gap-2 font-bold text-blue-300">Prozess-Sparring anfragen <ArrowRight className="h-4 w-4" /></Link>
          </section>

          <nav className="mt-10 flex flex-wrap gap-3" aria-label="Verwandte Inhalte">{related.map(({ href, label }) => <Link key={href} href={href} className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 hover:text-white">{label}</Link>)}</nav>
        </div>
      </article>
      <Footer />
    </main>
  );
}
