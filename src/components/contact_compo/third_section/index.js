'use client';

import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useState } from "react";
export default function ContactThirdSection() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error | loading
  const [statusMsg, setStatusMsg] = useState("")

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("loading");
    setStatusMsg("Scheduling your consultation…");

    try {
      await emailjs.sendForm(
        "service_o3pxxvf",        // ✅ Your Service ID
        "template_1oc7f7c",       // ✅ Your Template ID
        e.target,
        "e0664yrTBXVzKQs7y"       // ✅ Your Public Key
      );

      setStatus("success");
      setStatusMsg("Thank you. Your consultation request has been received.");
      e.target.reset();
    } catch (error) {
      setStatus("error");
      setStatusMsg("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-20 sm:py-32 lg:py-56 bg-[#050505] text-[#f3e4cf] overflow-hidden">

      {/* ambient champagne glow */}
      <div
        className="
          absolute left-1/2 top-1/2
          w-[300px] h-[300px]
          sm:w-[600px] sm:h-[600px]
          lg:w-[950px] lg:h-[950px]
          bg-[#d8c1a335]
          blur-[160px] sm:blur-[220px] lg:blur-[300px]
          -translate-x-1/2 -translate-y-1/2
        "
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 lg:gap-36 items-center">

        {/* Luxury Visual Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="/ss1.jpg"
            className="
              w-full
              h-[240px] sm:h-[400px] lg:h-[620px]
              object-cover
              rounded-2xl sm:rounded-[32px] lg:rounded-[44px]
              shadow-[0_30px_120px_rgba(0,0,0,0.95)]
            "
            alt="Luxury interior studio"
          />

          {/* architectural overlay frame */}
          <div
            className="
              absolute
              -top-6 -right-6
              sm:-top-12 sm:-right-12
              lg:-top-20 lg:-right-20
              w-20 h-20 sm:w-36 sm:h-36 lg:w-56 lg:h-56
              border border-[#d8c1a340]
              rounded-xl sm:rounded-2xl lg:rounded-3xl
            "
          />

          <motion.img
            src="/ss3.jpg"
            className="
              absolute
              -bottom-6 -left-6
              sm:-bottom-12 sm:-left-12
              lg:-bottom-24 lg:-left-24
              w-32 sm:w-48 lg:w-72
              rounded-xl sm:rounded-2xl lg:rounded-3xl
              shadow-[0_30px_120px_rgba(0,0,0,0.9)]
              border border-[#d8c1a340]
            "
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 120 }}
          />
        </motion.div>

        {/* Premium Form */}
        <motion.form
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          style={{ perspective: 1200 }}
          className="
        relative
        p-6 sm:p-10 lg:p-20
        rounded-2xl lg:rounded-[46px]
        bg-[#141414]/85 backdrop-blur-0
        border border-[#d8c1a340]
        shadow-[0_30px_120px_rgba(0,0,0,0.95)]
        space-y-6 sm:space-y-8 lg:space-y-12
      "
        >

          {/* TITLE */}
          <h3 className="
        text-xl sm:text-2xl lg:text-4xl
        font-light
        text-[#d8c1a3]
        mb-2 sm:mb-4
      ">
            Book a Design Consultation
          </h3>

          {/* NAME */}
          <input
            type="text"
            name="full_name"
            required
            placeholder="Your Name"
            className="w-full bg-transparent border-b border-[#d8c1a340] py-2 sm:py-4 outline-none text-[#f3e4cf] placeholder-[#e6dccb]/50"
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            required
            placeholder="Email Address"
            className="w-full bg-transparent border-b border-[#d8c1a340] py-2 sm:py-4 outline-none text-[#f3e4cf] placeholder-[#e6dccb]/50"
          />

          {/* PHONE */}
          <input
            type="tel"
            name="phone"
            required
            placeholder="Phone Number"
            className="w-full bg-transparent border-b border-[#d8c1a340] py-2 sm:py-4 outline-none text-[#f3e4cf] placeholder-[#e6dccb]/50"
          />

          {/* MESSAGE */}
          <textarea
            rows="4"
            name="message"
            required
            placeholder="Describe your interior or architectural project..."
            className="w-full bg-transparent border-b border-[#d8c1a340] py-2 sm:py-4 outline-none text-[#f3e4cf] placeholder-[#e6dccb]/50 resize-none"
          />

          {/* SUBMIT BUTTON */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.06 }}
            transition={{ type: "spring", stiffness: 160 }}
            className="
          mt-4 sm:mt-10
          px-8 sm:px-16
          py-3 sm:py-5
          rounded-xl sm:rounded-2xl
          bg-[#d8c1a3]
          text-black
          uppercase
          tracking-widest
          text-xs sm:text-sm
          font-medium
          shadow-[0_15px_80px_rgba(216,193,163,1)]
          hover:shadow-[0_35px_150px_rgba(216,193,163,1)]
          transition
        "
          >
            {loading ? "Scheduling…" : "Schedule Consultation →"}
          </motion.button>

          {/* STATUS MESSAGE (INSIDE FORM – LUXURY) */}
          {status && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`
            mt-6
            px-5 py-4
            rounded-xl
            text-sm sm:text-base
            text-center
            tracking-wide
            border
            ${status === "success"
                  ? "border-[#d8c1a3] text-[#d8c1a3] bg-[#0f0f0f]"
                  : status === "error"
                    ? "border-red-400 text-red-400 bg-[#0f0f0f]"
                    : "border-[#d8c1a340] text-[#e6dccb]/80 bg-[#0f0f0f]"
                }
          `}
            >
              {statusMsg}
            </motion.div>
          )}

          {/* DESIGN ACCENT */}
          <div
            className="
          absolute
          -bottom-6 right-6
          sm:-bottom-12 sm:right-12
          lg:-bottom-20 lg:right-20
          w-24 sm:w-36 lg:w-48
          h-[1px] bg-[#d8c1a3]
        "
          />

        </motion.form>

      </div>
    </section>
  );
}
