import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_35%_at_30%_25%,rgba(197,228,243,0.35),transparent),radial-gradient(50%_35%_at_70%_75%,rgba(248,205,218,0.25),transparent)]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-24 md:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-[11px] text-gray-700 backdrop-blur"
          >
            Kollareddy Geethika • Digital Artist & UX Designer
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-4xl font-semibold leading-tight text-gray-900 sm:text-6xl"
          >
            Digital artistry meets motion-led UX.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 max-w-xl text-base text-gray-700 sm:text-lg"
          >
            Crafting immersive, tactile experiences with 3D, kinetic type, and cinematic prototypes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#portfolio" className="group relative inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-white shadow-lg shadow-gray-900/10 transition hover:shadow-xl">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#c5e4f3] to-[#f8cdda] opacity-20 transition group-hover:opacity-40" />
              <span className="relative">Explore Work</span>
            </a>
            <a href="#contact" className="relative inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/70 px-6 py-3 text-gray-800 backdrop-blur transition hover:border-gray-400">
              Contact</a>
          </motion.div>
          <div className="mt-10 flex flex-wrap gap-2 text-xs text-gray-600">
            {['UI/UX','Motion','Prototyping','Branding','3D'].map((t)=> (
              <span key={t} className="rounded-full bg-white/70 px-3 py-1 ring-1 ring-gray-200 backdrop-blur">{t}</span>
            ))}
          </div>
        </div>
        <div className="relative hidden h-[520px] w-full md:block">
          <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-[radial-gradient(60%_60%_at_30%_30%,rgba(197,228,243,0.35),transparent),radial-gradient(60%_60%_at_80%_70%,rgba(248,205,218,0.25),transparent)]" />
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative h-full w-full overflow-hidden rounded-3xl border border-white/60 bg-white/60 shadow-xl backdrop-blur"
          >
            <div className="absolute inset-0" aria-hidden />
          </motion.div>
        </div>
      </div>

      {!reduced && (
        <motion.div
          className="pointer-events-none absolute inset-x-0 bottom-10 z-10 text-center text-xs text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Scroll to explore ↓
        </motion.div>
      )}
    </section>
  );
}
