<<<<<<< HEAD
'use client';

import { motion } from "framer-motion";

const services = [
  {
    no: "01",
    title: "Residential Architecture",
    short: "Thoughtfully designed living spaces crafted for elegance, comfort, and long-term value.",
    long: "Our residential architecture services focus on creating homes that reflect lifestyle, personality, and architectural balance. We carefully plan spatial flow, natural lighting, ventilation, and material selection to ensure each residence feels open, functional, and timeless. From modern homes to luxury residences, every project is tailored with precision, ensuring comfort, sustainability, and refined aesthetics throughout the living experience.",
    image: "/Residential_Architecture.jpg",
  },

  {
    no: "02",
    title: "Commercial Architecture",
    short: "Purpose-driven commercial structures designed for performance and strong visual identity.",
    long: "We design commercial buildings that combine efficiency, durability, and brand expression. Our approach ensures optimized layouts, smooth circulation, and professional aesthetics suited for offices, retail spaces, and institutional projects. Each commercial structure is planned to support productivity, customer engagement, and long-term operational success while maintaining a strong architectural presence.",
    image: "/Commercial_Architecture.jpg",
  },

  {
    no: "03",
    title: "Villa & Bungalow Design",
    short: "Exclusive villas and bungalows defined by luxury, privacy, and architectural excellence.",
    long: "Our villa and bungalow designs emphasize spacious planning, premium materials, and striking architectural forms. We create bespoke luxury residences that offer privacy, comfort, and elegant detailing. From grand entrances to thoughtfully designed interiors and outdoor spaces, every element is curated to deliver a refined and personalized living environment.",
    image: "/Villa.jpg",
  },

  {
    no: "04",
    title: "3D Elevation & Facade Design",
    short: "Visually powerful facades that define the character of your building.",
    long: "We specialize in 3D elevation and facade design that enhances the architectural identity of a structure. By balancing proportions, textures, lighting, and materials, we create contemporary and timeless elevations. Our designs ensure strong street presence while complementing the surrounding environment and architectural context.",
    image: "/3D_Elevation & Facade_Design.jpg",
  },

  {
    no: "05",
    title: "Structural Planning",
    short: "Strong, efficient structural systems built for safety, durability, and performance.",
    long: "Our structural planning services focus on creating technically sound frameworks that support architectural vision without compromise. We ensure optimal load distribution, safety compliance, and construction efficiency. Every structural layout is carefully coordinated with architectural design to achieve long-lasting strength, stability, and cost-effective execution.",
    image: "/Structural.jpg",
  },

  {
    no: "06",
    title: "Landscape Architecture",
    short: "Outdoor architectural environments designed to blend nature with built form.",
    long: "We design landscape architecture that enhances outdoor living and complements architectural spaces. Our approach integrates greenery, pathways, water elements, and open areas to create balanced and inviting environments. Whether residential or commercial, our landscapes are planned to provide functionality, visual harmony, and a seamless connection between nature and architecture.",
    image: "/Landscape_Architecture.jpg",
  },
];


export default function ExteriorSecondSection() {
  return (
    <section className="relative bg-[#060606] text-[#f3e4cf] py-28 sm:py-40 overflow-hidden">

      {/* ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0c0c0c] to-black" />
      <div className="absolute left-1/2 top-1/2 w-[800px] h-[800px] bg-[#d8c1a325] blur-[260px] -translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12">

        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <p className="uppercase tracking-[6px] text-[#d8c1a3] mb-6 text-sm">
            Architectural Services
          </p>
          <h2 className="text-3xl sm:text-5xl font-light">
            Designed with purpose, detailed with precision
          </h2>
        </motion.div>

        {/* services */}
        <div className="space-y-32">
          {services.map((item, index) => (
            <motion.div
              key={item.no}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* TEXT */}
              <div>
                <span className="text-[#d8c1a3] text-5xl font-light">
                  {item.no}
                </span>

                <h3 className="mt-6 mb-4 text-2xl sm:text-3xl font-light">
                  {item.title}
                </h3>

                <p className="text-[#d8c1a3] mb-6">
                  {item.short}
                </p>

                <p className="text-[#e6dccb]/75 leading-relaxed max-w-xl">
                  {item.long}
                </p>

                <div className="mt-10 w-24 h-[1px] bg-[#d8c1a3]" />
              </div>

              {/* IMAGE */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6 }}
                className="
                  relative
                  h-[300px] sm:h-[420px]
                  rounded-2xl overflow-hidden
                  shadow-[0_40px_140px_rgba(0,0,0,0.9)]
                "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {/* luxury overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </motion.div>
            </motion.div>
          ))}
        </div>

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
    title: "Residential Architecture",
    short: "Thoughtfully designed living spaces crafted for elegance, comfort, and long-term value.",
    long: "Our residential architecture services focus on creating homes that reflect lifestyle, personality, and architectural balance. We carefully plan spatial flow, natural lighting, ventilation, and material selection to ensure each residence feels open, functional, and timeless. From modern homes to luxury residences, every project is tailored with precision, ensuring comfort, sustainability, and refined aesthetics throughout the living experience.",
    image: "/Residential_Architecture.jpg",
  },

  {
    no: "02",
    title: "Commercial Architecture",
    short: "Purpose-driven commercial structures designed for performance and strong visual identity.",
    long: "We design commercial buildings that combine efficiency, durability, and brand expression. Our approach ensures optimized layouts, smooth circulation, and professional aesthetics suited for offices, retail spaces, and institutional projects. Each commercial structure is planned to support productivity, customer engagement, and long-term operational success while maintaining a strong architectural presence.",
    image: "/Commercial_Architecture.jpg",
  },

  {
    no: "03",
    title: "Villa & Bungalow Design",
    short: "Exclusive villas and bungalows defined by luxury, privacy, and architectural excellence.",
    long: "Our villa and bungalow designs emphasize spacious planning, premium materials, and striking architectural forms. We create bespoke luxury residences that offer privacy, comfort, and elegant detailing. From grand entrances to thoughtfully designed interiors and outdoor spaces, every element is curated to deliver a refined and personalized living environment.",
    image: "/Villa.jpg",
  },

  {
    no: "04",
    title: "3D Elevation & Facade Design",
    short: "Visually powerful facades that define the character of your building.",
    long: "We specialize in 3D elevation and facade design that enhances the architectural identity of a structure. By balancing proportions, textures, lighting, and materials, we create contemporary and timeless elevations. Our designs ensure strong street presence while complementing the surrounding environment and architectural context.",
    image: "/3D_Elevation & Facade_Design.jpg",
  },

  {
    no: "05",
    title: "Structural Planning",
    short: "Strong, efficient structural systems built for safety, durability, and performance.",
    long: "Our structural planning services focus on creating technically sound frameworks that support architectural vision without compromise. We ensure optimal load distribution, safety compliance, and construction efficiency. Every structural layout is carefully coordinated with architectural design to achieve long-lasting strength, stability, and cost-effective execution.",
    image: "/Structural.jpg",
  },

  {
    no: "06",
    title: "Landscape Architecture",
    short: "Outdoor architectural environments designed to blend nature with built form.",
    long: "We design landscape architecture that enhances outdoor living and complements architectural spaces. Our approach integrates greenery, pathways, water elements, and open areas to create balanced and inviting environments. Whether residential or commercial, our landscapes are planned to provide functionality, visual harmony, and a seamless connection between nature and architecture.",
    image: "/Landscape_Architecture.jpg",
  },
];


export default function ExteriorSecondSection() {
  return (
    <section className="relative bg-[#060606] text-[#f3e4cf] py-28 sm:py-40 overflow-hidden">

      {/* ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0c0c0c] to-black" />
      <div className="absolute left-1/2 top-1/2 w-[800px] h-[800px] bg-[#d8c1a325] blur-[260px] -translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12">

        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <p className="uppercase tracking-[6px] text-[#d8c1a3] mb-6 text-sm">
            Architectural Services
          </p>
          <h2 className="text-3xl sm:text-5xl font-light">
            Designed with purpose, detailed with precision
          </h2>
        </motion.div>

        {/* services */}
        <div className="space-y-32">
          {services.map((item, index) => (
            <motion.div
              key={item.no}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* TEXT */}
              <div>
                <span className="text-[#d8c1a3] text-5xl font-light">
                  {item.no}
                </span>

                <h3 className="mt-6 mb-4 text-2xl sm:text-3xl font-light">
                  {item.title}
                </h3>

                <p className="text-[#d8c1a3] mb-6">
                  {item.short}
                </p>

                <p className="text-[#e6dccb]/75 leading-relaxed max-w-xl">
                  {item.long}
                </p>

                <div className="mt-10 w-24 h-[1px] bg-[#d8c1a3]" />
              </div>

              {/* IMAGE */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6 }}
                className="
                  relative
                  h-[300px] sm:h-[420px]
                  rounded-2xl overflow-hidden
                  shadow-[0_40px_140px_rgba(0,0,0,0.9)]
                "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />

                {/* luxury overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
>>>>>>> d11812bf8fc1910c4f201331bb5270d209b3c180
