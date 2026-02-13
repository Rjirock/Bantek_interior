'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Luxury Villa Owner",
    text: "BANTEK didn’t just design our home — they crafted an experience. Every detail feels refined, timeless, and premium."
  },
  {
    name: "Anita Sharma",
    role: "Corporate Office Client",
    text: "From concept to execution, their professionalism and design excellence exceeded all expectations."
  },
  {
    name: "Vikram Singh",
    role: "Apartment Renovation Client",
    text: "The balance of luxury and functionality they delivered is truly world-class."
  }
];

export default function LuxuryTestimonialSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex(i => (i + 1) % testimonials.length);
    }, 4200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative py-20 sm:py-32 lg:py-40 bg-[#0f0f0f] text-[#f3e4cf] overflow-hidden">

      {/* soft ambient glow */}
      <div
        className="
          absolute left-1/2 -top-24
          w-[300px] h-[300px]
          sm:w-[500px] sm:h-[500px]
          lg:w-[700px] lg:h-[700px]
          bg-[#d8c1a330]
          blur-[140px] sm:blur-[180px] lg:blur-[220px]
          -translate-x-1/2
        "
      />

      <div className="max-w-5xl mx-auto text-center px-6 sm:px-12">

        <p
          className="
            uppercase
            tracking-[4px] sm:tracking-[7px]
            text-[#d8c1a3]
            mb-4 sm:mb-6
            text-sm sm:text-base
          "
        >
          Client Voices
        </p>

        <h2
          className="
            text-2xl sm:text-4xl lg:text-7xl
            font-light
            mb-8 sm:mb-14 lg:mb-20
            leading-tight
          "
        >
          Experiences that define our
          <span className="text-[#d8c1a3]"> excellence</span>
        </h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <p
              className="
                text-base sm:text-xl lg:text-2xl
                leading-relaxed
                text-[#e6dccb]/90
                mb-6 sm:mb-12
              "
            >
              “{testimonials[index].text}”
            </p>

            <div className="flex flex-col items-center">
              <span className="text-[#d8c1a3] text-sm sm:text-lg">
                {testimonials[index].name}
              </span>
              <span className="text-white/50 text-xs sm:text-sm tracking-wide">
                {testimonials[index].role}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* minimalist luxury progress dots */}
        <div className="flex justify-center gap-3 mt-8 sm:mt-14">
          {testimonials.map((_, i) => (
            <motion.div
              key={i}
              animate={{
                opacity: i === index ? 1 : 0.3,
                scale: i === index ? 1.2 : 1
              }}
              className="w-2 h-2 rounded-full bg-[#d8c1a3]"
            />
          ))}
        </div>

      </div>
    </section>
  );
}
