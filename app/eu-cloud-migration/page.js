'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../components/navbar';
import Footers from '../components/home/Footer';
import { Shield, AlertTriangle, CheckCircle, ArrowRight, Cloud, Server, MessageSquare, GitBranch, Mail, Quote, Check, Sparkles } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 50, damping: 20 },
  },
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
    name: 'Starter', price: '2.000 – 5.000 €', featured: false,
    items: ['Kleine Teams (bis 10 Nutzer)', 'E-Mail + Dokumente migrieren', '2-4 Wochen Projektlaufzeit'],
  },
  {
    name: 'Business', price: '5.000 – 10.000 €', featured: true,
    items: ['Mittelgroße Teams (10-50 Nutzer)', 'Komplette Kollaborations-Suite', '6-8 Wochen Projektlaufzeit'],
  },
  {
    name: 'Enterprise', price: 'ab 15.000 €', featured: false,
    items: ['Große Organisationen (50+ Nutzer)', 'Full-Stack Migration inkl. Infrastruktur', '10-12 Wochen Projektlaufzeit', 'Individuelles NIS2-Audit inklusive'],
  },
];

export default function EUCloudMigration() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen text-gray-100"
    >
      <Navbar />

      {/* Hero */}
      <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-950" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(2,6,23,0.9)_90%)]" />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

        <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center py-32">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-sm font-medium mb-6 backdrop-blur-md"
          >
            <Shield className="w-4 h-4" />
            <span>DSGVO-konform · NIS2-ready</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50">
              Raus aus der US-Cloud.
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Rein in Datensouveränität.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10"
          >
            Wir migrieren Ihr Unternehmen in 90 Tagen von Microsoft 365, AWS &amp; Co. zu DSGVO-konformen, europäischen Alternativen. Keine US-Datenzugriffe. Keine NIS2-Risiken. Keine Kompromisse.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all duration-300 transform hover:-translate-y-1"
            >
              Kostenlose Risikoanalyse buchen
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="#process"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-200 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              So funktioniert&apos;s
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6"
          >
            <Link
              href="/eu-cloud-migration/risiko-check"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-orange-200 bg-orange-500/10 border border-orange-400/20 rounded-full hover:bg-orange-500/20 hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] transition-all duration-300"
            >
              <AlertTriangle className="w-4 h-4" />
              Jetzt DSGVO-Risiko-Check machen →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative w-full py-24 px-6 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.9)_100%)]" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-400/20 text-red-300 text-sm font-medium mb-6 backdrop-blur-md"
            >
              <AlertTriangle className="w-4 h-4" />
              <span>Risikofaktoren</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-white mb-6"
            >
              US-Cloud: Das Risiko wächst{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-300">
                jeden Tag
              </span>
            </motion.h2>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-5 mb-12"
          >
            {risks.map((r, i) => (
              <motion.div
                key={r.title}
                variants={item}
                className={`relative flex flex-col p-6 rounded-[2rem] border border-red-500/20 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-red-500/40 transition-all duration-300 ${i === 4 ? 'md:col-span-2 max-w-xl mx-auto w-full' : ''}`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-red-500/10 text-red-400 flex-shrink-0">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{r.title}</h3>
                    <p className="text-slate-400 text-sm">{r.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group max-w-3xl mx-auto"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-20" />
            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl text-center">
              <p className="text-slate-300 italic text-lg leading-relaxed">
                &quot;Sie sind nicht allein: 73% der deutschen Unternehmen sind besorgt über US-Datenzugriffe, aber nur 12% haben eine Exit-Strategie.&quot;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative w-full py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 text-sm font-medium mb-6 backdrop-blur-md"
            >
              <CheckCircle className="w-4 h-4" />
              <span>EU-Alternativen</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-white mb-6"
            >
              Migration zu{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-300">
                europäischen Alternativen
              </span>
            </motion.h2>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-5 mb-12"
          >
            {solutions.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  variants={item}
                  className={`relative flex flex-col p-6 rounded-[2rem] border border-emerald-500/20 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-emerald-500/40 transition-all duration-300 ${i === 4 ? 'md:col-span-2 max-w-xl mx-auto w-full' : ''}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{s.title}</h3>
                      <p className="text-slate-400 text-sm">{s.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex flex-wrap items-center justify-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-sm text-slate-300">
              {['100% DSGVO-konform', 'NIS2-ready', 'Made & Hosted in Europe'].map((label) => (
                <span key={label} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  {label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="relative w-full py-24 px-6 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.9)_100%)]" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-sm font-medium mb-6 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4" />
              <span>In 4 Schritten</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-white"
            >
              Unser{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Prozess
              </span>
            </motion.h2>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {steps.map((step) => (
              <motion.div
                key={step.num}
                variants={item}
                className="relative flex gap-6 group"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl z-10 shadow-lg shadow-blue-900/20 group-hover:bg-blue-500 transition-colors">
                  {step.num}
                </div>
                <div className="flex-grow p-6 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full">{step.time}</span>
                  </div>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    {step.items.map((stepItem) => (
                      <li key={stepItem} className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>{stepItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative w-full py-24 px-6 overflow-hidden bg-slate-950">
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-white"
            >
              Erfolgreiche{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Projekte
              </span>
            </motion.h2>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 mb-12"
          >
            <motion.div
              variants={item}
              className="p-8 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-blue-500/30 transition-all"
            >
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-3">Immobot</h3>
              <p className="text-slate-400 leading-relaxed">
                Automatisierung über 40+ Immobilienportale → Vollständige EU-Hosting-Infrastruktur, 100% DSGVO-konform
              </p>
            </motion.div>

            <motion.div
              variants={item}
              className="p-8 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 hover:border-blue-500/30 transition-all"
            >
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-3">Peaches HR-Platform</h3>
              <p className="text-slate-400 leading-relaxed">
                Multi-Language CRM → Migration von US-Cloud zu Hetzner, 60% Kostenersparnis
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group max-w-4xl mx-auto"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />
            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl">
              <div className="flex items-start gap-4">
                <Quote className="w-10 h-10 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-lg text-slate-200 italic mb-4 leading-relaxed">
                    &quot;Plessing Consulting hat uns in 8 Wochen von AWS zu Hetzner migriert. Resultat: Gleiche Performance, halbe Kosten, deutsches Rechtsgebiet.&quot;
                  </p>
                  <p className="text-slate-500 font-semibold">– Zufriedener Kunde</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative w-full min-h-screen py-24 px-6 overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0 -z-20 bg-slate-950" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.9)_100%)]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-sm font-medium mb-6 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4" />
            <span>Transparent & Fair</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            Transparente{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Preise
            </span>
          </motion.h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Wählen Sie das passende Paket für Ihr Unternehmen.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="relative z-10 grid lg:grid-cols-3 gap-8 max-w-7xl w-full items-stretch"
        >
          {pricing.map((p) => (
            <motion.div
              key={p.name}
              variants={item}
              whileHover={{ y: -10 }}
              className={`
                relative flex flex-col p-8 rounded-[2rem] border transition-all duration-300 group
                ${
                  p.featured
                    ? 'bg-slate-900/60 border-blue-500/50 shadow-[0_0_50px_-10px_rgba(59,130,246,0.3)] scale-100 lg:scale-105 z-10'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 shadow-xl'
                }
                backdrop-blur-xl
              `}
            >
              {p.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg border border-white/10 tracking-wider">
                  EMPFEHLUNG
                </div>
              )}

              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-2xl ${p.featured ? 'bg-blue-600 text-white' : 'bg-white/5 text-blue-400'}`}>
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">{p.name}</h3>
              </div>

              <div className="mb-2">
                <span className="text-3xl font-bold text-white tracking-tight">{p.price}</span>
              </div>

              <div className={`h-px w-full my-6 ${p.featured ? 'bg-blue-500/30' : 'bg-white/10'}`} />

              <ul className="space-y-4 mb-8 flex-1">
                {p.items.map((pItem) => (
                  <li key={pItem} className="flex items-start gap-3 text-slate-300 text-sm">
                    <div className={`mt-0.5 p-0.5 rounded-full ${p.featured ? 'bg-blue-500/20 text-blue-400' : 'bg-white/10 text-slate-400'}`}>
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </div>
                    <span>{pItem}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`
                  w-full py-4 rounded-xl font-bold text-center transition-all flex items-center justify-center gap-2
                  ${
                    p.featured
                      ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-900/20'
                      : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                  }
                `}
              >
                Jetzt starten
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 mt-12 max-w-4xl w-full"
        >
          <div className="p-6 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl">
            <p className="text-center text-white font-semibold mb-4 text-lg">Alle Pakete inklusive:</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-300">
              {['Risikoanalyse & Compliance-Check', 'Projektmanagement', 'Schulungen für Ihr Team', '30 Tage Post-Launch Support'].map((incl) => (
                <span key={incl} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  {incl}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="relative w-full py-24 px-6 overflow-hidden bg-slate-950">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6"
          >
            Kostenlose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Risikoanalyse
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-slate-300 mb-8"
          >
            Wir prüfen in 30 Minuten:
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group max-w-2xl mx-auto mb-10"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-20" />
            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl">
              <ul className="space-y-4 text-lg text-left">
                {[
                  'Welche Ihrer Tools sind US-Cloud-abhängig?',
                  'Welche DSGVO/NIS2-Risiken bestehen aktuell?',
                  'Was würde eine Migration kosten?',
                ].map((ctaItem) => (
                  <li key={ctaItem} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-200">{ctaItem}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all duration-300 transform hover:-translate-y-1"
            >
              Jetzt Termin vereinbaren
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>

          <p className="text-slate-500 text-sm mt-6">
            Unverbindlich · Keine Verkaufsgespräche · Konkrete Handlungsempfehlungen
          </p>
        </div>
      </section>

      <Footers />
    </motion.main>
  );
}
