import { Lightbulb, Gauge, ShieldCheck } from "lucide-react";

export default function ValueProps() {
  const items = [
    {
      icon: <Gauge className="w-8 h-8 text-blue-300" />,
      title: "Schnelle Umsetzung",
      text: "Kickoff ➜ Prototyp ➜ Live in wenigen Wochen.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-300" />,
      title: "Messbare Effekte",
      text: "Zeitersparnis, weniger Fehler, klare KPI-Ziele.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-300" />,
      title: "Eigene Infrastruktur",
      text: "DSGVO-sicher: Docker, Postgres, Nginx, Self-Hosting möglich.",
    },
  ];

  return (
    <section className="relative px-6 py-20 max-w-6xl mx-auto">

      {/* Subtiles Grid im Hintergrund */}
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {items.map((i) => (
          <div
            key={i.title}
            className="
              group relative rounded-2xl border border-white/10 p-8 
              bg-gray-900/40 backdrop-blur-sm 
              transition-all duration-300
              hover:border-blue-400/40 hover:shadow-[0_0_30px_rgba(100,150,255,0.15)]
              hover:scale-[1.02]
            "
          >
            {/* Glow highlight */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-10 transition duration-300"></div>

            {/* ICON */}
            <div className="mb-5">{i.icon}</div>

            {/* TITLE */}
            <h3 className="text-xl font-semibold mb-2 text-white">
              {i.title}
            </h3>

            {/* TEXT */}
            <p className="text-gray-300">{i.text}</p>
          </div>
        ))}
      </div>

    </section>
  );
}
