'use client';
import { motion } from 'framer-motion';
// Falls du fadeUp nicht hast, hier eine einfache Definition, sonst importieren:
import { fadeUp } from './animations';

export default function Partners() {
  return (
    <section className="px-6 py-24 max-w-5xl mx-auto">
      {/* Überschrift im gleichen Stil wie Skills */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-12"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Strategische <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Partnerschaften</span>
        </h3>
        <p className="text-gray-400">
          Gemeinsam stärker für Enterprise-Anforderungen.
        </p>
      </motion.div>

      <motion.a
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        whileHover={{ scale: 1.01 }}
        viewport={{ once: true }}
        href="https://aiwrapps.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block rounded-3xl border border-white/10 bg-gray-900/40 p-1 overflow-hidden transition-all duration-500 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-900/20"
      >
        {/* Hintergründe & Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        
        {/* Innerer Content Container */}
        <div className="relative flex flex-col md:flex-row items-start gap-8 rounded-[22px] bg-gray-950/50 p-8 backdrop-blur-xl transition-colors group-hover:bg-gray-950/30">
          
          {/* Logo Box - Edler Glaskasten */}
          <div className="flex-shrink-0 relative">
            <div className="flex h-32 w-32 md:h-40 md:w-40 items-center justify-center rounded-2xl border border-white/5 bg-white/5 p-4 shadow-inner backdrop-blur-sm transition-transform duration-500 group-hover:scale-105 group-hover:bg-white/10 group-hover:border-white/10">
              <img
                src="https://aiwrapps.com/images/logo-aiwrapps.png"
                alt="AIRAPPS Logo"
                className="max-h-full max-w-full object-contain drop-shadow-xl"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 pt-2">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-200 transition-colors">
                AIRAPPS
              </h4>
              
              {/* Animated Arrow Icon */}
              <div className="rounded-full border border-white/10 bg-white/5 p-2 text-gray-400 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-400">
                <svg 
                  className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" 
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              Für größere oder komplexere Projekte arbeite ich in enger Synergie mit 
              <span className="text-blue-400 font-semibold"> AIRAPPS</span> – einem eingespielten Team aus erfahrenen Senior-Entwicklern.
            </p>

            {/* Feature List / Badges */}
            <div className="flex flex-wrap gap-2">
              {[
                'Skalierbare Plattformen', 
                'Backend-Architekturen', 
                'Cloud & DevOps'
              ].map((tag) => (
                <span key={tag} className="inline-flex items-center rounded-md bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20">
                  {tag}
                </span>
              ))}
            </div>
            
            <p className="mt-6 text-sm text-gray-500 border-t border-white/5 pt-4">
              Garantiert klare Prozesse, hohe Code-Qualität und einen stabilen Betrieb auch bei Enterprise-Volumen.
            </p>
          </div>
        </div>
      </motion.a>
    </section>
  );
}