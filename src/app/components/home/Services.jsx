import WaveMesh from "./WaveMesh";

export default function Services() {
  const services = [/* ... */];

  return (
    <section className="relative px-6 py-24 max-w-6xl mx-auto">

      {/* 3D WAVE MESH HINTER ALLEM */}
      <div className="absolute inset-0 -z-10 opacity-60">
        <WaveMesh />
      </div>

      <div className="relative z-10 flex items-center justify-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          Leistungen
        </h2>
      </div>

      <div className="relative z-10 grid md:grid-cols-2 gap-8">
        {services.map((s) => (
          <div key={s.title} className="
            rounded-2xl border border-gray-800 p-6
            bg-gray-900/40 backdrop-blur-sm
            hover:border-blue-400/40 hover:shadow-[0_0_30px_rgba(100,150,255,0.15)]
            transition-all duration-300
          ">
            <h3 className="text-xl font-semibold mb-3 text-white">
              {s.title}
            </h3>
            <ul className="space-y-2 text-gray-300 list-disc pl-5">
              {s.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>

    </section>
  );
}
