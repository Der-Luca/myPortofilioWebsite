'use client';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar';
import Hero from '../components/services/Hero';

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen  text-gray-100"
    >
      <Navbar />
      <Hero />
      
    </motion.main>
  );
}
