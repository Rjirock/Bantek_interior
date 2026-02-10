'use client';

import { motion } from "framer-motion";

export default function ExteriorFourthSection() {
  return (
    <section className="
      relative
      min-h-[85vh]
      sm:min-h-[90vh]
      lg:min-h-screen
      bg-[#050505]
      text-[#f3e4cf]
      overflow-hidden
      flex items-center
    ">

      {/* architectural gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-[#0c0c0c] to-[#d8c1a320]" />

      {/* responsive ambient glow */}
      <div
        className="
          absolute left-1/2 top-1/2
          w-[160px] h-[160px]
          sm:w-[320px] sm:h-[320px]
          md:w-[520px] md:h-[520px]
          lg:w-[900px] lg:h-[900px]
          bg-[#d8c1a330]
          blur-[120px] sm:blur-[180px] md:blur-[220px] lg:blur-[280px]
          -translate-x-1/2 -translate-y-1/2
        "
      />

      {/* background image */}
      <motion.img
        src="/a2.jpg"
        alt="Luxury architecture"
        className="
          absolute inset-0
          w-full h-full
          object-cover
          opacity-20
          sm:opacity-30
          lg:opacity-35
        "
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 14, ease: "easeOut" }}
      />

      {/* CONTENT */}
      <div className="
        relative
        w-full
        max-w-6xl
        mx-auto
        px-4
        sm:px-8
        md:px-12
        lg:px-16
        text-center
      ">

        {/* subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="
            uppercase
            tracking-[3px]
            sm:tracking-[6px]
            md:tracking-[8px]
            text-[#d8c1a3]
            mb-4
            sm:mb-6
            md:mb-8
            text-[10px]
            sm:text-xs
            md:text-sm
          "
        >
          Build Something Iconic
        </motion.p>

        {/* heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          viewport={{ once: true }}
          className="
            font-light
            leading-tight
            mb-6
            sm:mb-10
            md:mb-12
            text-[1.5rem]
            sm:text-3xl
            md:text-4xl
            lg:text-6xl
          "
        >
          Let’s design architecture that stands as a
          <span className="text-[#d8c1a3]"> timeless landmark</span>
        </motion.h2>

        {/* CTA */}
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05, rotateX: 4 }}
          transition={{ type: "spring", stiffness: 140, damping: 18 }}
          style={{ perspective: 1200 }}
          className="
            inline-block
            px-6
            sm:px-10
            md:px-14
            lg:px-16
            py-3
            sm:py-4
            md:py-5
            rounded-lg
            sm:rounded-xl
            md:rounded-2xl
            bg-[#d8c1a3]
            text-black
            tracking-widest
            uppercase
            text-[10px]
            sm:text-xs
            md:text-sm
            font-medium
            shadow-[0_10px_40px_rgba(216,193,163,0.7)]
            hover:shadow-[0_25px_120px_rgba(216,193,163,1)]
            transition-shadow duration-500
          "
        >
          Start Your Architecture Project →
        </motion.a>

      </div>

      {/* architectural accents – desktop only */}
      <div className="hidden lg:block absolute bottom-24 left-24 w-56 h-[1px] bg-[#d8c1a3]" />
      <div className="hidden lg:block absolute top-32 right-32 w-[1px] h-56 bg-[#d8c1a3]" />

    </section>
  );
}

