'use client';

import { motion } from 'framer-motion';
import { Hash } from 'lucide-react';

export default function BlogTags({ tags, activeTag, onTagClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      className="flex flex-wrap gap-2 mb-8"
    >
      <button
        onClick={() => onTagClick?.(null)}
        className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-200
                   ${!activeTag 
                     ? 'bg-cyan-500 text-gray-950 border-cyan-500' 
                     : 'bg-white/[0.03] text-slate-400 border-white/10 hover:border-cyan-500/30 hover:text-cyan-400'
                   }`}
      >
        <span className="flex items-center gap-1.5">
          <Hash className="w-3.5 h-3.5" />
          Alle
        </span>
      </button>
      
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagClick?.(tag)}
          className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-200
                     ${activeTag === tag 
                       ? 'bg-cyan-500 text-gray-950 border-cyan-500' 
                       : 'bg-white/[0.03] text-slate-400 border-white/10 hover:border-cyan-500/30 hover:text-cyan-400'
                     }`}
        >
          #{tag}
        </button>
      ))}
    </motion.div>
  );
}
