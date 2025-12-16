'use client';
import { motion } from 'framer-motion';
import Navbar from './components/navbar';
import Hero from './components/home/Hero';
import ValueProps from './components/home/ValueProps';
import Services from './components/home/Services';
import Process from './components/home/Process';
import Pricing from './components/home/Pricing';
import ConsultingCTA from './components/home/ConsultingCTA';
import Footers from './components/home/Footer';
import SelectedWork from './components/home/SelectedWork';
import Testimonials from './components/home/Testimonials';

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
      <ConsultingCTA/>
      <Services />
      <Process />
     <SelectedWork/>
      <Testimonials />
      <Pricing/>
      <Footers/>
    </motion.main>
  );
}
