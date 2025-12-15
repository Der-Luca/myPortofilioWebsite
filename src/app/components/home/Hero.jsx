import MeshOverlay from "./MeshOverlay";
import HeroAnimatedText from "./HeroAnimatedText";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">

      {/* Neural Network Overlay */}
      <MeshOverlay />

      {/* Background */}
      <div className="absolute inset-0 bg-[url('/Gemini_Generated_Image_27ov5n27ov5n27ov.png')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 px-6 py-24 md:py-32 max-w-6xl mx-auto text-center">

        {/* FIXED HEADLINE */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
          Wir ermöglichen{" "}
          <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
            Fortschritt
          </span>{" "}
          durch
        </h1>

        {/* ROTIERENDES WORT (Client Animation) */}
        <HeroAnimatedText />

        {/* SUBHEADLINE */}
        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-medium">
          Automatisierung & KI, die Zeit spart und Umsatz bringt
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/contact" className="w-full sm:w-auto rounded-xl bg-blue-600/90 px-8 py-4 text-lg font-bold text-white hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/25">
            Kostenloses Erstgespräch
          </a>
          <a href="/projects" className="w-full sm:w-auto rounded-xl border-2 border-gray-300/30 bg-black/20 px-8 py-4 text-lg font-bold text-white hover:bg-white/10 hover:border-white transition-all">
            Referenzen ansehen
          </a>
        </div>
      </div>
    </section>
  );
}
