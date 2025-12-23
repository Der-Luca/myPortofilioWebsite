"use client";
import Link from "next/link";
import { Linkedin, ArrowUpRight, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#020617] pt-24 pb-12 overflow-hidden">
      
      {/* 1. Dekorativer Top-Border (Gradient Line) */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-50" />

      {/* 2. Hintergrund-Effekte */}
      {/* Feines Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>
      
      {/* Blue Glow unten mitte */}
      <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Großes Wasserzeichen (Subtiler) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0">
        <h1 className="text-[12vw] font-black text-white/[0.02] tracking-tighter whitespace-nowrap blur-sm">
          PLESSING
        </h1>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* === OBEN: BRAND & CTA === */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          
          {/* Brand Info */}
          <div className="max-w-md space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-white tracking-tight">
                Plessing<span className="text-blue-500">.</span>Consulting
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed text-base">
              Software Engineering & IT Consulting mit Fokus auf klare Kommunikation,
              saubere Entscheidungen und nachhaltige Lösungen.
            </p>
            
            {/* Status Indikator (Optionales Detail für Tech-Vibe) */}
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full w-fit border border-emerald-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Systems Operational
            </div>
          </div>

          {/* Main CTA */}
          <div className="flex flex-col items-start md:items-end">
            <span className="text-sm font-mono text-blue-400 mb-2 tracking-wider uppercase">Let's work together</span>
            <h3 className="text-3xl font-bold text-white mb-6 md:text-right">
              Unverbindlich sprechen?
            </h3>
            <Link 
              href="/contact"
              className="group relative flex items-center gap-4 text-xl font-bold text-white transition-all"
            >
              <span className="relative z-10 border-b-2 border-blue-500/50 pb-1 group-hover:border-blue-400 transition-colors">
                Kurzcall anfragen
              </span>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-500 group-hover:shadow-blue-500/40">
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </Link>
          </div>
        </div>

        {/* === MITTE: LINKS === */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-t border-white/5 pt-12 mb-12">
          
          {/* Spalte 1: Rechtliches */}
          <div className="md:col-span-3">
            <h4 className="text-white font-semibold mb-6">Rechtliches</h4>
            <ul className="space-y-3">
              {['Impressum', 'Datenschutz'].map((item, idx) => (
                <li key={idx}>
                  <Link 
                    href={`/${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="h-px w-0 bg-blue-400 transition-all group-hover:w-2" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Spalte 2: Kontakt / Social */}
          <div className="md:col-span-3">
            <h4 className="text-white font-semibold mb-6">Connect</h4>
            <a
              href="https://www.linkedin.com/in/luca-samuel-ple%C3%9Fing-233336274/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-800 border border-gray-700 transition-colors group-hover:bg-[#0077b5] group-hover:border-[#0077b5] group-hover:text-white">
                 <Linkedin size={16} />
              </div>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>

           {/* Leere Spalte für Abstand (Layout Balance) */}
           <div className="md:col-span-6"></div>
        </div>

        {/* === UNTEN: COPYRIGHT & BACK TO TOP === */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-xs text-gray-500 font-mono">
            © {new Date().getFullYear()} Plessing Consulting 
          </p>
          
          <button 
            onClick={scrollToTop} 
            className="group flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-4 py-2 text-xs font-medium text-gray-300 transition-all hover:bg-white/10 hover:text-white"
          >
            Back to top
            <ArrowUp className="w-3 h-3 transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>

      </div>
    </footer>
  );
}