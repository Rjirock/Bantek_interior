'use client';

import { motion } from "framer-motion";

export default function AboutSecondSection() {
  return (
    <section className="relative py-20 sm:py-32 lg:py-44 bg-[#0a0a0a] text-[#f3e4cf] overflow-hidden">

      {/* architectural light texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#d8c1a312] via-transparent to-black" />

      {/* soft glow */}
      <div
        className="
          absolute top-1/3 left-1/2
          w-[300px] h-[300px]
          sm:w-[500px] sm:h-[500px]
          lg:w-[700px] lg:h-[700px]
          bg-[#d8c1a320]
          blur-[160px] sm:blur-[200px] lg:blur-[240px]
          -translate-x-1/2
        "
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 lg:gap-32 items-center">

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <p
            className="
              uppercase
              tracking-[4px] sm:tracking-[7px]
              text-[#d8c1a3]
              mb-4 sm:mb-8
              text-sm sm:text-base
            "
          >
            Our Philosophy
          </p>

          <h2
            className="
              text-2xl sm:text-4xl lg:text-5xl
              font-light
              leading-tight
              mb-6 sm:mb-12
            "
          >
            Design rooted in
            <span className="text-[#d8c1a3]"> elegance, purpose,</span>
            and innovation.
          </h2>

          <p
            className="
              text-[#e6dccb]/80
              leading-relaxed
              text-sm sm:text-lg
              max-w-xl
              mx-auto lg:mx-0
            "
          >
            At BANTEK, every project begins with understanding how people live, move,
            and experience space. We combine architectural precision with modern luxury
            to create environments that are functional, beautiful, and enduring.
          </p>
        </motion.div>

        {/* Visual composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="/ss1.jpg"
            className="
              w-full
              rounded-2xl sm:rounded-3xl
              shadow-[0_30px_120px_rgba(0,0,0,0.9)]
            "
            alt="Luxury interior"
          />

          {/* floating accent block */}
          <div
            className="
              absolute
              -bottom-6 -left-6
              sm:-bottom-12 sm:-left-12
              lg:-bottom-16 lg:-left-16
              w-16 h-16 sm:w-24 sm:h-24 lg:w-40 lg:h-40
              border border-[#d8c1a3]
              rounded-xl sm:rounded-2xl lg:rounded-3xl
              opacity-40
            "
          />
        </motion.div>

      </div>
    </section>
  );
}
