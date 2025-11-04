import React from 'react';
import { motion } from 'framer-motion';

const tools = [
  { name: 'Figma', color: 'from-[#c5e4f3] to-white' },
  { name: 'Adobe', color: 'from-[#f8cdda] to-white' },
  { name: 'Blender', color: 'from-[#c5e4f3] to-[#f8cdda]' },
  { name: 'Webflow', color: 'from-white to-[#c5e4f3]' },
];

export default function ProcessSkills() {
  return (
    <section id="process" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">Process & Skills</h2>
          <p className="mt-2 max-w-2xl text-gray-700">A motion-first workflow, tuned for clarity and delight.</p>
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_0%_0%,rgba(197,228,243,0.25),transparent),radial-gradient(60%_60%_at_100%_100%,rgba(248,205,218,0.25),transparent)]" />
          <div className="relative grid grid-cols-2 gap-4 sm:grid-cols-4">
            {tools.map((t) => (
              <motion.div
                key={t.name}
                whileHover={{ y: -6 }}
                className={`rounded-2xl border border-gray-200 bg-gradient-to-br ${t.color} p-5 text-center shadow-sm`}
              >
                <div className="text-sm font-semibold text-gray-900">{t.name}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-4">
          {['Discover','Ideate','Prototype','Ship'].map((stage, i) => (
            <motion.div key={stage} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.5, delay: i*0.05 }} className="rounded-2xl border border-gray-200 bg-white/70 p-5 shadow-sm backdrop-blur">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-gray-900">{stage}</div>
                <div className="h-2 w-2 rounded-full bg-gray-900" />
              </div>
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
                <motion.div className="h-full rounded-full bg-gray-900" initial={{ width: 0 }} whileInView={{ width: `${60 + i*10}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
