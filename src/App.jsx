import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import ProcessSkills from './components/ProcessSkills';
import Portfolio from './components/Portfolio';
import ContactFooter from './components/ContactFooter';

export default function App() {
  const [reducedMotion, setReducedMotion] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="text-sm font-semibold text-gray-900">Kollareddy Geethika</a>
          <nav className="hidden items-center gap-6 text-sm text-gray-700 sm:flex">
            <a className="hover:text-gray-900" href="#process">Process</a>
            <a className="hover:text-gray-900" href="#portfolio">Gallery</a>
            <a className="hover:text-gray-900" href="#contact">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 text-xs text-gray-700">
              <input type="checkbox" checked={reducedMotion} onChange={(e)=>setReducedMotion(e.target.checked)} />
              Reduce motion
            </label>
          </div>
        </div>
      </header>

      <main>
        <Hero reducedMotion={reducedMotion} />
        <ProcessSkills />
        <Portfolio />
        <ContactFooter />
      </main>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pointer-events-none fixed inset-x-0 top-0 z-30 h-24 bg-gradient-to-b from-white to-transparent"
        aria-hidden
      />
    </div>
  );
}
