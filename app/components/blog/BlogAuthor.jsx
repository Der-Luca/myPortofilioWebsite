'use client';

import { User, Linkedin, Twitter } from 'lucide-react';

export default function BlogAuthor({ author, authorRole, date }) {
  return (
    <div className="flex items-center gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/10">
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 
                     flex items-center justify-center shrink-0">
        <User className="w-7 h-7 text-white" />
      </div>
      
      <div className="flex-1">
        <h3 className="text-white font-bold text-lg">{author}</h3>
        <p className="text-slate-400 text-sm">{authorRole}</p>
        {date && (
          <p className="text-slate-500 text-xs mt-1">
            Veröffentlicht am {new Date(date).toLocaleDateString('de-DE', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        )}
      </div>
      
      <div className="flex gap-2">
        <a href="#" className="p-2 rounded-full bg-white/[0.05] text-slate-400 
                              hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors">
          <Twitter className="w-4 h-4" />
        </a>
        <a href="#" className="p-2 rounded-full bg-white/[0.05] text-slate-400 
                              hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors">
          <Linkedin className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
