'use client';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../../components/navbar';
import Footers from '../../components/home/Footer';
import { Shield, AlertTriangle, CheckCircle, XCircle, ArrowRight, Download, Mail, Server, Cloud, Users, Eye, Lock } from 'lucide-react';

const categories = [
  {
    title: 'E-Mail & Kommunikation',
    icon: Mail,
    questions: [
      'Wir nutzen Microsoft 365 oder Google Workspace für E-Mails',
      'Wir nutzen Slack, Microsoft Teams oder Zoom für Team-Kommunikation',
      'Unsere E-Mails werden auf US-Servern gespeichert',
      'Wir haben keinen Vertrag zur Auftragsverarbeitung (AVV) mit unserem E-Mail-Provider',
    ],
  },
  {
    title: 'Cloud-Speicher & Dateien',
    icon: Cloud,
    questions: [
      'Wir nutzen OneDrive, Google Drive oder Dropbox für Firmendaten',
      'Kundendaten werden in US-Cloud-Speichern abgelegt',
      'Wir haben keine Kontrolle, wo unsere Backups physisch liegen',
      'Mitarbeiter nutzen private Cloud-Dienste für Firmendokumente',
    ],
  },
  {
    title: 'Hosting & Infrastruktur',
    icon: Server,
    questions: [
      'Unsere Website/App läuft auf AWS, Google Cloud oder Azure',
      'Wir wissen nicht, in welchen Ländern unsere Server stehen',
      'Wir haben keinen EU-only Hosting-Vertrag',
      'Unsere Datenbanken enthalten personenbezogene Daten von EU-Bürgern',
    ],
  },
  {
    title: 'Kunden & HR',
    icon: Users,
    questions: [
      'Wir nutzen US-CRM-Systeme (Salesforce, HubSpot, etc.)',
      'Unsere HR-Software speichert auf US-Servern',
      'Bewerberdaten werden über Tools mit US-Rechtsrahmen verarbeitet',
      'Wir haben keine Löschkonzepte für alte Mitarbeiter-/Kundendaten',
    ],
  },
  {
    title: 'Compliance & Sicherheit',
    icon: Lock,
    questions: [
      'Unser Datenschutzbeauftragter hat Bedenken geäußert',
      'Wir sind von der NIS2-Richtlinie betroffen (KRITIS, 50+ MA, 10M+ Umsatz)',
      'Wir hatten bereits DSGVO-Anfragen von Kunden/Behörden',
      'Unser IT-Dienstleister kann keine EU-only Garantie geben',
    ],
  },
  {
    title: 'Transparenz & Kontrolle',
    icon: Eye,
    questions: [
      'Wir wissen nicht genau, welche Drittanbieter Zugriff auf unsere Daten haben',
      'Wir können nicht nachvollziehen, wer wann auf welche Daten zugegriffen hat',
      'Wir haben keinen Plan für Cloud-Exit-Strategie',
      'Vendor Lock-In: Wechsel wäre technisch sehr aufwändig',
    ],
  },
];

const riskLevels = [
  { min: 0, max: 3, label: 'GERINGES RISIKO', emoji: '✅', color: '#22c55e', desc: 'Ihre Cloud-Infrastruktur scheint gut aufgestellt. Prüfen Sie dennoch einzelne Dienste auf NIS2-Konformität.' },
  { min: 4, max: 8, label: 'MITTLERES RISIKO', emoji: '⚠️', color: '#eab308', desc: 'Sie haben mehrere Schwachstellen. Eine Überprüfung durch einen DSGVO-Experten ist empfehlenswert.' },
  { min: 9, max: 15, label: 'HOHES RISIKO', emoji: '🔶', color: '#f97316', desc: 'Ihre aktuelle Cloud-Nutzung birgt erhebliche DSGVO- und NIS2-Risiken. Handeln Sie jetzt.' },
  { min: 16, max: 99, label: 'KRITISCHES RISIKO', emoji: '🔴', color: '#ef4444', desc: 'Sie sind massiv von US-Cloud abhängig. Kontaktieren Sie umgehend einen Spezialisten.' },
];

function getRiskLevel(score) {
  return riskLevels.find(l => score >= l.min && score <= l.max) || riskLevels[3];
}

function Gauge({ score, maxScore = 24 }) {
  const risk = getRiskLevel(score);
  const angle = Math.min(score / maxScore, 1) * 180;

  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 0 200 120" className="w-full max-w-[320px]">
        <defs>
          <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="33%" stopColor="#eab308" />
            <stop offset="66%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
        </defs>
        {/* Background arc */}
        <path
          d="M 20 110 A 80 80 0 0 1 180 110"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="16"
          strokeLinecap="round"
        />
        {/* Colored arc */}
        <path
          d="M 20 110 A 80 80 0 0 1 180 110"
          fill="none"
          stroke="url(#gaugeGrad)"
          strokeWidth="16"
          strokeLinecap="round"
          opacity="0.3"
        />
        {/* Tick marks */}
        {[0, 45, 90, 135, 180].map((a, i) => {
          const rad = (Math.PI * (180 - a)) / 180;
          const x1 = 100 + 72 * Math.cos(rad);
          const y1 = 110 - 72 * Math.sin(rad);
          const x2 = 100 + 80 * Math.cos(rad);
          const y2 = 110 - 80 * Math.sin(rad);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,0.3)" strokeWidth="2" />;
        })}
        {/* Needle */}
        <motion.g
          animate={{ rotate: angle - 90 }}
          transition={{ type: 'spring', stiffness: 60, damping: 15 }}
          style={{ transformOrigin: '100px 110px' }}
        >
          <line x1="100" y1="110" x2="100" y2="38" stroke={risk.color} strokeWidth="3" strokeLinecap="round" />
          <circle cx="100" cy="110" r="6" fill={risk.color} />
        </motion.g>
        {/* Center dot */}
        <circle cx="100" cy="110" r="3" fill="white" />
        {/* Labels */}
        <text x="18" y="118" fill="rgba(255,255,255,0.4)" fontSize="8" textAnchor="middle">0</text>
        <text x="182" y="118" fill="rgba(255,255,255,0.4)" fontSize="8" textAnchor="middle">24</text>
      </svg>
      <motion.div
        key={score}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center -mt-4"
      >
        <span className="text-5xl font-black" style={{ color: risk.color }}>{score}</span>
        <span className="text-slate-400 text-lg ml-1">/ 24</span>
      </motion.div>
    </div>
  );
}

export default function RisikoCheck() {
  const [checked, setChecked] = useState({});

  const score = useMemo(() => Object.values(checked).filter(Boolean).length, [checked]);
  const risk = getRiskLevel(score);

  const toggle = (catIdx, qIdx) => {
    const key = `${catIdx}-${qIdx}`;
    setChecked(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen text-gray-100"
    >
      <Navbar />

      {/* Hero */}
      <section className="relative w-full pt-32 pb-16 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(2,6,23,0.9)_90%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-400/20 text-red-300 text-sm font-medium mb-6"
          >
            <Shield className="w-4 h-4" />
            <span>Interaktiver DSGVO-Check</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50">
              Wie hoch ist Ihr
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-300">
              DSGVO-Risiko?
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Klicken Sie alle zutreffenden Aussagen an. Der Tacho zeigt Ihnen live, wie groß Ihr Handlungsbedarf ist.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative w-full py-12 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_360px] gap-12">
          {/* Questions */}
          <div className="space-y-8">
            {categories.map((cat, catIdx) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={catIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIdx * 0.05 }}
                  className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {cat.questions.map((q, qIdx) => {
                      const key = `${catIdx}-${qIdx}`;
                      const isChecked = !!checked[key];
                      return (
                        <motion.label
                          key={qIdx}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-colors ${
                            isChecked
                              ? 'bg-red-500/10 border border-red-400/20'
                              : 'bg-white/[0.02] border border-transparent hover:bg-white/[0.04]'
                          }`}
                        >
                          <div className="mt-0.5 flex-shrink-0">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => toggle(catIdx, qIdx)}
                              className="sr-only"
                            />
                            <div
                              className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                                isChecked
                                  ? 'bg-red-500 border-red-500'
                                  : 'border-slate-600 bg-transparent'
                              }`}
                            >
                              {isChecked && (
                                <motion.svg
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="w-3 h-3 text-white"
                                  viewBox="0 0 12 12"
                                >
                                  <path
                                    d="M2 6l3 3 5-5"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </motion.svg>
                              )}
                            </div>
                          </div>
                          <span className={`text-sm leading-relaxed ${isChecked ? 'text-red-200' : 'text-slate-300'}`}>
                            {q}
                          </span>
                        </motion.label>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Sticky Gauge Sidebar */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6"
            >
              <h3 className="text-center text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                Ihr Risiko-Score
              </h3>
              <Gauge score={score} />
              <AnimatePresence mode="wait">
                <motion.div
                  key={risk.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-6 text-center"
                >
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-3"
                    style={{ backgroundColor: risk.color + '18', color: risk.color, border: `1px solid ${risk.color}33` }}
                  >
                    <span>{risk.emoji}</span>
                    <span>{risk.label}</span>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">{risk.desc}</p>
                </motion.div>
              </AnimatePresence>

              {score > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-6 space-y-3"
                >
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 text-sm font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all"
                  >
                    Kostenlose Risikoanalyse buchen
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => alert('PDF-Download wird bald verfügbar sein!')}
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 text-sm font-bold text-slate-300 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    PDF-Checkliste herunterladen
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footers />
    </motion.main>
  );
}
