import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import MeshOverlay from "./MeshOverlay";
import HeroAnimatedText from "./HeroAnimatedText";
import Navbar from "../navbar";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-950">
      
      {/* 1. NAVBAR (Fixed & Glass) */}
      <Navbar className="fixed top-0 left-0 right-0 z-50" />

      {/* 2. HINTERGRUND-EBENEN */}
      <div className="absolute inset-0 z-0">
        {/* Das Bild selbst */}
        <Image
          src="/Gemini_Generated_Image_27ov5n27ov5n27ov.png"
          alt="Future Tech Background"
          fill
          priority
          className="object-cover"
        />
        
        {/* Overlay 1: Grundlegende Abdunklung (blau-stichig für Atmosphäre) */}
        <div className="absolute inset-0 bg-slate-950/60 mix-blend-multiply" />
        
        {/* Overlay 2: Radialer Gradient (Vignette) - Fokus in die Mitte */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(2,6,23,0.9)_90%)]" />
        
        {/* Overlay 3: Verlauf von unten nach oben (damit der Übergang zum Content weich ist) */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      {/* 3. NEURAL MESH (Deine Komponente) */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none mix-blend-screen">
        <MeshOverlay />
      </div>

      {/* 4. HAUPT-CONTENT */}
      <div className="relative z-10 w-full px-6 pt-20 pb-12 flex flex-col items-center text-center">
        
        {/* Licht-Spot hinter dem Text für perfekte Lesbarkeit */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* Kleiner Eyecatcher oben */}
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-md">
            Next Generation Consulting
          </span>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 drop-shadow-lg">
            Wir ermöglichen Fortschritt durch
          </h1>
          
          {/* DER STAR: Die Animation */}
          <HeroAnimatedText />

          <p className="mt-8 text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
            Wir verwandeln komplexe Technologie in <span className="text-white font-medium">einfache Lösungen</span>. 
            Automatisierung & KI, die Zeit spart und Umsatz bringt.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="/contact"
              className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-2xl bg-blue-600 px-8 font-medium text-white transition-all duration-300 hover:bg-blue-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]"
            >
              <span className="mr-2 text-lg font-bold">Kostenloses Erstgespräch</span>
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
            
            <a
              href="/#selected-work"
              className="group inline-flex h-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-8 font-medium text-slate-200 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:text-white"
            >
              <span className="text-lg font-bold">Referenzen ansehen</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indikator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 z-10 text-slate-500"
      >
        <ChevronDown size={32} />
      </motion.div>

    </section>
  );
}