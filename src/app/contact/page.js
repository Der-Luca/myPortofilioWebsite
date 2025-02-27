'use client';

import { motion } from "framer-motion";
import Navbar from "../components/navbar";
export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6">
     
      <Navbar/>
      <section className="text-center mt-20">
        <motion.h1 
          className="text-5xl font-bold mb-6"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Kontaktiere mich
        </motion.h1>
      </section>
      
      <section className="max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <motion.div 
          className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => window.location.href = 'tel:+4917632279415'}
        >
          <h2 className="text-xl font-bold mb-3">📞 Anrufen</h2>
          <p className="text-gray-400">+49 176 32279415</p>
        </motion.div>
        <motion.div 
          className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={() => window.location.href = 'https://wa.me/4917632279415?text=Hallo%20ich%20bin%20an%20ihren%20Service%20interessiert'}
        >
          <h2 className="text-xl font-bold mb-3">💬 WhatsApp</h2>
          <p className="text-gray-400">Nachricht senden</p>
        </motion.div>
        <motion.div 
          className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          onClick={() => window.location.href = 'mailto:lucaplessing@icloud.com?subject=Kontakt&body=Hallo%20ich%20bin%20an%20ihren%20Service%20interessiert'}
        >
          <h2 className="text-xl font-bold mb-3">📧 E-Mail</h2>
          <p className="text-gray-400">lucaplessing@icloud.com</p>
        </motion.div>
      </section>
    </main>
  );
}
