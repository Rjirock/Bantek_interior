'use client';

import { motion } from "framer-motion";

export default function InteriorFourthSection() {
  return (
    <section className="relative min-h-screen bg-[#050505] text-[#f3e4cf] overflow-hidden flex items-center">

      {/* warm luxury gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#d8c1a335] via-transparent to-black" />

      {/* ambient glow */}
      <div
        className="
          absolute left-1/2 top-1/2
          w-[240px] h-[240px]
          sm:w-[500px] sm:h-[500px]
          lg:w-[950px] lg:h-[950px]
          bg-[#d8c1a340]
          blur-[140px] sm:blur-[220px] lg:blur-[300px]
          -translate-x-1/2 -translate-y-1/2
        "
      />

      {/* soft interior mood image */}
      <motion.img
        src="/i4.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-20 sm:opacity-30"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: "easeOut" }}
        alt="Luxury interior"
      />

      <div className="relative max-w-6xl mx-auto text-center px-4 sm:px-12">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          viewport={{ once: true }}
          className="
            uppercase
            tracking-[3px] sm:tracking-[7px]
            text-[#d8c1a3]
            mb-3 sm:mb-8
            text-xs sm:text-base
          "
        >
          Transform Your Interiors
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          viewport={{ once: true }}
          className="
            text-2xl sm:text-5xl lg:text-6xl
            font-light
            leading-tight
            mb-6 sm:mb-14
          "
        >
          Let’s create interiors that reflect
          <span className="text-[#d8c1a3]"> comfort, elegance & luxury</span>
        </motion.h2>

        <motion.a
          whileHover={{ scale: 1.06, rotateX: 6 }}
          transition={{ type: "spring", stiffness: 160 }}
          href="/contact"
          style={{ perspective: 1200 }}
          className="
            inline-block
            px-6 sm:px-16
            py-3 sm:py-6
            rounded-lg sm:rounded-2xl
            bg-[#d8c1a3]
            text-black
            tracking-widest uppercase
            text-xs sm:text-sm
            font-medium
            shadow-[0_12px_60px_rgba(216,193,163,0.7)]
            hover:shadow-[0_35px_150px_rgba(216,193,163,1)]
          "
        >
          Start Your Interior Project →
        </motion.a>

      </div>
    </section>
  );
}
