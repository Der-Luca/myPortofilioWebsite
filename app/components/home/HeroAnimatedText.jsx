"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function HeroAnimatedText() {
  const words = [
    "Consulting",
    "KI",
    "Automatisierung",
    "Cloud Native",
    "Transformation"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500); // 2.5 Sekunden, damit man es auch lesen und genießen kann
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-20 md:h-32 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.h2
          key={words[index]}
          initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -40, opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
className="absolute text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 drop-shadow-2xl"

        >
          {words[index]}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
}