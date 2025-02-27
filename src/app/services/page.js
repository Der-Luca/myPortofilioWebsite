'use client';

import { motion } from "framer-motion";
import Navbar from "../components/navbar";

export default function Services() {
  return (
    <motion.main 
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Navbar />
      
      <section className="text-center max-w-3xl mt-20">
        <h1 className="text-5xl font-bold mb-6">Meine Services</h1>
        <p className="text-lg text-gray-300 mb-8">
          Ich biete individuelle Lösungen in **Webentwicklung, Backend-Architekturen, IT-Infrastruktur & Netzwerktechnik**. Mein Fokus liegt auf **maßgeschneiderten Web-Apps, sicherer Cloud-Technologie und effizienter Systemintegration**.
        </p>
      </section>
      
      <section className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-3">Webentwicklung</h2>
          <p className="text-gray-400">Moderne Web-Apps mit Next.js, React & Tailwind.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-3">Backend Entwicklung</h2>
          <p className="text-gray-400">Sichere und skalierbare Lösungen mit Node.js, Express & Django.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-3">Systemintegration</h2>
          <p className="text-gray-400">Effiziente Netzwerke & IT-Infrastrukturen für Unternehmen.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-3">Cloud & Hosting</h2>
          <p className="text-gray-400">Private Nextcloud-Lösungen & zuverlässiges Hosting.</p>
        </div>
      </section>
      
      <div className="my-10 max-w-4xl">
        <h3 className="text-3xl font-bold mb-4">Interessiert? Erfahre mehr über meine Projekte oder kontaktiere mich! 🔍</h3>
        <div className="flex flex-row">
          <div><a href="projects" className="bg-blue-500 px-5 py-3 rounded-lg text-white font-semibold hover:bg-blue-600 transition">Meine Projekte</a></div>
          <div className="mx-4"><a href="contact" className="bg-gray-500 px-5 py-3 rounded-lg text-white font-semibold hover:bg-gray-600 transition">Kontaktiere mich</a></div>
        </div>
      </div>
    </motion.main>
  );
}
