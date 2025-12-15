'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/navbar';

const container = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { when: 'beforeChildren', staggerChildren: 0.05 } },
};
const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.3 } } };

function ProjectCard({ p }) {
  return (
    <motion.article
      variants={item}
      className="group overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/40 shadow-sm transition hover:border-blue-500"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={p.img}
          alt={p.alt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* leichte Gradient-Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-950/70 via-gray-950/0" />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold">{p.title}</h3>
        <p className="mt-2 text-gray-300">{p.summary}</p>

        {/* Highlights / Ergebnisse */}
        {p.highlights?.length > 0 && (
          <ul className="mt-4 space-y-2 text-gray-300 list-disc pl-5">
            {p.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        )}

        {/* Tech-Tags */}
        {p.tags?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-gray-800 bg-gray-900/60 px-3 py-1 text-xs text-gray-300"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-6 flex items-center gap-3">
          <a
            href={p.ctaHref}
            className="rounded-xl bg-blue-500 px-4 py-2 text-sm font-semibold hover:bg-blue-600 transition"
          >
            {p.ctaLabel}
          </a>
          {p.secondaryHref && (
            <a
              href={p.secondaryHref}
              className="rounded-xl border border-gray-700 px-4 py-2 text-sm font-semibold hover:bg-gray-900 transition"
            >
              {p.secondaryLabel || 'Mehr erfahren'}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const projects = [
    {
      img: '/peaches.jpg',
      alt: 'Projekt Peaches',
      title: 'Peaches – modulare SaaS-Plattform',
      summary:
        'B2B/B2C-Plattform mit Admin-UI, Mehrsprachigkeit, Rollen & Rechten, stabilem Express-Backend und Postgres.',
      highlights: [
        'Skalierbare Architektur + saubere Admin-Oberfläche',
        'Auth, Medienverwaltung, Kurse/Module, DSGVO-ready',
        'Docker + Nginx + Backups (produktive Umgebung)',
      ],
      tags: ['React/Next.js', 'Express', 'PostgreSQL', 'Docker', 'Nginx', 'Multi-Language'],
      ctaLabel: 'Use-Case besprechen',
      ctaHref: '/contact?project=peaches',
      secondaryHref: '/projects#peaches',
      secondaryLabel: 'Kurzdetails',
    },
    {
      img: '/immobot.jpg',
      alt: 'Projekt Immobot',
      title: 'Immobot – automatisierte Immobiliensuche',
      summary:
        'Datenpipelines mit n8n, Kartenintegration (Leaflet/MapTiler) und dynamische Filter – täglich aktualisiert.',
      highlights: [
        'Automatisierte Feeds & Benachrichtigungen',
        'Koordinaten-/Radiussuche, flexible Filterlogik',
        'WordPress ⇆ n8n Integration, robuste JSON-APIs',
      ],
      tags: ['n8n', 'Leaflet', 'MapTiler', 'WordPress', 'REST', 'Automation'],
      ctaLabel: 'Automation anfragen',
      ctaHref: '/contact?project=immobot',
      secondaryHref: '/projects#immobot',
    },
    {
      img: '/sauber.jpg',
      alt: 'Projekt Die Saubermachfrau',
      title: 'Die Saubermachfrau – Website & Leads',
      summary:
        'Klar strukturiertes, responsives Web – inkl. sicherem Kontaktformular, Spamschutz und stabilem Hosting.',
      highlights: ['Schnelle Ladezeiten & mobile UX', 'Kontakt/WhatsApp-Integration', 'Wartungsfreundliche Struktur'],
      tags: ['Next.js', 'Tailwind', 'SEO-Basics', 'Hosting'],
      ctaLabel: 'Ähnliche Seite bauen',
      ctaHref: '/contact?project=saubermachfrau',
      secondaryHref: '/projects#sauber',
    },
  ];

  const testimonials = [
    {
      quote:
        '„Die SaaS-Plattform Peaches läuft stabil und performant. Architektur & Admin-UI sind top strukturiert.“',
      author: 'Fabian, Peaches',
    },
    {
      quote:
        '„Die Automatisierungen in Immobot sparen enorm Zeit. Kartenintegration und Filterlogik passen perfekt.“',
      author: 'Christoph, Immobot',
    },
    {
      quote:
        '„Super Arbeit! Kontaktformular und WhatsApp-Integration waren für uns extrem hilfreich.“',
      author: 'Heike Strigel, Die Saubermachfrau',
    },
  ];

  return (
    <motion.main
      variants={container}
      initial="hidden"
      animate="show"
      className="min-h-screen bg-gray-950 text-gray-100"
    >
      <Navbar />

      {/* Hero */}
      <section className="px-6 pt-28 md:pt-32 text-center max-w-5xl mx-auto">
        <motion.h1 variants={item} className="text-4xl md:text-6xl font-bold leading-tight">
          Projekte & Resultate
        </motion.h1>
        <motion.p variants={item} className="mt-4 text-gray-300 md:text-lg">
          Ausgewählte Cases mit klarem Fokus auf <strong>Stabilität</strong>, <strong>Speed</strong> und
          <strong> messbaren Ergebnissen</strong>.
        </motion.p>
      </section>

      {/* Projects Grid */}
      <section className="px-6 py-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </section>

      {/* Testimonials */}
      <section className="px-6 pt-4 pb-12 max-w-6xl mx-auto">
        <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold text-center mb-8">
          Stimmen von Kunden
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              variants={item}
              className="rounded-2xl border border-gray-800 bg-gray-900/40 p-6"
            >
              <p className="text-gray-200 italic leading-relaxed"> {t.quote} </p>
              <footer className="mt-3 text-sm text-gray-400">— {t.author}</footer>
            </motion.blockquote>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20 max-w-4xl mx-auto text-center">
        <motion.div
          variants={item}
          className="rounded-2xl border border-gray-800 p-8 bg-gradient-to-b from-gray-900 to-gray-950"
        >
          <h3 className="text-3xl font-bold">Interesse an einem ähnlichen Ergebnis?</h3>
          <p className="text-gray-300 mt-3">
            Kurzcall (20–30 Min.): Ziele, Systeme, Quick-Wins. Ich skizziere dir den Weg zum Go-Live.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <a href="/contact" className="rounded-xl bg-blue-500 px-6 py-3 font-semibold hover:bg-blue-600 transition">
              Kostenloses Erstgespräch
            </a>
            <a
              href="/services"
              className="rounded-xl border border-gray-700 px-6 py-3 font-semibold hover:bg-gray-900 transition"
            >
              Leistungen ansehen
            </a>
          </div>
        </motion.div>
      </section>
    </motion.main>
  );
}
