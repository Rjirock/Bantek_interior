'use client';

import { motion } from "framer-motion";

const services = [
  {
    title: "Architectural Design",
    desc: "Innovative structural solutions blending elegance with precision."
  },
  {
    title: "Interior Design",
    desc: "Luxury spaces curated with harmony, comfort, and timeless beauty."
  },
  {
    title: "Turnkey Projects",
    desc: "Complete project execution with craftsmanship and perfection."
  }
];

export default function LuxuryServices() {
  return (
    <section className="relative py-20 sm:py-32 lg:py-44 bg-[#141414] text-[#f3e4cf] overflow-hidden">

      {/* Ambient luxury lighting */}
      <div
        className="
          absolute top-0 right-1/4
          w-[250px] h-[250px]
          sm:w-[400px] sm:h-[400px]
          lg:w-[600px] lg:h-[600px]
          bg-[#d8c1a320]
          blur-[120px] sm:blur-[160px] lg:blur-[200px]
          rounded-full
        "
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 lg:gap-28 items-center">

        {/* Visual showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_30px_120px_rgba(0,0,0,0.85)]"
        >
          <img
            src="/ss2.jpg"
            className="w-full h-[260px] sm:h-[380px] lg:h-full object-cover hover:scale-105 transition duration-[2000ms]"
            alt="Luxury Interior"
          />

          {/* Soft glass overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </motion.div>

        {/* Content side */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <h2
            className="
              text-2xl sm:text-4xl lg:text-5xl
              font-light
              mb-6 sm:mb-14
              leading-tight
            "
          >
            Crafting architectural excellence with
            <span className="text-[#d8c1a3]"> precision & luxury</span>
          </h2>

          <div className="space-y-6 sm:space-y-10">

            {services.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 8, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="
                  group cursor-pointer
                  p-4 sm:p-6
                  rounded-xl sm:rounded-2xl
                  bg-[#1f1f1f]/80 backdrop-blur
                  border border-[#d8c1a330]
                  hover:border-[#d8c1a3]
                  shadow-[0_15px_60px_rgba(0,0,0,0.7)]
                "
              >
                <h3
                  className="
                    text-lg sm:text-2xl
                    mb-2
                    text-[#f5e8d6]
                    group-hover:text-[#d8c1a3]
                    transition
                  "
                >
                  {item.title}
                </h3>

                <p className="text-[#e6dccb]/70 text-sm sm:text-base">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>
        </motion.div>
      </div>
    </section>
  );
}
