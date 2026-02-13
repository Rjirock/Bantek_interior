'use client';

import { motion } from "framer-motion";
const interiorServices = [
  {
    title: "Space Planning & Layout Design",
    short:
      "Intelligent space planning that enhances movement, comfort, and visual balance.",
    long:
      "Our space planning approach focuses on optimizing every square foot while maintaining a seamless flow between areas. We analyze lifestyle needs, circulation patterns, natural light, and furniture zoning to create layouts that feel open, efficient, and effortlessly luxurious. Each plan is tailored to improve usability without compromising aesthetics.",
    highlights: [
      "Optimized floor layouts",
      "Natural light & ventilation planning",
      "Functional zoning for daily living",
      "Balance between openness and privacy"
    ],
    image:"/Space Planning & Layout Design.jpg"
  },

  {
    title: "Living & Bedroom Interiors",
    short:
      "Refined living and bedroom spaces designed for comfort, warmth, and elegance.",
    long:
      "We design living rooms and bedrooms that reflect calm sophistication and timeless comfort. From furniture placement to wall finishes, textures, and lighting layers, every element is carefully curated to create spaces that feel inviting yet luxurious. The result is interiors that support relaxation, family time, and personal well-being.",
    highlights: [
      "Luxury furniture layouts",
      "Soft lighting & layered ambiance",
      "Premium wall finishes & textures",
      "Comfort-focused spatial design"
    ],
    image:"/Living_&_Bedroom Interiors.jpg"
  },

  {
    title: "Kitchen & Dining Design",
    short:
      "Modern kitchens and dining areas blending functionality with premium aesthetics.",
    long:
      "Our kitchen and dining designs combine smart planning with refined material selection. We focus on workflow efficiency, storage optimization, and ergonomic layouts while incorporating high-end finishes and contemporary styling. The dining space is designed as a natural extension, creating harmony between cooking and social interaction.",
    highlights: [
      "Ergonomic kitchen layouts",
      "Smart storage solutions",
      "Premium countertops & finishes",
      "Integrated dining concepts"
    ],
    image:"/Kitchen & Dining Design.jpg"
  },

  {
    title: "Lighting & False Ceiling Design",
    short:
      "Architectural lighting solutions that enhance mood, depth, and spatial drama.",
    long:
      "Lighting is a key element of luxury interiors. We design false ceilings and lighting plans that add depth, highlight architectural elements, and create layered illumination. From ambient lighting to accent and task lighting, every fixture is placed to elevate the overall experience of the space.",
    highlights: [
      "False ceiling concepts",
      "Ambient, accent & task lighting",
      "Mood-based lighting scenes",
      "Architectural light placement"
    ],
    image:"/Lighting & False Ceiling Design.jpg"
  },

  {
    title: "Furniture & Custom Joinery",
    short:
      "Custom-crafted furniture tailored to space, style, and functionality.",
    long:
      "We design and detail bespoke furniture and joinery that perfectly complements the interior concept. From wardrobes and TV units to modular storage and statement furniture pieces, every design balances aesthetics with long-term durability and everyday comfort.",
    highlights: [
      "Custom furniture design",
      "Built-in wardrobes & storage",
      "Precision joinery detailing",
      "Premium materials & finishes"
    ],
    image:"/Furniture & Custom Joinery.jpg"
  },

  {
    title: "Material & Finish Selection",
    short:
      "Curated material palettes for timeless, refined interior environments.",
    long:
      "Material selection defines the character of an interior. We carefully curate finishes, textures, and color palettes that age beautifully over time. Our expertise ensures harmony between surfaces, furniture, and lighting—resulting in interiors that feel cohesive, luxurious, and enduring.",
    highlights: [
      "Premium material curation",
      "Texture & color harmony",
      "Natural & engineered finishes",
      "Timeless design aesthetics"
    ],
    image:"/Material & Finish Selection.jpg"
  }
];


export default function InteriorSecondSection() {
  return (
    <section className="relative bg-[#070707] text-[#f3e4cf] py-22 sm:py-34 lg:py-50 overflow-hidden">

      {/* ambient glow */}
      <div className="absolute left-1/2 top-1/2 w-[900px] h-[900px] bg-[#d8c1a320] blur-[280px] -translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-12 space-y-28 sm:space-y-40">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light leading-tight">
            Complete interior design solutions crafted for
            <span className="text-[#d8c1a3]"> refined living</span>
          </h2>
        </motion.div>

        {/* Services */}
        {interiorServices.map((service, index) => (
          <div
            key={service.title}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={service.image}
                alt={service.title}
                className="
                  w-full h-[280px] sm:h-[420px] lg:h-[560px]
                  object-cover rounded-2xl lg:rounded-[40px]
                  shadow-[0_30px_120px_rgba(0,0,0,0.9)]
                "
              />

              {/* architectural frame */}
              <div className="absolute -top-8 -right-8 w-28 h-28 border border-[#d8c1a340] rounded-xl hidden sm:block" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <p className="text-[#d8c1a3] text-sm tracking-widest mb-3">
                {service.no}
              </p>

              <h3 className="text-2xl sm:text-4xl font-light mb-4">
                {service.title}
              </h3>

              <p className="text-[#e6dccb]/80 text-base sm:text-lg mb-4">
                {service.short}
              </p>

              <p className="text-[#e6dccb]/65 text-sm sm:text-base leading-relaxed">
                {service.long}
              </p>

              <div className="w-16 h-[1px] bg-[#d8c1a3] mt-8" />
            </motion.div>
          </div>
        ))}

      </div>
    </section>
  );
}
