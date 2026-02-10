'use client';

import { motion } from "framer-motion";

const projects = [
  {
    title: "Architectural Masterpieces",
    image: "/ss3.jpg",
    tag: "Structural Excellence",
  },
  {
    title: "Interior Experiences",
    image: "/ss1.jpg",
    tag: "Luxury Living Spaces",
  },
];

export default function LuxuryProjectsShowcase() {
  return (
    <section className="relative py-44 bg-[#0f0f0f] text-[#f3e4cf] overflow-hidden">

      {/* Ambient gold light */}
      <div className="absolute left-1/3 top-0 w-[600px] h-[600px] bg-[#d8c1a330] blur-[200px]" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 px-10">

        {projects.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -18, rotateX: 8 }}
            transition={{ type: "spring", stiffness: 120 }}
            style={{ perspective: 1200 }}
            className="group relative rounded-3xl overflow-hidden shadow-[0_40px_140px_rgba(0,0,0,0.85)] cursor-pointer"
          >

            {/* Project image */}
            <img
              src={item.image}
              className="w-full h-[520px] object-cover scale-105 group-hover:scale-115 transition duration-[2000ms]"
              alt={item.title}
            />

            {/* Glass overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Floating content */}
            <div className="absolute bottom-12 left-12 right-12">

              <span className="text-sm tracking-[5px] uppercase text-[#d8c1a3]">
                {item.tag}
              </span>

              <h3 className="text-4xl font-light mt-4 mb-6">
                {item.title}
              </h3>

              <motion.button
                whileHover={{ scale: 1.08 }}
                className="px-8 py-3 border border-[#d8c1a3] rounded-xl 
                text-[#d8c1a3] tracking-widest uppercase text-sm
                hover:bg-[#d8c1a3] hover:text-black transition"
              >
                Explore Projects →
              </motion.button>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
