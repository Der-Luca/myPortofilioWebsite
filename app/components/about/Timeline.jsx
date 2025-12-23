'use client';
import { motion } from 'framer-motion';
// Falls du fadeUp / Animationsdateien hast:
import { fadeUp } from './animations';

const timeline = [
  {
    period: '02/2022 – heute',
    title: 'Freelance Software Engineer & IT Consultant',
    company: 'Selbstständig',
    type: 'work', // work | education
    desc: `Entwicklung skalierbarer Web- und Backend-Systeme mit Fokus auf Automatisierung, Systemarchitektur und KI-gestützte Lösungen. Verantwortung von der technischen Konzeption über API-Design und Datenbankmodellierung bis Deployment, Betrieb und Dokumentation.`,
  },
  {
    period: '10/2022 – 09/2025',
    title: 'B.Sc. Wirtschaftsinformatik (dual)',
    company: 'cbs Corporate Business Solutions / C.U. Mannheim',
    type: 'education',
    desc: `Schwerpunkte: Softwareentwicklung, IT-Architektur, Prozesse und Consulting. Bachelorarbeit: KI im First-Level-Support (RAG, Automatisierung, KPIs).`,
  },
  {
    period: '08/2021 – 08/2022',
    title: 'IT-Administrator',
    company: 'Max-Planck-Institut für Kernphysik',
    type: 'work',
    desc: `Administration von Server- und Client-Systemen, Betrieb und Weiterentwicklung von IT-Infrastrukturen sowie Automatisierung und Skripting im wissenschaftlichen Umfeld.`,
  },
  {
    period: '09/2018 – 07/2021',
    title: 'Ausbildung: Fachinformatiker Systemintegration',
    company: 'Stadtwerke Heidelberg GmbH',
    type: 'education',
    desc: `Fundierte Ausbildung in IT-Infrastruktur, Netzwerken, Serverbetrieb, Systemadministration und Automatisierung. Solide technische Basis für spätere Spezialisierung.`,
  },
];

export default function Timeline() {
  return (
    <section className="px-6 py-24 max-w-5xl mx-auto">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Beruflicher <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Werdegang</span>
        </h3>
      </motion.div>

      <div className="relative pl-4 md:pl-8">
        {/* Der leuchtende Timeline-Strich (Hintergrund) */}
        <div className="absolute left-[19px] md:left-[35px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-gray-800/20" />

        <div className="space-y-12">
          {timeline.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative flex items-start gap-6 md:gap-10 group"
            >
              {/* Timeline Node (Der Punkt) */}
              <div className="absolute left-[10px] md:left-[26px] top-0 flex flex-col items-center">
                {/* Pulsierender Effekt nur für das erste Element (aktueller Job) */}
                {idx === 0 && (
                  <span className="absolute -top-1 h-6 w-6 animate-ping rounded-full bg-blue-500 opacity-75" />
                )}
                
                <div className={`relative z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 bg-gray-950 transition-colors duration-300 ${
                    idx === 0 ? 'border-blue-400 bg-blue-900/50' : 'border-gray-600 group-hover:border-blue-400 group-hover:bg-blue-900'
                  }`}>
                  <div className={`h-2 w-2 rounded-full ${idx === 0 ? 'bg-blue-400' : 'bg-gray-500 group-hover:bg-blue-300'}`} />
                </div>
              </div>

              {/* Content Card */}
              <div className="flex-1 -mt-2">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gray-900/40 p-6 md:p-8 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1">
                  
                  {/* Subtle Gradient Blob behind card text on hover */}
                  <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                      {/* Zeitraum Badge */}
                      <span className={`inline-flex w-fit items-center rounded-md px-2.5 py-1 text-xs font-medium font-mono ring-1 ring-inset ${
                        idx === 0 
                          ? 'bg-blue-400/10 text-blue-400 ring-blue-400/30' 
                          : 'bg-gray-800/40 text-gray-400 ring-gray-700/50 group-hover:text-blue-300 group-hover:ring-blue-400/30 transition-colors'
                      }`}>
                        {t.period}
                      </span>
                      
                      {/* Firma / Institution */}
                      <span className="text-sm font-medium text-gray-500 group-hover:text-gray-300 transition-colors">
                        {t.company}
                      </span>
                    </div>

                    <h4 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">
                      {t.title}
                    </h4>

                    <p className="text-gray-400 leading-relaxed text-base">
                      {t.desc}
                    </p>
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