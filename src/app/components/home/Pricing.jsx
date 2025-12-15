"use client";
import { useEffect, useState } from "react";
import { Rocket, TrendingUp, Building } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "2.000 – 5.000 €",
      icon: <Rocket className="w-6 h-6 text-blue-400" />,
      desc: "Für kleinere Firmen oder erste digitale Projekte. Schnelle Umsetzung mit klar definiertem Umfang.",
      features: [
        "Landingpage oder kleines Tool",
        "Einfache Automationen oder KI-Features",
        "Kickoff + technisches Konzept",
        "1 Woche Umsetzung",
      ],
    },
    {
      name: "Growth",
      price: "5.000 – 10.000 €",
      icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
      desc: "Ideal für wachsende Unternehmen. Skalierbare Web- oder Automationslösungen mit Integrationen.",
      features: [
        "Website + CRM/Automation",
        "Bis zu 5 Integrationen (Stripe, HubSpot, Firestore …)",
        "KI-Features (RAG, Chatbots, Pipelines)",
        "Monitoring + Dokumentation",
        "3–6 Wochen Umsetzung",
      ],
    },
    {
      name: "Enterprise",
      price: "ab 15.000 €",
      icon: <Building className="w-6 h-6 text-blue-400" />,
      desc: "Für komplexe Systeme & große Plattformen. End-to-End Development inkl. Backend, Datenbank & KI.",
      features: [
        "Komplette Plattform oder Dashboard",
        "Backend + Datenbank + Auth",
        "AI Pipelines & Automationen",
        "Langfristige technische Betreuung",
      ],
    },
  ];

  const [animateOnce, setAnimateOnce] = useState(false);

  useEffect(() => {
    // Löst beim ersten Render eine Animation aus
    const timeout = setTimeout(() => {
      setAnimateOnce(true);
    }, 150);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="px-6 py-24 max-w-6xl mx-auto relative">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Preise & Pakete
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((p, i) => (
          <div
            key={p.name}
            className={`
              rounded-2xl border border-gray-800 p-8 
              bg-gray-900/40 backdrop-blur-xl 
              transition-all duration-500

              ${animateOnce ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}

              hover:scale-[1.03] hover:border-blue-400 
              hover:shadow-lg hover:shadow-blue-500/20
            `}
          >
            <div className="flex items-center gap-3 mb-4">
              {p.icon}
              <h3 className="text-2xl font-bold">{p.name}</h3>
            </div>

            <p className="text-blue-400 text-lg font-semibold">{p.price}</p>

            <p className="text-gray-300 mt-4">{p.desc}</p>

            <ul className="mt-6 space-y-2 text-gray-300">
              {p.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
