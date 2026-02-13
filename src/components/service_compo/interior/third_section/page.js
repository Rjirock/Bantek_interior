<<<<<<< HEAD
'use client';

import { motion } from "framer-motion";

const services = [
  {
    no: "01",
    title: "Luxury Living Room Design",
    desc: "Elegant layouts crafted with premium furniture, layered lighting, and warm material tones to create inviting yet sophisticated living spaces.",
    img: "/i1.jpg"
  },
  {
    no: "02",
    title: "Bedroom Interior Styling",
    desc: "Calm and refined bedroom environments designed for comfort, privacy, and timeless visual harmony.",
    img: "/i4.jpg"
  },
  {
    no: "03",
    title: "Modular Kitchen Design",
    desc: "Highly functional modern kitchens featuring intelligent storage, premium finishes, and ergonomic planning.",
    img: "/i3.jpg"
  },
  {
    no: "04",
    title: "False Ceiling & Lighting",
    desc: "Architectural ceiling concepts with layered lighting that enhance depth, ambience, and spatial character.",
    img: "/ss4.jpg"
  },
  {
    no: "05",
    title: "Custom Furniture Design",
    desc: "Bespoke furniture pieces crafted to integrate seamlessly with the interior architecture and lifestyle needs.",
    img: "/ss3.jpg"
  },
  {
    no: "06",
    title: "Premium Material Selection",
    desc: "Curated selection of textures, stones, woods, and finishes to achieve timeless, luxurious interiors.",
    img: "/ss1.jpg"
  }
];

export default function InteriorThirdSection() {
  return (
    <section className="relative bg-[#050505] text-[#f3e4cf] py-20 sm:py-32 lg:py-52 overflow-hidden">

      {/* ambient architectural glow */}
      <div className="absolute left-1/2 top-1/2 w-[900px] h-[900px] bg-[#d8c1a325] blur-[280px] -translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-12 space-y-24 sm:space-y-36 lg:space-y-52">

        {services.map((item, i) => (
          <div
            key={item.title}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-28 items-center ${
              i % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={item.img}
                alt={item.title}
                className="
                  w-full
                  h-[260px] sm:h-[420px] lg:h-[560px]
                  object-cover
                  rounded-2xl sm:rounded-[36px] lg:rounded-[46px]
                  shadow-[0_35px_140px_rgba(0,0,0,0.95)]
                "
              />

              {/* architectural frame */}
              <div className="hidden sm:block absolute -top-10 -right-10 w-32 h-32 border border-[#d8c1a340] rounded-xl" />
            </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1 }}
              viewport={{ once: true }}
              className="max-w-xl text-center lg:text-left"
            >
              <p className="text-[#d8c1a3] tracking-[0.35em] text-sm mb-3">
                {item.no}
              </p>

              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-light mb-4 sm:mb-6">
                {item.title}
              </h3>

              <p className="text-[#e6dccb]/80 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-10">
                {item.desc}
              </p>

              <motion.span
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="
                  inline-flex items-center gap-3
                  text-[#d8c1a3]
                  uppercase tracking-widest
                  text-xs sm:text-sm
                  border-b border-[#d8c1a3]
                  pb-1
                  cursor-pointer
                "
              >
                View Interior Projects →
              </motion.span>
            </motion.div>
          </div>
        ))}

      </div>
    </section>
  );
}
=======
'use client';

import { motion } from "framer-motion";

const services = [
  {
    no: "01",
    title: "Luxury Living Room Design",
    desc: "Elegant layouts crafted with premium furniture, layered lighting, and warm material tones to create inviting yet sophisticated living spaces.",
    img: "/i1.jpg"
  },
  {
    no: "02",
    title: "Bedroom Interior Styling",
    desc: "Calm and refined bedroom environments designed for comfort, privacy, and timeless visual harmony.",
    img: "/i4.jpg"
  },
  {
    no: "03",
    title: "Modular Kitchen Design",
    desc: "Highly functional modern kitchens featuring intelligent storage, premium finishes, and ergonomic planning.",
    img: "/i3.jpg"
  },
  {
    no: "04",
    title: "False Ceiling & Lighting",
    desc: "Architectural ceiling concepts with layered lighting that enhance depth, ambience, and spatial character.",
    img: "/ss4.jpg"
  },
  {
    no: "05",
    title: "Custom Furniture Design",
    desc: "Bespoke furniture pieces crafted to integrate seamlessly with the interior architecture and lifestyle needs.",
    img: "/ss3.jpg"
  },
  {
    no: "06",
    title: "Premium Material Selection",
    desc: "Curated selection of textures, stones, woods, and finishes to achieve timeless, luxurious interiors.",
    img: "/ss1.jpg"
  }
];

export default function InteriorThirdSection() {
  return (
    <section className="relative bg-[#050505] text-[#f3e4cf] py-20 sm:py-32 lg:py-52 overflow-hidden">

      {/* ambient architectural glow */}
      <div className="absolute left-1/2 top-1/2 w-[900px] h-[900px] bg-[#d8c1a325] blur-[280px] -translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-12 space-y-24 sm:space-y-36 lg:space-y-52">

        {services.map((item, i) => (
          <div
            key={item.title}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-28 items-center ${
              i % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={item.img}
                alt={item.title}
                className="
                  w-full
                  h-[260px] sm:h-[420px] lg:h-[560px]
                  object-cover
                  rounded-2xl sm:rounded-[36px] lg:rounded-[46px]
                  shadow-[0_35px_140px_rgba(0,0,0,0.95)]
                "
              />

              {/* architectural frame */}
              <div className="hidden sm:block absolute -top-10 -right-10 w-32 h-32 border border-[#d8c1a340] rounded-xl" />
            </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1 }}
              viewport={{ once: true }}
              className="max-w-xl text-center lg:text-left"
            >
              <p className="text-[#d8c1a3] tracking-[0.35em] text-sm mb-3">
                {item.no}
              </p>

              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-light mb-4 sm:mb-6">
                {item.title}
              </h3>

              <p className="text-[#e6dccb]/80 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-10">
                {item.desc}
              </p>

              <motion.span
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="
                  inline-flex items-center gap-3
                  text-[#d8c1a3]
                  uppercase tracking-widest
                  text-xs sm:text-sm
                  border-b border-[#d8c1a3]
                  pb-1
                  cursor-pointer
                "
              >
                View Interior Projects →
              </motion.span>
            </motion.div>
          </div>
        ))}

      </div>
    </section>
  );
}
>>>>>>> d11812bf8fc1910c4f201331bb5270d209b3c180
