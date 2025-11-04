import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projectsSeed = [
  { id: 1, title: 'Infimobile', tag: 'Case Study', experimental: false, tools: ['Figma', 'After Effects'], summary: 'Telecom app redesign with motion-led onboarding.' },
  { id: 2, title: 'Nunu India', tag: 'Experimental', experimental: true, tools: ['Blender', 'GSAP'], summary: 'Playful 3D microinteractions + kinetic type.' },
  { id: 3, title: 'Rangtaali Navratri', tag: 'Case Study', experimental: false, tools: ['Figma', 'Lottie'], summary: 'Festival brand site with animated patterns.' },
  { id: 4, title: 'VIP Encrypted SIM', tag: 'Experimental', experimental: true, tools: ['Three.js', 'Framer Motion'], summary: '3D chip reveal + secure flows prototype.' },
  { id: 5, title: 'Yummy', tag: 'Case Study', experimental: false, tools: ['Figma', 'After Effects'], summary: 'Food delivery design system + motion.' },
];

function GlowCard({ children, onClick }) {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  return (
    <div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setPos({ x, y });
      }}
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-gray-200 bg-white/70 p-4 shadow-sm backdrop-blur transition-transform duration-300 will-change-transform hover:-translate-y-1"
      style={{ perspective: 800 }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${pos.x}% ${pos.y}%, rgba(197,228,243,0.25), transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
}

export default function Portfolio() {
  const [showExperimental, setShowExperimental] = useState(false);
  const [active, setActive] = useState(null);

  const projects = useMemo(() => {
    return projectsSeed.filter((p) => (showExperimental ? p.experimental : true));
  }, [showExperimental]);

  return (
    <section id="portfolio" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">Portfolio</h2>
            <p className="mt-2 text-gray-700">Interactive projects, motion experiments, and case studies.</p>
          </div>
          <button
            onClick={() => setShowExperimental((s) => !s)}
            className={`inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm transition ${showExperimental ? 'border-gray-900 bg-gray-900 text-white' : 'border-gray-300 bg-white text-gray-800'} `}
            aria-pressed={showExperimental}
          >
            {showExperimental ? 'Showing Experimental' : 'Experimental Filter'}
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <GlowCard key={p.id} onClick={() => setActive(p)}>
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#c5e4f3]/50 to-[#f8cdda]/50">
                <div className="flex h-full w-full items-center justify-center text-gray-800">
                  <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium backdrop-blur">{p.tag}</span>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-gray-700">{p.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tools.map((t) => (
                    <span key={t} className="rounded-full bg-white/70 px-2 py-1 text-[11px] text-gray-700 ring-1 ring-gray-200 backdrop-blur">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-white/40 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="mx-4 max-w-2xl rounded-2xl border border-gray-200 bg-white p-6 shadow-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">{active.title}</h3>
                  <p className="mt-1 text-sm text-gray-700">{active.summary}</p>
                </div>
                <button onClick={() => setActive(null)} className="rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-700">Close</button>
              </div>
              <div className="mt-4 aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-white ring-1 ring-gray-100">
                <div className="flex h-full w-full items-center justify-center text-gray-500">Case visuals placeholder</div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <div className="font-medium text-gray-900">Role</div>
                  <p>Digital Artist, UX Designer</p>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Process</div>
                  <p>Discover → Ideate → Prototype → Ship</p>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Tools</div>
                  <p>{active.tools.join(', ')}</p>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Outcome</div>
                  <p>Selected metrics and impact highlights.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
