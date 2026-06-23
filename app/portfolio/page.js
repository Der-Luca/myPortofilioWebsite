'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../components/navbar';
import Footers from '../components/home/Footer';
import Timeline, { timeline as baseTimeline } from '../components/about/Timeline';
import {
  Code2,
  Server,
  Database,
  Workflow,
  Sparkles,
  Container,
  Mail,
  MapPin,
  Briefcase,
  GraduationCap,
  Languages,
  Calendar,
  Globe,
  Plane,
  Heart,
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const heroBadges = [
  { icon: MapPin, label: 'Barcelona, Spanien' },
  { icon: Calendar, label: 'Selbstständig seit 2022' },
  { icon: GraduationCap, label: 'B.Sc. Wirtschaftsinformatik' },
  { icon: Briefcase, label: 'Ausgebildeter Fachinformatiker für Systemintegration' },
  { icon: Languages, label: 'Deutsch / Englisch / Spanisch' },
];

const dailyWork = [
  'Bestehende Systeme verstehen',
  'CRMs & Web-Apps anpassen',
  'APIs und Schnittstellen verbinden',
  'Automatisierungen bauen',
  'Fehler analysieren',
  'Deployment & Betrieb unterstützen',
];

const skillGroups = [
  { group: 'Frontend', items: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'FastAPI', 'REST APIs', 'API-Design'] },
  { group: 'Datenbanken', items: ['PostgreSQL', 'MySQL', 'Firebase / Firestore', 'Supabase'] },
  {
    group: 'Automatisierung & Integrationen',
    items: ['n8n', 'Scripting', 'Scheduled Jobs', 'REST API Integrations', 'Webhooks'],
  },
  { group: 'DevOps', items: ['Docker', 'Docker Compose', 'VPS'] },
  { group: 'Coding Tools', items: ['VS Code', 'Git', 'Claude Code', 'Codex', 'Ollama Cloud'] },
];

const groupIcons = {
  Frontend: Code2,
  Backend: Server,
  Datenbanken: Database,
  'Automatisierung & Integrationen': Workflow,
  DevOps: Container,
  'Coding Tools': Sparkles,
};

// Beruflicher Werdegang wie auf der About-Seite — nur der Selbstständig-Text
// wird für die Portfolio-Seite angepasst.
const portfolioTimeline = baseTimeline.map((entry, idx) =>
  idx === 0
    ? {
        ...entry,
        desc: [
          'Seit 2022 arbeite ich selbstständig an Softwareprojekten für kleine und mittelständische Unternehmen. Dabei geht es häufig um die Erstellung oder Anpassung von CRMs, Web-Apps, Automatisierungen, externen Schnittstellen und internen Tools.',
          'Neben der eigentlichen Umsetzung unterstütze ich auch bei technischer Einschätzung, Fehleranalyse, Strukturierung und Beratung.',
        ],
      }
    : entry,
);

const personalCards = [
  { icon: MapPin, title: 'Homebase', text: 'Barcelona, Spanien' },
  { icon: Globe, title: 'Remote', text: 'EU-Zeitzone · DACH-Projekte' },
  { icon: Plane, title: 'FPV-Drohnen', text: 'Fliegen, Basteln, Üben' },
  { icon: Heart, title: 'Privat', text: 'Strand · Familie · Freunde' },
];



function SectionLabel({ children }) {
  return (
    <span className="inline-block text-xs font-mono uppercase tracking-[0.2em] text-blue-400/80 mb-4">
      {children}
    </span>
  );
}

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen bg-gray-950 text-gray-100 selection:bg-blue-500/30 overflow-hidden">
      <Navbar />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-600/10 blur-[140px] rounded-full" />
      <div className="pointer-events-none absolute top-[1400px] right-0 w-[600px] h-[500px] bg-purple-600/5 blur-[140px] rounded-full" />

      {/* ───────── 1. HERO / KURZPROFIL ───────── */}
      <motion.section
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative px-6 pt-32 pb-16 md:pt-40 max-w-5xl mx-auto"
      >
        {/* Identitäts-Zeile: Bild + Name */}
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:gap-8 sm:text-left">
          {/* Profilbild (bestehendes Asset) */}
          <motion.div variants={fadeUp} className="relative shrink-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-tr from-blue-500 to-purple-500 blur-[60px] opacity-30 rounded-full" />
            <div className="relative h-36 w-36 md:h-44 md:w-44">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-gray-800 p-[3px]">
                <div className="h-full w-full rounded-full bg-gray-950 p-1">
                  <img
                    src="/portfolio.jpeg"
                    alt="Luca-Samuel Pleßing"
                    className="h-full w-full rounded-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white"
            >
              Luca-Samuel{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
                Pleßing
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-3 text-lg md:text-xl font-medium text-gray-300"
            >
              Software Engineer &amp; IT-Consultant
            </motion.p>
          </div>
        </div>

        {/* Intro – linksbündig auf einer Linie mit allen weiteren Sektionen */}
        <motion.div
          variants={fadeUp}
          className="mt-8 max-w-3xl space-y-4 text-base text-gray-400 leading-relaxed text-center sm:text-left sm:text-justify"
        >
          <p>
            Ich bin selbstständig und unterstütze kleine und mittelständische Unternehmen,
            Start-ups und Universitäten dabei, technische Vorhaben umzusetzen — von Web-Apps und
            internen Tools über Automatisierungen und externe Schnittstellen bis hin zu Deployment,
            Betrieb und technischer Beratung.
          </p>
          <p>
            Meine Stärke liegt darin, nicht nur in einem engen Teilbereich zu denken. Ich verbinde
            Softwareentwicklung, Automatisierung, Infrastrukturverständnis und Beratung und kann
            mich schnell in neue Systeme, Anforderungen und technische Probleme einarbeiten.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-6 flex flex-wrap justify-center sm:justify-start gap-2"
        >
          {heroBadges.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-1.5 rounded-full border border-gray-800 bg-gray-900/60 px-3 py-1.5 text-xs font-medium text-gray-300"
            >
              <Icon className="h-3.5 w-3.5 text-blue-400" />
              {label}
            </span>
          ))}
        </motion.div>
      </motion.section>

      {/* ───────── 2. WIE ICH ARBEITE ───────── */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="relative px-6 py-14 max-w-5xl mx-auto"
      >
        <SectionLabel>Was ich im Alltag mache</SectionLabel>
        <div className="space-y-5 text-base md:text-lg text-gray-400 leading-relaxed max-w-3xl sm:text-justify">
          <p>
            Mein Arbeitsalltag ist meistens eine Mischung aus Entwicklung, Analyse, Automatisierung
            und technischer Abstimmung. Mal geht es darum, eine bestehende Codebase zu verstehen und
            sauber weiterzuentwickeln. Mal geht es um ein CRM, eine Web-App, eine API, eine
            Automatisierung mit n8n oder eine externe Schnittstelle, die zuverlässig funktionieren
            muss.
          </p>
          <p>
            Ich mag Aufgaben, bei denen man nicht nur blind Tickets abarbeitet, sondern erst
            verstehen muss, wo das eigentliche Problem liegt. Genau da sehe ich meine Stärke:
            technische Themen sortieren, realistische Lösungen finden und diese pragmatisch
            umsetzen.
          </p>
        </div>
        <div className="mt-7 flex flex-wrap gap-2">
          {dailyWork.map((item) => (
            <span
              key={item}
              className="rounded-full border border-gray-800 bg-gray-900/60 px-3.5 py-1.5 text-sm font-medium text-gray-300"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.section>

      {/* ───────── 3. SKILLS & TECHNOLOGIEN (Hauptsektion) ───────── */}
      <section className="relative px-6 py-16 max-w-5xl mx-auto">
        <SectionLabel>Skills &amp; Technologien</SectionLabel>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 max-w-2xl">
          Mein technischer{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
            Werkzeugkasten
          </span>
        </h2>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skillGroups.map(({ group, items }) => {
            const Icon = groupIcons[group] || Code2;
            return (
              <motion.div
                key={group}
                variants={fadeUp}
                className="group rounded-2xl border border-white/10 bg-gray-900/60 backdrop-blur-sm p-6 transition-colors hover:border-blue-500/40"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/15 to-purple-500/10 text-blue-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-semibold text-white">{group}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-gray-800 bg-gray-900/70 px-3 py-1.5 text-xs font-mono text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ───────── 5. BERUFLICHER WERDEGANG (Daten von der About-Seite, nur Selbstständig-Text angepasst) ───────── */}
      <Timeline items={portfolioTimeline} />

      {/* ───────── PERSÖNLICH ───────── */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="relative px-6 py-14 max-w-5xl mx-auto"
      >
        <SectionLabel>Persönlich</SectionLabel>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Auch abseits vom Code</h2>
            <div className="mt-4 space-y-4 text-base md:text-lg text-gray-400 leading-relaxed sm:text-justify">
              <p>
                Ich lebe aktuell in Barcelona. Abseits von Projekten verbringe ich gerne Zeit mit
                meiner Frau und Freunden, gehe gerne an den Strand und beschäftige mich mit
                FPV-Drohnen.
              </p>
              <p>
                An FPV-Drohnen mag ich die Mischung aus Technik, Basteln und Üben. Es erinnert mich
                ein bisschen an Skateboarding: Man versucht neue Tricks und wird Stück für Stück besser.
                Nur dass man sich dabei nicht direkt selbst verletzt.
              </p>
            </div>
          </div>

          {/* Info-Karten */}
          <div className="grid grid-cols-2 gap-4">
            {personalCards.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-gray-900/60 p-5 transition-colors hover:border-blue-500/40"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/15 to-purple-500/10 text-blue-400">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="mt-3 text-sm font-semibold text-white">{title}</div>
                <div className="text-xs text-gray-500">{text}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ───────── 8. KONTAKT ───────── */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="relative px-6 pt-10 pb-24 max-w-5xl mx-auto"
      >
        <SectionLabel>Kontakt</SectionLabel>
        <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl">
          Du möchtest Kontakt aufnehmen? Schreib mir am besten direkt über das Kontaktformular.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-2.5 rounded-xl bg-blue-600 px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-blue-500 hover:scale-[1.02] shadow-lg shadow-blue-500/25"
        >
          <Mail className="h-5 w-5" />
          Zum Kontaktformular
        </Link>
      </motion.section>

      <Footers />
    </main>
  );
}
