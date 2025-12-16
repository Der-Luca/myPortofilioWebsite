"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check, BarChart3, MessageSquare } from "lucide-react";

export default function MobileAppCTA() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      
      {/* 1. HINTERGRUND BILD & OVERLAY */}
      <div className="absolute inset-0 z-0">
        {/* ACHTUNG: Stelle sicher, dass die Datei "Gemini_Generated_Image_idcb5idcb5idcb5i.png" 
            in deinem "public" Ordner liegt! 
        */}
        <Image 
          src="/Gemini_Generated_Image_idcb5idcb5idcb5i.png" 
          alt="Abstrakter Technologie Hintergrund"
          fill
          // Wir mischen das Bild mit dem dunklen Hintergrund und machen es etwas transparent,
          // damit der Text davor gut lesbar bleibt.
          className="object-cover opacity-50 mix-blend-overlay"
          priority // Lädt das Bild priorisiert, da es groß ist
        />
        
        {/* Dunkle Overlays für bessere Lesbarkeit des Textes */}
        {/* Ich habe es auf 70% Deckkraft (slate-950/70) gesetzt, damit der Kontrast stark genug ist */}
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LINKS: TEXT */}
        <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0 pt-20 lg:pt-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
              Ready for Launch
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Deine Vision auf <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                jedem Screen.
              </span>
            </h2>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Egal ob interne Mitarbeiter-App, Kundenportal oder Mobile-First Dashboard. 
              Wir entwickeln Software, die sich so gut anfühlt, wie sie aussieht.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all duration-300 transform hover:-translate-y-1"
              >
                Projekt anfragen
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-200 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Referenzen
              </Link>
            </div>
          </motion.div>
        </div>

        {/* RECHTS: DAS ANIMIERTE HANDY (CSS Only) */}
        <div className="relative flex justify-center lg:justify-end h-[600px] w-full">
          
          {/* Glow hinter dem Handy - farblich angepasst an das Thema */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-indigo-500/30 blur-[100px] rounded-full pointer-events-none" />

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            animate={{ y: [0, -15, 0] }} // Schwebende Animation
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative"
            style={{ perspective: 1000 }}
          >
            {/* PHONE FRAME */}
            <div className="
              relative w-[300px] h-[600px] 
              rounded-[3rem] border-[8px] border-slate-800 bg-slate-900 
              shadow-2xl overflow-hidden
              rotate-y-12 rotate-x-6 transform-gpu
            ">
              {/* Dynamic Island / Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-2xl z-20" />

              {/* SCREEN CONTENT (Das ist quasi deine "App") */}
              <div className="w-full h-full bg-slate-950 flex flex-col pt-12 px-5 relative">
                
                {/* Header App */}
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h4 className="text-white font-bold text-lg">Dashboard</h4>
                    <p className="text-slate-400 text-xs">Welcome back, Alex</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-xs text-white font-bold">
                    A
                  </div>
                </div>

                {/* Karte 1: Revenue Chart */}
                <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4 mb-4">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-slate-400 text-xs">Total Sales</span>
                    <span className="text-emerald-400 text-xs font-bold">+24%</span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-3">€ 12,450</div>
                  {/* Fake Chart Bars */}
                  <div className="flex justify-between items-end h-16 gap-2">
                    {[40, 60, 35, 80, 55, 90, 70].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="w-full bg-indigo-500/20 rounded-t-sm relative overflow-hidden group"
                      >
                         <div className="absolute bottom-0 left-0 right-0 bg-indigo-500 h-full opacity-60 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Karte 2: Active Users */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-indigo-600 rounded-2xl p-4 text-white flex flex-col justify-between h-28">
                     <BarChart3 className="w-6 h-6 opacity-80" />
                     <div>
                       <div className="text-2xl font-bold">850</div>
                       <div className="text-xs opacity-70">Active Users</div>
                     </div>
                  </div>
                  <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4 text-white flex flex-col justify-between h-28">
                     <MessageSquare className="w-6 h-6 text-sky-400" />
                     <div>
                       <div className="text-2xl font-bold">12</div>
                       <div className="text-xs text-slate-400">New Tickets</div>
                     </div>
                  </div>
                </div>

                {/* Karte 3: Recent Activity (Liste) */}
                <div className="flex-1 overflow-hidden">
                  <h5 className="text-slate-400 text-xs font-bold uppercase mb-3 tracking-wider">Recent</h5>
                  <div className="space-y-3">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                          <Check className="w-4 h-4 text-emerald-400" />
                        </div>
                        <div>
                          <div className="text-sm text-white font-medium">System Update</div>
                          <div className="text-xs text-slate-500">Just now</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Blur Overlay (für App Feeling) */}
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
                
                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-700 rounded-full z-20" />
              </div>
            </div>
            
            {/* FLOATING BADGE NEBEN DEM HANDY */}
            <motion.div 
               animate={{ y: [0, 10, 0] }}
               transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
               className="absolute -right-8 bottom-32 bg-white rounded-xl p-4 shadow-xl z-30 max-w-[140px] hidden md:block"
            >
               <div className="flex items-center gap-2 mb-1">
                 <div className="w-2 h-2 rounded-full bg-green-500" />
                 <span className="text-xs font-bold text-slate-800">Live Status</span>
               </div>
               <div className="text-sm text-slate-600 leading-tight">
                 System läuft stabil.
               </div>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}