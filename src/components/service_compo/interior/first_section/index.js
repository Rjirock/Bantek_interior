'use client';

import { motion } from "framer-motion";

export default function InteriorFirstSection() {
  return (
    <section className="relative min-h-screen bg-[#050505] text-[#f3e4cf] overflow-hidden">

      {/* warm interior gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#d8c1a330] via-transparent to-black" />

      {/* ambient luxury glow */}
      <div
        className="
          absolute left-1/2 top-1/2
          w-[260px] h-[260px]
          sm:w-[520px] sm:h-[520px]
          lg:w-[900px] lg:h-[900px]
          bg-[#d8c1a340]
          blur-[140px] sm:blur-[220px] lg:blur-[300px]
          -translate-x-1/2 -translate-y-1/2
        "
      />

      {/* background image */}
      <motion.img
        src="/i1.jpg"
        alt="Luxury interior design"
        className="absolute inset-0 w-full h-full object-cover opacity-25 sm:opacity-40"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 14, ease: "easeOut" }}
      />

      <div className="relative max-w-7xl mx-auto min-h-screen flex items-center px-4 sm:px-12">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="max-w-3xl text-center sm:text-left"
        >
          {/* Eyebrow */}
          <p className="
            uppercase tracking-[4px] sm:tracking-[8px]
            text-[#d8c1a3]
            mb-4 sm:mb-6
            text-xs sm:text-sm
          ">
            Interior Design Studio
          </p>

          {/* Main Heading */}
          <h1 className="
            text-2xl sm:text-5xl lg:text-7xl
            font-light
            leading-tight
            mb-6 sm:mb-10
          ">
            Spaces designed to feel
            <span className="text-[#d8c1a3]"> elegant, warm & timeless</span>
          </h1>

          {/* Primary Description */}
          <p className="
            text-sm sm:text-lg lg:text-xl
            text-[#e6dccb]/85
            leading-relaxed
            max-w-2xl
            mx-auto sm:mx-0
            mb-8 sm:mb-12
          ">
            Our interior design philosophy blends refined aesthetics with
            functional comfort. Every space is thoughtfully curated through
            material selection, lighting balance, and spatial flow to create
            environments that feel luxurious yet deeply personal.
          </p>

          {/* Interior Highlights */}
          <div className="
            grid grid-cols-1 sm:grid-cols-3
            gap-6 sm:gap-10
            mb-10 sm:mb-16
          ">
            {[
              {
                title: "Material Harmony",
                text: "Premium finishes, textures, and surfaces selected for timeless appeal."
              },
              {
                title: "Lighting Design",
                text: "Layered lighting that enhances mood, depth, and architectural detail."
              },
              {
                title: "Spatial Planning",
                text: "Layouts crafted for comfort, flow, and effortless living."
              }
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="
                  border border-[#d8c1a330]
                  rounded-xl
                  px-6 py-5
                  bg-black/40 backdrop-blur
                  text-center sm:text-left
                "
              >
                <h4 className="text-[#d8c1a3] mb-2 text-sm uppercase tracking-widest">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#e6dccb]/75 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05, rotateX: 4 }}
            transition={{ type: "spring", stiffness: 140, damping: 18 }}
            style={{ perspective: 1200 }}
            className="
              inline-block
              px-8 sm:px-14
              py-3 sm:py-5
              rounded-xl sm:rounded-2xl
              bg-[#d8c1a3]
              text-black
              tracking-widest uppercase
              text-xs sm:text-sm
              font-medium
              shadow-[0_12px_50px_rgba(216,193,163,0.7)]
              hover:shadow-[0_28px_140px_rgba(216,193,163,1)]
              transition-shadow duration-500
            "
          >
            Start Your Interior Project →
          </motion.a>

        </motion.div>
      </div>
    </section>
  );
}
