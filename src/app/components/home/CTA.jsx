export default function CTA() {
  return (
    <section className="px-6 pb-20 max-w-4xl mx-auto text-center">
      <div className="rounded-2xl border border-gray-800 p-8 bg-gradient-to-b from-gray-900 to-gray-950">
        <h2 className="text-3xl font-bold">Lass uns eure Prozesse schlank machen</h2>
        <p className="text-gray-300 mt-3">
          Kurzcall (20–30 Min.): Ziele, Systeme, Quick-Wins. Ich zeige dir, wie wir in wenigen Wochen live gehen.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <a href="/contact" className="rounded-xl bg-blue-500 px-6 py-3 font-semibold hover:bg-blue-600 transition">
            Kostenloses Erstgespräch
          </a>
          <a href="/services" className="rounded-xl border border-gray-700 px-6 py-3 font-semibold hover:bg-gray-900">
            Leistungen im Detail
          </a>
        </div>
      </div>
    </section>
  );
}
