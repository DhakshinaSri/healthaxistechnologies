import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Link } from "react-router-dom";
import {
  FaHospital,
  FaFileInvoiceDollar,
  FaVideo,
  FaBrain,
  FaChartBar,
  FaCloud,
  FaShieldAlt,
  FaMobileAlt,
  FaArrowRight,
} from "react-icons/fa";

const NAVY = "#051131";
const BLUE = "#0B6FCE";
const TEAL = "#25BBAE";

const services = [
  { label: "Healthcare Software Development", Icon: FaHospital },
  { label: "Medical Coding & RCM", Icon: FaFileInvoiceDollar },
  { label: "Telemedicine Solutions", Icon: FaVideo },
  { label: "Artificial Intelligence in Healthcare", Icon: FaBrain },
  { label: "Healthcare Analytics & BI", Icon: FaChartBar },
  { label: "Cloud Healthcare Solutions", Icon: FaCloud },
  { label: "Healthcare Cybersecurity", Icon: FaShieldAlt },
  { label: "Mobile Healthcare Applications", Icon: FaMobileAlt },
];

function ServiceCard({ label, Icon, index }) {
  const accent = index % 2 === 0 ? TEAL : BLUE;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      whileHover="hovered"
      className="group relative rounded-2xl p-6 overflow-hidden cursor-default"
      style={{
        background: "#ffffff",
        border: `1.5px solid ${NAVY}0e`,
        boxShadow: "0 2px 20px rgba(5,17,49,0.05)",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
    >
      {/* Hover fill */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        initial={{ opacity: 0 }}
        variants={{ hovered: { opacity: 1 } }}
        transition={{ duration: 0.35 }}
        style={{ background: `linear-gradient(145deg, ${NAVY} 0%, #0c2060 100%)` }}
      />

      {/* Top accent bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-0.75 rounded-t-2xl"
        initial={{ scaleX: 0, originX: 0 }}
        variants={{ hovered: { scaleX: 1 } }}
        transition={{ duration: 0.4 }}
        style={{
          background: `linear-gradient(to right, ${accent}, ${accent === TEAL ? BLUE : TEAL})`,
        }}
      />

      {/* Icon circle */}
      <motion.div
        className="relative z-10 mb-5 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
        variants={{
          hovered: { scale: 1.1 },
        }}
        style={{
          background: `${accent}18`,
          border: `1px solid ${accent}30`,
        }}
      >
        <Icon
          size={20}
          style={{ color: accent, transition: "filter 0.3s" }}
          className="group-hover:brightness-150"
        />
      </motion.div>

      {/* Label */}
      <motion.p
        className="relative z-10 text-sm font-semibold leading-snug"
        variants={{ hovered: { color: "#ffffff" } }}
        transition={{ duration: 0.25 }}
        style={{ color: NAVY }}
      >
        {label}
      </motion.p>

      {/* Arrow on hover */}
      <motion.div
        className="absolute bottom-5 right-5 z-10"
        initial={{ opacity: 0, x: -4 }}
        variants={{ hovered: { opacity: 1, x: 0 } }}
        transition={{ duration: 0.25 }}
      >
        <FaArrowRight size={12} style={{ color: accent }} />
      </motion.div>

      {/* Bottom glow bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 rounded-full"
        initial={{ width: "0%" }}
        variants={{ hovered: { width: "100%" } }}
        transition={{ duration: 0.45 }}
        style={{ background: `linear-gradient(to right, ${accent}, ${accent === TEAL ? BLUE : TEAL})` }}
      />
    </motion.div>
  );
}

export default function ServiceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ background: "#f0f5fc" }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(${NAVY}12 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Ambient glows */}
      <div
        className="absolute -top-28 right-0 w-md h-112 rounded-full pointer-events-none"
        style={{ background: BLUE, filter: "blur(120px)", opacity: 0.07 }}
      />
      <div
        className="absolute -bottom-28 left-0 w-[24rem] h-96 rounded-full pointer-events-none"
        style={{ background: TEAL, filter: "blur(120px)", opacity: 0.08 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

        {/* ── Heading row ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="h-px w-8" style={{ background: BLUE }} />
              <span
                className="text-[11px] font-bold tracking-[0.28em] uppercase"
                style={{ color: BLUE, fontFamily: "'Space Mono', monospace" }}
              >
                Our Services
              </span>
            </motion.div>

            {/* Title */}
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: 60 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: NAVY }}
              >
                Driving the Future of{" "}
                <span
                  style={{
                    background: `linear-gradient(125deg, ${BLUE} 0%, ${TEAL} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Digital Healthcare
                </span>
              </motion.h2>
            </div>
          </div>

          {/* Intro text */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-sm text-sm md:text-base leading-relaxed lg:text-right"
            style={{ color: NAVY, opacity: 0.62, fontFamily: "'Inter', sans-serif" }}
          >
            Health Axis Technologies delivers end-to-end digital solutions across every dimension of modern healthcare — from clinical systems to AI-powered intelligence.
          </motion.p>
        </div>

        {/* ── Service cards grid ── */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-14"
        >
          {services.map((s, i) => (
            <ServiceCard key={s.label} label={s.label} Icon={s.Icon} index={i} />
          ))}
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex justify-center"
        >
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: `0 10px 36px ${BLUE}50` }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-9 py-4 rounded-full text-sm font-bold tracking-wide text-white"
              style={{
                background: `linear-gradient(130deg, ${BLUE} 0%, ${TEAL} 100%)`,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                boxShadow: `0 4px 22px ${BLUE}3a`,
              }}
            >
              View All Services
              <FaArrowRight size={13} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}