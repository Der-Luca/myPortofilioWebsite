import { motion } from "framer-motion";
import { Lightbulb, Gauge, ShieldCheck, Headphones } from "lucide-react";

const items = [
  {
    icon: <Gauge className="w-8 h-8 text-sky-400" />,
    title: "Schnelle Ergebnisse",
    text: "Klare Schritte von der Idee bis zur fertigen Lösung – ohne unnötige Umwege.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-sky-400" />,
    title: "Spürbarer Mehrwert",
    text: "Weniger manuelle Arbeit, bessere Abläufe und messbare Verbesserungen im Alltag.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-sky-400" />,
    title: "Zuverlässig & datensicher",
    text: "Stabile Systeme, volle Kontrolle über Daten und saubere Umsetzung nach EU-Standards.",
  },
  {
    icon: <Headphones className="w-8 h-8 text-sky-400" />,
    title: "Persönliche Betreuung",
    text: "Direkter Ansprechpartner, verständliche Kommunikation und langfristige Begleitung.",
  },
];


// Animation für den Container (steuert das "Nacheinander")
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Verzögerung zwischen den einzelnen Karten
    },
  },
};

// Animation für die einzelne Karte (von rechts nach links)
const cardVariants = {
  hidden: { 
    opacity: 0, 
    x: 100, // Startet 100px weiter rechts
    scale: 0.9 
  },
  visible: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: { 
      type: "spring", // Federt leicht
      stiffness: 100,
      damping: 10
    } 
  },
};

export default function ValuePropsMotion() {
  return (
    <section className="relative w-full min-h-screen px-6 py-24 flex flex-col items-center justify-center bg-slate-950 overflow-hidden">
      
      {/* Hintergrund Glow (optional für Ambiente) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* TITEL */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center mb-16 max-w-2xl"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-sky-400 drop-shadow-lg">
          Warum Plessing Consulting?
        </h2>
        <p className="mt-4 text-slate-400 text-lg">
          Ergebnisse, die zählen. Keine leeren Versprechungen.
        </p>
      </motion.div>

      {/* GRID CONTAINER */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Startet, wenn 20% sichtbar sind
      >
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              boxShadow: "0px 10px 30px rgba(56, 189, 248, 0.2)", // Sky-blue Glow
              borderColor: "rgba(56, 189, 248, 0.5)"
            }}
            className="
              flex flex-col items-start
              rounded-3xl p-8
              bg-white/5 backdrop-blur-md 
              border border-white/10
              transition-colors duration-300
              group cursor-default
            "
          >
            <div className="p-3 bg-white/5 rounded-2xl border border-white/5 group-hover:bg-sky-500/20 group-hover:border-sky-500/30 transition-colors duration-300">
              {item.icon}
            </div>
            
            <h3 className="mt-6 text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
              {item.title}
            </h3>
            
            <p className="mt-3 text-slate-400 leading-relaxed group-hover:text-slate-200 transition-colors">
              {item.text}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}