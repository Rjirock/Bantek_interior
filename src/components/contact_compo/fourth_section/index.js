'use client';

import { motion } from "framer-motion";

export default function ContactFourthSection() {
  return (
    <section className="relative py-20 sm:py-32 lg:py-56 bg-[#060606] text-[#f3e4cf] overflow-hidden">

      {/* calm ambient glow */}
      <div
        className="
          absolute left-1/2 top-1/2
          w-[300px] h-[300px]
          sm:w-[500px] sm:h-[500px]
          lg:w-[900px] lg:h-[900px]
          bg-[#d8c1a320]
          blur-[160px] sm:blur-[220px] lg:blur-[260px]
          -translate-x-1/2 -translate-y-1/2
        "
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12 sm:gap-20 lg:gap-28 items-center">

        {/* Studio Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1 }}
          viewport={{ once: true }}
          className="lg:col-span-2 relative"
        >
          <img
            src="/ss2.jpg"
            className="
              w-full
              h-[240px] sm:h-[380px] lg:h-[520px]
              object-cover
              rounded-2xl sm:rounded-[32px] lg:rounded-[42px]
              shadow-[0_30px_120px_rgba(0,0,0,0.95)]
            "
            alt="Design studio space"
          />

          {/* subtle architectural frame */}
          <div
            className="
              absolute
              -bottom-6 -right-6
              sm:-bottom-12 sm:-right-12
              lg:-bottom-20 lg:-right-20
              w-20 h-20 sm:w-36 sm:h-36 lg:w-52 lg:h-52
              border border-[#d8c1a340]
              rounded-xl sm:rounded-2xl lg:rounded-3xl
            "
          />
        </motion.div>

        {/* Trust Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <p
            className="
              uppercase
              tracking-[4px] sm:tracking-[7px]
              text-[#d8c1a3]
              mb-4 sm:mb-6
              text-sm sm:text-base
            "
          >
            Our Studio
          </p>

          <h3
            className="
              text-2xl sm:text-3xl lg:text-4xl
              font-light
              leading-tight
              mb-4 sm:mb-8
            "
          >
            A space where design vision becomes
            <span className="text-[#d8c1a3]"> reality</span>
          </h3>

          <p
            className="
              text-[#e6dccb]/80
              leading-relaxed
              text-sm sm:text-base
              mb-6 sm:mb-10
            "
          >
            Our studio environment reflects the same precision, elegance, and creativity
            we bring to every interior and architectural project. We welcome you to
            experience design excellence firsthand.
          </p>

          <div className="space-y-3 sm:space-y-6 text-[#e6dccb]/85 text-sm sm:text-base">
            <p>📍 Ranchi, Jharkhand</p>
            <p> 📞 <a href="tel:+919708218424">+91 9708218424</a></p>
            <p>
  ✉️ <a href="mailto:bantekbusiness@gmail.com">bantekbusiness@gmail.com</a>
</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
