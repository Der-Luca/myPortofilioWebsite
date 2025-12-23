'use client';
import { motion } from 'framer-motion';
// Falls du fadeUp nicht exportieren kannst, ist hier eine Inline-Version definiert,
// ansonsten importiere es einfach wieder wie gewohnt.
import { fadeUp } from './animations'; 

const skillGroups = [
  {
    title: 'Frontend Engineering',
    items: [
      'React', 'Next.js', 'JavaScript / TypeScript', 'Tailwind CSS',
      'Responsive UI / UX', 'State Management', 'Performance & SEO', 'Angular (Grundlagen)',
    ],
    color: 'from-blue-400 to-cyan-300', // Individuelle Gradienten für Abwechslung
  },
  {
    title: 'Backend & APIs',
    items: [
      'Node.js', 'Express', 'REST APIs', 'API-Design & Versionierung',
      'Authentication & Authorization', 'JWT / Session-basierte Auth', 'PHP',
    ],
    color: 'from-emerald-400 to-teal-300',
  },
  {
    title: 'Datenbanken & Storage',
    items: [
      'PostgreSQL', 'MySQL', 'Firestore', 'Relationale Datenmodelle',
      'Migrationen & Schema-Design', 'Indexing & Performance',
    ],
    color: 'from-orange-400 to-amber-300',
  },
  {
    title: 'Cloud, Hosting & Plattformen',
    items: [
      'Firebase', 'Supabase', 'Self-Hosted Setups', 'Managed vs. Bare Metal',
      'Environment- & Secret-Management',
    ],
    color: 'from-sky-400 to-indigo-300',
  },
  {
    title: 'Infrastruktur & Betrieb',
    items: [
      'Docker', 'Docker Compose', 'Nginx', 'Linux Server',
      'Deployment & Rollouts', 'Monitoring & Logs',
    ],
    color: 'from-violet-400 to-purple-300',
  },
  {
    title: 'Automatisierung & Integrationen',
    items: [
      'n8n', 'Webhook-basierte Systeme', 'Drittanbieter-APIs',
      'No-Code / Low-Code Integrationen', 'Workflow-Design',
    ],
    color: 'from-pink-400 to-rose-300',
  },
  {
    title: 'Systeme, Netzwerke & IT-Grundlagen',
    items: [
      'Netzwerktechnik', 'Server- & Client-Administration', 'IT-Security Basics',
      'Enterprise-IT', 'Scripting & Automatisierung',
    ],
    color: 'from-gray-400 to-slate-300',
  },
  {
    title: 'KI & Erweiterte Themen',
    items: [
      'KI-Integration', 'RAG-Systeme', 'LLM-basierte Assistenten',
      'Automatisierter First-Level-Support', 'Praxisnahe KI-Anwendungen',
    ],
    color: 'from-fuchsia-400 to-pink-300',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
};

export default function SkillsGrid() {
  return (
    <section className="px-6 py-24 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="mb-16 text-center md:text-left">
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Skills <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">& Tools</span>
          </h3>
          <p className="text-gray-400 max-w-2xl text-lg">
            Ein umfassender Überblick über meinen technischen Stack und die Technologien, die ich täglich einsetze.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={itemVariants}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gray-900/40 p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-900/20"
            >
              {/* Dekorativer Gradient Background Blob */}
              <div 
                className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${group.color} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10`} 
              />

              <div className="relative z-10">
                <h4 className={`mb-6 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${group.color}`}>
                  {group.title}
                </h4>

                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="cursor-default rounded-md border border-white/5 bg-white/5 px-3 py-1.5 text-xs font-medium font-mono text-gray-300 transition-colors duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}