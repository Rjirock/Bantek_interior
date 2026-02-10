'use client';

import { motion } from "framer-motion";

export default function AboutLuxury() {
  return (
    <section className="relative py-20 sm:py-32 lg:py-44 bg-[#1f1f1f] text-[#f3e4cf] overflow-hidden">

      {/* Champagne ambient glow */}
      <div
        className="
          absolute -top-40 left-1/2
          w-[300px] h-[300px]
          sm:w-[500px] sm:h-[500px]
          lg:w-[700px] lg:h-[700px]
          bg-[#d8c1a330]
          blur-[140px] sm:blur-[180px] lg:blur-[220px]
          rounded-full
          -translate-x-1/2
        "
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-20 lg:gap-28 items-center">

        {/* Luxury label */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="
            uppercase
            tracking-[4px] sm:tracking-[7px]
            text-base sm:text-xl
            text-[#d8c1a3]
            text-center md:text-left
          "
        >
          About Bantek Interior
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2
            className="
              text-2xl sm:text-4xl lg:text-5xl
              font-light
              leading-tight
              mb-6 sm:mb-12
              text-[#f5e8d6]
            "
          >
            Creating architectural experiences that feel
            <span className="text-[#d8c1a3]"> timeless</span>, refined, and immersive.
          </h2>

          <div className="h-[1px] w-20 sm:w-36 bg-[#d8c1a3] mb-6 sm:mb-12 mx-auto md:mx-0" />

          <p
            className="
              text-[#e6dccb]/80
              leading-relaxed
              text-sm sm:text-base lg:text-lg
              max-w-xl
              mx-auto md:mx-0
              mb-8 sm:mb-14
            "
          >
            BANTEK blends architectural precision with modern luxury to craft
            interiors and structures that elevate everyday living.
            Each space is designed with harmony, craftsmanship, and long-lasting elegance.
          </p>

          {/* Champagne glass button */}
          <motion.a
            whileHover={{ scale: 1.05, rotateX: 6 }}
            transition={{ type: "spring", stiffness: 140 }}
            href="/about"
            className="
              inline-flex items-center gap-3
              px-6 sm:px-10
              py-3 sm:py-4
              rounded-lg sm:rounded-xl
              bg-[#2a2a2a]/70 backdrop-blur
              border border-[#d8c1a380]
              text-[#d8c1a3]
              tracking-widest uppercase
              text-xs sm:text-sm
              hover:bg-[#d8c1a320]
              transition
            "
          >
            Explore Our Journey →
          </motion.a>
        </motion.div>
      </div>

      {/* 3D luxury stats */}
      <div className="mt-16 sm:mt-28 lg:mt-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-14 lg:gap-20 max-w-6xl mx-auto px-6 sm:px-0">

        {[
          { num: "20+", label: "Years of Excellence" },
          { num: "150+", label: "Design Specialists" },
          { num: "400+", label: "Luxury Projects" },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10, rotateX: 8 }}
            transition={{ type: "spring", stiffness: 120 }}
            style={{ perspective: 1200 }}
            className="
              p-6 sm:p-10 lg:p-14
              rounded-xl sm:rounded-2xl
              bg-[#2a2a2a]/80 backdrop-blur
              border border-[#d8c1a340]
              text-center
              shadow-[0_20px_80px_rgba(0,0,0,0.8)]
            "
          >
            <div className="
              text-3xl sm:text-5xl lg:text-6xl
              font-light
              text-[#d8c1a3]
              mb-3 sm:mb-5
            ">
              {item.num}
            </div>

            <div className="
              text-[#e6dccb]/70
              tracking-wide
              text-sm sm:text-base
            ">
              {item.label}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
