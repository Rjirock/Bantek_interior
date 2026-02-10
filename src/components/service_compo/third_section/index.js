'use client';

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Luxury Interior Planning",
    desc: "Spatial layouts crafted to maximize comfort, elegance, and everyday functionality.",
    img: "/ss1.jpg"
  },
  {
    title: "Material & Finish Selection",
    desc: "Premium materials chosen to reflect timeless aesthetics and durability.",
    img: "/ss2.jpg"
  },
  {
    title: "Lighting & Atmosphere Design",
    desc: "Strategic lighting that enhances mood, depth, and architectural beauty.",
    img: "/ss4.jpg"
  },
  {
    title: "Architectural Exterior Concepts",
    desc: "Bold modern facades that express identity and structural harmony.",
    img: "/ss3.jpg"
  },
  {
    title: "Landscape & Outdoor Living",
    desc: "Seamless integration of greenery, walkways, and exterior experiences.",
    img: "/ss1.jpg"
  }
];

export default function ServicesThirdSection() {
  return (
    <section className="relative py-52 bg-[#050505] text-[#f3e4cf] overflow-hidden">

      {/* subtle luxury grid line */}
      <div className="absolute left-1/2 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#d8c1a330] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-12 space-y-64">

        {experiences.map((item, i) => (
          <div
            key={item.title}
            className={`grid lg:grid-cols-2 gap-28 items-center ${
              i % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={item.img}
                className="w-full h-[560px] object-cover rounded-[42px] shadow-[0_45px_150px_rgba(0,0,0,0.95)]"
                alt={item.title}
              />

              {/* architectural accent */}
              <div className="absolute -bottom-20 -right-20 w-56 h-56 border border-[#d8c1a340] rounded-3xl" />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              <p className="uppercase tracking-[6px] text-[#d8c1a3] mb-6">
                Our Approach
              </p>

              <h3 className="text-5xl font-light leading-tight mb-8">
                {item.title}
              </h3>

              <p className="text-lg text-[#e6dccb]/80 max-w-xl leading-relaxed mb-10">
                {item.desc}
              </p>

              <motion.span
                whileHover={{ x: 12 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="inline-flex items-center gap-4 text-[#d8c1a3] uppercase tracking-widest text-sm border-b border-[#d8c1a3] pb-1 cursor-pointer"
              >
                Learn More →
              </motion.span>
            </motion.div>
          </div>
        ))}

      </div>
    </section>
  );
}
