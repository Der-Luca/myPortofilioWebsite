'use client';
import { motion } from "framer-motion";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <motion.main 
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Navbar />
      <section className="text-center mt-20">
        <h1 className="text-5xl font-bold mb-4">Hey, ich bin Luca! 👋</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Willkommen auf meiner Portfolio-Seite! Ich bin **Full-Stack-Entwickler & Systemintegrator** mit Erfahrung in **Webentwicklung, Netzwerktechnik und IT-Infrastruktur**. Ich entwickle **moderne Webanwendungen mit Next.js, Tailwind CSS & Node.js** und kümmere mich um **sichere & effiziente IT-Lösungen**. 🚀
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <a 
            href="/about" 
            className="bg-blue-500 px-5 py-3 rounded-lg text-white font-semibold hover:bg-blue-600 transition"
          >
            Mehr über mich
          </a>
          <a 
            href="projects" 
            className="bg-gray-700 px-5 py-3 rounded-lg text-white font-semibold hover:bg-gray-600 transition"
          >
            Projekte ansehen
          </a>
        </div>
      </section>
      
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-3">Folge mir</h2>
        <div className="flex gap-4 justify-center">
          <a 
            href="https://de.linkedin.com/in/luca-samuel-ple%C3%9Fing-233336274?original_referer=https%3A%2F%2Fwww.google.com%2F" 
            className="text-purple-400 hover:text-purple-500 transition"
          >LinkedIn</a>
        </div>
      </section>
    </motion.main>
  );
}
