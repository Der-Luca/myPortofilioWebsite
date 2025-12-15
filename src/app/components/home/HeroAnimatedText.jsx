'use client';

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HeroAnimatedText() {

  const rotatingWords = [
    "Consulting",
    "Künstliche Intelligenz",
    "Automatisierung",
    "Development"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(i => (i + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-16 md:h-20 flex items-center justify-center mt-2 overflow-hidden">
      <motion.h2
        key={index}
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute text-3xl md:text-5xl font-extrabold text-blue-400"
      >
        {rotatingWords[index]}
      </motion.h2>
    </div>
  );
}
