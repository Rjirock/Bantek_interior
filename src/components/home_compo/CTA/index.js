'use client';

import { motion } from "framer-motion";

const visuals = [
  "/ss1.jpg",
  "/ss2.jpg",
  "/ss3.jpg",
];

export default function VisualLuxuryCTA() {
  return (
    <section className="relative py-20 sm:py-32 lg:py-44 bg-[#0a0a0a] overflow-hidden">

      {/* champagne ambient glow */}
      <div
        className="
          absolute left-1/2 top-1/2
          w-[300px] h-[300px]
          sm:w-[600px] sm:h-[600px]
          lg:w-[900px] lg:h-[900px]
          bg-[#d8c1a330]
          blur-[160px] sm:blur-[220px] lg:blur-[260px]
          -translate-x-1/2 -translate-y-1/2
        "
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 lg:gap-24 items-center">

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          viewport={{ once: true }}
          className="text-[#f3e4cf] text-center lg:text-left"
        >
          <p className="
            uppercase
            tracking-[4px] sm:tracking-[6px]
            text-[#d8c1a3]
            mb-4 sm:mb-6
            text-sm sm:text-base
          ">
            Start Your Journey
          </p>

          <h2 className="
            text-2xl sm:text-4xl lg:text-6xl
            font-light
            leading-tight
            mb-6 sm:mb-10
          ">
            Design spaces that inspire
            <span className="text-[#d8c1a3]"> luxury living</span>
          </h2>

          <p className="
            text-sm sm:text-lg lg:text-xl
            text-[#e6dccb]/80
            mb-8 sm:mb-14
            max-w-xl
            mx-auto lg:mx-0
          ">
            From architectural concepts to elegant interiors,
            we create environments that reflect your vision and lifestyle.
          </p>

          <motion.a
            whileHover={{ scale: 1.05, rotateX: 6 }}
            transition={{ type: "spring", stiffness: 140 }}
            href="/contact"
            style={{ perspective: 1200 }}
            className="
              inline-block
              px-6 sm:px-10 lg:px-14
              py-3 sm:py-4 lg:py-5
              rounded-xl sm:rounded-2xl
              bg-[#d8c1a3]
              text-black
              tracking-widest uppercase
              text-xs sm:text-sm font-medium
              shadow-[0_15px_60px_rgba(216,193,163,0.6)]
              hover:shadow-[0_30px_120px_rgba(216,193,163,0.9)]
            "
          >
            Begin Your Project →
          </motion.a>
        </motion.div>

      {/* Visual Showcase */}
<motion.div
  whileHover={{ scale: 1.03, rotateY: -4 }}
  transition={{ type: "spring", stiffness: 90 }}
  style={{ perspective: 1200 }}
  className="relative"
>

  {/* MOBILE LUXURY STACK */}
  <div className="flex flex-col gap-6 lg:hidden">

    {/* Main Hero Image */}
    <img
      src={visuals[0]}
      className="w-full h-[260px] object-cover rounded-3xl shadow-[0_30px_120px_rgba(0,0,0,0.9)]"
      alt="visual 1"
    />

    {/* Two layered images */}
    <div className="flex gap-4">
      <img
        src={visuals[1]}
        className="w-1/2 h-[160px] object-cover rounded-2xl shadow-[0_20px_80px_rgba(0,0,0,0.8)]"
        alt="visual 2"
      />

      <img
        src={visuals[2]}
        className="w-1/2 h-[160px] object-cover rounded-2xl shadow-[0_20px_80px_rgba(0,0,0,0.8)]"
        alt="visual 3"
      />
    </div>
  </div>

  {/* DESKTOP GRID */}
  <div className="hidden lg:grid grid-cols-2 gap-6">
    <img
      src={visuals[0]}
      className="rounded-3xl object-cover h-[260px] shadow-[0_30px_120px_rgba(0,0,0,0.8)]"
      alt="visual 1"
    />

    <img
      src={visuals[1]}
      className="rounded-3xl object-cover h-[320px] translate-y-16 shadow-[0_30px_120px_rgba(0,0,0,0.8)]"
      alt="visual 2"
    />

    <img
      src={visuals[2]}
      className="rounded-3xl object-cover h-[260px] col-span-2 shadow-[0_30px_120px_rgba(0,0,0,0.8)]"
      alt="visual 3"
    />
  </div>

  {/* soft overlay glow */}
  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-transparent via-transparent to-black/25 pointer-events-none" />
</motion.div>


      </div>
    </section>
  );
}
