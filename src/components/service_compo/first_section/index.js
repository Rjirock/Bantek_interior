'use client';

import { motion } from "framer-motion";

export default function ServicesFirstSection() {
  return (
    <section className="relative py-40 bg-[#070707] text-[#f3e4cf] overflow-hidden">

      {/* architectural glow */}
      <div className="absolute left-1/2 top-1/2 w-[900px] h-[900px] bg-[#d8c1a320] blur-[260px] -translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-28 px-12 items-center">

        {/* Content Block */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[7px] text-[#d8c1a3] mb-6">
            Our Services
          </p>

          <h1 className="text-6xl font-light leading-tight mb-10">
            Interior & Exterior design shaped by
            <span className="text-[#d8c1a3]"> modern luxury</span>
          </h1>

          <p className="text-lg text-[#e6dccb]/80 max-w-xl leading-relaxed">
            We craft refined interiors and bold architectural exteriors that elevate
            lifestyle, functionality, and visual impact through thoughtful design.
          </p>
        </motion.div>

        {/* Visual Composition */}
        <motion.div
          whileHover={{ scale: 1.05, rotateY: -6 }}
          transition={{ type: "spring", stiffness: 90 }}
          style={{ perspective: 1200 }}
          className="relative"
        >
          <img
            src="/ss3.jpg"
            className="rounded-3xl shadow-[0_40px_140px_rgba(0,0,0,0.9)]"
            alt="Exterior architecture"
          />

          {/* floating interior preview */}
          <motion.img
            src="/ss1.jpg"
            className="absolute -bottom-20 -left-20 w-64 rounded-2xl shadow-[0_30px_100px_rgba(0,0,0,0.85)] border border-[#d8c1a340]"
            whileHover={{ scale: 1.08 }}
          />
        </motion.div>

      </div>
    </section>
  );
}
