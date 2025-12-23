'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/navbar';

import AboutHero from '../components/about/AboutHero';
import QuickFacts from '../components/about/QuickFacts';
import Timeline from '../components/about/Timeline';
import SkillsGrid from '../components/about/SkillsGrid';
import Partners from '../components/about/Partners';
import AboutCTA from '../components/about/AboutCTA';
import Footers from '../components/home/Footer';

export default function AboutPage() {
  return (
    <motion.main
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.05 }}
      className="min-h-screen bg-gray-950 text-gray-100"
    >
      <Navbar />

      <AboutHero />
      <QuickFacts />

      <Timeline />
      <SkillsGrid />
      <Partners />
      <AboutCTA />
           <Footers/>
    </motion.main>
  );
}
