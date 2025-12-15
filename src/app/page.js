'use client';
import { motion } from 'framer-motion';
import Navbar from './components/navbar';
import Hero from './components/home/Hero';
import ValueProps from './components/home/ValueProps';
import Services from './components/home/Services';
import Process from './components/home/Process';
import Tech from './components/home/Tech';
import MiniCase from './components/home/MiniCase';
import CTA from './components/home/CTA';
import Pricing from './components/home/Pricing';

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
      <ValueProps />
      <Services />
      <Process />
      <Pricing/>
      <Tech />
      <MiniCase />
      <CTA />
    </motion.main>
  );
}
