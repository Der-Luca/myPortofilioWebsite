"use client";
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react"; // Für die Pfeile zwischen den Schritten

export default function Process() {
const steps = [
  {
    k: '01',
    t: 'Kickoff & Analyse',
    d: 'Ziele klären, bestehende Abläufe verstehen, Rahmenbedingungen und Datenschutz prüfen. Gemeinsame Roadmap festlegen.',
  },
  {
    k: '02',
    t: 'Konzept & Lösungsdesign',
    d: 'Ausarbeitung einer konkreten Lösung mit klarer Struktur und realistischen Annahmen als Entscheidungsgrundlage.',
  },
  {
    k: '03',
    t: 'Umsetzung',
    d: 'Schrittweise Realisierung der Lösung – stabil, nachvollziehbar und sauber dokumentiert.',
  },
  {
    k: '04',
    t: 'Betrieb & Weiterentwicklung',
    d: 'Begleiteter Betrieb, Optimierungen oder strukturierte Übergabe an interne Teams.',
  },
];


  const [active, setActive] = useState(0);

  // Automatischer Wechsel alle 3 Sekunden (etwas langsamer für bessere Lesbarkeit)
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 3000);

    // Stoppt den Interval, wenn die Komponente nicht mehr angezeigt wird
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-24 px-6 bg-slate-950 overflow-hidden">
      {/* Optionaler Hintergrund-Glow Effekt für Ambiente */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sky-900/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ÜBERSCHRIFT */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-sky-400">
            Der Weg zum Ziel: <br className="md:hidden"/>In 4 Schritten zur Lösung
          </h2>
          <p className="text-slate-400 mt-4 text-lg max-w-2xl mx-auto">
            Ein bewährter, transparenter Prozess sorgt für schnelle Ergebnisse ohne Überraschungen.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-6 relative">
          {steps.map((s, i) => {
            const isActive = i === active;
            const isLast = i === steps.length - 1;

            return (
              <div key={s.k} className="relative flex flex-col h-full font-sans">
                
                {/* Die Karte selbst */}
                <div
                  onClick={() => setActive(i)} // Klickbar machen
                  className={`
                    flex-1
                    rounded-3xl p-8 
                    border backdrop-blur-md cursor-pointer
                    transition-all duration-700 ease-in-out
                    flex flex-col
                    ${isActive 
                      ? "bg-sky-900/20 border-sky-400/50 shadow-[0_0_50px_rgba(14,165,233,0.25)] scale-[1.03] z-10" 
                      : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                    }
                  `}
                >
                  {/* Nummer */}
                  <div className={`font-mono text-xl font-bold mb-4 transition-colors duration-500 ${isActive ? "text-sky-300" : "text-slate-500"}`}>
                    / {s.k}
                  </div>

                  {/* Titel */}
                  <h3 className={`text-2xl font-bold mb-3 transition-colors duration-500 ${isActive ? "text-white" : "text-slate-200"}`}>
                    {s.t}
                  </h3>

                  {/* Beschreibung */}
                  <p className={`text-base leading-relaxed transition-colors duration-500 ${isActive ? "text-slate-200" : "text-slate-400"}`}>
                    {s.d}
                  </p>
                </div>

                {/* Verbindungs-Pfeil (nur auf Desktop und nicht nach dem letzten Element) */}
                {!isLast && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-0 text-slate-700 justify-center items-center">
                     <ChevronRight size={24} strokeWidth={3} className={isActive ? "text-sky-500/50 animate-pulse" : ""}/>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}