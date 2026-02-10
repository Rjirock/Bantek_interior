'use client';

import { motion } from "framer-motion";

export default function ServicesFourthSection() {
  return (
    <section className="relative h-[85vh] bg-[#050505] text-[#f3e4cf] overflow-hidden flex items-center">

      {/* cinematic lighting */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#d8c1a330] via-transparent to-black" />

      {/* ambient glow */}
      <div className="absolute left-1/2 top-1/2 w-[900px] h-[900px] bg-[#d8c1a340] blur-[280px] -translate-x-1/2 -translate-y-1/2" />

      {/* background visual */}
      <motion.img
        src="/ss2.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-25"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      />

      <div className="relative max-w-6xl mx-auto text-center px-12">

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[7px] text-[#d8c1a3] mb-8"
        >
          Begin Your Design Journey
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          viewport={{ once: true }}
          className="text-6xl font-light leading-tight mb-14"
        >
          Let’s craft interiors & exteriors that reflect
          <span className="text-[#d8c1a3]"> timeless luxury</span>
        </motion.h2>

        <motion.a
          whileHover={{ scale: 1.1, rotateX: 10 }}
          transition={{ type: "spring", stiffness: 160 }}
          href="/contact"
          style={{ perspective: 1200 }}
          className="inline-block px-16 py-6 rounded-2xl bg-[#d8c1a3] text-black tracking-widest uppercase text-sm font-medium shadow-[0_25px_100px_rgba(216,193,163,0.7)] hover:shadow-[0_35px_140px_rgba(216,193,163,1)]"
        >
          Book a Design Consultation →
        </motion.a>

      </div>
    </section>
  );
}
