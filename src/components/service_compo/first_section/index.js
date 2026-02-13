'use client';

import { motion } from "framer-motion";

export default function ServicesFirstSection() {
  return (
    <section className="
      relative
      py-20 sm:py-28 md:py-36 lg:py-44
      bg-[#070707]
      text-[#f3e4cf]
      overflow-hidden
    ">

      {/* architectural glow */}
      <div
        className="
          absolute left-1/2 top-1/2
          w-[260px] h-[260px]
          sm:w-[420px] sm:h-[420px]
          md:w-[650px] md:h-[650px]
          lg:w-[900px] lg:h-[900px]
          bg-[#d8c1a320]
          blur-[140px] sm:blur-[200px] lg:blur-[260px]
          -translate-x-1/2 -translate-y-1/2
        "
      />

      <div className="
        relative
        max-w-7xl mx-auto
        grid grid-cols-1 lg:grid-cols-2
        gap-14 sm:gap-20 lg:gap-28
        px-4 sm:px-8 md:px-12
        items-center
      ">

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <p className="
            uppercase
            tracking-[3px] sm:tracking-[6px]
            text-[#d8c1a3]
            mb-4 sm:mb-6
            text-xs sm:text-sm
          ">
            Our Services
          </p>

          <h1 className="
            font-light leading-tight
            mb-6 sm:mb-8
            text-[1.7rem]
            sm:text-3xl
            md:text-4xl
            lg:text-6xl
          ">
            Interior & Exterior design shaped by
            <span className="text-[#d8c1a3]"> modern luxury</span>
          </h1>

          <p className="
            text-sm sm:text-base md:text-lg
            text-[#e6dccb]/80
            max-w-xl
            mx-auto lg:mx-0
            leading-relaxed
          ">
            We craft refined interiors and bold architectural exteriors that elevate
            lifestyle, functionality, and visual impact through thoughtful design.
          </p>
        </motion.div>

        {/* VISUAL COMPOSITION */}
        <motion.div
          whileHover={{ scale: 1.03, rotateY: -5 }}
          transition={{ type: "spring", stiffness: 90, damping: 18 }}
          style={{ perspective: 1200 }}
          className="relative"
        >
          <img
            src="/ss3.jpg"
            className="
              w-full
              rounded-2xl sm:rounded-3xl
              shadow-[0_30px_120px_rgba(0,0,0,0.9)]
            "
            alt="Exterior architecture"
          />

          {/* floating interior preview (hidden on small screens) */}
          <motion.img
            src="/ss1.jpg"
            whileHover={{ scale: 1.06 }}
            className="
              hidden sm:block
              absolute
              -bottom-12 sm:-bottom-16
              -left-12 sm:-left-16
              w-40 sm:w-52 md:w-64
              rounded-xl sm:rounded-2xl
              border border-[#d8c1a340]
              shadow-[0_25px_90px_rgba(0,0,0,0.85)]
            "
            alt="Interior preview"
          />
        </motion.div>

      </div>
    </section>
  );
}
