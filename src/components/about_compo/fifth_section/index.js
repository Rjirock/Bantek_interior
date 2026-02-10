'use client';

import { motion } from "framer-motion";

export default function AboutFifthSection() {
  return (
    <section className="relative min-h-screen bg-[#050505] text-[#f3e4cf] overflow-hidden flex items-center">

      {/* cinematic layered light */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#d8c1a320] via-transparent to-black" />

      {/* ambient glow */}
      <div
        className="
          absolute left-1/2 top-1/2
          w-[300px] h-[300px]
          sm:w-[500px] sm:h-[500px]
          lg:w-[900px] lg:h-[900px]
          bg-[#d8c1a330]
          blur-[160px] sm:blur-[220px] lg:blur-[280px]
          -translate-x-1/2 -translate-y-1/2
        "
      />

      {/* subtle background texture image */}
      <motion.img
        src="/ss2.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-20 sm:opacity-25"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      />

      <div className="relative max-w-6xl mx-auto text-center px-6 sm:px-12">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          viewport={{ once: true }}
          className="
            uppercase
            tracking-[4px] sm:tracking-[7px]
            text-[#d8c1a3]
            mb-4 sm:mb-8
            text-sm sm:text-base
          "
        >
          Let’s Create Together
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          viewport={{ once: true }}
          className="
            text-3xl sm:text-5xl lg:text-6xl
            font-light
            leading-tight
            mb-8 sm:mb-14
          "
        >
          Ready to transform your space into a
          <span className="text-[#d8c1a3]"> masterpiece</span>?
        </motion.h2>

        <motion.a
          whileHover={{ scale: 1.08, rotateX: 8 }}
          transition={{ type: "spring", stiffness: 160 }}
          href="/contact"
          style={{ perspective: 1200 }}
          className="
            inline-block
            px-8 sm:px-16
            py-4 sm:py-6
            rounded-xl sm:rounded-2xl
            bg-[#d8c1a3]
            text-black
            tracking-widest uppercase
            text-xs sm:text-sm
            font-medium
            shadow-[0_15px_80px_rgba(216,193,163,0.7)]
            hover:shadow-[0_35px_140px_rgba(216,193,163,1)]
          "
        >
          Start Your Design Journey →
        </motion.a>

      </div>
    </section>
  );
}
