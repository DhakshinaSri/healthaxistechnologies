import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const NAVY = "#051131";
const BLUE = "#0B6FCE";
const TEAL = "#25BBAE";

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: NAVY }}>

      {/* Ambient glows */}
      <div
        className="absolute -top-40 -left-40 w-xl h-144 rounded-full pointer-events-none"
        style={{ background: BLUE, filter: "blur(130px)", opacity: 0.18 }}
      />
      <div
        className="absolute -bottom-40 -right-40 w-lg h-128 rounded-full pointer-events-none"
        style={{ background: TEAL, filter: "blur(130px)", opacity: 0.14 }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(${TEAL} 1px, transparent 1px), linear-gradient(to right, ${TEAL} 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
        }}
      />

      {/* Rotating ring */}
      <motion.div
        className="absolute left-16 top-1/2 -translate-y-1/2 pointer-events-none hidden xl:block"
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        style={{ width: 220, height: 220, opacity: 0.35 }}
      >
        <svg viewBox="0 0 220 220" fill="none">
          <circle cx="110" cy="110" r="96" stroke={TEAL} strokeWidth="0.8" strokeDasharray="4 8" />
          <circle cx="110" cy="110" r="72" stroke={BLUE} strokeWidth="0.8" strokeDasharray="3 10" />
          <circle cx="110" cy="110" r="48" stroke={TEAL} strokeWidth="0.8" strokeDasharray="2 12" />
        </svg>
      </motion.div>

      {/* Right ring */}
      <motion.div
        className="absolute right-16 top-1/2 -translate-y-1/2 pointer-events-none hidden xl:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        style={{ width: 180, height: 180, opacity: 0.28 }}
      >
        <svg viewBox="0 0 180 180" fill="none">
          <circle cx="90" cy="90" r="78" stroke={BLUE} strokeWidth="0.8" strokeDasharray="4 8" />
          <circle cx="90" cy="90" r="56" stroke={TEAL} strokeWidth="0.8" strokeDasharray="2 10" />
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[clamp(2rem,3vw,3rem)] font-extrabold leading-tight text-white mb-5"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Ready to Transform Your{" "}
          <span
            style={{
              background: `linear-gradient(125deg, ${BLUE} 0%, ${TEAL} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Healthcare Operations?
          </span>
        </motion.h2>

        {/* Sub-text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.22 }}
          className="text-base md:text-lg leading-relaxed mb-12"
          style={{ color: "rgba(255,255,255,0.62)", fontFamily: "'Inter', sans-serif" }}
        >
          Whether you are exploring our solutions or ready to start a project, we are here to help you every step of the way.
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mb-12 h-px w-16 origin-center"
          style={{ background: `linear-gradient(to right, ${BLUE}, ${TEAL})` }}
        />

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Contact CTA — primary */}
          <Link to="/contact" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: `0 12px 40px ${TEAL}55` }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-9 py-4 rounded-full text-sm font-bold tracking-wide text-white w-full justify-center"
              style={{
                background: `linear-gradient(130deg, ${TEAL} 0%, ${BLUE} 100%)`,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                boxShadow: `0 4px 24px ${TEAL}40`,
              }}
            >
              Contact Us
              <FaArrowRight size={13} />
            </motion.button>
          </Link>

          {/* Services CTA — outlined */}
          <Link to="/services" className="w-full sm:w-auto">
            <motion.button
              whileHover={{
                scale: 1.05,
                background: "rgba(255,255,255,0.08)",
                borderColor: `${TEAL}80`,
              }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-9 py-4 rounded-full text-sm font-bold tracking-wide w-full justify-center transition-colors duration-300"
              style={{
                border: `1.5px solid rgba(255,255,255,0.2)`,
                color: "#ffffff",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                background: "transparent",
              }}
            >
              Our Services
              <FaArrowRight size={13} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}