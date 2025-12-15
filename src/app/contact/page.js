'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/navbar';

const container = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, when: 'beforeChildren', staggerChildren: 0.06 },
  },
};

const card = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      <Navbar />

      {/* Hero */}
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="px-6 pt-28 md:pt-32 pb-6 max-w-4xl mx-auto text-center"
      >
        <motion.h1 variants={card} className="text-4xl md:text-5xl font-bold leading-tight">
          Kontakt aufnehmen
        </motion.h1>
        <motion.p variants={card} className="mt-4 text-gray-300">
          Sag kurz, worum es geht – ich melde mich zeitnah. Später kommt hier ein
          vollwertiges Formular, bis dahin erreichst du mich direkt über:
        </motion.p>
      </motion.section>

      {/* Kontakt-Karten */}
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="px-6 pb-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5"
      >
        {/* Telefon */}
        <motion.a
          variants={card}
          href="tel:+4917632279415"
          aria-label="Jetzt anrufen: +49 176 32279415"
          className="group rounded-2xl border border-gray-800 bg-gray-900/40 p-6 shadow-sm outline-none transition
                     hover:border-blue-500 hover:bg-gray-900 focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <div className="text-3xl">📞</div>
          <h2 className="mt-3 text-xl font-semibold">Anrufen</h2>
          <p className="mt-1 text-gray-300 select-all">+49 176 32279415</p>
          <div className="mt-4 inline-block rounded-xl bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300
                          transition group-hover:bg-blue-500 group-hover:text-white">
            Jetzt anrufen
          </div>
        </motion.a>

        {/* WhatsApp */}
        <motion.a
          variants={card}
          href="https://wa.me/4917632279415?text=Hallo%20Luca%2C%20ich%20bin%20an%20deinen%20Services%20interessiert."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Nachricht senden"
          className="group rounded-2xl border border-gray-800 bg-gray-900/40 p-6 shadow-sm outline-none transition
                     hover:border-green-500 hover:bg-gray-900 focus-visible:ring-2 focus-visible:ring-green-500"
        >
          <div className="text-3xl">💬</div>
          <h2 className="mt-3 text-xl font-semibold">WhatsApp</h2>
          <p className="mt-1 text-gray-300">Nachricht senden</p>
          <div className="mt-4 inline-block rounded-xl bg-green-500/10 px-4 py-2 text-sm font-medium text-green-300
                          transition group-hover:bg-green-500 group-hover:text-white">
            Chat starten
          </div>
        </motion.a>

        {/* E-Mail */}
        <motion.a
          variants={card}
          href="mailto:lucaplessing@icloud.com?subject=Kontakt&body=Hallo%20Luca%2C%20ich%20bin%20an%20deinen%20Services%20interessiert."
          aria-label="E-Mail an lucaplessing@icloud.com"
          className="group rounded-2xl border border-gray-800 bg-gray-900/40 p-6 shadow-sm outline-none transition
                     hover:border-purple-500 hover:bg-gray-900 focus-visible:ring-2 focus-visible:ring-purple-500"
        >
          <div className="text-3xl">📧</div>
          <h2 className="mt-3 text-xl font-semibold">E-Mail</h2>
          <p className="mt-1 text-gray-300 select-all">lucaplessing@icloud.com</p>
          <div className="mt-4 inline-block rounded-xl bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300
                          transition group-hover:bg-purple-500 group-hover:text-white">
            E-Mail schreiben
          </div>
        </motion.a>
      </motion.section>

      {/* Hinweis + CTA */}
      <section className="px-6 pb-20 max-w-3xl mx-auto">
        <div className="rounded-2xl border border-gray-800 bg-gray-900/40 p-6 text-center">
          <p className="text-gray-300">
            Bevorzugt: kurze Nachricht mit Use-Case (Tools, gewünschtes Ergebnis, Zeitraum). Ich antworte
            in der Regel am selben oder nächsten Werktag.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <a
              href="/services"
              className="rounded-xl border border-gray-700 px-5 py-3 font-semibold hover:bg-gray-900 transition"
            >
              Leistungen ansehen
            </a>
            <a
              href="/projects"
              className="rounded-xl bg-blue-500 px-5 py-3 font-semibold hover:bg-blue-600 transition"
            >
              Referenzen
            </a>
          </div>
      
        </div>
      </section>
    </main>
  );
}
