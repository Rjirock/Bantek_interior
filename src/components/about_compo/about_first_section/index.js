'use client';

import { motion } from "framer-motion";

export default function AboutHeroLuxury() {
  return (
    <section className="relative min-h-screen bg-[#050505] overflow-hidden text-[#f3e4cf]">

      {/* cinematic moving light */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#d8c1a315] via-transparent to-black" />

      {/* depth glow */}
      <div
        className="
          absolute top-1/2 left-1/2
          w-[300px] h-[300px]
          sm:w-[500px] sm:h-[500px]
          lg:w-[800px] lg:h-[800px]
          bg-[#d8c1a325]
          blur-[160px] sm:blur-[220px] lg:blur-[260px]
          -translate-x-1/2 -translate-y-1/2
        "
      />

      {/* background architectural image */}
      <motion.img
        src="/ss3.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-25 sm:opacity-35"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      />

      <div className="relative max-w-7xl mx-auto min-h-screen flex items-center px-6 sm:px-12">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="max-w-3xl"
        >
          <p
            className="
              uppercase
              tracking-[4px] sm:tracking-[7px]
              text-[#d8c1a3]
              mb-4 sm:mb-6
              text-sm sm:text-base
            "
          >
            About Bantek Studio
          </p>

          <h1
            className="
              text-3xl sm:text-5xl lg:text-7xl
              font-light
              leading-tight
              mb-6 sm:mb-10
            "
          >
            Designing luxury spaces that tell
            <span className="text-[#d8c1a3]"> timeless stories</span>
          </h1>

          <p
            className="
              text-base sm:text-lg lg:text-xl
              text-[#e6dccb]/80
              leading-relaxed
              max-w-2xl
            "
          >
            BANTEK Interior is a premium architecture and interior design studio crafting immersive environments where elegance, innovation, and functionality come together to elevate modern living.
          </p>
        </motion.div>
      </div>

    </section>
  );
}
