'use client';

import { motion } from "framer-motion";

export default function ServicesSecondSection() {
  return (
    <section className="relative py-44 bg-[#0a0a0a] text-[#f3e4cf] overflow-hidden">

      {/* subtle champagne line */}
      <div className="absolute left-1/2 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#d8c1a340] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-12 space-y-48">

        {/* INTERIOR DESIGN */}
        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[6px] text-[#d8c1a3] mb-6">
              Interior Design
            </p>

            <h2 className="text-5xl font-light leading-tight mb-8">
              Interiors designed for
              <span className="text-[#d8c1a3]"> refined living</span>
            </h2>

            <p className="text-lg text-[#e6dccb]/80 max-w-xl leading-relaxed mb-10">
              We craft interior environments that balance comfort, elegance,
              and functionality — spaces that feel personal, timeless, and
              meticulously detailed.
            </p>

            <motion.a
              whileHover={{ x: 12 }}
              transition={{ type: "spring", stiffness: 120 }}
              href="/contact"
              className="inline-flex items-center gap-4 text-[#d8c1a3] uppercase tracking-widest text-sm border-b border-[#d8c1a3] pb-1"
            >
              Discuss Interior Project →
            </motion.a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/ss1.jpg"
              className="w-full h-[560px] object-cover rounded-[40px] shadow-[0_40px_140px_rgba(0,0,0,0.9)]"
              alt="Interior design"
            />

            {/* architectural accent */}
            <div className="absolute -bottom-16 right-16 w-48 h-48 border border-[#d8c1a340] rounded-3xl" />
          </motion.div>
        </div>

        {/* EXTERIOR DESIGN */}
        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <img
              src="/ss3.jpg"
              className="w-full h-[560px] object-cover rounded-[40px] shadow-[0_40px_140px_rgba(0,0,0,0.9)]"
              alt="Exterior design"
            />

            {/* architectural accent */}
            <div className="absolute -top-16 left-16 w-48 h-48 border border-[#d8c1a340] rounded-3xl" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <p className="uppercase tracking-[6px] text-[#d8c1a3] mb-6">
              Exterior Design
            </p>

            <h2 className="text-5xl font-light leading-tight mb-8">
              Architecture that creates a
              <span className="text-[#d8c1a3]"> lasting impression</span>
            </h2>

            <p className="text-lg text-[#e6dccb]/80 max-w-xl leading-relaxed mb-10">
              Our exterior designs combine bold forms, modern materials,
              and architectural clarity to create facades that stand out
              while remaining timeless.
            </p>

            <motion.a
              whileHover={{ x: 12 }}
              transition={{ type: "spring", stiffness: 120 }}
              href="/contact"
              className="inline-flex items-center gap-4 text-[#d8c1a3] uppercase tracking-widest text-sm border-b border-[#d8c1a3] pb-1"
            >
              Discuss Exterior Project →
            </motion.a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
