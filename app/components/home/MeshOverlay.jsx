'use client';

import { useEffect, useState } from "react";

export default function MeshOverlay() {
  const POINTS = 18;
  const SPREAD = 1000;
  const HEIGHT = 600;
  const SPEED = 0.5;

  // ⛔️ Wichtig: initial LEER
  const [nodes, setNodes] = useState([]);

  // ✅ Erst NACH Mount Zufallswerte erzeugen
  useEffect(() => {
    const initialNodes = Array.from({ length: POINTS }).map(() => ({
      x: Math.random() * SPREAD,
      y: Math.random() * HEIGHT,
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
    }));

    setNodes(initialNodes);
  }, []);

  // Animation
  useEffect(() => {
    if (!nodes.length) return;

    let frame;
    const animate = () => {
      setNodes((prev) =>
        prev.map((p) => {
          let x = p.x + p.vx;
          let y = p.y + p.vy;
          let vx = p.vx;
          let vy = p.vy;

          if (x < 0 || x > SPREAD) vx *= -1;
          if (y < 0 || y > HEIGHT) vy *= -1;

          return { ...p, x, y, vx, vy };
        })
      );

      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, [nodes.length]);

  // Linien berechnen
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

  // ⛔️ Solange noch keine Nodes → gar nichts rendern
  if (!nodes.length) return null;

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

        {/* Punkte */}
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
