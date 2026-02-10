'use client';

import { motion } from "framer-motion";

const interiorServices = [
  {
    title: "Space Planning & Layout Design",
    desc: "Optimized floor layouts that balance movement, comfort, and functional elegance."
  },
  {
    title: "Living & Bedroom Interiors",
    desc: "Warm luxurious environments designed for relaxation and everyday luxury living."
  },
  {
    title: "Kitchen & Dining Design",
    desc: "Modern functional kitchens with premium finishes and smart storage solutions."
  },
  {
    title: "Lighting & False Ceiling Design",
    desc: "Architectural lighting that enhances mood, depth, and spatial beauty."
  },
  {
    title: "Furniture & Custom Joinery",
    desc: "Tailor-made furniture pieces crafted for style, comfort, and durability."
  },
  {
    title: "Material & Finish Selection",
    desc: "Curated premium materials, textures, and colour palettes for timeless interiors."
  }
];

export default function InteriorSecondSection() {
  return (
    <section className="relative py-20 sm:py-32 lg:py-48 bg-[#070707] text-[#f3e4cf] overflow-hidden">

      {/* luxury ambient glow */}
      <div className="
        absolute left-1/2 top-1/2
        w-[260px] h-[260px]
        sm:w-[500px] sm:h-[500px]
        lg:w-[850px] lg:h-[850px]
        bg-[#d8c1a330]
        blur-[140px] sm:blur-[220px] lg:blur-[260px]
        -translate-x-1/2 -translate-y-1/2
      " />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-12">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-20 lg:mb-28"
        >
          <p className="uppercase tracking-[3px] sm:tracking-[7px] text-[#d8c1a3] mb-3 sm:mb-6 text-xs sm:text-base">
            Interior Expertise
          </p>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light leading-tight">
            Complete interior design solutions for
            <span className="text-[#d8c1a3]"> refined living</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 lg:gap-20">

          {interiorServices.map((service) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -8, rotateX: 6 }}
              transition={{ type: "spring", stiffness: 120 }}
              style={{ perspective: 1200 }}
              className="
                relative
                p-5 sm:p-10 lg:p-14
                rounded-xl sm:rounded-2xl lg:rounded-3xl
                bg-[#151515]/80 backdrop-blur
                border border-[#d8c1a340]
                shadow-[0_20px_80px_rgba(0,0,0,0.9)]
              "
            >
              <h3 className="text-lg sm:text-2xl lg:text-3xl font-light text-[#d8c1a3] mb-3 sm:mb-6">
                {service.title}
              </h3>

              <p className="text-[#e6dccb]/75 leading-relaxed text-sm sm:text-base">
                {service.desc}
              </p>

              {/* accent line */}
              <div className="
                absolute bottom-4 sm:bottom-8
                left-5 sm:left-10 lg:left-14
                w-8 sm:w-16
                h-[1px] bg-[#d8c1a3]
              " />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
