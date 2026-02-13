'use client';

import { motion } from "framer-motion";

import emailjs from "emailjs-com";
import { useState } from "react";


export default function ContactSecondSection() {
  const [loading, setLoading] = useState(false);
const [status, setStatus] = useState(null); 
// "success" | "error" | "loading"
const [statusMsg, setStatusMsg] = useState("");

const sendEmail = async (e) => {
  e.preventDefault();

  setLoading(true);
  setStatus("loading");
  setStatusMsg("Sending your inquiry…");

  try {
    await emailjs.sendForm(
      "service_o3pxxvf",      // Service ID
      "template_mnent0z",     // Template ID
      e.target,
      "e0664yrTBXVzKQs7y"     // Public Key
    );

    setStatus("success");
    setStatusMsg("Thank you. Your inquiry has been sent successfully.");
    e.target.reset();
  } catch (error) {
    console.error("EmailJS Error:", error);
    setStatus("error");
    setStatusMsg("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="relative py-20 sm:py-32 lg:py-52 bg-[#060606] text-[#f3e4cf] overflow-hidden">

      {/* ambient glow layers */}
      <div
        className="
          absolute left-1/2 top-1/2
          w-[300px] h-[300px]
          sm:w-[500px] sm:h-[500px]
          lg:w-[850px] lg:h-[850px]
          bg-[#d8c1a330]
          blur-[160px] sm:blur-[220px] lg:blur-[260px]
          -translate-x-1/2 -translate-y-1/2
        "
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 lg:gap-32">

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
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
            Start Your Project
          </p>

          <h2
            className="
              text-2xl sm:text-4xl lg:text-5xl
              font-light
              leading-tight
              mb-4 sm:mb-10
            "
          >
            Tell us about your
            <span className="text-[#d8c1a3]"> design vision</span>
          </h2>

          <p
            className="
              text-sm sm:text-lg
              text-[#e6dccb]/80
              leading-relaxed
              max-w-xl
              mx-auto lg:mx-0
            "
          >
            Share your project details and our design team will connect with you
            to create a tailored interior or architectural experience.
          </p>
        </motion.div>

        {/* Luxury Form */}
        <motion.form
  onSubmit={sendEmail}
  transition={{ type: "spring", stiffness: 120 }}
  style={{ perspective: 1200 }}
  className="
    relative
    w-full
    max-w-xl
    mx-auto
    p-6 sm:p-10 lg:p-16
    rounded-2xl lg:rounded-[42px]
    bg-[#141414]/90 backdrop-blur-0
    border border-[#d8c1a340]
    shadow-[0_30px_120px_rgba(0,0,0,0.95)]
    space-y-6 sm:space-y-8 lg:space-y-10
  "
>


      {/* FULL NAME */}
      <input
        type="text"
        name="full_name"
        required
        placeholder="Full Name"
        className="
          w-full bg-transparent
          border-b border-[#d8c1a340]
          py-2 sm:py-3
          outline-none
          text-[#f3e4cf]
          placeholder-[#e6dccb]/50
        "
      />

      {/* EMAIL */}
      <input
        type="email"
        name="email"
        required
        placeholder="Email Address"
        className="
          w-full bg-transparent
          border-b border-[#d8c1a340]
          py-2 sm:py-3
          outline-none
          text-[#f3e4cf]
          placeholder-[#e6dccb]/50
        "
      />

      {/* PHONE */}
      <input
        type="tel"
        name="phone"
        required
        placeholder="Phone Number"
        className="
          w-full bg-transparent
          border-b border-[#d8c1a340]
          py-2 sm:py-3
          outline-none
          text-[#f3e4cf]
          placeholder-[#e6dccb]/50
        "
      />

      {/* MESSAGE */}
      <textarea
        name="message"
        rows="4"
        required
        placeholder="Tell us about your project..."
        className="
          w-full bg-transparent
          border-b border-[#d8c1a340]
          py-2 sm:py-3
          outline-none
          resize-none
          text-[#f3e4cf]
          placeholder-[#e6dccb]/50
        "
      />

      {/* SUBMIT BUTTON */}
      <motion.button
        type="submit"
        disabled={loading}
        whileHover={{ scale: 1.06 }}
        transition={{ type: "spring", stiffness: 160 }}
        className="
          mt-4 sm:mt-8
          px-8 sm:px-12
          py-3 sm:py-4
          rounded-xl
          bg-[#d8c1a3]
          text-black
          uppercase
          tracking-widest
          text-xs sm:text-sm
          font-medium
          shadow-[0_15px_80px_rgba(216,193,163,0.9)]
          hover:shadow-[0_35px_150px_rgba(216,193,163,1)]
          transition
        "
      >
        {loading ? "Sending..." : "Send Inquiry →"}
      </motion.button>

      {/* ARCHITECTURAL ACCENT */}
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
{/* STATUS MESSAGE */}
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
      tracking-wide
      text-center
      border
      ${
        status === "success"
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

    </motion.form>
      </div>
    </section>
  );
}
