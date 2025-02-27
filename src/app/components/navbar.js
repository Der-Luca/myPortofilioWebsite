'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-800 py-4 px-6 flex justify-between items-center fixed top-0 shadow-md z-50">
      <h2 className="text-xl font-bold">Luca Pleßing</h2>

      {/* Burger-Button für Mobile */}
      <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-4">
        <a href="/" className="text-white hover:text-gray-300 px-4">Home</a>
        <a href="/services" className="text-white hover:text-gray-300 px-4">Services</a>
        <a href="/projects" className="text-white hover:text-gray-300 px-4">Projekte</a>
        <a href="/about" className="text-white hover:text-gray-300 px-4">Über mich</a>
        <a href="/contact" className="text-white hover:text-gray-300 px-4">Kontakt</a>
      </div>

      {/* Mobile Navigation mit Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="absolute top-16 right-0 bg-gray-800 w-full flex flex-col items-center md:hidden py-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <a href="/" className="text-white hover:text-gray-300 py-2" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="/services" className="text-white hover:text-gray-300 py-2" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="/projects" className="text-white hover:text-gray-300 py-2" onClick={() => setMenuOpen(false)}>Projekte</a>
            <a href="/about" className="text-white hover:text-gray-300 py-2" onClick={() => setMenuOpen(false)}>Über mich</a>
            <a href="/contact" className="text-white hover:text-gray-300 py-2" onClick={() => setMenuOpen(false)}>Kontakt</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
