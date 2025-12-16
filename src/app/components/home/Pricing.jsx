"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  TrendingUp,
  Building,
  Check,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "2.000 – 5.000 €",
      icon: <Rocket className="w-6 h-6" />,
      desc: "Für kleinere Firmen oder erste digitale Projekte. Schnelle Umsetzung.",
      features: [
        "Landingpage oder kleines Tool",
        "Einfache Automationen",
        "Kickoff + technisches Konzept",
        "1 Woche Umsetzung",
      ],
      popular: false,
    },
    {
      name: "Growth",
      price: "5.000 – 10.000 €",
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      desc: "Ideal für wachsende Unternehmen. Skalierbare Lösungen & Integrationen.",
      features: [
        "Website + CRM/Automation",
        "Bis zu 5 Integrationen (Stripe, HubSpot)",
        "KI-Features (RAG, Chatbots)",
        "Monitoring + Dokumentation",
        "3–6 Wochen Umsetzung",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "ab 15.000 €",
      icon: <Building className="w-6 h-6" />,
      desc: "Für komplexe Systeme. End-to-End Development inkl. Backend & Datenbank.",
      features: [
        "Komplette Plattform / Dashboard",
        "Backend + Datenbank + Auth",
        "AI Pipelines & Automationen",
        "Langfristige Betreuung",
      ],
      popular: false,
    },
  ];

  // Framer Motion Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50 },
    },
  };

  return (
    <section
      className="
        relative w-full min-h-screen py-24 px-6 
        overflow-hidden
        flex flex-col items-center justify-center
      "
    >
      {/* Hintergrundbild wie im Hero (CSS backgroundImage) */}
      <div className="absolute inset-0 -z-20">
        <div
          className="w-full h-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('/Gemini_Generated_Image_wa5lwmwa5lwmwa5l.png')",
          }}
        />
      </div>

      {/* Overlays für Lesbarkeit + Vignette */}
      <div className="absolute inset-0 -z-10 bg-slate-950/75" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.9)_100%)]" />

      {/* HEADER */}
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
          className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight"
        >
          Preise & <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Pakete
          </span>
        </motion.h2>

        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          Wähle das passende Fundament für dein Projekt.
          <br className="hidden md:block" />
          Keine versteckten Kosten, voller Quellcode-Zugriff.
        </p>
      </div>

      {/* CARDS GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 grid lg:grid-cols-3 gap-8 max-w-7xl w-full items-stretch"
      >
        {plans.map((p) => (
          <motion.div
            key={p.name}
            variants={item}
            whileHover={{ y: -10 }}
            className={`
              relative flex flex-col p-8 rounded-[2rem] border transition-all duration-300 group
              ${
                p.popular
                  ? "bg-slate-900/60 border-blue-500/50 shadow-[0_0_50px_-10px_rgba(59,130,246,0.3)] scale-100 lg:scale-105 z-10"
                  : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 shadow-xl"
              }
              backdrop-blur-xl
            `}
          >
            {/* Badge für beliebtestes Paket */}
            {p.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg border border-white/10 tracking-wider">
                EMPFEHLUNG
              </div>
            )}

            {/* Header der Card */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className={`p-3 rounded-2xl ${
                  p.popular
                    ? "bg-blue-600 text-white"
                    : "bg-white/5 text-blue-400"
                }`}
              >
                {p.icon}
              </div>
              <h3 className="text-2xl font-bold text-white">{p.name}</h3>
            </div>

            <div className="mb-2">
              <span className="text-3xl font-bold text-white tracking-tight">
                {p.price}
              </span>
            </div>

            <p className="text-slate-400 text-sm mb-8 min-h-[40px]">
              {p.desc}
            </p>

            <div
              className={`h-px w-full mb-8 ${
                p.popular ? "bg-blue-500/30" : "bg-white/10"
              }`}
            />

            {/* Features */}
            <ul className="space-y-4 mb-8 flex-1">
              {p.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-slate-300 text-sm"
                >
                  <div
                    className={`mt-0.5 p-0.5 rounded-full ${
                      p.popular
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-white/10 text-slate-400"
                    }`}
                  >
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <a
              href="/contact"
              className={`
                w-full py-4 rounded-xl font-bold text-center transition-all flex items-center justify-center gap-2
                ${
                  p.popular
                    ? "bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-900/20"
                    : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                }
              `}
            >
              Jetzt starten
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
