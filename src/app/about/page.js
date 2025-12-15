'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/navbar';

const fadeUp = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } };

export default function About() {
  const facts = [
    { k: 'Fokus', v: 'Automation, KI, Web-Apps' },
    { k: 'Stack', v: 'Next.js, Node/Express, Postgres, n8n, Docker' },
    { k: 'Modus', v: 'Freelance / Projekt-basiert' },
    { k: 'Sprachen', v: 'DE / EN / ES (Basics)' },
  ];

  const timeline = [
    {
      period: '2025',
      title: 'Bachelor Wirtschaftsinformatik (dual) – Abschluss',
      desc: 'Schwerpunkt Sales & Consulting. Thesis: KI im First-Level-Support (RAG, Automatisierung, KPI).',
    },
    {
      period: '2024–2025',
      title: 'Peaches – SaaS-Plattform (React/Express/Postgres)',
      desc: 'Architektur, Admin-UI, Mehrsprachigkeit, Auth, DevOps (Docker + Nginx), DSGVO Setup.',
    },
    {
      period: '2024–2025',
      title: 'Immobot – Automatisierte Immobiliensuche',
      desc: 'n8n-Pipelines, MapTiler/Leaflet, dynamische JSON-Filter (WP ⇆ n8n), tägliche Feeds.',
    },
    {
      period: '2023–2025',
      title: 'CBS Corporate Business Solutions – Dualer Part',
      desc: 'Prozess-Themen, Beratung, Prototypen, Schnittstellen. Sauberer Transfer in die Praxis.',
    },
    {
      period: '2022–heute',
      title: 'Freelance – Automation & Web',
      desc: 'Web-Apps, KI-Assistenten (RAG), Integrationen, Hosting. Fokus: schnell messbarer Nutzen.',
    },
  ];

  const skills = [
    'Next.js & React', 'Tailwind CSS', 'Node.js & Express', 'PostgreSQL',
    'Auth (JWT/SuperTokens)', 'n8n Automatisierung', 'Docker & Nginx',
    'Monitoring & Logs', 'Mehrsprachige UIs', 'REST/GraphQL APIs',
  ];

  return (
    <motion.main
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.05 }}
      className="min-h-screen bg-gray-950 text-gray-100"
    >
      <Navbar />

      {/* HERO / POSITIONING */}
      <section className="px-6 pt-28 md:pt-32 pb-10 max-w-5xl mx-auto">
        <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-bold leading-tight">
          Software Engineering & <span className="text-blue-400">Automation</span>
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl">
          Ich baue praxistaugliche Workflows und Web-Apps – mit <strong>Next.js</strong>, <strong>Node/Express</strong>,
          <strong> Postgres</strong> und <strong>n8n</strong>. Ziel: weniger Handarbeit, weniger Fehler, schneller live.
        </motion.p>

        {/* Quick Facts */}
        <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-2">
          {facts.map((f) => (
            <span key={f.k} className="rounded-full border border-gray-800 bg-gray-900/50 px-4 py-2 text-sm">
              <span className="text-gray-400">{f.k}:</span> <span className="ml-1">{f.v}</span>
            </span>
          ))}
        </motion.div>
      </section>

      {/* ABOUT CARD */}
      <section className="px-6 pb-6 max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          className="rounded-2xl border border-gray-800 bg-gray-900/40 p-6 md:p-8 flex flex-col md:flex-row items-start gap-6"
        >
          <img
            src="/profile.jpg"
            alt="Profilbild Luca"
            className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-gray-800 object-cover"
          />
          <div>
            <h2 className="text-2xl font-semibold">Kurzprofil</h2>
            <p className="mt-2 text-gray-300">
              Wirtschaftsinformatik (dual) + Hands-on Engineering. Ich verbinde
              sauberes Frontend mit stabilen Backends und **Automationen**, die Arbeit wirklich sparen.
              Architektur, Implementierung, Doku, Übergabe – alles aus einer Hand.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href="/projects"
                className="rounded-xl bg-blue-500 px-4 py-2 font-semibold hover:bg-blue-600 transition"
              >
                Projekte ansehen
              </a>
              <a
                href="/contact"
                className="rounded-xl border border-gray-700 px-4 py-2 font-semibold hover:bg-gray-900 transition"
              >
                Kontakt aufnehmen
              </a>
              {/* Optional: CV-Download */}
              {/* <a href="/cv.pdf" className="rounded-xl border border-gray-700 px-4 py-2 font-semibold hover:bg-gray-900">CV herunterladen</a> */}
            </div>
          </div>
        </motion.div>
      </section>

      {/* TIMELINE */}
      <section className="px-6 py-10 max-w-5xl mx-auto">
        <motion.h3 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-8">
          Timeline / Lebenslauf
        </motion.h3>
        <div className="relative pl-6 md:pl-10">
          {/* Linie */}
          <div className="absolute left-3 md:left-4 top-0 bottom-0 w-px bg-gray-800" />
          <ul className="space-y-6">
            {timeline.map((t, idx) => (
              <motion.li
                key={idx}
                variants={fadeUp}
                className="relative"
              >
                {/* Punkt */}
                <span className="absolute -left-[10px] md:-left-[12px] block h-2.5 w-2.5 md:h-3 md:w-3 rounded-full bg-blue-400 ring-4 ring-gray-950" />
                <div className="rounded-2xl border border-gray-800 bg-gray-900/40 p-5">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <span className="text-blue-400 font-mono text-sm">{t.period}</span>
                    <h4 className="text-lg md:text-xl font-semibold">{t.title}</h4>
                  </div>
                  <p className="mt-2 text-gray-300">{t.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* SKILLS */}
      <section className="px-6 pb-14 max-w-5xl mx-auto">
        <motion.h3 variants={fadeUp} className="text-3xl md:text-4xl font-bold mb-6">
          Skills & Tools
        </motion.h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {skills.map((s) => (
            <motion.div
              key={s}
              variants={fadeUp}
              className="rounded-xl border border-gray-800 bg-gray-900/40 px-4 py-3 text-center"
            >
              {s}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20 max-w-4xl mx-auto text-center">
        <motion.div
          variants={fadeUp}
          className="rounded-2xl border border-gray-800 p-8 bg-gradient-to-b from-gray-900 to-gray-950"
        >
          <h2 className="text-3xl font-bold">Lass uns über deinen Use-Case sprechen</h2>
          <p className="text-gray-300 mt-3">
            Kurzcall (20–30 Min.): Ziele, Systeme, Quick-Wins. Auf Wunsch mit kleiner Checkliste vorab.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <a href="/contact" className="rounded-xl bg-blue-500 px-6 py-3 font-semibold hover:bg-blue-600 transition">
              Kostenloses Erstgespräch
            </a>
            <a href="/projects" className="rounded-xl border border-gray-700 px-6 py-3 font-semibold hover:bg-gray-900 transition">
              Projekte ansehen
            </a>
          </div>
        </motion.div>
      </section>
    </motion.main>
  );
}
