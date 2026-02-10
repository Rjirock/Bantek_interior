'use client';

import { motion } from "framer-motion";

const services = [
  {
    title: "Luxury Living Room Design",
    desc: "Elegant layouts with premium furniture, layered lighting, and warm material tones.",
    img: "/i1.jpg"
  },
  {
    title: "Bedroom Interior Styling",
    desc: "Calm sophisticated bedrooms crafted for comfort and timeless beauty.",
    img: "/i4.jpg"
  },
  {
    title: "Modular Kitchen Design",
    desc: "Modern kitchens with smart storage, premium finishes, and functional planning.",
    img: "/i3.jpg"
  },
  {
    title: "False Ceiling & Lighting",
    desc: "Architectural ceiling concepts with ambient and accent lighting layers.",
    img: "/ss4.jpg"
  },
  {
    title: "Custom Furniture Design",
    desc: "Tailor-made furniture pieces crafted to match space and style perfectly.",
    img: "/ss3.jpg"
  },
  {
    title: "Premium Material Selection",
    desc: "Curated textures, stones, woods, and finishes for luxurious interiors.",
    img: "/ss1.jpg"
  }
];

export default function InteriorThirdSection() {
  return (
    <section className="relative py-20 sm:py-32 lg:py-52 bg-[#050505] text-[#f3e4cf] overflow-hidden">

      {/* ambient glow */}
      <div className="absolute left-1/2 top-1/2 w-[260px] h-[260px] sm:w-[600px] sm:h-[600px] lg:w-[950px] lg:h-[950px] bg-[#d8c1a330] blur-[140px] sm:blur-[220px] lg:blur-[300px] -translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-12 space-y-16 sm:space-y-28 lg:space-y-44">

        {services.map((item, i) => (
          <div
            key={item.title}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 lg:gap-28 items-center"
          >
            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={item.img}
                className="w-full h-[240px] sm:h-[380px] lg:h-[520px] object-cover rounded-2xl sm:rounded-[32px] lg:rounded-[42px] shadow-[0_25px_100px_rgba(0,0,0,0.95)]"
                alt={item.title}
              />
            </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="
                bg-[#151515]/70 backdrop-blur
                border border-[#d8c1a330]
                rounded-2xl
                p-6 sm:p-10
                text-center lg:text-left
                shadow-[0_15px_60px_rgba(0,0,0,0.8)]
              "
            >
              <p className="uppercase tracking-[3px] sm:tracking-[6px] text-[#d8c1a3] mb-3 sm:mb-6 text-xs sm:text-base">
                Interior Service
              </p>

              <h3 className="text-xl sm:text-4xl lg:text-5xl font-light mb-3 sm:mb-6">
                {item.title}
              </h3>

              <p className="text-sm sm:text-lg text-[#e6dccb]/80 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-5 sm:mb-10">
                {item.desc}
              </p>

              <motion.span
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="inline-flex items-center gap-3 text-[#d8c1a3] uppercase tracking-widest text-xs sm:text-sm border-b border-[#d8c1a3] pb-1 cursor-pointer"
              >
                View Projects →
              </motion.span>
            </motion.div>
          </div>
        ))}

      </div>
    </section>
  );
}
