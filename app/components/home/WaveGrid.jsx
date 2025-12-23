"use client";
import { motion } from "framer-motion";

export default function WaveGrid() {
  const rows = 14;
  const cols = 14;

  const points = [];
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      points.push({ x, y });
    }
  }

  return (
    <div className="absolute inset-0 pointer-events-none z-0 opacity-40 flex items-center justify-center">
      <div className="relative w-[650px] h-[650px]">
        {points.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-[3px] h-[3px] rounded-full bg-white/30"
            animate={{
              y: Math.sin((p.x + p.y) / 2 + performance.now() / 500) * 12,
              x: Math.cos((p.x + p.y) / 2 + performance.now() / 800) * 12,
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            style={{
              left: `${(p.x / cols) * 100}%`,
              top: `${(p.y / rows) * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
