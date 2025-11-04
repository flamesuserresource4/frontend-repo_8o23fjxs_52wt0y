import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const SkillBubble = ({ label, delay = 0, x = 0, y = 0, reduced }) => {
  return (
    <motion.div
      className="absolute select-none rounded-full bg-white/60 backdrop-blur-md shadow-lg ring-1 ring-white/50 px-3 py-1 text-xs text-gray-800"
      initial={{ opacity: 0, scale: 0.8, x, y }}
      animate={reduced ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1, x: [x, x + 8, x - 6, x], y: [y, y - 6, y + 8, y] }}
      transition={{ duration: 6, ease: 'easeInOut', repeat: reduced ? 0 : Infinity, delay }}
    >
      {label}
    </motion.div>
  );
};

export default function Hero({ reducedMotion }) {
  const shouldReduce = useReducedMotion() || reducedMotion;

  const bubbles = useMemo(() => ([
    { label: 'UI/UX', x: -120, y: -40, delay: 0.2 },
    { label: 'Motion', x: 120, y: -10, delay: 0.6 },
    { label: 'Prototyping', x: -60, y: 80, delay: 0.9 },
    { label: 'Branding', x: 140, y: 70, delay: 1.2 },
  ]), []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Soft gradient glow overlay for depth */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_30%,rgba(197,228,243,0.35),transparent),radial-gradient(40%_30%_at_80%_70%,rgba(248,205,218,0.25),transparent)]" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
        <motion.span
          className="mb-4 inline-flex items-center rounded-full border border-gray-200/70 bg-white/60 px-3 py-1 text-[11px] font-medium text-gray-600 backdrop-blur-md"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          aria-label="Kollareddy Geethika — Digital Artist & UX Designer"
        >
          Kollareddy Geethika
        </motion.span>

        <motion.h1
          className="max-w-3xl text-4xl font-semibold leading-tight text-gray-900 sm:text-6xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Designing digital experiences that feel alive.
        </motion.h1>

        <motion.p
          className="mt-4 max-w-2xl text-base text-gray-700 sm:text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Digital Artist & UX Designer — crafting immersive, motion-driven experiences.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a href="#portfolio" className="group relative inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-white shadow-lg shadow-gray-900/10 transition hover:shadow-xl">
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#c5e4f3] to-[#f8cdda] opacity-20 transition group-hover:opacity-40" />
            <span className="relative">Explore My World</span>
          </a>
          <a href="#contact" className="relative inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/70 px-6 py-3 text-gray-800 backdrop-blur-md transition hover:border-gray-400">
            Contact Me
          </a>
        </motion.div>

        {/* Floating skill bubbles */}
        <div className="pointer-events-none relative mt-10 h-40 w-full max-w-lg">
          {bubbles.map((b, idx) => (
            <SkillBubble key={idx} {...b} reduced={shouldReduce} />
          ))}
        </div>
      </div>
    </section>
  );
}
