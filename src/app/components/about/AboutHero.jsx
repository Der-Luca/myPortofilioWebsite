'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: { duration: 0.7, ease: "backOut" } 
  },
};

export default function AboutHero() {
  const chips = [
    'Klare Kommunikation',
    'Strukturierte Beratung',
    'Technische Entscheidungsfindung',
    'Langfristige Lösungen',
    'Verlässliche Zusammenarbeit',
  ];

  return (
    <section className="relative px-6 pt-32 pb-20 md:pt-40 md:pb-32 max-w-7xl mx-auto overflow-hidden">
      
      {/* Hintergrund-Atmosphäre */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* LINKER BEREICH: TEXT & CTA */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-8 text-center lg:text-left order-2 lg:order-1"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Verfügbar für neue Projekte
            </div>
          </motion.div>

          <motion.h1 
            variants={itemVariants} 
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white"
          >
            Software Engineering <br />
            mit <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
              klarer Beratung
            </span>.
          </motion.h1>

          <motion.p 
            variants={itemVariants} 
            className="text-lg text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            Ich unterstütze Unternehmen dabei, technische Entscheidungen sicher zu treffen
            und Softwareprojekte strukturiert umzusetzen.
            Mit klarer Kommunikation, realistischen Einschätzungen und einem Fokus
            auf Lösungen, die langfristig funktionieren.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-2">
            {chips.map((c) => (
              <span
                key={c}
                className="inline-flex items-center rounded-md border border-gray-800 bg-gray-900/80 px-3 py-1.5 text-xs font-mono text-gray-300"
              >
                {c}
              </span>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
            <a
              href="/contact"
              className="w-full sm:w-auto text-center rounded-xl bg-blue-600 px-8 py-4 text-base font-bold text-white transition-all hover:bg-blue-500 hover:scale-[1.02] shadow-lg shadow-blue-500/25"
            >
              Unverbindlichen Kurzcall anfragen
            </a>
            <div className="text-sm text-gray-500 flex items-center gap-2">
              <span className="hidden sm:inline-block h-px w-8 bg-gray-800"></span>
              <span>Beratung · Umsetzung · Begleitung</span>
            </div>
          </motion.div>
        </motion.div>

        {/* RECHTER BEREICH: BILD INSZENIERUNG */}
        <motion.div 
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="relative order-1 lg:order-2 flex justify-center"
        >
          {/* Hintergrund Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-tr from-blue-500 to-purple-500 blur-[60px] opacity-40 rounded-full" />
          
          {/* Tech-Ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-blue-500/20 md:w-[400px] md:h-[400px]" />
          
          {/* Bild */}
          <div className="relative h-72 w-72 md:h-80 md:w-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-gray-800 p-[3px]">
              <div className="h-full w-full rounded-full bg-gray-950 p-1">
                <img
                  src="/profile.jpg"
                  alt="Luca-Samuel Pleßing"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-4 top-10 flex items-center gap-2 rounded-xl border border-white/10 bg-gray-900/80 p-3 backdrop-blur-md shadow-xl"
            >
              <div className="h-3 w-3 rounded-full bg-emerald-500" />
              <span className="text-xs font-bold text-white">Klare Kommunikation</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -left-6 bottom-10 flex items-center gap-2 rounded-xl border border-white/10 bg-gray-900/80 p-3 backdrop-blur-md shadow-xl"
            >
              <span className="text-xl">🤝</span>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 uppercase tracking-wider">
                  Zusammenarbeit
                </span>
                <span className="text-xs font-bold text-white">
                  Verlässlich & transparent
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
