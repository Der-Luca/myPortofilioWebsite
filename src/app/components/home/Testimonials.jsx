"use client";
import { motion } from "framer-motion";
import { Quote, Star, User } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      company: "Immobot",
      person: "Alexander P.",
      role: "Founder & CEO",
      text: "Unsere Anfragen über 40 Portale zu managen war Hölle. Plessing Consulting hat eine Automatisierung gebaut, die uns wöchentlich 20+ Stunden spart. Das System läuft stabiler als alles, was wir davor hatten.",
      highlight: "20h Zeitersparnis / Woche",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
    {
      company: "Peaches",
      person: "Sarah K.",
      role: "Head of Product",
      text: "Wir brauchten ein CRM, das komplexe Benefits einfach darstellt – und zwar mehrsprachig. Das Ergebnis ist nicht nur funktional, sondern hat eine UX, die unsere Kunden lieben. Ein echter Gamechanger für uns.",
      highlight: "UX & Multi-Language",
      color: "text-pink-400",
      bg: "bg-pink-500/10",
    },
    {
      company: "Die Saubermachfrau",
      person: "Maria H.",
      role: "Inhaberin",
      text: "Ich hatte Angst, dass Digitalisierung kompliziert ist. Aber jetzt läuft meine Terminbuchung und Rechnungserstellung fast von alleine. Endlich kein Papierchaos mehr und mehr Zeit für meine Kunden.",
      highlight: "Papierloses Büro",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
  ];

  return (
    <section className="relative w-full py-24 px-6 bg-slate-950 overflow-hidden">
      
      {/* HINTERGRUND DEKO (Subtile Gitter & Leuchten) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-900/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Vertrauen durch <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              echte Ergebnisse.
            </span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Von High-Tech Startups bis zum lokalen Mittelstand. Wir liefern Software, die Probleme löst.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="
                flex flex-col justify-between
                p-8 rounded-3xl
                bg-white/5 border border-white/10 backdrop-blur-md
                hover:border-white/20 hover:bg-white/[0.07]
                hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]
                transition-all duration-300
              "
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex justify-between items-start mb-6">
                  <Quote className="w-8 h-8 text-slate-600 opacity-50 rotate-180" />
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>

                {/* Text */}
                <p className="text-slate-300 leading-relaxed mb-6 italic">
                  "{r.text}"
                </p>

                {/* Highlight Badge (Ergebnis) */}
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-8 ${r.bg} ${r.color}`}>
                  {r.highlight}
                </div>
              </div>

              {/* Footer: Person & Company */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-slate-800 bg-slate-200`}>
                  {r.person.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{r.person}</div>
                  <div className="text-xs text-slate-400">
                    {r.role} @ <span className="text-slate-200 font-semibold">{r.company}</span>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}