'use client';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Layers } from 'lucide-react';
// Falls fadeUp fehlt:
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function AboutCTA() {
  return (
    <section className="px-6 pb-24 max-w-5xl mx-auto">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl border border-white/10 bg-gray-900/40 px-6 py-12 md:px-12 md:py-16 text-center backdrop-blur-xl shadow-2xl shadow-blue-900/10 group"
      >
        {/* 1. Hintergrund-Effekte */}
        {/* Glow Spot */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          
          {/* 2. Kleiner "Status" Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Jetzt Slots für Q1/Q2 sichern
          </div>

          {/* 3. Headline & Text */}
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Lass uns über deinen <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Use-Case sprechen.</span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Kein Sales-Skript, sondern 20–30 Minuten technischer Deep-Dive. 
            Wir klären Ziele, identifizieren Quick-Wins und prüfen die Machbarkeit.
          </p>

          {/* 4. Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            
            {/* Primary Button (Kontakt) */}
            <a 
              href="/contact" 
              className="relative w-full sm:w-auto group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-blue-500 hover:scale-[1.02] shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40"
            >
              <Calendar className="w-5 h-5" />
              <span>Erstgespräch vereinbaren</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Secondary Button (Projekte) */}
            <a 
              href="/#selected-work" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-gray-300 transition-all hover:bg-white/10 hover:text-white hover:border-white/20"
            >
              <Layers className="w-5 h-5 text-gray-500 group-hover:text-white" />
              <span>Referenzen ansehen</span>
            </a>
          </div>

          <p className="mt-8 text-xs text-gray-500">
            Antwortzeit in der Regel &lt; 24 Stunden.
          </p>
        </div>
      </motion.div>
    </section>
  );
}