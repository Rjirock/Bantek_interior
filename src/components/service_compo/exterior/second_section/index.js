'use client';

import { motion } from "framer-motion";

const architectureServices = [
  {
    title: "Residential Architecture",
    desc: "Luxury homes designed with balance, flow, and timeless architectural beauty."
  },
  {
    title: "Commercial Buildings",
    desc: "Modern commercial structures built for functionality and strong visual identity."
  },
  {
    title: "Villa & Bungalow Design",
    desc: "High-end villas with bold facades and premium architectural detailing."
  },
  {
    title: "3D Elevation & Facade Design",
    desc: "Contemporary elevations that define the personality of each structure."
  },
  {
    title: "Structural Planning",
    desc: "Technically sound layouts ensuring durability, safety, and elegance."
  },
  {
    title: "Landscape Architecture",
    desc: "Outdoor architectural spaces integrated beautifully with built forms."
  }
];

export default function ExteriorSecondSection() {
  return (
    <section className="relative py-20 sm:py-32 lg:py-48 bg-[#060606] text-[#f3e4cf] overflow-hidden">

      {/* sharp architectural glow */}
      <div className="
        absolute left-1/2 top-1/2 
        w-[300px] h-[300px] 
        sm:w-[500px] sm:h-[500px] 
        lg:w-[800px] lg:h-[800px] 
        bg-[#d8c1a325] 
        blur-[160px] sm:blur-[220px] lg:blur-[260px]
        -translate-x-1/2 -translate-y-1/2
      " />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-20 lg:mb-28"
        >
          <p className="
            uppercase 
            tracking-[4px] sm:tracking-[8px] 
            text-[#d8c1a3] 
            mb-4 sm:mb-6
            text-sm sm:text-base
          ">
            Our Architectural Expertise
          </p>

          <h2 className="
            text-2xl sm:text-4xl lg:text-5xl 
            font-light
          ">
            Comprehensive exterior and architectural design solutions
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-20">

          {architectureServices.map((service) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -12, rotateX: 8 }}
              transition={{ type: "spring", stiffness: 120 }}
              style={{ perspective: 1200 }}
              className="
                relative 
                p-6 sm:p-10 lg:p-14 
                rounded-2xl lg:rounded-3xl 
                bg-[#141414]/85 backdrop-blur 
                border border-[#d8c1a340] 
                shadow-[0_25px_100px_rgba(0,0,0,0.9)]
              "
            >
              <h3 className="
                text-xl sm:text-2xl lg:text-3xl 
                font-light 
                text-[#d8c1a3] 
                mb-4 sm:mb-6
              ">
                {service.title}
              </h3>

              <p className="
                text-[#e6dccb]/75 
                leading-relaxed 
                text-sm sm:text-base
              ">
                {service.desc}
              </p>

              {/* architectural accent */}
              <div className="
                absolute bottom-4 sm:bottom-8 
                left-6 sm:left-10 lg:left-14 
                w-12 sm:w-20 
                h-[1px] bg-[#d8c1a3]
              " />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
