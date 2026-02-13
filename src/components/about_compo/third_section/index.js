'use client';

import { motion } from "framer-motion";

const steps = [
  {
    title: "Discovery & Vision",
    desc: "Understanding your lifestyle, goals, and design aspirations."
  },
  {
    title: "Concept Development",
    desc: "Transforming ideas into architectural and interior concepts."
  },
  {
    title: "Design & Planning",
    desc: "Detailed layouts, materials, and technical precision."
  },
  {
    title: "Execution & Delivery",
    desc: "Bringing the vision to life with flawless craftsmanship."
  }
];

export default function AboutThirdSection() {
  return (
    <section className="relative py-20 sm:py-32 lg:py-44 bg-[#070707] text-[#f3e4cf] overflow-hidden">

      {/* cinematic glow path */}
      <div className="
        absolute left-1/2 top-0 
        w-[2px] h-full 
        bg-gradient-to-b from-transparent via-[#d8c1a340] to-transparent
        hidden sm:block
      " />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-12">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-20 lg:mb-32"
        >
          <p className="
            uppercase
            tracking-[4px] sm:tracking-[7px]
            text-[#d8c1a3]
            mb-4 sm:mb-6
            text-sm sm:text-base
          ">
            Our Process
          </p>
          <h2 className="
            text-2xl sm:text-4xl lg:text-5xl
            font-light
          ">
            From vision to
            <span className="text-[#d8c1a3]"> luxury reality</span>
          </h2>
        </motion.div>

        <div className="space-y-12 sm:space-y-20 lg:space-y-28">

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1 }}
              viewport={{ once: true }}
              className={`
                relative 
                max-w-xl 
                mx-auto 
                sm:${i % 2 === 0 ? "ml-0 mr-auto" : "ml-auto mr-0"}
              `}
            >
              {/* step glow dot */}
              <div className="
                absolute 
                left-1/2 sm:-left-10
                top-2 sm:top-4
                w-3 h-3 sm:w-4 sm:h-4
                -translate-x-1/2 sm:translate-x-0
                rounded-full 
                bg-[#d8c1a3] 
                shadow-[0_0_16px_#d8c1a3]
              " />

              <h3 className="
                text-xl sm:text-2xl lg:text-3xl
                mb-2 sm:mb-4
                font-light 
                text-[#f5e8d6]
                text-center sm:text-left
              ">
                {step.title}
              </h3>

              <p className="
                text-[#e6dccb]/75 
                leading-relaxed
                text-sm sm:text-base
                text-center sm:text-left
              ">
                {step.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
