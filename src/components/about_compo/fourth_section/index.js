'use client';

import { motion } from "framer-motion";

const achievements = [
  { number: "20+", label: "Years of Expertise" },
  { number: "150+", label: "Creative Professionals" },
  { number: "400+", label: "Luxury Projects Delivered" },
  { number: "50+", label: "Awards & Recognitions" }
];

export default function AboutFourthSection() {
  return (
    <section className="relative py-20 sm:py-32 lg:py-44 bg-[#0b0b0b] text-[#f3e4cf] overflow-hidden">

      {/* ambient champagne glow */}
      <div
        className="
          absolute top-1/2 left-1/2
          w-[300px] h-[300px]
          sm:w-[500px] sm:h-[500px]
          lg:w-[900px] lg:h-[900px]
          bg-[#d8c1a325]
          blur-[160px] sm:blur-[220px] lg:blur-[260px]
          -translate-x-1/2 -translate-y-1/2
        "
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-20 lg:mb-28"
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
            Our Impact
          </p>

          <h2
            className="
              text-2xl sm:text-4xl lg:text-5xl
              font-light
            "
          >
            A legacy built on
            <span className="text-[#d8c1a3]"> excellence</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">

          {achievements.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, rotateX: 8 }}
              transition={{ type: "spring", stiffness: 120 }}
              style={{ perspective: 1200 }}
              className="
                relative
                p-6 sm:p-10 lg:p-16
                rounded-2xl lg:rounded-3xl
                bg-[#151515]/80 backdrop-blur
                border border-[#d8c1a340]
                text-center
                shadow-[0_25px_100px_rgba(0,0,0,0.85)]
              "
            >
              <div className="
                text-3xl sm:text-5xl lg:text-6xl
                font-light
                text-[#d8c1a3]
                mb-3 sm:mb-6
              ">
                {item.number}
              </div>

              <div className="
                text-[#e6dccb]/75
                tracking-wide
                text-sm sm:text-base
              ">
                {item.label}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
