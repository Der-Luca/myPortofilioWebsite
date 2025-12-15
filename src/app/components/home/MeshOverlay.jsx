'use client';

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function MeshOverlay() {
  const POINTS = 18;               // Anzahl der Punkte
  const SPREAD = 1000;             // Breite
  const HEIGHT = 600;              // Höhe
  const SPEED = 0.5;               // Bewegungsgeschwindigkeit

  const [nodes, setNodes] = useState(
    Array.from({ length: POINTS }).map(() => ({
      x: Math.random() * SPREAD,
      y: Math.random() * HEIGHT,
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
    }))
  );

  useEffect(() => {
    let frame;
    const animate = () => {
      setNodes((prev) =>
        prev.map((p) => {
          let x = p.x + p.vx;
          let y = p.y + p.vy;

          if (x < 0 || x > SPREAD) p.vx *= -1;
          if (y < 0 || y > HEIGHT) p.vy *= -1;

          return { ...p, x, y };
        })
      );

      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  // Linien zwischen nahen Punkten erzeugen
  const edges = [];
  nodes.forEach((a, i) => {
    nodes.forEach((b, j) => {
      if (i < j) {
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < 220) {
          edges.push({ a, b, opacity: 1 - dist / 220 });
        }
      }
    });
  });

  return (
    <div className="absolute inset-0 pointer-events-none z-[6] opacity-40">
      <svg
        className="w-full h-full"
        viewBox={`0 0 ${SPREAD} ${HEIGHT}`}
        preserveAspectRatio="none"
      >
        {/* Linien */}
        {edges.map((e, i) => (
          <line
            key={i}
            x1={e.a.x}
            y1={e.a.y}
            x2={e.b.x}
            y2={e.b.y}
            stroke="white"
            strokeWidth="1"
            strokeOpacity={e.opacity * 0.4}
          />
        ))}

        {/* bewegte Punkte */}
        {nodes.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="2"
            fill="white"
            fillOpacity="0.8"
          />
        ))}
      </svg>
    </div>
  );
}
