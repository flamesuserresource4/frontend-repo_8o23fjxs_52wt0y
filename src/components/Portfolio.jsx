import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const items = [
  { id: 1, title: 'Infimobile', kind: 'Case Study', tags: ['Telecom','Motion'], exp: false },
  { id: 2, title: 'Nunu India', kind: 'Experimental', tags: ['3D','Kinetic'], exp: true },
  { id: 3, title: 'Rangtaali Navratri', kind: 'Case Study', tags: ['Brand','Lottie'], exp: false },
  { id: 4, title: 'VIP Encrypted SIM', kind: 'Experimental', tags: ['Framer','Three'], exp: true },
  { id: 5, title: 'Yummy', kind: 'Case Study', tags: ['Design System'], exp: false },
];

function Tile({ data, onOpen }) {
  const [hover, setHover] = useState(false);
  return (
    <motion.button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onOpen(data)}
      whileHover={{ y: -6 }}
      className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-gray-200 bg-white/70 p-4 text-left shadow-sm backdrop-blur"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#c5e4f3]/50 to-[#f8cdda]/40" />
      <div className="relative flex h-full w-full items-end rounded-2xl bg-white/70 p-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[11px] text-gray-700 ring-1 ring-gray-200">{data.kind}</div>
          <div className="mt-2 text-lg font-semibold text-gray-900">{data.title}</div>
          <div className="mt-1 flex flex-wrap gap-2 text-[11px] text-gray-600">
            {data.tags.map((t) => (
              <span key={t} className="rounded-full bg-white/70 px-2 py-1 ring-1 ring-gray-200">{t}</span>
            ))}
          </div>
        </div>
      </div>
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        animate={{ opacity: hover ? 1 : 0 }}
        style={{ background: 'radial-gradient(800px circle at var(--mx,50%) var(--my,50%), rgba(0,0,0,0.06), transparent 40%)' }}
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          e.currentTarget.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`);
          e.currentTarget.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`);
        }}
      />
    </motion.button>
  );
}

export default function Portfolio() {
  const [onlyExp, setOnlyExp] = useState(false);
  const [active, setActive] = useState(null);

  const list = onlyExp ? items.filter((i) => i.exp) : items;

  return (
    <section id="portfolio" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">Gallery</h2>
            <p className="mt-2 max-w-xl text-gray-700">A curated view of interactive work, motion experiments, and UX case studies.</p>
          </div>
          <button onClick={() => setOnlyExp((s) => !s)} className={`rounded-full border px-5 py-2 text-sm transition ${onlyExp ? 'border-gray-900 bg-gray-900 text-white' : 'border-gray-300 bg-white text-gray-800'}`}>{onlyExp ? 'Showing Experimental' : 'Experimental Filter'}</button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((d) => (
            <Tile key={d.id} data={d} onOpen={setActive} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div className="fixed inset-0 z-50 grid place-items-center bg-white/40 backdrop-blur" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActive(null)}>
            <motion.div className="mx-4 max-w-3xl rounded-3xl border border-gray-200 bg-white p-6 shadow-xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} onClick={(e)=>e.stopPropagation()}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-2xl font-semibold text-gray-900">{active.title}</div>
                  <p className="mt-1 text-sm text-gray-700">Role: Digital Artist, UX Designer • Process: Discover → Ideate → Prototype → Ship</p>
                </div>
                <button onClick={() => setActive(null)} className="rounded-full border border-gray-300 px-3 py-1 text-sm text-gray-700">Close</button>
              </div>
              <div className="mt-4 aspect-video w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white ring-1 ring-gray-100" />
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <div className="font-medium text-gray-900">Tools</div>
                  <p>Figma, After Effects, Blender, Framer Motion</p>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Outcome</div>
                  <p>Improved engagement & polished motion system.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
