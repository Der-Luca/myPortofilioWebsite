"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  
  // Funktion zum sanften Hochscrollen
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-slate-950 pt-20 pb-10 overflow-hidden border-t border-white/10">
      
      {/* 1. HUGE WATERMARK BACKGROUND (Branding) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none select-none z-0">
        <h1 className="text-[15vw] md:text-[12vw] font-black text-white/[0.02] text-center leading-none mt-10 tracking-tighter whitespace-nowrap">
          PLESSING
        </h1>
      </div>

      {/* 2. GLOW EFFECT */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 container mx-auto px-6">
        
        {/* --- TOP SECTION: CTA & LOGO --- */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          
          {/* Logo & Slogan */}
          <div className="max-w-sm">
            <Link href="/" className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              Plessing<span className="text-blue-500">.</span>Consulting
            </Link>
            <p className="mt-6 text-slate-400 leading-relaxed">
              Wir bauen digitale Infrastrukturen für die Marktführer von morgen. 
              Skalierbar, sicher und automatisiert.
            </p>
            
            {/* Live Status Badge */}
            <div className="mt-6 flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full w-fit backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-300">
                Systeme operational & bereit
              </span>
            </div>
          </div>

          {/* Big CTA */}
          <div className="flex flex-col items-start md:items-end">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Bereit für das nächste Level?
            </h3>
            <Link 
              href="/contact"
              className="group flex items-center gap-3 text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span className="border-b border-blue-500/30 pb-1 group-hover:border-blue-400">
                Projekt anfragen
              </span>
              <ArrowUpRight className="w-6 h-6 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="mailto:info@plessing.consulting" className="mt-4 text-slate-500 hover:text-white transition-colors">
              info@plessing.consulting
            </a>
          </div>
        </div>

        {/* --- MIDDLE SECTION: LINKS GRID --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-white/10 pt-16 mb-16">
          
          {/* Column 1: Navigation */}
          <div>
            <h4 className="text-white font-bold mb-6">Menu</h4>
            <ul className="space-y-4">
              {["Home", "Leistungen", "Portfolio", "Über uns"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(" ", "-")}`} className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Leistungen</h4>
            <ul className="space-y-4">
              {["Web Development", "Automatisierung", "KI Integration", "Cloud Hosting"].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Legal (WICHTIG!) */}
          <div>
            <h4 className="text-white font-bold mb-6">Rechtliches</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/impressum" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  Datenschutzerklärung
                </Link>
              </li>
              <li>
                <Link href="/agb" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  AGB
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div>
            <h4 className="text-white font-bold mb-6">Socials</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-blue-600 hover:text-white text-slate-400 transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-black hover:text-white text-slate-400 transition-all duration-300">
                <Github size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-sky-500 hover:text-white text-slate-400 transition-all duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Plessing Consulting. All rights reserved. Made with <span className="text-red-500">♥</span> and Code.
          </p>
          
          <button 
            onClick={scrollToTop} 
            className="mt-4 md:mt-0 hover:text-white transition-colors flex items-center gap-1"
          >
            Back to top <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
}