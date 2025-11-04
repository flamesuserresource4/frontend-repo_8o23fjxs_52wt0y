import React from 'react';
import { motion } from 'framer-motion';

export default function ContactFooter() {
  return (
    <section id="contact" className="bg-white pt-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">Let’s collaborate</h2>
            <p className="mt-3 text-gray-700">Have a project or want to jam on motion and 3D? Drop a message or schedule a call.</p>
            <div className="mt-6 flex items-center gap-4 text-sm">
              <a className="rounded-full border border-gray-300 bg-white/80 px-4 py-2 text-gray-800 shadow-sm backdrop-blur transition hover:border-gray-400" href="https://linkedin.com/in/kollareddygeethika" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="rounded-full border border-gray-300 bg-white/80 px-4 py-2 text-gray-800 shadow-sm backdrop-blur transition hover:border-gray-400" href="https://behance.net/kollareddygeethika" target="_blank" rel="noreferrer">Behance</a>
              <a className="rounded-full border border-gray-300 bg-white/80 px-4 py-2 text-gray-800 shadow-sm backdrop-blur transition hover:border-gray-400" href="mailto:kollareddygeethika@gmail.com">Email</a>
            </div>
            <a href="#" className="mt-6 inline-block text-sm text-gray-700 underline underline-offset-4">Schedule a Call</a>
          </div>

          <form onSubmit={(e)=>e.preventDefault()} className="relative rounded-2xl border border-gray-200 bg-white/60 p-6 shadow-sm backdrop-blur">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(60%_60%_at_20%_10%,rgba(197,228,243,0.25),transparent),radial-gradient(60%_60%_at_90%_90%,rgba(248,205,218,0.25),transparent)]" />
            <div className="relative grid gap-4">
              <div>
                <label className="mb-1 block text-xs font-medium text-gray-600" htmlFor="name">Name</label>
                <input id="name" className="w-full rounded-xl border border-gray-300 bg-white/80 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-900" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-gray-600" htmlFor="email">Email</label>
                <input id="email" type="email" className="w-full rounded-xl border border-gray-300 bg-white/80 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-900" placeholder="you@example.com" />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-gray-600" htmlFor="message">Message</label>
                <textarea id="message" rows="4" className="w-full rounded-xl border border-gray-300 bg-white/80 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-gray-900" placeholder="Tell me about your idea…" />
              </div>
              <motion.button whileTap={{ scale: 0.98 }} className="relative inline-flex items-center justify-center overflow-hidden rounded-full border border-gray-300 bg-white px-6 py-3 text-gray-900 shadow-sm transition hover:border-gray-400">
                <span className="absolute inset-0 -z-0 bg-gradient-to-r from-[#c5e4f3]/50 to-[#f8cdda]/50 opacity-0 transition-opacity duration-300 hover:opacity-100" />
                <span className="relative">Send Message</span>
              </motion.button>
            </div>
          </form>
        </div>
      </div>

      <footer className="mt-20 border-t border-gray-100 py-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <p className="text-sm text-gray-600">© 2025 Kollareddy Geethika | Designed with ❤️</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="relative h-10 w-10 overflow-hidden rounded-full border border-gray-300 bg-white/80 shadow-sm">
            <span className="absolute inset-0 animate-pulse bg-[radial-gradient(60%_60%_at_50%_50%,rgba(197,228,243,0.45),transparent)]" />
            <span className="relative text-sm text-gray-800">Top</span>
          </button>
        </div>
      </footer>
    </section>
  );
}
