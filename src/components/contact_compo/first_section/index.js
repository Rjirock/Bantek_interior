'use client';

import { motion } from "framer-motion";

export default function ContactFirstSection() {
  return (
    <section className="relative min-h-screen bg-[#050505] text-[#f3e4cf] overflow-hidden flex items-center">

      {/* luxury spatial lighting */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#d8c1a320] via-transparent to-black" />

      {/* floating glow depth */}
      <div className="
        absolute left-1/3 top-1/2
        w-[250px] h-[250px]
        sm:w-[450px] sm:h-[450px]
        lg:w-[700px] lg:h-[700px]
        bg-[#d8c1a330]
        blur-[160px] sm:blur-[220px] lg:blur-[260px]
      " />
      <div className="
        absolute right-1/4 top-1/3
        w-[200px] h-[200px]
        sm:w-[350px] sm:h-[350px]
        lg:w-[500px] lg:h-[500px]
        bg-[#d8c1a320]
        blur-[140px] sm:blur-[200px] lg:blur-[240px]
      " />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 lg:gap-32 items-center">

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center lg:text-left"
        >
          <p className="
            uppercase
            tracking-[4px] sm:tracking-[8px]
            text-[#d8c1a3]
            mb-4 sm:mb-6
            text-sm sm:text-base
          ">
            Contact Bantek 
          </p>

          <h1 className="
            text-3xl sm:text-5xl lg:text-7xl
            font-light
            leading-tight
            mb-6 sm:mb-10
          ">
            Let’s design something
            <span className="text-[#d8c1a3]"> extraordinary together</span>
          </h1>

          <p className="
            text-base sm:text-lg lg:text-xl
            text-[#e6dccb]/80
            max-w-xl
            mx-auto lg:mx-0
            leading-relaxed
          ">
            Whether you’re planning an elegant interior or a bold architectural project,
            our studio is ready to transform your vision into timeless design.
          </p>
        </motion.div>

        {/* 3D Luxury Contact Card */}
        <motion.div
          whileHover={{ rotateX: 8, rotateY: -8, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 120 }}
          style={{ perspective: 1200 }}
          className="
            relative
            p-6 sm:p-10 lg:p-16
            rounded-2xl lg:rounded-[42px]
            bg-[#141414]/85 backdrop-blur
            border border-[#d8c1a340]
            shadow-[0_30px_120px_rgba(0,0,0,0.95)]
          "
        >
          <h3 className="
            text-xl sm:text-2xl lg:text-3xl
            font-light
            text-[#d8c1a3]
            mb-6 sm:mb-10
          ">
            Contact us 
          </h3>

          <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-[#e6dccb]/80">

            <div>
              <p className="uppercase tracking-widest text-xs sm:text-sm text-[#d8c1a3] mb-1">
                Location
              </p>
              <p>Ranchi, Jharkhand</p>
            </div>

            <div>
              <p className="uppercase tracking-widest text-xs sm:text-sm text-[#d8c1a3] mb-1">
                Phone
              </p>
              <p><a href:"tel: +91 9708218424">+91 9708218424</a></p>
            </div>

            <div>
              <p className="uppercase tracking-widest text-xs sm:text-sm text-[#d8c1a3] mb-1">
                Email
              </p>
              <p>bantekbusiness@gmail.com.com</p>
            </div>

          </div>

          {/* architectural accent */}
          <div className="
            absolute
            -bottom-6 -right-6
            sm:-bottom-12 sm:-right-12
            lg:-bottom-20 lg:-right-20
            w-20 h-20 sm:w-36 sm:h-36 lg:w-52 lg:h-52
            border border-[#d8c1a340]
            rounded-xl sm:rounded-2xl lg:rounded-3xl
          " />
        </motion.div>

      </div>
    </section>
  );
}
