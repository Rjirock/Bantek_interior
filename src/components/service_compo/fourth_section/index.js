'use client';

import { motion } from "framer-motion";

export default function ServicesFourthSection() {
  return (
    <section
      className="
        relative
        min-h-[70vh]
        sm:min-h-[80vh]
        lg:min-h-screen
        bg-[#050505]
        text-[#f3e4cf]
        overflow-hidden
        flex items-center
      "
    >

      {/* cinematic lighting */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#d8c1a330] via-transparent to-black" />

      {/* responsive ambient glow */}
      <div
        className="
          absolute left-1/2 top-1/2
          w-[260px] h-[260px]
          sm:w-[420px] sm:h-[420px]
          md:w-[650px] md:h-[650px]
          lg:w-[900px] lg:h-[900px]
          bg-[#d8c1a340]
          blur-[160px] sm:blur-[220px] lg:blur-[280px]
          -translate-x-1/2 -translate-y-1/2
        "
      />

      {/* background visual */}
      <motion.img
        src="/ss2.jpg"
        alt="Luxury interior & exterior"
        className="
          absolute inset-0
          w-full h-full
          object-cover
          opacity-20 sm:opacity-25 lg:opacity-30
        "
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: "easeOut" }}
      />

      <div
        className="
          relative
          max-w-6xl mx-auto
          text-center
          px-4 sm:px-8 md:px-12
        "
      >

        {/* subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            uppercase
            tracking-[3px]
            sm:tracking-[6px]
            md:tracking-[8px]
            text-[#d8c1a3]
            mb-4 sm:mb-6 md:mb-8
            text-[10px] sm:text-xs md:text-sm
          "
        >
          Begin Your Design Journey
        </motion.p>

        {/* heading */}
        <motion.h2
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="
            font-light leading-tight
            mb-8 sm:mb-12
            text-[1.6rem]
            sm:text-3xl
            md:text-4xl
            lg:text-6xl
          "
        >
          Let’s craft interiors & exteriors that reflect
          <span className="text-[#d8c1a3]"> timeless luxury</span>
        </motion.h2>

        {/* CTA */}
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.06, rotateX: 6 }}
          transition={{ type: "spring", stiffness: 140, damping: 18 }}
          style={{ perspective: 1200 }}
          className="
            inline-block
            px-6 sm:px-10 md:px-14
            py-3 sm:py-4 md:py-6
            rounded-lg sm:rounded-xl md:rounded-2xl
            bg-[#d8c1a3]
            text-black
            tracking-widest uppercase
            text-[10px] sm:text-xs md:text-sm
            font-medium
            shadow-[0_14px_60px_rgba(216,193,163,0.7)]
            hover:shadow-[0_30px_120px_rgba(216,193,163,1)]
            transition-shadow duration-500
          "
        >
          Book a Design Consultation →
        </motion.a>

      </div>
    </section>
  );
}
          
