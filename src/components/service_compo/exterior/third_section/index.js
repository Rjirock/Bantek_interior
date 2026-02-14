'use client';

import { motion } from "framer-motion";

const projects = [
  {
    label: "Residential Project",
    title: "Modern Luxury Villa",
    highlight: "A contemporary villa crafted with bold architectural language.",
    desc: "This modern luxury villa showcases clean geometric volumes, premium materials, and carefully designed spatial flow. The architecture balances openness and privacy while creating a strong visual identity through facade articulation and natural light integration.",
    meta: "Residential • Villa Architecture",
    img: "/a5.jpg",
  },
  {
    label: "Residential Project",
    title: "Contemporary Residence",
    highlight: "Minimalist architecture blended with warmth and function.",
    desc: "Designed for modern living, this residence focuses on simplicity, proportion, and material harmony. Large openings, subtle textures, and seamless indoor-outdoor connections define the architectural experience.",
    meta: "Residential • Contemporary Home",
    img: "/a6.jpg",
  },
  {
    label: "Commercial Project",
    title: "Commercial Landmark",
    highlight: "An architectural statement for urban commercial presence.",
    desc: "This commercial project features a strong facade identity designed to stand out within the urban fabric. The architecture emphasizes visibility, efficiency, and long-term functional performance.",
    meta: "Commercial • Architectural Design",
    img: "/a7.jpg",
  },
];

export default function ExteriorThirdSection() {
  return (
    <section className="relative bg-[#050505] text-[#f3e4cf] py-28 sm:py-40 lg:py-56 overflow-hidden">

      {/* ambient architectural glow */}
      <div className="absolute left-1/2 top-1/2 w-[900px] h-[900px] bg-[#d8c1a320] blur-[300px] -translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 space-y-28 sm:space-y-40">

        {projects.map((project, index) => {
          const reverse = index % 2 !== 0;

          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className={`
                grid grid-cols-1 lg:grid-cols-2
                gap-14 sm:gap-20 lg:gap-28
                items-center
                ${reverse ? "lg:flex-row-reverse" : ""}
              `}
            >

              {/* IMAGE */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="
                    w-full
                    h-[280px] sm:h-[420px] lg:h-[560px]
                    object-cover
                    rounded-2xl lg:rounded-[42px]
                    shadow-[0_40px_140px_rgba(0,0,0,0.95)]
                  "
                />

                {/* architectural frame */}
                <div className="
                  absolute -top-6 -right-6
                  sm:-top-12 sm:-right-12
                  w-24 h-24 sm:w-40 sm:h-40
                  border border-[#d8c1a340]
                  rounded-xl
                " />
              </motion.div>

              {/* CONTENT */}
              <div className="text-center lg:text-left">

                <p className="uppercase tracking-[6px] text-[#d8c1a3] text-xs sm:text-sm mb-4">
                  {project.label}
                </p>

                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-light mb-4">
                  {project.title}
                </h3>

                <p className="text-[#d8c1a3] mb-6 text-sm sm:text-base">
                  {project.highlight}
                </p>

                <p className="text-[#e6dccb]/80 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                  {project.desc}
                </p>

                <p className="text-xs uppercase tracking-widest text-[#e6dccb]/60 mb-10">
                  {project.meta}
                </p>

                <motion.a
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 120 }}
                  href="#"
                  className="
                    inline-flex items-center gap-3
                    uppercase tracking-widest text-xs sm:text-sm
                    text-[#d8c1a3]
                    border-b border-[#d8c1a3]
                    pb-1
                  "
                >
                  View Project →
                </motion.a>

              </div>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
}
                
