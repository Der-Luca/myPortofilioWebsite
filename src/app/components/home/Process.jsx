"use client";
import { useEffect, useState } from "react";

export default function Process() {
  const steps = [
    { k: '01', t: 'Kickoff', d: 'Ziele, Systeme, KPIs, Datenschutz. Roadmap & Scope festzurren.' },
    { k: '02', t: 'Prototyp', d: 'Schneller Proof of Value mit echten Daten/Beispielen.' },
    { k: '03', t: 'Implementierung', d: 'Stabil, dokumentiert, mit Monitoring und Übergabe.' },
    { k: '04', t: 'Betrieb', d: 'Support/Retainer oder Handover an euer Team.' },
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 2000); // alle 2 Sekunden wechselnd

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Ablauf
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((s, i) => {
          const isActive = i === active;

          return (
            <div
              key={s.k}
              className={`
                rounded-2xl border p-6 
                transition-all duration-500
                ${isActive 
                  ? "border-blue-500 bg-blue-500/10 shadow-lg shadow-blue-500/30 scale-[1.05]" 
                  : "border-gray-800 bg-gray-900/40 opacity-70"
                }
              `}
            >
              <div className={`font-mono transition-colors ${isActive ? "text-blue-400" : "text-gray-500"}`}>
                {s.k}
              </div>

              <h3 className="text-xl font-semibold mt-2">{s.t}</h3>

              <p className="text-gray-300 mt-2">{s.d}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
