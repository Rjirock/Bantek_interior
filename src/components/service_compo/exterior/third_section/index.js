'use client';

import { motion } from "framer-motion";

const projects = [
  {
    title: "Modern Luxury Villa",
    desc: "A bold architectural form with premium materials and clean geometric lines.",
    img: "/a5.jpg"
  },
  {
    title: "Contemporary Residence",
    desc: "Minimalist exterior blending natural textures with modern structure.",
    img: "/a6.jpg"
  },
  {
    title: "Commercial Landmark",
    desc: "Strong facade identity designed for modern urban presence.",
    img: "/a7.jpg"
  }
];

export default function ExteriorThirdSection() {
  return (
    <section className="relative py-20 sm:py-32 lg:py-56 bg-[#050505] text-[#f3e4cf] overflow-hidden">

      {/* strong architectural depth glow */}
      <div className="
        absolute left-1/2 top-1/2 
        w-[300px] h-[300px] 
        sm:w-[600px] sm:h-[600px] 
        lg:w-[950px] lg:h-[950px] 
        bg-[#d8c1a325] 
        blur-[160px] sm:blur-[220px] lg:blur-[300px]
        -translate-x-1/2 -translate-y-1/2
      " />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 space-y-20 sm:space-y-32 lg:space-y-52">

        {projects.map((project, i) => (
          <div
            key={project.title}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-28 items-center`}
          >
            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={project.img}
                className="
                  w-full 
                  h-[260px] sm:h-[400px] lg:h-[560px] 
                  object-cover 
                  rounded-2xl sm:rounded-[32px] lg:rounded-[42px] 
                  shadow-[0_30px_120px_rgba(0,0,0,0.95)]
                "
                alt={project.title}
              />

              {/* sharp architectural frame */}
              <div className="
                absolute 
                -top-6 -right-6 
                sm:-top-12 sm:-right-12 
                lg:-top-20 lg:-right-20 
                w-24 h-24 sm:w-40 sm:h-40 lg:w-56 lg:h-56 
                border border-[#d8c1a340] 
                rounded-xl sm:rounded-2xl
              " />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <p className="
                uppercase 
                tracking-[4px] sm:tracking-[7px] 
                text-[#d8c1a3] 
                mb-4 sm:mb-6
                text-sm sm:text-base
              ">
                Featured Project
              </p>

              <h3 className="
                text-2xl sm:text-4xl lg:text-5xl 
                font-light 
                mb-4 sm:mb-8
              ">
                {project.title}
              </h3>

              <p className="
                text-sm sm:text-lg 
                text-[#e6dccb]/80 
                leading-relaxed 
                max-w-xl 
                mx-auto lg:mx-0
                mb-6 sm:mb-10
              ">
                {project.desc}
              </p>

              <motion.span
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="
                  inline-flex 
                  items-center 
                  gap-3 sm:gap-4 
                  text-[#d8c1a3] 
                  uppercase 
                  tracking-widest 
                  text-xs sm:text-sm 
                  border-b border-[#d8c1a3] 
                  pb-1 
                  cursor-pointer
                "
              >
                View Architecture →
              </motion.span>
            </motion.div>
          </div>
        ))}

      </div>
    </section>
  );
}
