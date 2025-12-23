import { motion } from "framer-motion";
import { Bot, Workflow, Code2, RefreshCw } from "lucide-react";
// Pass sicher, dass der Pfad zu deiner WaveMesh Komponente stimmt:
import WaveMesh from "./WaveMesh"; 

export default function Services() {
 const services = [
  {
    icon: <Workflow className="w-10 h-10 text-emerald-400" />,
    title: "Prozess-Automatisierung",
    desc: "Schluss mit Excel-Chaos und manuellem Daten-Schaufeln. Wir verbinden Ihre Systeme (ERP, Shop, Mail), damit Daten automatisch fließen.",
    bullets: ["Rechnungsstellung automatisieren", "Daten-Synchronisation", "Fehleranfällige Handarbeit eliminieren"],
  },
  {
    icon: <Bot className="w-10 h-10 text-purple-400" />,
    title: "KI & AI-Lösungen",
    desc: "Nutzen Sie künstliche Intelligenz nicht nur zum Spielen. Wir integrieren KI, die Dokumente versteht, Support-Anfragen smarter sortiert und Teams spürbar entlastet.",
    bullets: [
      "Eigene ChatGPT-Lösungen (RAG)",
      "Dokumenten-Analyse",
      "Intelligente Ticket-Systeme (Klassifizierung, Routing, Entwürfe)",
      "Intelligente Chatbots",
    ],
  },
  {
    icon: <Code2 className="w-10 h-10 text-sky-400" />,
    title: "Individuelle Software / CRMs",
    desc: "Standard-Software passt nicht? Wir bauen maßgeschneiderte Dashboards, Portale und CRMs, die exakt Ihren Workflow abbilden.",
    bullets: ["Interne Mitarbeiter-Tools", "Kundenportale", "Maßgeschneiderte CRMs"],
  },
  {
    icon: <RefreshCw className="w-10 h-10 text-orange-400" />,
    title: "Legacy Modernisierung",
    desc: "Sie haben alte Software, die langsam und unsicher ist? Wir modernisieren bestehende Systeme, machen sie schneller, sicherer und wartbar für die Zukunft.",
    bullets: ["Performance-Optimierung", "Sicherheits-Updates", "Modernisierung & Migration"],
  },
];


  // Animation Config
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  };

  return (
    <section className="relative w-full py-24 px-6 overflow-hidden bg-slate-950">
      
      {/* 3D WAVE MESH HINTERGRUND */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none mix-blend-screen">
        <WaveMesh /> 
      </div>
      
      {/* Optionaler zusätzlicher Gradient für bessere Lesbarkeit */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-sky-500"
          >
            Unsere Leistungen
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Wir lösen komplexe Probleme mit moderner Technologie. <br/>
            Verständlich, effizient und skalierbar.
          </motion.p>
        </div>

        {/* GRID */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden hover:border-white/20 transition-colors"
            >
              {/* Hover Glow Effect inside Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col items-start">
                <div className="p-4 rounded-2xl bg-slate-900/50 border border-white/5 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {s.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">
                  {s.title}
                </h3>
                
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {s.desc}
                </p>
                
                <ul className="space-y-3 w-full">
                  {s.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mr-3 shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}