'use client';

import { motion } from "framer-motion";
import Navbar from "../components/navbar";

export default function About() {
  return (
    <motion.main 
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Navbar />
      
      <section className="text-center max-w-3xl mt-20">
        <h1 className="text-5xl font-bold mb-6">Über mich</h1>
        <div className="flex flex-col items-center mb-8">
          <img 
            src="/profile.jpg" 
            alt="Profilbild" 
            className="w-40 h-40 rounded-full border-4 border-gray-700 shadow-lg"
          />
        </div>
        <p className="text-lg text-gray-300 mb-8">
          Hey! Ich bin Luca, ein **Full-Stack-Entwickler und Systemintegrator** mit Fokus auf **Webtechnologien, Backend-Architekturen und IT-Infrastruktur**. Ich entwickle **moderne Weblösungen** und optimiere Netzwerksysteme für **sichere und effiziente digitale Prozesse**.
        </p>
        <p className="text-lg text-gray-300 mb-8">
          Ich studiere dual **Wirtschaftsinformatik mit Schwerpunkt Sales & Consulting** und arbeite bei der **CBS Corporate Business Solutions GmbH**. Neben meinem Studium bin ich **Freelancer** und biete meine Expertise in **Webentwicklung, Backend-Technologien und IT-Consulting** an.
        </p>
      </section>
      
      <section className="max-w-4xl">
        <h2 className="text-3xl font-bold mb-4">Meine Fähigkeiten 🚀</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <div className="bg-gray-800 p-4 rounded-lg">Web-Apps</div>
          <div className="bg-gray-800 p-4 rounded-lg">React & Next.js</div>
          <div className="bg-gray-800 p-4 rounded-lg">Node.js & Express</div>
          <div className="bg-gray-800 p-4 rounded-lg">Django & PHP</div>
          <div className="bg-gray-800 p-4 rounded-lg">WordPress & SEO</div>
          <div className="bg-gray-800 p-4 rounded-lg">Netzwerktechnik</div>
          <div className="bg-gray-800 p-4 rounded-lg">Systemintegration</div>
          <div className="bg-gray-800 p-4 rounded-lg">Cloud-Technologie (Nextcloud, Macs)</div>
        </div>
        <div className="my-10">
          <h3 className="text-3xl font-bold mb-4">Interessiert? Erfahre mehr über meine Projekte oder kontaktiere mich! 🔍</h3>
          <div className="flex flex-row">
            <div><a href="/projects" className="bg-blue-500 px-5 py-3 rounded-lg text-white font-semibold hover:bg-blue-600 transition">Meine Projekte</a></div>
            <div className="mx-4"><a href="/contact" className="bg-gray-500 px-5 py-3 rounded-lg text-white font-semibold hover:bg-gray-600 transition">Kontaktiere mich</a></div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
