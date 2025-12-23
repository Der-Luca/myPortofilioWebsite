'use client';
import { motion } from 'framer-motion';
import { fadeUp } from './animations';

const facts = [
  { k: 'Fokus', v: 'Automation, KI, Web-Apps' },
  { k: 'Stack', v: 'Next.js, Node/Express, Postgres, n8n, Docker' },
  { k: 'Modus', v: 'Freelance / Projekt-basiert' },
  { k: 'Sprachen', v: 'DE / EN / ES (Basics)' },
];

export default function QuickFacts() {
  return (
    <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-2 px-6 max-w-5xl mx-auto">
      {facts.map((f) => (
        <span
          key={f.k}
          className="rounded-full border border-gray-800 bg-gray-900/50 px-4 py-2 text-sm"
        >
          <span className="text-gray-400">{f.k}:</span>
          <span className="ml-1">{f.v}</span>
        </span>
      ))}
    </motion.div>
  );
}
