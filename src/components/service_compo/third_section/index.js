'use client';

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Luxury Interior Planning",
    desc: "Spatial layouts crafted to maximize comfort, elegance, and everyday functionality.",
    img: "/ss1.jpg",
  },
  {
    title: "Material & Finish Selection",
    desc: "Premium materials chosen to reflect timeless aesthetics and durability.",
    img: "/ss2.jpg",
  },
  {
    title: "Lighting & Atmosphere Design",
    desc: "Strategic lighting that enhances mood, depth, and architectural beauty.",
    img: "/ss4.jpg",
  },
  {
    title: "Architectural Exterior Concepts",
    desc: "Bold modern facades that express identity and structural harmony.",
    img: "/ss3.jpg",
  },
  {
    title: "Landscape & Outdoor Living",
    desc: "Seamless integration of greenery, walkways, and exterior experiences.",
    img: "/ss1.jpg",
  },
];

export default function ServicesThirdSection() {
  return (
    <section
      className="
        relative
        py-20 sm:py-32 lg:py-52
        bg-[#050505]
        text-[#f3e4cf]
        overflow-hidden
      "
    >
      {/* subtle vertical architectural line */}
      <div className="hidden lg:block absolute left-1/2 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#d8c1a330] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 md:px-12 space-y-20 sm:space-y-32 lg:space-y-52">

        {experiences.map((item, i) => (
          <div
            key={item.title}
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-10 sm:gap-16 lg:gap-28
              items-center
            "
          >
            {/* IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className={`
                relative
                ${i % 2 !== 0 ? "lg:order-2" : ""}
              `}
            >
              <img
                src={item.img}
                alt={item.title}
                className="
                  w-full
                  h-[240px]
                  sm:h-[380px]
                  md:h-[460px]
                  lg:h-[560px]
                  object-cover
                  rounded-2xl sm:rounded-[32px] lg:rounded-[42px]
                  shadow-[0_30px_120px_rgba(0,0,0,0.95)]
                "
              />

              {/* architectural accent (desktop only) */}
              <div
                className="
                  hidden lg:block
                  absolute
                  -bottom-16 -right-16
                  w-44 h-44
                  border border-[#d8c1a340]
                  rounded-3xl
                "
              />
            </motion.div>

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1 }}
              viewport={{ once: true }}
              className={`
                text-center
                lg:text-left
                ${i % 2 !== 0 ? "lg:order-1" : ""}
              `}
            >
              <p
                className="
                  uppercase
                  tracking-[3px]
                  sm:tracking-[6px]
                  text-[#d8c1a3]
                  mb-4 sm:mb-6
                  text-[10px] sm:text-xs md:text-sm
                "
              >
                Our Approach
              </p>

              <h3
                className="
                  font-light
                  leading-tight
                  mb-4 sm:mb-8
                  text-2xl
                  sm:text-4xl
                  lg:text-5xl
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  text-sm sm:text-base lg:text-lg
                  text-[#e6dccb]/80
                  leading-relaxed
                  max-w-xl
                  mx-auto lg:mx-0
                  mb-6 sm:mb-10
                "
              >
                {item.desc}
              </p>

              <motion.a
                href="tel:+91 9708218424"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="
                  inline-flex
                  items-center
                  gap-3
                  text-[#d8c1a3]
                  uppercase
                  tracking-widest
                  text-[10px] sm:text-xs md:text-sm
                  border-b border-[#d8c1a3]
                  pb-1
                  cursor-pointer
                "
              >
                Learn More →
              </motion.a>
            </motion.div>
          </div>
        ))}

      </div>
    </section>
  );
}
