import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const Counter = ({ label, value }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [display, setDisplay] = useState(0);

  React.useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = parseInt(value, 10);
    const duration = 1200;
    const step = 16;
    const increment = Math.max(1, Math.round((end - start) / (duration / step)));
    const id = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(id);
      }
      setDisplay(start);
    }, step);
    return () => clearInterval(id);
  }, [inView, value]);

  return (
    <div ref={ref} className="rounded-xl bg-white/70 p-4 text-center shadow-sm ring-1 ring-gray-200 backdrop-blur">
      <div className="text-3xl font-semibold text-gray-900">{display}+</div>
      <div className="mt-1 text-xs font-medium text-gray-600">{label}</div>
    </div>
  );
};

export default function About() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    setTilt({ x, y });
  };

  return (
    <section id="about" className="relative w-full bg-white py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
        <div>
          <motion.div
            onMouseMove={onMouseMove}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
            style={{ transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)` }}
            className="relative aspect-[4/5] w-full cursor-pointer select-none rounded-3xl bg-white/60 p-3 shadow-xl ring-1 ring-white/60 backdrop-blur-lg"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#c5e4f3]/50 to-[#f8cdda]/40" />
            <div className="relative flex h-full w-full items-center justify-center rounded-2xl bg-white/70 shadow-inner">
              <div className="h-40 w-40 rounded-full bg-gradient-to-tr from-gray-200 to-white shadow-inner" aria-hidden />
            </div>
            <div className="pointer-events-none absolute -left-6 -top-6 h-12 w-12 rounded-xl bg-white/70 shadow-md ring-1 ring-white/60" />
            <div className="pointer-events-none absolute -right-6 -bottom-6 h-10 w-10 rounded-full bg-white/70 shadow-md ring-1 ring-white/60" />
          </motion.div>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">About Geethika</h2>
          <p className="mt-4 text-gray-700">
            I’m a Digital Artist & UX Designer blending motion, 3D experiments, and human-centered design to craft memorable digital experiences.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-3">
            <Counter label="Projects" value="25" />
            <Counter label="Case Studies" value="10" />
            <Counter label="Avg. Campaign ROI" value="60" />
          </div>
          <a
            href="#"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-gray-300 bg-white/80 px-6 py-3 text-gray-800 shadow-sm backdrop-blur transition hover:border-gray-400"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
