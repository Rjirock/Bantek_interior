'use client';

import { motion } from "framer-motion";

export default function InteriorFirstSection() {
  return (
    <section className="relative min-h-screen bg-[#050505] text-[#f3e4cf] overflow-hidden">

      {/* warm interior light gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#d8c1a335] via-transparent to-black" />

      {/* soft ambient glow */}
      <div
        className="
          absolute left-1/2 top-1/2
          w-[250px] h-[250px]
          sm:w-[500px] sm:h-[500px]
          lg:w-[900px] lg:h-[900px]
          bg-[#d8c1a340]
          blur-[140px] sm:blur-[220px] lg:blur-[300px]
          -translate-x-1/2 -translate-y-1/2
        "
      />

      {/* background interior image */}
      <motion.img
        src="/i1.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-25 sm:opacity-40"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: "easeOut" }}
        alt="Luxury interior"
      />

      <div className="relative max-w-7xl mx-auto min-h-screen flex items-center px-4 sm:px-12">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="max-w-3xl text-center sm:text-left"
        >
          <p
            className="
              uppercase
              tracking-[3px] sm:tracking-[7px]
              text-[#d8c1a3]
              mb-3 sm:mb-6
              text-xs sm:text-base
            "
          >
            Interior Design
          </p>

          <h1
            className="
              text-2xl sm:text-5xl lg:text-7xl
              font-light
              leading-tight
              mb-5 sm:mb-10
            "
          >
            Spaces designed to feel
            <span className="text-[#d8c1a3]"> elegant, warm & timeless</span>
          </h1>

          <p
            className="
              text-sm sm:text-lg lg:text-xl
              text-[#e6dccb]/80
              leading-relaxed
              max-w-2xl
              mx-auto sm:mx-0
            "
          >
            We craft refined interior environments where comfort meets luxury,
            blending materials, lighting, and layout to elevate everyday living.
          </p>
        </motion.div>
      </div>

    </section>
  );
}
