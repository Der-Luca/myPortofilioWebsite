"use client";
import { motion } from "framer-motion";
import { ExternalLink, Bot, Globe, ArrowRight, Layers, Cpu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function SelectedWork() {
  const projects = [
    {
      title: "Immobot",
      url: "https://immobot.pro",
      category: "Automation SaaS",
      description: "Das ultimative Tool für Immobilien-Profis. Immobot zentralisiert und automatisiert Anfragen von über 40 Plattformen gleichzeitig.",
      stats: ["40+ Portale", "Auto-Qualifizierung", "AI-Powered"],
      tech: ["Python", "React", "AI Integration", "Automation"],
      icon: <Bot className="w-6 h-6 text-emerald-400" />,
      color: "from-emerald-500 to-teal-500", // Gradient für den Placeholder
      // Falls du ein Bild hast: image: "/immobot-screen.png"
    },
    {
      title: "Peaches",
      url: "https://peaches-benefits.com",
      category: "Multi-Language CRM",
      description: "Eine moderne HR-Plattform für Employee Benefits. Mehrsprachig, intuitiv und darauf ausgelegt, komplexe HR-Prozesse radikal zu vereinfachen.",
      stats: ["Multi-Language", "Global HR", "User-Centric"],
      tech: ["Next.js", "PostgreSQL", "Tailwind", "CRM Logic"],
      icon: <Globe className="w-6 h-6 text-pink-400" />,
      color: "from-pink-500 to-rose-500",
      // Falls du ein Bild hast: image: "/peaches-screen.png"
    },
  ];

  return (
    <section className="relative w-full py-32 px-6 bg-slate-950 overflow-hidden">
      
      {/* HINTERGRUND EFFEKTE */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Großes Glow hinter den Projekten */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-blue-500" />
            <span className="text-blue-400 font-mono text-sm tracking-wider uppercase">
              Selected Work
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white max-w-3xl leading-tight"
          >
            Wir bauen Produkte, die <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-300 to-slate-500">
              Märkte verändern.
            </span>
          </motion.h2>
        </div>

        {/* PROJEKT LISTE */}
        <div className="flex flex-col gap-20 md:gap-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 lg:gap-20 items-center`}
            >
              
              {/* 1. TEXT BEREICH */}
              <div className="flex-1 w-full text-left">
                {/* Kategorie Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium mb-6">
                  {project.icon}
                  {project.category}
                </div>

                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  {project.title}
                </h3>
                
                <p className="text-lg text-slate-400 leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-sm text-slate-500 border border-white/5 rounded bg-white/[0.02]">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Stats / Features Grid */}
                <div className="grid grid-cols-3 gap-4 mb-10 border-t border-white/10 pt-6">
                  {project.stats.map((stat, i) => (
                    <div key={i}>
                      <div className="text-white font-semibold text-sm md:text-base">{stat}</div>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <Link 
                  href={project.url}
                  target="_blank"
                  className="group inline-flex items-center gap-2 text-white font-bold border-b border-white/20 pb-1 hover:border-white transition-colors"
                >
                  Live Project ansehen
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                </Link>
              </div>

              {/* 2. VISUAL BEREICH (Mockup Placeholder) */}
              <div className="flex-1 w-full">
                <Link href={project.url} target="_blank" className="block group cursor-pointer perspective-1000">
                  <motion.div
                    whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? 2 : -2, rotateX: 2 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="
                      relative aspect-[4/3] rounded-3xl overflow-hidden 
                      border border-white/10 bg-slate-900 
                      shadow-[0_20px_50px_rgba(0,0,0,0.5)]
                    "
                  >
                    {/* HINTERGRUND GRADIENT (Falls kein Screenshot da ist) */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                    
                    {/* Abstraktes UI Mockup (Nur Deko) */}
                    <div className="absolute inset-4 md:inset-8 bg-slate-950/80 backdrop-blur-xl rounded-xl border border-white/10 p-4 md:p-6 flex flex-col">
                      {/* Fake Header */}
                      <div className="flex items-center gap-2 mb-4 md:mb-8 border-b border-white/5 pb-4">
                        <div className="flex gap-1.5">
                           <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                           <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                           <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                        </div>
                        <div className="ml-4 h-2 w-32 bg-white/10 rounded-full" />
                      </div>
                      
                      {/* Fake Content Area */}
                      <div className="flex-1 flex gap-4 md:gap-6">
                         <div className="w-1/4 h-full bg-white/5 rounded-lg animate-pulse" />
                         <div className="flex-1 space-y-3 md:space-y-4">
                            <div className="w-3/4 h-8 md:h-12 bg-gradient-to-r from-white/10 to-transparent rounded-lg" />
                            <div className="w-full h-24 md:h-32 bg-white/5 rounded-lg border border-white/5" />
                            <div className="flex gap-3">
                               <div className="w-1/2 h-20 bg-white/5 rounded-lg" />
                               <div className="w-1/2 h-20 bg-white/5 rounded-lg" />
                            </div>
                         </div>
                      </div>

                      {/* Hover Overlay Button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40 backdrop-blur-[2px]">
                        <span className="px-6 py-3 bg-white text-black font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          Visit Website
                        </span>
                      </div>
                    </div>

                  </motion.div>
                </Link>
              </div>

            </motion.div>
          ))}
        </div>

        {/* "MORE COMING" CARD (Damit es nicht nach "nur 2" aussieht) */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="mt-32 p-8 md:p-12 rounded-3xl border border-dashed border-white/10 bg-white/[0.02] text-center"
        >
          <div className="inline-flex p-3 rounded-full bg-slate-800 mb-4 text-slate-400">
            <Cpu size={24} />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">In Entwicklung</h3>
          <p className="text-slate-400 max-w-md mx-auto">
            Wir arbeiten ständig an neuen internen Tools und Kundenprojekten. 
            Das nächste Big Thing ist bereits im "Stealth Mode".
          </p>
        </motion.div>

      </div>
    </section>
  );
}