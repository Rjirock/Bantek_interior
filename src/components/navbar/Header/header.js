'use client';
import { usePathname } from "next/navigation";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";


const menu = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Architecture", path: "/services/architect" },
  { name: "Interior", path: "/services/interior" },
  { name: "Services", path: "/services" },
];
const menuContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.25,
    },
  },
};

const menuItem = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 20,
    },
  },
};


export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300
      ${open ? "bg-transparent" : "bg-black/80 backdrop-blur-xl border-b border-[#d8c1a330]"}`}
    >

      {/* TOP GOLD LINE */}
      {!open && (
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#d8c1a3] to-transparent" />
      )}

      <div className="w-full h-[78px] px-12 xl:px-24 flex items-center justify-between">





        <Link href="/" className="flex items-center h-full flex-shrink-0 group">

          {/* LOGO HOLDER — height locked to header */}
          <div className="
  relative
  h-[68px] w-[68px]
  rounded-full
  bg-gradient-to-br from-[#1b1b1b] via-[#0f0f0f] to-black
  border border-[#d8c1a340]
  shadow-[inset_0_1px_1px_rgba(255,255,255,0.14),0_8px_18px_rgba(0,0,0,0.75)]
  transition-all duration-500
  group-hover:scale-[1.06]
  overflow-hidden
">

            {/* subtle crystal sheen */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

            <Image
              src="/Logo.png"
              alt="Bantek logo"
              fill
              quality={100}
              priority
              className="
      object-contain
      p-1.5
      contrast-110
      brightness-140
      drop-shadow-[0_2px_6px_rgba(216,193,163,0.35)]
    "
            />

          </div>

        </Link>








        {/* DESKTOP MENU */}
       <nav className="hidden lg:flex items-center gap-12 ml-20 uppercase text-[13px] tracking-[0.28em] text-[#f3e4cf]">
  {menu.map(item => {
    const isActive = pathname === item.path;

    return (
      <motion.div
        key={item.name}
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 180 }}
        className="relative"
      >
        <Link
          href={item.path}
          className={`
            relative py-2 transition-all duration-300
            ${isActive
              ? "text-[#d8c1a3]"
              : "hover:text-[#d8c1a3]"}
          `}
        >
          {item.name}

          {/* ACTIVE / HOVER INDICATOR */}
          <span
            className={`
              absolute left-1/2 -bottom-1 h-[1px] bg-[#d8c1a3]
              transition-all duration-300
              ${isActive ? "w-full -translate-x-1/2" : "w-0 group-hover:w-full"}
            `}
          />
        </Link>
      </motion.div>
    );
  })}
</nav>



        {/* CONTACT BUTTON */}
        <Link href="tel:+91 9708218424" className="hidden lg:block ml-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              px-8 py-3 rounded-full
              bg-gradient-to-r from-[#d8c1a3] to-[#bfa27a]
              text-black font-semibold tracking-widest uppercase text-sm
              shadow-lg shadow-[#d8c1a340]
              hover:shadow-[#d8c1a380]
              transition-all duration-300
            "
          >
            Contact Us
          </motion.button>
        </Link>
        {/* BOOK NOW – ULTRA LUXURY CTA */}
        {/* BOOK NOW – SOFT LUXURY HOVER */}
        <Link href="mailto:bantekbusiness@gmail.com" className="hidden lg:block ml-4 group">
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="
      relative overflow-hidden
      px-9 py-3 rounded-full
      border border-[#d8c1a360]
      text-[#d8c1a3] font-medium tracking-[0.25em] uppercase text-sm
      bg-black/40 backdrop-blur-xl
      shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),0_8px_18px_rgba(0,0,0,0.7)]
      transition-all duration-500

      hover:text-[#111]
      hover:bg-gradient-to-r hover:from-[#f3e4cf] hover:via-[#e6d3b3] hover:to-[#d8c1a3]
      hover:border-transparent
      hover:shadow-[0_0_20px_rgba(216,193,163,0.55)]
    "
          >
            <span className="relative z-10">Book Now</span>
          </motion.button>
        </Link>

        {/* MOBILE HAMBURGER (ONLY ONE ICON) */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden z-[1000] flex flex-col justify-center items-center gap-1"
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
            className="w-8 h-[2px] bg-[#d8c1a3]"
          />
          <motion.span
            animate={{ opacity: open ? 0 : 1 }}
            className="w-8 h-[2px] bg-[#d8c1a3]"
          />
          <motion.span
            animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
            className="w-8 h-[2px] bg-[#d8c1a3]"
          />
        </button>

      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="
        fixed top-[90px] left-0 w-full h-[70vh]
        z-[999]
        bg-black/70 backdrop-blur-2xl
        border-b border-[#d8c1a330]
        shadow-2xl
      "
          >

            {/* Luxury Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#d8c1a320] via-transparent to-transparent" />

            <motion.ul
  variants={menuContainer}
  initial="hidden"
  animate="show"
  className="
    flex flex-col
    items-center
    text-center
    space-y-8
    px-6
  "
>

              {menu.map(item => (
                <motion.li
                  key={item.name}
                  variants={menuItem}
                  className="perspective-[1000px]"
                >
                  <Link
                    href={item.path}
                    onClick={() => setOpen(false)}
                    className="
    block
    px-6 py-2
    text-[clamp(1.6rem,5vw,2.4rem)]
    tracking-[0.35em]
    font-light
    text-[#f3e4cf]
    transition-all duration-500
    hover:text-[#d8c1a3]
  "
                  >
                    {item.name}
                  </Link>

                </motion.li>
              ))}
           

              {/* MOBILE CONTACT CTA */}
              <motion.li variants={menuItem} className="pt-4">
                <Link href="tel:+91 9708218424">
                  <button className="
      px-12 py-3
      rounded-full
      bg-gradient-to-r from-[#d8c1a3] to-[#bfa27a]
      text-black
      font-semibold
      tracking-[0.3em]
      uppercase text-sm
      shadow-[0_10px_40px_rgba(216,193,163,0.6)]
      transition-all duration-500
    ">
                    Contact Us
                  </button>
                </Link>
              </motion.li>


              {/* MOBILE BOOK NOW CTA */}
              <motion.li variants={menuItem}>
                <Link href="mailto:bantekbusiness@gmail.com">
                  <button className="
      px-12 py-3
      rounded-full
      border border-[#d8c1a3]
      text-[#d8c1a3]
      tracking-[0.3em]
      uppercase text-sm
      bg-black/40 backdrop-blur-xl
      transition-all duration-500
      hover:bg-gradient-to-r hover:from-[#f3e4cf] hover:to-[#d8c1a3]
      hover:text-black
      hover:shadow-[0_0_24px_rgba(216,193,163,0.55)]
    ">
                    Book Now
                  </button>
                </Link>
              </motion.li>

            </motion.ul>


          </motion.div>
        )}
      </AnimatePresence>


      {/* BOTTOM GOLD LINE */}
      {!open && (
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#d8c1a3] to-transparent" />
      )}

    </header>
  );
}
