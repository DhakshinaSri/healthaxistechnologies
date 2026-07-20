import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { Link } from "react-router-dom";

const NAVY = "#051131";
const BLUE = "#0B6FCE";
const TEAL = "#25BBAE";

const expertiseList = [
  "Healthcare Software Development",
  "Hospital Management Systems",
  "Electronic Health Records (EHR)",
  "Telemedicine Platforms",
  "Medical Coding & Revenue Cycle Management",
  "Healthcare Analytics",
  "Artificial Intelligence in Healthcare",
  "Cloud Healthcare Solutions",
  "Healthcare Cybersecurity",
  "Mobile Healthcare Applications",
];

// ─── Expertise card ───────────────────────────────────────────────────────────
function ExpertiseCard({ label, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transformStyle: "preserve-3d",
        transform: hovered
          ? "rotateY(-5deg) rotateX(3deg) translateY(-6px)"
          : "rotateY(0deg) rotateX(0deg) translateY(0px)",
        transition: "transform 0.38s cubic-bezier(0.23, 1, 0.32, 1)",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}
      className="relative rounded-2xl p-6 cursor-default overflow-hidden"
    >
      <div
        className="absolute inset-0 rounded-2xl transition-all duration-500"
        style={{
          background: hovered ? `linear-gradient(145deg, ${NAVY} 0%, #0b1e55 100%)` : "#ffffff",
          border: `1.5px solid ${hovered ? TEAL + "60" : NAVY + "0f"}`,
          boxShadow: hovered ? `0 20px 50px ${BLUE}25` : "0 2px 16px rgba(5,17,49,0.06)",
        }}
      />
      <div
        className="absolute top-0 right-0 w-16 h-16 rounded-bl-full transition-all duration-500"
        style={{ background: hovered ? TEAL : BLUE, opacity: hovered ? 0.25 : 0.08 }}
      />
      <div
        className="absolute top-4 right-5 text-xs font-bold transition-all duration-300"
        style={{
          fontFamily: "'Space Mono', monospace",
          color: hovered ? TEAL : NAVY,
          opacity: hovered ? 0.9 : 0.2,
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="relative z-10 flex items-start gap-3 pr-8">
        <div
          className="mt-1 shrink-0 w-2 h-2 rounded-full transition-all duration-300"
          style={{ background: hovered ? TEAL : BLUE, boxShadow: hovered ? `0 0 8px ${TEAL}` : "none" }}
        />
        <p
          className="text-sm font-semibold leading-snug"
          style={{ color: hovered ? "#ffffff" : NAVY, transition: "color 0.3s" }}
        >
          {label}
        </p>
      </div>
      <div
        className="absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-500"
        style={{
          background: `linear-gradient(to right, ${TEAL}, ${BLUE})`,
          width: hovered ? "100%" : "0%",
        }}
      />
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t); }, []);

  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const heroParagraphs = [
    "Health Axis Technologies is a healthcare technology company dedicated to transforming the healthcare ecosystem through innovative digital solutions. We help hospitals, clinics, diagnostic centers, healthcare providers, pharmaceutical organizations, insurance companies, and healthcare service providers improve operational efficiency, enhance patient care, and achieve sustainable growth through advanced technology.",
    "Our expertise spans Healthcare Information Systems (HIS), Electronic Health Records (EHR), Hospital Management Systems (HMS), Artificial Intelligence, Medical Coding, Revenue Cycle Management (RCM), Telemedicine, Health Analytics, Cloud Computing, Cybersecurity, Mobile Health Applications, and Digital Transformation.",
  ];

  const belowParagraphs = [
    "At Health Axis Technologies, we believe technology should simplify healthcare delivery, improve clinical outcomes, reduce operational complexity, and empower healthcare professionals with accurate information for better decision-making. Every solution we develop is built with a strong focus on reliability, security, regulatory compliance, and user experience.",
    "Whether you are a healthcare startup, a multispecialty hospital, a diagnostic laboratory, or a large healthcare enterprise, Health Axis Technologies delivers customized solutions that support your mission of providing quality healthcare services.",
  ];

  return (
    <div
      className="min-h-screen w-full overflow-x-hidden"
      style={{ fontFamily: "'Inter', sans-serif", background: "#ffffff", color: NAVY }}
    >

      {/* ═══════════════════════════════════════════════════════════════════
          HERO — centered, full-screen
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Soft radial background gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 70% 60% at 50% -10%, ${BLUE}18 0%, transparent 70%),
              radial-gradient(ellipse 50% 40% at 10% 80%,  ${TEAL}12 0%, transparent 60%),
              radial-gradient(ellipse 40% 35% at 90% 90%,  ${BLUE}0e 0%, transparent 60%)
            `,
          }}
        />

        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(${NAVY}15 1px, transparent 1px)`,
            backgroundSize: "36px 36px",
          }}
        />

        {/* Thin horizontal rule above content */}
        <div
          className="absolute top-1/2 left-0 right-0 h-px pointer-events-none -translate-y-32 hidden lg:block"
          style={{ background: `linear-gradient(to right, transparent, ${BLUE}18, transparent)` }}
        />

        {/* Centered content */}
        <div
          ref={heroRef}
          className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-12 py-32 text-center"
        >

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 10 }}
            transition={{ duration: 0.55, delay: 0.22 }}
            className="text-sm md:text-base font-semibold tracking-wide mb-5"
            style={{ color: BLUE, fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Innovating Healthcare. Empowering Lives.
          </motion.p>

          {/* Main headline */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: mounted ? 0 : 100 }}
              transition={{ duration: 0.95, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.8rem,5.5vw,5.2rem)] font-extrabold leading-none tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: NAVY }}
            >
              Driving the Future
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-10">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: mounted ? 0 : 100 }}
              transition={{ duration: 0.95, delay: 0.44, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.8rem,5.5vw,5.2rem)] font-extrabold leading-none tracking-tight"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                background: `linear-gradient(120deg, ${BLUE} 0%, ${TEAL} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              of Digital Healthcare
            </motion.h1>
          </div>

          {/* Thin divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: mounted ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mx-auto mb-10 h-px w-24 origin-center"
            style={{ background: `linear-gradient(to right, ${BLUE}, ${TEAL})` }}
          />

          {/* Paragraphs */}
          <div className="space-y-5 mb-12">
            {heroParagraphs.map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.68 + i * 0.14 }}
                className="text-base md:text-[17px] leading-relaxed mx-auto max-w-3xl"
                style={{ color: NAVY, opacity: 0.72, fontWeight: 400 }}
              >
                {text}
              </motion.p>
            ))}
          </div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: `0 8px 32px ${BLUE}55` }}
                whileTap={{ scale: 0.97 }}
                className="relative inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold tracking-wide text-white overflow-hidden"
                style={{
                  background: `linear-gradient(130deg, ${BLUE} 0%, ${TEAL} 100%)`,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  boxShadow: `0 4px 20px ${BLUE}40`,
                }}
              >
                Get Started
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M8.5 3.5L13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.button>
            </Link>

            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.04, background: `${NAVY}08` }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold tracking-wide transition-all duration-200"
                style={{
                  border: `1.5px solid ${NAVY}28`,
                  color: NAVY,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  background: "transparent",
                }}
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #f0f5fc)" }}
        />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          BELIEF & VALUES — navy, two-column
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-28 md:py-36 overflow-hidden" style={{ background: NAVY }}>

        {/* Ambient glows */}
        <div
          className="absolute -top-32 -left-32 w-lg h-128 rounded-full pointer-events-none"
          style={{ background: BLUE, filter: "blur(120px)", opacity: 0.16 }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-md h-112 rounded-full pointer-events-none"
          style={{ background: TEAL, filter: "blur(120px)", opacity: 0.12 }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(${TEAL} 1px, transparent 1px), linear-gradient(to right, ${TEAL} 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Rotating ring decoration */}
        <motion.div
          className="absolute right-16 top-1/2 -translate-y-1/2 pointer-events-none hidden xl:block"
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          style={{ width: 280, height: 280 }}
        >
          <svg viewBox="0 0 280 280" fill="none">
            <circle cx="140" cy="140" r="122" stroke={TEAL} strokeWidth="0.8" strokeDasharray="5 9" opacity="0.45" />
            <circle cx="140" cy="140" r="94"  stroke={BLUE} strokeWidth="0.8" strokeDasharray="3 12" opacity="0.35" />
            <circle cx="140" cy="140" r="62"  stroke={TEAL} strokeWidth="0.8" strokeDasharray="2 14" opacity="0.28" />
          </svg>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

            {/* Left — animated circuit visual */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div
                className="relative w-full max-w-sm aspect-square rounded-3xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${TEAL}22`,
                  boxShadow: `0 0 60px ${BLUE}20`,
                }}
              >
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
                  <motion.path
                    d="M0 120 L80 120 L80 200 L200 200 L200 120 L320 120 L320 280 L400 280"
                    stroke={TEAL} strokeWidth="1.5" strokeDasharray="6 4" fill="none" opacity="0.5"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                    transition={{ duration: 2.2, delay: 0.3 }}
                  />
                  <motion.path
                    d="M0 260 L60 260 L60 180 L180 180 L180 280 L300 280 L300 160 L400 160"
                    stroke={BLUE} strokeWidth="1.5" strokeDasharray="4 6" fill="none" opacity="0.45"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                    transition={{ duration: 2.2, delay: 0.7 }}
                  />
                  <motion.path
                    d="M100 0 L100 80 L200 80 L200 0"
                    stroke={TEAL} strokeWidth="1" strokeDasharray="3 5" fill="none" opacity="0.3"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 1.1 }}
                  />
                  <motion.path
                    d="M280 400 L280 320 L200 320 L200 400"
                    stroke={BLUE} strokeWidth="1" strokeDasharray="3 5" fill="none" opacity="0.3"
                    initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 1.3 }}
                  />
                  {[
                    [80,120],[80,200],[200,200],[200,120],[320,120],[320,280],
                    [60,260],[60,180],[180,180],[180,280],[300,280],[300,160],
                  ].map(([cx, cy], i) => (
                    <motion.circle
                      key={i} cx={cx} cy={cy} r={5}
                      fill={i % 2 === 0 ? TEAL : BLUE} opacity="0.85"
                      initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 1.6 + i * 0.07 }}
                    />
                  ))}
                </svg>

                {/* Centre label */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                  <p
                    className="text-4xl font-extrabold text-white mb-1"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Health Axis
                  </p>
                  <p
                    className="text-xs tracking-[0.3em] uppercase font-semibold"
                    style={{ color: TEAL, fontFamily: "'Space Mono', monospace" }}
                  >
                    Technologies
                  </p>
                </div>

                {/* Corner badges */}
                {(["Reliability", "Security", "Compliance", "Experience"]).map((word, i) => {
                  const pos = ["top-4 left-4", "top-4 right-4", "bottom-4 left-4", "bottom-4 right-4"];
                  const c = i % 2 === 0 ? TEAL : BLUE;
                  return (
                    <motion.div
                      key={word}
                      className={`absolute ${pos[i]} px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wider uppercase`}
                      style={{
                        background: c + "1e",
                        color: i % 2 === 0 ? TEAL : "#7bb8f0",
                        border: `1px solid ${c}2a`,
                        fontFamily: "'Space Mono', monospace",
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 2 + i * 0.12 }}
                    >
                      {word}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right — paragraphs */}
            <div className="space-y-12">
              {belowParagraphs.map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.2 }}
                  className="relative text-justify"
                >
                  {/* Faded index watermark */}
                  <span
                    className="absolute -top-6 -left-1 text-[6rem] font-extrabold leading-none select-none pointer-events-none"
                    style={{
                      color: i === 0 ? TEAL : BLUE,
                      opacity: 0.06,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Animated top bar */}
                  <motion.div
                    className="h-0.75 rounded-full mb-6"
                    style={{ background: `linear-gradient(to right, ${i === 0 ? TEAL : BLUE}, transparent)` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: "55%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.2 + 0.3 }}
                  />

                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{ color: "#ffffff", opacity: 0.78, fontWeight: 400 }}
                  >
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          EXPERTISE
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-28 md:pb-48 md:pt-36 overflow-hidden" style={{ background: "#f0f5fc" }}>

        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(${NAVY}14 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />

        {/* Ambient blobs */}
        <div
          className="absolute -top-20 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: BLUE, filter: "blur(120px)", opacity: 0.07 }}
        />
        <div
          className="absolute bottom-0 left-10 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: TEAL, filter: "blur(100px)", opacity: 0.08 }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          {/* Heading */}
          <div className="mb-14 md:mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="h-px w-8" style={{ background: BLUE }} />
              <span
                className="text-[11px] font-bold tracking-[0.3em] uppercase"
                style={{ color: BLUE, fontFamily: "'Space Mono', monospace" }}
              >
                What We Do
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[clamp(2rem,4vw,3.25rem)] font-extrabold"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: NAVY }}
            >
              Our Expertise
            </motion.h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
            {expertiseList.map((label, i) => (
              <ExpertiseCard key={i} label={label} index={i} />
            ))}
          </div>
        </div>

        {/* Angled bottom navy polygon edge */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-20"
          style={{ background: NAVY, clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
        />
      </section>
    </div>
  );
}