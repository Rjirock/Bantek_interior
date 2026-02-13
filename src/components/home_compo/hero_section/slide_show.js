'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const slides = [
  { img: "/ss1.jpg", title: "Modern Workspace", desc: "Luxury office interior" },
  { img: "/ss2.jpg", title: "Elegant Living", desc: "Warm premium finishes" },
  { img: "/ss3.jpg", title: "Glass Architecture", desc: "Light-driven structure" },
  { img: "/ss4.jpg", title: "Calm Bedroom", desc: "Soft layered lighting" },
  { img: "/ss2.jpg", title: "Luxury Villa", desc: "Open modern design" }
];

export default function LuxurySlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(i => (i + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">

      {/* IMAGES */}
      {slides.map((slide, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          animate={{
            opacity: i === index ? 1 : 0,
            scale: i === index ? 1.1 : 1.25
          }}
          transition={{
            opacity: { duration: 1.4 },
            scale: { duration: 6 }
          }}
        >
          <img
            src={slide.img}
            className="w-full h-full object-cover"
            alt={slide.title}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/60 md:bg-gradient-to-r md:from-black/65 md:via-black/35 md:to-black/65" />
        </motion.div>
      ))}

      {/* CONTENT */}
      <motion.div
        key={index}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-x-6 bottom-20 md:left-20 md:bottom-28 md:max-w-xl text-white"
      >
        <h1 className="text-3xl md:text-6xl font-light text-[#e6c98f] mb-3 tracking-wide leading-tight">
          {slides[index].title}
        </h1>
        <p className="text-sm md:text-lg text-white/80 max-w-md">
          {slides[index].desc}
        </p>
      </motion.div>

    </div>
  );
}
