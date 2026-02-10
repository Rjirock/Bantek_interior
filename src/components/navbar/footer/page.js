'use client';
import Link from "next/link";
import { motion } from "framer-motion";
const exploreLinks = [
  { label: "Home", path: "/" } ,
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Architect", path: "/services/architect" },
  { label: "Contact", path: "/contact_us" },
];
const expertiseLinks = [
  { label: "Architecture", path: "/services/architect" },
  { label: "Interior Design", path: "/services/interior" },
  { label: "Consultation", path: "/contact_us" },
];
const socialLinks = [
  { label: "Instagram", path: "https://instagram.com/bantek_architect" },
  { label: "LinkedIn", path: "https://linkedin.com/in/yourprofile" },
  { label: "Behance", path: "https://behance.net/yourprofile" },
];


export default function LuxuryFooterGraphical() {
  return (
    <footer className="relative bg-[#060606] text-[#f3e4cf] overflow-hidden">

      {/* large architectural frame */}
      <div className="absolute inset-4 md:inset-10 border border-[#d8c1a340] rounded-[30px] md:rounded-[60px]" />

      {/* glowing corner accents */}
      <div className="absolute top-10 left-10 md:top-20 md:left-20 w-20 h-20 md:w-32 md:h-32 border-t border-l border-[#d8c1a3]" />
      <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-20 h-20 md:w-32 md:h-32 border-b border-r border-[#d8c1a3]" />

      {/* flowing light band */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d8c1a350] to-transparent" />

      {/* ambient glow */}
      <div className="absolute left-1/2 top-1/2 w-[300px] h-[300px] md:w-[700px] md:h-[700px] bg-[#d8c1a325] blur-[150px] md:blur-[220px] -translate-x-1/2 -translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-14 py-20 md:py-40 
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-28 text-center sm:text-left">

        {/* Brand */}
        <div>
          <h3 className="text-2xl md:text-3xl tracking-[5px] md:tracking-[7px] text-[#d8c1a3] mb-6 md:mb-8">
            BANTEK
          </h3>
          <p className="text-[#e6dccb]/70 max-w-sm mx-auto sm:mx-0 leading-relaxed text-sm md:text-base">
          Interior & Architecture delivers elegant interior and exterior design solutions, blending creativity with precision. We transform spaces into timeless, functional works of art.
          </p>
        </div>

        {/* Explore */}
        <div>
          <p className="uppercase tracking-[4px] md:tracking-[6px] text-[#d8c1a3] mb-6 md:mb-10">Explore</p>
          <ul className="space-y-4 md:space-y-6">
  {exploreLinks.map(item => (
    <motion.li
      key={item.label}
      whileHover={{ scale: 1.08 }}
      className="transition text-sm md:text-base"
    >
      <Link
        href={item.path}
        className="cursor-pointer hover:text-[#d8c1a3]"
      >
        ─ {item.label}
      </Link>
    </motion.li>
  ))}
</ul>

        </div>

        {/* Expertise */}
        <div>
          <p className="uppercase tracking-[4px] md:tracking-[6px] text-[#d8c1a3] mb-6 md:mb-10">Expertise</p>
          <ul className="space-y-4 md:space-y-6">
  {expertiseLinks.map(item => (
    <motion.li
      key={item.label}
      whileHover={{ scale: 1.08 }}
      className="transition text-sm md:text-base"
    >
      <Link
        href={item.path}
        className="cursor-pointer hover:text-[#d8c1a3]"
      >
        ─ {item.label}
      </Link>
    </motion.li>
  ))}
</ul>

        </div>

        {/* Connect */}
        <div>
          <p className="uppercase tracking-[4px] md:tracking-[6px] text-[#d8c1a3] mb-6 md:mb-10">Connect</p>
          <p className="mb-2 text-[#e6dccb]/70 text-sm md:text-base">bantekbusiness@gmail.com</p>
          <p className="mb-6 md:mb-10 text-[#e6dccb]/70 text-sm md:text-base">+91 9708218424</p>

          <div className="flex justify-center sm:justify-start gap-6 md:gap-8 text-[#d8c1a3]">
  {socialLinks.map(item => (
    <motion.a
      key={item.label}
      href={item.path}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -6, scale: 1.1 }}
      className="cursor-pointer hover:text-white transition text-sm md:text-base"
    >
      {item.label}
    </motion.a>
  ))}
</div>

        </div>

      </div>

      {/* bottom architectural line */}
      <div className="relative text-center py-6 md:py-10 text-xs md:text-sm text-white/50 border-t border-[#d8c1a320] px-4">
        © {new Date().getFullYear()} BANTEK Interior — Luxury Design & Architecture
      </div>

    </footer>
  );
}
