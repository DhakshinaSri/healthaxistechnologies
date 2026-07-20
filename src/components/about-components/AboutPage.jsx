import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "motion/react";

const NAVY = "#051131";
const BLUE = "#0B6FCE";
const TEAL = "#25BBAE";

// ─── Reusable: section eyebrow label ─────────────────────────────────────────
function Eyebrow({ label, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="flex items-center gap-3 mb-6"
    >
      <div className="h-px w-8" style={{ background: light ? TEAL : BLUE }} />
      <span
        className="text-[11px] font-bold tracking-[0.28em] uppercase"
        style={{ color: light ? TEAL : BLUE, fontFamily: "'Space Mono', monospace" }}
      >
        {label}
      </span>
    </motion.div>
  );
}

// ─── Reusable: animated paragraph ────────────────────────────────────────────
function AnimPara({ text, delay = 0, light = false, large = false }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay }}
      className={`${large ? "text-base md:text-lg" : "text-base"} leading-relaxed`}
      style={{ color: light ? "rgba(255,255,255,0.76)" : NAVY, opacity: light ? undefined : 0.74, fontWeight: 400 }}
    >
      {text}
    </motion.p>
  );
}

// ─── Core Values card ─────────────────────────────────────────────────────────
const valueIcons = {
  "Innovation": "◈",
  "Patient-Centered Approach": "♡",
  "Integrity": "◎",
  "Excellence": "◇",
  "Security & Privacy": "⊡",
  "Collaboration": "⬡",
};

function ValueCard({ title, body, index }) {
  const [hovered, setHovered] = useState(false);
  const accent = index % 2 === 0 ? TEAL : BLUE;
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: hovered ? "translateY(-6px)" : "translateY(0px)",
        transition: "transform 0.35s cubic-bezier(0.23,1,0.32,1)",
      }}
      className="relative rounded-2xl p-7 cursor-default overflow-hidden"
    >
      {/* Card bg */}
      <div
        className="absolute inset-0 rounded-2xl transition-all duration-500"
        style={{
          background: hovered ? `linear-gradient(145deg, ${NAVY} 0%, #0c2060 100%)` : "#ffffff",
          border: `1.5px solid ${hovered ? accent + "55" : NAVY + "0e"}`,
          boxShadow: hovered ? `0 24px 60px ${BLUE}22` : "0 2px 18px rgba(5,17,49,0.06)",
        }}
      />
      {/* Top gradient bar */}
      <div
        className="absolute top-0 left-0 right-0 h-0.75 rounded-t-2xl transition-all duration-500"
        style={{
          background: hovered
            ? `linear-gradient(to right, ${accent}, ${accent === TEAL ? BLUE : TEAL})`
            : `linear-gradient(to right, ${accent}55, transparent)`,
        }}
      />
      {/* Icon */}
      <div className="relative z-10 mb-5">
        <span
          className="text-3xl transition-all duration-300"
          style={{ color: hovered ? accent : accent, filter: hovered ? `drop-shadow(0 0 8px ${accent}88)` : "none" }}
        >
          {valueIcons[title] ?? "◉"}
        </span>
      </div>
      {/* Title */}
      <h3
        className="relative z-10 text-base font-bold mb-3 transition-colors duration-300"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: hovered ? "#ffffff" : NAVY }}
      >
        {title}
      </h3>
      {/* Body */}
      <p
        className="relative z-10 text-sm leading-relaxed transition-colors duration-300"
        style={{ color: hovered ? "rgba(255,255,255,0.72)" : NAVY, opacity: hovered ? undefined : 0.68 }}
      >
        {body}
      </p>
      {/* Bottom bar */}
      <div
        className="absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-500"
        style={{
          background: `linear-gradient(to right, ${accent}, ${accent === TEAL ? BLUE : TEAL})`,
          width: hovered ? "100%" : "0%",
        }}
      />
    </motion.div>
  );
}

// ─── Animated scroll line (decorative) ───────────────────────────────────────
function CircuitLine({ d, color, delay }) {
  return (
    <motion.path
      d={d} stroke={color} strokeWidth="1.2" fill="none"
      strokeDasharray="5 5" opacity="0.45"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2.4, delay }}
    />
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function AboutPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const coreValues = [
    {
      title: "Innovation",
      body: "We continuously explore emerging technologies to create practical healthcare solutions that improve efficiency and patient outcomes.",
    },
    {
      title: "Patient-Centered Approach",
      body: "Every technology solution we build ultimately supports better healthcare experiences for patients and healthcare professionals.",
    },
    {
      title: "Integrity",
      body: "We conduct our business with honesty, transparency, accountability, and ethical responsibility.",
    },
    {
      title: "Excellence",
      body: "We are committed to delivering high-quality products and services that exceed customer expectations.",
    },
    {
      title: "Security & Privacy",
      body: "Protecting healthcare information is fundamental to everything we develop, ensuring confidentiality, integrity, and compliance.",
    },
    {
      title: "Collaboration",
      body: "We believe lasting success comes through teamwork, strong partnerships, and continuous collaboration with healthcare organizations.",
    },
  ];

  const aboutParagraphs = [
    "Health Axis Technologies was founded with a vision to bridge the gap between healthcare and technology by delivering innovative digital solutions that improve patient care, simplify healthcare operations, and support the evolving needs of the healthcare industry.",
    "Healthcare is one of the most dynamic and essential sectors in the world. As patient expectations increase and healthcare systems become more complex, organizations require intelligent technology that enables efficiency, accuracy, compliance, and better clinical outcomes. Health Axis Technologies partners with healthcare organizations to design, develop, and implement secure digital solutions that address these evolving challenges.",
    "Our multidisciplinary team includes software engineers, healthcare domain experts, cloud architects, AI specialists, cybersecurity professionals, data analysts, and project consultants who work together to create reliable healthcare technologies aligned with industry standards and best practices.",
    "From strategic consulting and application development to implementation, integration, training, maintenance, and technical support, we provide complete end-to-end healthcare technology services. Our commitment extends beyond software development—we build long-term partnerships focused on innovation, continuous improvement, and measurable business value.",
    "Health Axis Technologies is dedicated to supporting healthcare organizations in delivering safer, faster, more efficient, and patient-centered healthcare services through intelligent digital transformation.",
  ];

  const missionParagraphs = [
    "Our mission is to empower healthcare organizations with innovative, secure, and intelligent technology solutions that improve patient care, streamline healthcare operations, strengthen clinical decision-making, and enhance organizational efficiency.",
    "We are committed to understanding the unique challenges faced by healthcare providers and developing customized digital solutions that simplify complex healthcare processes while ensuring data security, regulatory compliance, and operational excellence.",
    "Through continuous innovation, professional integrity, customer-focused service, and advanced technology, we strive to become a trusted healthcare technology partner that contributes to building stronger healthcare systems and healthier communities.",
  ];

  const visionParagraphs = [
    "Our vision is to become a globally respected healthcare technology company recognized for transforming healthcare delivery through innovation, digital excellence, and intelligent solutions.",
    "We aspire to create a connected healthcare ecosystem where technology enables seamless collaboration among healthcare professionals, improves patient experiences, enhances clinical outcomes, and supports data-driven decision-making.",
    "By continuously investing in research, emerging technologies, skilled professionals, and customer success, Health Axis Technologies aims to shape the future of digital healthcare while contributing to accessible, efficient, secure, and sustainable healthcare services across the world.",
  ];

  return (
    <div
      className="min-h-screen w-full overflow-x-hidden"
      style={{ fontFamily: "'Inter', sans-serif", background: "#ffffff", color: NAVY }}
    >

      {/* ABOUT US */}
      <section className="relative overflow-hidden" style={{ background: "#ffffff" }}>
        {/* Top gradient wash */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 65% 55% at 100% 0%,  ${BLUE}12 0%, transparent 65%),
              radial-gradient(ellipse 45% 40% at 0%  100%, ${TEAL}0e 0%, transparent 60%)
            `,
          }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(${NAVY}12 1px, transparent 1px)`,
            backgroundSize: "34px 34px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          {/* ── Top band: eyebrow + title ── */}
          <div className="pt-20 pb-16 border-b" style={{ borderColor: `${NAVY}10` }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: mounted ? 1 : 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: 90 }}
                  animate={{ y: mounted ? 0 : 90 }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[clamp(2.4rem,6vw,5rem)] font-extrabold leading-[1.05] tracking-tight max-w-3xl"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: NAVY }}
                >
                  Technology That{" "}
                  <span
                    style={{
                      background: `linear-gradient(125deg, ${BLUE} 0%, ${TEAL} 100%)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Strengthens Healthcare
                  </span>
                </motion.h1>
              </div>
            </motion.div>
          </div>

          {/* ── Body: two-column asymmetric ── */}
          <div className="py-20 grid lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24 items-start">
            {/* Left — sticky visual block */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
              className="lg:sticky lg:top-24"
            >
              {/* Decorative card */}
              <div
                className="rounded-3xl overflow-hidden relative"
                style={{
                  background: `linear-gradient(145deg, ${NAVY} 0%, #0d2260 100%)`,
                  aspectRatio: "4/3",
                  boxShadow: `0 32px 80px ${BLUE}28`,
                }}
              >
                {/* SVG circuit */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 480 360" fill="none">
                  <CircuitLine d="M0 90 L80 90 L80 180 L200 180 L200 90 L340 90 L340 270 L480 270" color={TEAL} delay={0.3} />
                  <CircuitLine d="M0 240 L60 240 L60 160 L180 160 L180 270 L320 270 L320 140 L480 140" color={BLUE} delay={0.7} />
                  <CircuitLine d="M120 0 L120 70 L240 70 L240 0" color={TEAL} delay={1.1} />
                  <CircuitLine d="M300 360 L300 290 L220 290 L220 360" color={BLUE} delay={1.3} />
                  {[
                    [80,90],[80,180],[200,180],[200,90],[340,90],[340,270],
                    [60,240],[60,160],[180,160],[180,270],[320,270],[320,140],
                  ].map(([cx,cy],i) => (
                    <motion.circle key={i} cx={cx} cy={cy} r={5}
                      fill={i%2===0 ? TEAL : BLUE} opacity="0.9"
                      initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 1.8 + i * 0.06 }}
                    />
                  ))}
                </svg>

                {/* Overlay text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 2 }}
                    className="text-4xl font-extrabold text-white mb-2"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Health Axis
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 2.2 }}
                    className="text-xs tracking-[0.32em] uppercase font-semibold mb-6"
                    style={{ color: TEAL, fontFamily: "'Space Mono', monospace" }}
                  >
                    Technologies
                  </motion.p>
                </div>

                {/* Corner tags */}
                {(["Founded on Vision", "End-to-End Services", "Multidisciplinary Team", "Long-term Partnerships"]).map((tag, i) => {
                  const pos = ["top-5 left-5", "top-5 right-5", "bottom-5 left-5", "bottom-5 right-5"];
                  const c = i % 2 === 0 ? TEAL : BLUE;
                  return (
                    <motion.div
                      key={tag}
                      className={`absolute ${pos[i]} px-3 py-1.5 rounded-xl text-[10px] font-bold tracking-wide uppercase`}
                      style={{
                        background: c + "1a",
                        color: i % 2 === 0 ? TEAL : "#7ec3ff",
                        border: `1px solid ${c}28`,
                        fontFamily: "'Space Mono', monospace",
                      }}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 2.2 + i * 0.1 }}
                    >
                      {tag}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
            <div className="space-y-7">
              {aboutParagraphs.map((text, i) => (
                <AnimPara key={i} text={text} delay={i * 0.12} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom wave into navy */}
        <div
          className="h-16 w-full"
          style={{ background: `linear-gradient(to bottom right, #ffffff 49%, ${NAVY} 50%)` }}
        />
      </section>

      {/* OUR MISSION */}
      <section className="relative py-28 md:py-36 overflow-hidden" style={{ background: NAVY }}>
        <div className="absolute -top-40 left-0 w-xl h-144 rounded-full pointer-events-none"
          style={{ background: BLUE, filter: "blur(130px)", opacity: 0.15 }} />
        <div className="absolute -bottom-40 right-0 w-lg h-128 rounded-full pointer-events-none"
          style={{ background: TEAL, filter: "blur(130px)", opacity: 0.12 }} />

        {/* Grid overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.032]"
          style={{
            backgroundImage: `linear-gradient(${TEAL} 1px, transparent 1px), linear-gradient(to right, ${TEAL} 1px, transparent 1px)`,
            backgroundSize: "56px 56px",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold text-white mb-14 leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            OUR MISSION
          </motion.h2>

          {/* Mission paragraphs — stacked with numbered dividers */}
          <div className="space-y-0">
            {missionParagraphs.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.18 }}
                className="relative py-10"
                style={{ borderBottom: i < missionParagraphs.length - 1 ? `1px solid ${TEAL}18` : "none" }}
              >
                {/* Step number */}
                <span
                  className="absolute -top-4 left-1/2 -translate-x-1/2 text-[5rem] font-extrabold select-none pointer-events-none leading-none"
                  style={{
                    color: i === 0 ? TEAL : i === 1 ? BLUE : TEAL,
                    opacity: 0.055,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <p
                  className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
                  style={{ color: "rgba(255,255,255,0.76)" }}
                >
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom diagonal into white */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{ background: "#ffffff", clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
        />
      </section>

      {/* OUR VISION  */}
      <section className="relative py-28 md:py-36 overflow-hidden" style={{ background: "#ffffff" }}>
        {/* Right-side tinted slab */}
        <div
          className="absolute inset-y-0 right-0 w-2/5 pointer-events-none hidden lg:block"
          style={{
            background: `linear-gradient(160deg, ${BLUE}08, ${TEAL}10)`,
            clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0 100%)",
          }}
        />

        {/* Dot grid right half */}
        <div
          className="absolute inset-y-0 right-0 w-2/5 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(${NAVY}12 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-20 items-start">

            {/* Left — heading */}
            <div className="lg:sticky lg:top-24">
              <motion.h2
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-[clamp(2.2rem,4.5vw,3.75rem)] font-extrabold leading-[1.08] mb-10"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: NAVY }}
              >
                OUR{" "}
                <span
                  style={{
                    background: `linear-gradient(125deg, ${BLUE} 0%, ${TEAL} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  VISION
                </span>
              </motion.h2>

              {/* Decorative progress bars */}
              {[
                { label: "Global Reach",       color: TEAL, w: "82%" },
                { label: "Digital Excellence", color: BLUE, w: "91%" },
                { label: "Healthcare Impact",  color: TEAL, w: "77%" },
              ].map(({ label, color, w }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
                  className="mb-5"
                >
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs font-semibold" style={{ color: NAVY, opacity: 0.6, fontFamily: "'Space Mono', monospace" }}>
                      {label}
                    </span>
                    <span className="text-xs font-bold" style={{ color, fontFamily: "'Space Mono', monospace" }}>{w}</span>
                  </div>
                  <div className="h-1.5 rounded-full w-full" style={{ background: `${NAVY}12` }}>
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(to right, ${color}, ${color === TEAL ? BLUE : TEAL})` }}
                      initial={{ width: 0 }}
                      whileInView={{ width: w }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: 0.5 + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right — vision paragraphs as bordered cards */}
            <div className="space-y-5">
              {visionParagraphs.map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="rounded-2xl p-7 relative overflow-hidden"
                  style={{
                    background: "#f8fafd",
                    border: `1px solid ${NAVY}0d`,
                    boxShadow: "0 2px 20px rgba(5,17,49,0.05)",
                  }}
                >
                  {/* Left accent */}
                  <div
                    className="absolute left-0 top-4 bottom-4 w-0.75 rounded-full"
                    style={{ background: i % 2 === 0 ? TEAL : BLUE }}
                  />
                  {/* Index */}
                  <span
                    className="absolute bottom-3 right-5 text-[3rem] font-extrabold leading-none select-none pointer-events-none"
                    style={{
                      color: i % 2 === 0 ? TEAL : BLUE,
                      opacity: 0.06,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base leading-relaxed pl-4" style={{ color: NAVY, opacity: 0.73 }}>
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR CORE VALUES */}
      <section className="relative py-28 md:py-36 overflow-hidden" style={{ background: "#f0f5fc" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(${NAVY}14 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />

        {/* Top diagonal from white */}
        <div
          className="absolute top-0 left-0 right-0 h-16 pointer-events-none"
          style={{ background: "#ffffff", clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)" }}
        />

        <div className="absolute -top-24 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: BLUE, filter: "blur(120px)", opacity: 0.07 }} />
        <div className="absolute -bottom-24 left-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: TEAL, filter: "blur(120px)", opacity: 0.08 }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[clamp(2rem,4vw,3.25rem)] font-extrabold"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: NAVY }}
            >
              OUR CORE VALUES
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {coreValues.map((v, i) => (
              <ValueCard key={v.title} title={v.title} body={v.body} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}