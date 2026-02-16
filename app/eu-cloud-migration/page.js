'use client';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar';
import Link from 'next/link';
import Head from 'next/head';
import { Shield, AlertTriangle, CheckCircle, ArrowRight, Cloud, Server, MessageSquare, GitBranch, Mail, Quote } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const risks = [
  { title: 'CLOUD Act', desc: 'US-Behörden können auf Ihre Daten zugreifen – ohne Ihr Wissen' },
  { title: 'Millionen-Bußgelder', desc: 'DSGVO-Verstöße durch US-Cloud-Provider häufen sich' },
  { title: 'NIS2-Compliance', desc: 'Ab Oktober 2024 drohen Geschäftsführern persönliche Haftung' },
  { title: 'Vendor Lock-In', desc: 'Abhängigkeit von Microsoft, Google & Amazon steigt' },
  { title: 'Steigende Kosten', desc: 'US-Cloud wird jährlich teurer' },
];

const solutions = [
  { title: 'Nextcloud statt Microsoft 365', desc: 'Dokumente, Kalender, Chat – alles auf deutschen Servern', icon: Cloud },
  { title: 'Mattermost statt Slack', desc: 'Team-Kommunikation ohne US-Datenzugriff', icon: MessageSquare },
  { title: 'Hetzner/IONOS statt AWS', desc: 'Cloud-Infrastruktur mit EU-Rechtsrahmen', icon: Server },
  { title: 'GitLab CE statt GitHub', desc: 'Code-Repository unter Ihrer Kontrolle', icon: GitBranch },
  { title: 'Mailu/Mailcow statt Google Workspace', desc: 'E-Mail-Server in Deutschland gehostet', icon: Mail },
];

const steps = [
  {
    num: 1, title: 'Analyse', time: 'Woche 1-2',
    items: ['Welche Tools nutzen Sie heute?', 'Welche Daten sind besonders sensibel?', 'Ihre individuellen Compliance-Anforderungen'],
  },
  {
    num: 2, title: 'Konzept', time: 'Woche 3-4',
    items: ['Auswahl der passenden EU-Alternativen', 'Migrations-Roadmap mit Zeitplan', 'Schulungskonzept für Ihr Team'],
  },
  {
    num: 3, title: 'Migration', time: 'Woche 5-10',
    items: ['Schrittweise Umstellung ohne Downtime', 'Datenübertragung verschlüsselt & dokumentiert', 'Parallelbetrieb zur Sicherheit'],
  },
  {
    num: 4, title: 'Go-Live', time: 'Woche 11-12',
    items: ['Finaler Umzug mit Ihrem Team', 'Schulungen & Onboarding', '30 Tage Support inklusive'],
  },
];

const pricing = [
  {
    name: 'STARTER', price: '2.000–5.000€', featured: false,
    items: ['Kleine Teams (bis 10 Nutzer)', 'E-Mail + Dokumente migrieren', '2-4 Wochen Projektlaufzeit'],
  },
  {
    name: 'BUSINESS', price: '5.000–10.000€', featured: true, badge: 'BELIEBT',
    items: ['Mittelgroße Teams (10-50 Nutzer)', 'Komplette Kollaborations-Suite', '6-8 Wochen Projektlaufzeit'],
  },
  {
    name: 'ENTERPRISE', price: 'ab 15.000€', featured: false,
    items: ['Große Organisationen (50+ Nutzer)', 'Full-Stack Migration inkl. Infrastruktur', '10-12 Wochen Projektlaufzeit', 'Individuelles NIS2-Audit inklusive'],
  },
];

export default function EUCloudMigration() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen text-gray-100"
    >
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-slate-900 to-cyan-900/30" />
        <div className="bg-diagonal-glow-top-left" />
        <div className="bg-diagonal-glow-bottom-right" />
        <div className="relative container mx-auto px-6 max-w-4xl text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent"
          >
            Raus aus der US-Cloud – Rein in europäische Datensouveränität
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-lg md:text-xl mb-10 text-slate-300 leading-relaxed max-w-3xl mx-auto"
          >
            Wir migrieren Ihr Unternehmen in 90 Tagen von Microsoft 365, AWS &amp; Co. zu DSGVO-konformen, europäischen Alternativen. Keine US-Datenzugriffe. Keine NIS2-Risiken. Keine Kompromisse.
          </motion.p>
          <motion.a
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            href="#cta"
            className="inline-block rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-4 font-semibold text-lg text-white shadow-[0_12px_35px_rgba(37,99,235,0.5)] hover:shadow-[0_14px_40px_rgba(37,99,235,0.7)] hover:from-blue-400 hover:to-cyan-300 active:scale-[0.98] transition"
          >
            Kostenlose Risikoanalyse buchen
          </motion.a>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            US-Cloud: Das Risiko wächst jeden Tag
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-5 mb-12">
            {risks.map((r, i) => (
              <motion.div
                key={r.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className={`bg-red-950/30 border-l-4 border-red-500/70 p-5 rounded-r-lg backdrop-blur-sm ${i === 4 ? 'md:col-span-2' : ''}`}
              >
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-white mb-1">{r.title}</h3>
                    <p className="text-slate-300 text-sm">{r.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-blue-950/40 border-l-4 border-blue-400/60 p-6 rounded-r-lg text-center"
          >
            <p className="text-slate-300 italic">
              &quot;Sie sind nicht allein: 73% der deutschen Unternehmen sind besorgt über US-Datenzugriffe, aber nur 12% haben eine Exit-Strategie.&quot;
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Ihre Migration zu europäischen Alternativen
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-5 mb-12">
            {solutions.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className={`bg-emerald-950/20 border-l-4 border-emerald-500/70 p-5 rounded-r-lg backdrop-blur-sm hover:bg-emerald-950/30 transition-colors ${i === 4 ? 'md:col-span-2' : ''}`}
                >
                  <div className="flex items-start">
                    <Icon className="w-6 h-6 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-white mb-1">{s.title}</h3>
                      <p className="text-slate-300 text-sm">{s.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-blue-600/80 to-cyan-600/80 py-5 rounded-xl shadow-lg"
          >
            <p className="text-lg font-semibold text-white">
              100% DSGVO-konform · NIS2-ready · Made &amp; Hosted in Europe
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Unser 4-Schritte-Prozess
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-10 bottom-10 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-400 hidden md:block" />

            <div className="space-y-10">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-lg z-10 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                    {step.num}
                  </div>
                  <div className="flex-grow bg-slate-800/60 p-6 rounded-xl border border-white/5 backdrop-blur-sm">
                    <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
                    <p className="text-sm text-blue-400 font-semibold mb-3">{step.time}</p>
                    <ul className="space-y-2 text-slate-300 text-sm">
                      {step.items.map((item) => (
                        <li key={item} className="flex items-start">
                          <ArrowRight className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Erfolgreiche Projekte
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-slate-800/60 p-8 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-3">Immobot</h3>
              <p className="text-slate-300 leading-relaxed">
                Automatisierung über 40+ Immobilienportale → Vollständige EU-Hosting-Infrastruktur, 100% DSGVO-konform
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="bg-slate-800/60 p-8 rounded-xl border border-white/5 hover:border-blue-500/30 transition-colors"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-3">Peaches HR-Platform</h3>
              <p className="text-slate-300 leading-relaxed">
                Multi-Language CRM → Migration von US-Cloud zu Hetzner, 60% Kostenersparnis
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-slate-800/60 p-8 rounded-xl border-l-4 border-blue-500 shadow-xl"
          >
            <div className="flex items-start">
              <Quote className="w-10 h-10 text-blue-400 mr-4 flex-shrink-0" />
              <div>
                <p className="text-lg text-slate-200 italic mb-4 leading-relaxed">
                  &quot;Plessing Consulting hat uns in 8 Wochen von AWS zu Hetzner migriert. Resultat: Gleiche Performance, halbe Kosten, deutsches Rechtsgebiet.&quot;
                </p>
                <p className="text-slate-400 font-semibold">– Zufriedener Kunde</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-3"
          >
            Transparente Preise
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-center text-slate-400 mb-16 text-lg"
          >
            Wählen Sie das passende Paket für Ihr Unternehmen
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {pricing.map((p, i) => (
              <motion.div
                key={p.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className={`relative rounded-xl p-8 transition-transform hover:-translate-y-1 ${
                  p.featured
                    ? 'bg-gradient-to-br from-blue-600 to-cyan-600 text-white shadow-[0_20px_50px_rgba(37,99,235,0.4)] scale-105'
                    : 'bg-slate-800/60 border border-white/10'
                }`}
              >
                {p.badge && (
                  <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 px-3 py-1 rounded-bl-lg rounded-tr-xl text-xs font-bold">
                    {p.badge}
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                <div className={`text-3xl font-bold mb-6 ${p.featured ? '' : 'text-blue-400'}`}>
                  {p.price}
                </div>
                <ul className="space-y-3 mb-6">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start text-sm">
                      <CheckCircle className={`w-4 h-4 mr-2 mt-0.5 flex-shrink-0 ${p.featured ? 'text-white' : 'text-emerald-400'}`} />
                      <span className={p.featured ? 'text-white/90' : 'text-slate-300'}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-blue-950/40 border border-blue-500/20 rounded-xl p-6"
          >
            <p className="text-center text-white font-semibold mb-3 text-lg">Alle Pakete inklusive:</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-300">
              {['Risikoanalyse & Compliance-Check', 'Projektmanagement', 'Schulungen für Ihr Team', '30 Tage Post-Launch Support'].map((item) => (
                <span key={item} className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-1.5" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-slate-900 to-cyan-900/40" />
        <div className="bg-diagonal-glow-top-left" />
        <div className="bg-diagonal-glow-bottom-right" />
        <div className="relative container mx-auto px-6 max-w-4xl text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Kostenlose Risikoanalyse buchen
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-xl text-slate-300 mb-8"
          >
            Wir prüfen in 30 Minuten:
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-10 border border-white/10"
          >
            <ul className="space-y-4 text-lg text-left max-w-2xl mx-auto">
              {[
                'Welche Ihrer Tools sind US-Cloud-abhängig?',
                'Welche DSGVO/NIS2-Risiken bestehen aktuell?',
                'Was würde eine Migration kosten?',
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-200">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.a
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            href="mailto:info@plessing-consulting.com?subject=Kostenlose%20Risikoanalyse%20EU%20Cloud%20Migration"
            className="inline-block rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 px-10 py-5 font-bold text-xl text-white shadow-[0_12px_35px_rgba(37,99,235,0.5)] hover:shadow-[0_14px_40px_rgba(37,99,235,0.7)] hover:from-blue-400 hover:to-cyan-300 active:scale-[0.98] transition mb-6"
          >
            Jetzt Termin vereinbaren
          </motion.a>

          <p className="text-slate-400 text-sm">
            Unverbindlich · Keine Verkaufsgespräche · Konkrete Handlungsempfehlungen
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/5 py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg font-semibold text-white mb-2">Plessing Consulting</p>
          <p className="text-slate-400 mb-4">Ihr Partner für europäische Cloud-Lösungen</p>
          <p className="text-sm text-slate-500">
            <Link href="/" className="hover:text-white transition">plessing-consulting.com</Link>
            {' | '}
            <a href="mailto:info@plessing-consulting.com" className="hover:text-white transition">info@plessing-consulting.com</a>
          </p>
        </div>
      </footer>
    </motion.main>
  );
}
