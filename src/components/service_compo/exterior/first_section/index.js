'use client';

import { motion } from "framer-motion";

export default function ExteriorFirstSection() {
  return (
    <section className="relative min-h-screen bg-[#050505] text-[#f3e4cf] overflow-hidden">

      {/* sharp architectural gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-[#0f0f0f] to-[#d8c1a320]" />

      {/* strong central glow */}
      <div className="
        absolute left-1/2 top-1/2 
        w-[300px] h-[300px] 
        sm:w-[500px] sm:h-[500px] 
        lg:w-[800px] lg:h-[800px]
        bg-[#d8c1a330] blur-[160px] sm:blur-[220px] lg:blur-[260px] 
        -translate-x-1/2 -translate-y-1/2
      " />

      {/* exterior architecture visual */}
      <motion.img
        src="/a1.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-30 sm:opacity-35"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: "easeOut" }}
      />

      <div className="relative max-w-7xl mx-auto min-h-screen flex items-center px-6 sm:px-12">

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4 }}
          className="max-w-3xl"
        >
          <p className="
            uppercase 
            tracking-[4px] sm:tracking-[8px]
            text-[#d8c1a3] 
            mb-4 sm:mb-6
            text-sm sm:text-base
          ">
            Architecture & Exteriors
          </p>

          <h1 className="
            text-3xl sm:text-5xl lg:text-7xl 
            font-light 
            leading-tight 
            mb-6 sm:mb-10
          ">
            Designing bold structures that define
            <span className="text-[#d8c1a3]"> modern luxury living</span>
          </h1>

          <p className="
            text-base sm:text-lg lg:text-xl 
            text-[#e6dccb]/80 
            leading-relaxed 
            max-w-2xl
          ">
            We create architectural exteriors that blend strength, beauty, and
            innovation — delivering timeless facades and structural elegance.
          </p>
        </motion.div>
      </div>

      {/* subtle architectural lines */}
      <div className="absolute bottom-8 sm:bottom-24 left-8 sm:left-24 w-24 sm:w-48 h-[1px] bg-[#d8c1a3]" />
      <div className="absolute top-16 sm:top-32 right-8 sm:right-32 w-[1px] h-24 sm:h-48 bg-[#d8c1a3]" />

    </section>
  );
}
