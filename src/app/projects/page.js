'use client';

import { motion } from "framer-motion";
import Navbar from "../components/navbar";

export default function Projects() {
  return (
    <motion.main 
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Navbar />
      
      <section className="text-center mt-20">
        <h1 className="text-5xl font-bold mb-6">Meine Projekte</h1>
      </section>
      
      <section className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="w-full h-56 overflow-hidden rounded-lg">
            <img src="/pts.jpg" alt="Projekt PTS" className="w-full h-full object-cover" />
          </div>
          <h2 className="text-xl font-bold mt-2 mb-3">PTS Group</h2>
          <p className="text-gray-400 text-justify">Für PTS Group habe ich eine moderne, funktionale Website entwickelt, 
                die nicht nur optisch überzeugt, sondern auch eine benutzerfreundliche Struktur bietet. 
                Besonderen Wert habe ich auf ein klar strukturiertes Design, schnelle Ladezeiten
                und eine responsive Darstellung gelegt, damit die Seite auf allen Geräten 
                reibungslos funktioniert. Ziel war es, eine professionelle Online-Präsenz zu schaffen, 
                die das Unternehmen optimal repräsentiert.
            </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="w-full h-56 overflow-hidden rounded-lg">
            <img src="/sauber.jpg" alt="Projekt Sauber" className="w-full h-full object-cover" />
          </div>
          <h2 className="text-xl font-bold mt-2 mb-3">Die Saubermachfrau</h2>
          <p className="text-gray-400 text-justify">
            Für meinen Kunden Die Saubermachfrau, eine professionelle Reinigungsfirma,
             habe ich eine interaktive und benutzerfreundliche Website entwickelt. Neben einem klaren, ansprechenden Design lag der Fokus
              auf einer intuitiven Navigation und einer einfachen Möglichkeit zur Kontaktaufnahme. Ich habe ein sicheres Kontaktformular
               mit integriertem Spamschutz eingerichtet, um eine reibungslose Kommunikation mit Kunden zu gewährleisten. Zudem habe ich das
             komplette Hosting und die technische Infrastruktur für eine stabile und performante Website übernommen.
             </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="w-full h-56 overflow-hidden rounded-lg">
            <img src="/nextcloud.jpg" alt="Private Nextcloud" className="w-full h-full object-cover" />
          </div>
          <h2 className="text-xl font-bold mt-2 mb-3">Private Nextcloud</h2>
          <p className="text-gray-400 text-justify">
            Meine eigene private Cloud, basierend auf Nextcloud, gehostet auf meinem eigenen Server. 
            Diese Cloud-Lösung ermöglicht sicheren Zugriff, Datei-Sharing, Synchronisation und Kollaboration – 
            vollständig unter meiner Kontrolle, ohne Abhängigkeit von Drittanbietern. 
            Perfekt für Datenschutz und individuelle Anpassungen!
            </p>
        </div>
      </section>
      
      <section className="mt-10 text-center max-w-4xl">
        <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-4">
          <p className="text-gray-300 italic">"Super Arbeit, tolle Website! Besonders das Kontaktformular und die WhatsApp-Integration waren sehr hilfreich."</p>
          <h3 className="text-gray-400 mt-2">- Heike Strigel</h3>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <p className="text-gray-300 italic">"Tolles Design und großartige Funktionalität! Gerne wiede!r"</p>
          <h3 className="text-gray-400 mt-2">- PTS Group</h3>
        </div>
      </section>

      <div className="flex justify-center my-10 max-w-4xl">
        <h3 className="text-3xl font-bold mb-4 text-center">
          Interessiert? <br /> Dann kontaktiere mich! 📩
        </h3>
      </div>
      
      <div className="flex justify-center">
        <a href="contact" className="bg-blue-500 px-5 py-3 mb-4 rounded-lg text-white font-semibold hover:bg-blue-600 transition">
          Jetzt kontaktieren
        </a>
      </div>
    </motion.main>
  );
}
