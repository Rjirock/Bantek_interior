'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const menu = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Architecture', path: '/services/architect' },
  { name: 'Interior', path: '/services/interior' },
  { name: 'Services', path: '/services' },
  { name: 'Contact Us', path: '/contact_us' },
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
      type: 'spring',
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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        open
          ? 'bg-transparent'
          : 'bg-black/80 backdrop-blur-xl border-b border-[#d8c1a330]'
      }`}
    >
      {!open && (
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#d8c1a3] to-transparent" />
      )}

      <div className="w-full h-[78px] px-12 xl:px-24 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <div className="relative h-[64px] w-[64px] rounded-full overflow-hidden">
            <Image
              src="/Logo.png"
              alt="Bantek logo"
              fill
              priority
              className="object-cover scale-[1.18] brightness-110 contrast-110"
            />
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-12 ml-20 uppercase text-[13px] tracking-[0.28em] text-[#f3e4cf]">
          {menu.map(item => {
            const isActive = pathname === item.path;

            return (
              <motion.div
                key={item.path}
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 180 }}
                className="relative group"
              >
                <Link
                  href={item.path}
                  className={`relative py-2 transition-all duration-300 ${
                    isActive ? 'text-[#d8c1a3]' : 'hover:text-[#d8c1a3]'
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute left-1/2 -bottom-1 h-[1px] bg-[#d8c1a3] transition-all duration-300 ${
                      isActive
                        ? 'w-full -translate-x-1/2'
                        : 'w-0 group-hover:w-full group-hover:-translate-x-1/2'
                    }`}
                  />
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden lg:flex items-center gap-4 ml-16">
          <Link href="tel:+919708218424">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-[#d8c1a3] to-[#bfa27a] text-black font-semibold tracking-widest uppercase text-sm shadow-lg"
            >
              Contact Us
            </motion.button>
          </Link>

          <Link href="mailto:bantekbusiness@gmail.com">
            <motion.button
              whileHover={{ scale: 1.06 }}
              className="px-9 py-3 rounded-full border border-[#d8c1a360] text-[#d8c1a3] tracking-[0.25em] uppercase text-sm bg-black/40 backdrop-blur-xl hover:bg-gradient-to-r hover:from-[#f3e4cf] hover:to-[#d8c1a3] hover:text-black transition-all"
            >
              Book Now
            </motion.button>
          </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1"
        >
          <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }} className="w-8 h-[2px] bg-[#d8c1a3]" />
          <motion.span animate={{ opacity: open ? 0 : 1 }} className="w-8 h-[2px] bg-[#d8c1a3]" />
          <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }} className="w-8 h-[2px] bg-[#d8c1a3]" />
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[88px] left-1/2 -translate-x-1/2 w-[92%] max-w-md bg-black/75 backdrop-blur-2xl border border-[#d8c1a330] rounded-3xl shadow-2xl"
          >
            <motion.ul
              variants={menuContainer}
              initial="hidden"
              animate="show"
              className="flex flex-col items-center px-6 py-8 space-y-6"
            >
              {menu.map(item => (
                <motion.li key={item.path} variants={menuItem}>
                  <Link
                    href={item.path}
                    onClick={() => setOpen(false)}
                    className="text-[#f3e4cf] tracking-[0.32em] hover:text-[#d8c1a3]"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>

      {!open && (
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#d8c1a3] to-transparent" />
      )}
    </header>
  );
}
