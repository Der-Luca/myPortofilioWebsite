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
      'Nutzen Sie Microsoft 365, Google Workspace oder einen ähnlichen Dienst?',
      'Verwenden Sie Slack, Teams oder Zoom für die Team-Kommunikation?',
      'Haben Sie einen DSGVO-Vertrag mit Ihrem E-Mail-Anbieter abgeschlossen?',
      'Können Sie garantieren, dass Ihre E-Mails nur in der EU verarbeitet werden?',
    ],
  },
  {
    title: 'Cloud-Speicher & Dateien',
    icon: Cloud,
    questions: [
      'Speichern Sie Firmendaten in OneDrive, Google Drive oder Dropbox?',
      'Liegen Kundendaten oder Verträge in Cloud-Diensten außerhalb der EU?',
      'Wissen Sie, wo Ihre täglichen Backups physisch gespeichert werden?',
      'Nutzen Mitarbeiter private Cloud-Apps für geschäftliche Dokumente?',
    ],
  },
  {
    title: 'Hosting & Infrastruktur',
    icon: Server,
    questions: [
      'Läuft Ihre Website oder Software auf AWS, Google Cloud oder Azure?',
      'Können Sie ausschließen, dass Ihre Daten auf US-Servern liegen?',
      'Haben Sie einen Vertrag, der die Datenspeicherung nur in der EU garantiert?',
      'Speichern Sie personenbezogene Daten (Namen, E-Mails, IPs) von Kunden?',
    ],
  },
  {
    title: 'Kunden & HR',
    icon: Users,
    questions: [
      'Nutzen Sie ein CRM-System wie Salesforce, HubSpot oder Pipedrive?',
      'Verwalten Sie Personalakten digital außerhalb Ihres eigenen Servers?',
      'Werden Bewerberdaten über externe Plattformen verarbeitet?',
      'Löschen Sie alte Kunden- und Mitarbeiterdaten regelmäßig und nachweisbar?',
    ],
  },
  {
    title: 'Compliance & Sicherheit',
    icon: Lock,
    questions: [
      'Hat Ihr Datenschutzbeauftragter Bedenken bezüglich Ihrer Cloud-Nutzung?',
      'Sind Sie NIS2-pflichtig? (KRITIS, 50+ Mitarbeiter oder 10M€+ Umsatz)',
      'Hatten Sie bereits Anfragen von Behörden oder Kunden zu Ihrem Datenschutz?',
      'Kann Ihr IT-Partner garantieren, dass Daten nur in der EU verarbeitet werden?',
    ],
  },
  {
    title: 'Transparenz & Kontrolle',
    icon: Eye,
    questions: [
      'Wissen Sie genau, welche externen Dienstleister Zugriff auf Ihre Daten haben?',
      'Können Sie jederzeit nachvollziehen, wer auf welche Daten zugreift?',
      'Haben Sie einen Notfallplan, falls Sie den Cloud-Anbieter wechseln müssen?',
      'Wäre ein Wechsel zu einem anderen Anbieter technisch sehr aufwändig für Sie?',
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
        <text x="182" y="118" fill="rgba(255,255,255,0.4)" fontSize="8" textAnchor="middle">{maxScore}</text>
      </svg>
      <motion.div
        key={score}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="text-center -mt-4"
      >
        <span className="text-5xl font-black" style={{ color: risk.color }}>{score}</span>
        <span className="text-slate-400 text-lg ml-1">/ {maxScore}</span>
      </motion.div>
    </div>
  );
}

export default function RisikoCheck() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  // Flatten all questions into a single array with metadata
  const allQuestions = useMemo(() => {
    const questions = [];
    categories.forEach((cat, catIdx) => {
      cat.questions.forEach((q, qIdx) => {
        questions.push({
          id: `${catIdx}-${qIdx}`,
          question: q,
          category: cat.title,
          icon: cat.icon,
        });
      });
    });
    return questions;
  }, []);

  const score = useMemo(() => Object.values(answers).filter(Boolean).length, [answers]);
  const risk = getRiskLevel(score);

  const handleAnswer = (value) => {
    setAnswers(prev => ({ ...prev, [allQuestions[currentStep].id]: value }));
  };

  const handleNext = () => {
    if (currentStep < allQuestions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  const currentQuestion = allQuestions[currentStep];
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : undefined;
  const progress = ((currentStep + 1) / allQuestions.length) * 100;

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
            Beantworten Sie {allQuestions.length} kurze Fragen zu Ihrer Cloud-Nutzung. Der Tacho zeigt Ihnen live, wie groß Ihr Handlungsbedarf ist.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative w-full py-12 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_360px] gap-12">
          {/* Question Wizard */}
          <div className="space-y-6">
            {!showResults ? (
              <>
                {/* Progress Bar */}
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-slate-400">Fortschritt</span>
                    <span className="text-sm font-bold text-white">
                      {currentStep + 1} / {allQuestions.length}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-white/[0.05] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-400"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Current Question */}
                <AnimatePresence mode="wait">
                  {currentQuestion && (
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8"
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                          {currentQuestion.icon && <currentQuestion.icon className="w-6 h-6 text-blue-400" />}
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                            {currentQuestion.category}
                          </p>
                          <h3 className="text-lg font-bold text-white">Frage {currentStep + 1}</h3>
                        </div>
                      </div>

                      <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-8">
                        {currentQuestion.question}
                      </p>

                      {/* Answer Buttons */}
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleAnswer(true)}
                          className={`px-8 py-6 rounded-xl text-lg font-bold transition-all ${
                            currentAnswer === true
                              ? 'bg-red-500/20 border-2 border-red-400 text-red-200 shadow-[0_0_30px_rgba(239,68,68,0.3)]'
                              : 'bg-white/[0.03] border-2 border-white/[0.08] text-slate-300 hover:bg-white/[0.06] hover:border-white/[0.15]'
                          }`}
                        >
                          <XCircle className={`w-6 h-6 mx-auto mb-2 ${currentAnswer === true ? 'text-red-400' : 'text-slate-400'}`} />
                          Ja, trifft zu
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleAnswer(false)}
                          className={`px-8 py-6 rounded-xl text-lg font-bold transition-all ${
                            currentAnswer === false
                              ? 'bg-green-500/20 border-2 border-green-400 text-green-200 shadow-[0_0_30px_rgba(34,197,94,0.3)]'
                              : 'bg-white/[0.03] border-2 border-white/[0.08] text-slate-300 hover:bg-white/[0.06] hover:border-white/[0.15]'
                          }`}
                        >
                          <CheckCircle className={`w-6 h-6 mx-auto mb-2 ${currentAnswer === false ? 'text-green-400' : 'text-slate-400'}`} />
                          Nein, trifft nicht zu
                        </motion.button>
                      </div>

                      {/* Navigation */}
                      <div className="flex items-center justify-between">
                        <button
                          onClick={handlePrevious}
                          disabled={currentStep === 0}
                          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                            currentStep === 0
                              ? 'bg-white/[0.02] text-slate-600 cursor-not-allowed'
                              : 'bg-white/[0.05] text-slate-300 hover:bg-white/[0.10] border border-white/[0.08]'
                          }`}
                        >
                          Zurück
                        </button>

                        <button
                          onClick={handleNext}
                          disabled={currentAnswer === undefined}
                          className={`px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${
                            currentAnswer === undefined
                              ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                              : 'bg-blue-600 text-white hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]'
                          }`}
                        >
                          {currentStep === allQuestions.length - 1 ? 'Ergebnis anzeigen' : 'Weiter'}
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              /* Results View */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8"
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">Ihre Analyse ist abgeschlossen</h2>
                  <p className="text-slate-400 text-lg">
                    Sie haben {score} von {allQuestions.length} Risikofaktoren identifiziert.
                  </p>
                </div>

                <div className="mb-8">
                  <Gauge score={score} maxScore={allQuestions.length} />
                </div>

                <div
                  className="text-center p-6 rounded-xl mb-6"
                  style={{ backgroundColor: risk.color + '18', border: `2px solid ${risk.color}33` }}
                >
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <span className="text-4xl">{risk.emoji}</span>
                    <h3 className="text-2xl font-bold" style={{ color: risk.color }}>
                      {risk.label}
                    </h3>
                  </div>
                  <p className="text-lg text-slate-300 leading-relaxed">{risk.desc}</p>
                </div>

                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 text-base font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all"
                  >
                    Kostenlose Risikoanalyse buchen
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <button
                    onClick={handleRestart}
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 text-base font-bold text-slate-300 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all"
                  >
                    Nochmal starten
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Sticky Gauge Sidebar */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6"
            >
              <h3 className="text-center text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                {showResults ? 'Ihr finales Ergebnis' : 'Aktueller Stand'}
              </h3>
              <Gauge score={score} maxScore={allQuestions.length} />
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

              {!showResults && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-6 p-4 bg-white/[0.02] rounded-xl border border-white/[0.05]"
                >
                  <p className="text-xs text-slate-400 text-center">
                    Beantworten Sie alle Fragen, um Ihr persönliches Risikoprofil zu erhalten.
                  </p>
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
