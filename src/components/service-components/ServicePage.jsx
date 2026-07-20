import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { FaHospital, FaFileInvoiceDollar, FaVideo, FaBrain, FaChartBar, FaCloud, FaShieldAlt, FaMobileAlt } from "react-icons/fa";

const NAVY = "#051131";
const BLUE = "#0B6FCE";
const TEAL = "#25BBAE";

// ─── Data ─────────────────────────────────────────────────────────────────────
const services = [
  {
    title: "Healthcare Software Development",
    description:
      "We design and develop customized healthcare applications that improve operational efficiency, support clinical workflows, and enhance patient care.",
    listLabel: "Solutions Include",
    items: [
      "Hospital Management Systems (HMS)",
      "Clinic Management Software",
      "Electronic Health Records (EHR)",
      "Electronic Medical Records (EMR)",
      "Laboratory Information Systems (LIS)",
      "Radiology Information Systems (RIS)",
      "Pharmacy Management Systems",
      "Appointment & Queue Management",
      "Patient Portals",
      "Billing & Claims Management",
    ],
    Icon: FaHospital,
  },
  {
    title: "Medical Coding & Revenue Cycle Management",
    description:
      "Health Axis Technologies supports healthcare providers with solutions that improve billing accuracy, streamline reimbursement processes, and optimize revenue performance.",
    listLabel: "Our services include:",
    items: [
      "Medical Coding Support",
      "Revenue Cycle Management",
      "Claims Processing Solutions",
      "Billing Automation",
      "Insurance Verification",
      "Denial Management",
      "Payment Tracking",
      "Financial Reporting",
    ],
    Icon: FaFileInvoiceDollar,
  },
  {
    title: "Telemedicine Solutions",
    description:
      "Our secure telemedicine platforms enable healthcare providers to deliver virtual consultations while maintaining high standards of patient care.",
    listLabel: "Services include:",
    items: [
      "Video Consultation Platforms",
      "Online Appointment Scheduling",
      "Digital Prescriptions",
      "Patient Communication Portals",
      "Remote Patient Monitoring",
      "Mobile Telehealth Applications",
    ],
    Icon: FaVideo,
  },
  {
    title: "Artificial Intelligence in Healthcare",
    description:
      "We leverage artificial intelligence to improve diagnostics, automate administrative tasks, and enhance clinical decision-making.",
    listLabel: "Solutions include:",
    items: [
      "Predictive Healthcare Analytics",
      "Clinical Decision Support",
      "AI Chatbots",
      "Medical Image Analysis",
      "Intelligent Scheduling",
      "Workflow Automation",
      "Natural Language Processing",
      "Healthcare Data Analysis",
    ],
    Icon: FaBrain,
  },
  {
    title: "Healthcare Analytics & Business Intelligence",
    description:
      "We help healthcare organizations transform clinical and operational data into actionable insights.",
    listLabel: "Services include:",
    items: [
      "Executive Dashboards",
      "Clinical Performance Analytics",
      "Operational Reporting",
      "Patient Outcome Analytics",
      "Revenue Analytics",
      "Resource Utilization Reports",
      "Regulatory Reporting",
    ],
    Icon: FaChartBar,
  },
  {
    title: "Cloud Healthcare Solutions",
    description:
      "Our cloud services improve flexibility, scalability, collaboration, and business continuity for healthcare organizations.",
    listLabel: "Services include:",
    items: [
      "Cloud Migration",
      "Cloud Infrastructure",
      "Healthcare Data Storage",
      "Backup & Disaster Recovery",
      "Cloud Security",
      "Infrastructure Monitoring",
      "Managed Cloud Services",
    ],
    Icon: FaCloud,
  },
  {
    title: "Healthcare Cybersecurity",
    description:
      "Healthcare organizations manage highly sensitive information that requires comprehensive protection.",
    listLabel: "Our cybersecurity services include:",
    items: [
      "Security Risk Assessments",
      "Vulnerability Assessment",
      "Penetration Testing",
      "Identity & Access Management",
      "Endpoint Security",
      "Compliance Audits",
      "Security Monitoring",
      "Incident Response Planning",
    ],
    Icon: FaShieldAlt,
  },
  {
    title: "Mobile Healthcare Applications",
    description:
      "We develop secure mobile applications that improve communication between healthcare providers and patients.",
    listLabel: "Applications include:",
    items: [
      "Patient Apps",
      "Doctor Apps",
      "Home Healthcare Apps",
      "Fitness & Wellness Apps",
      "Medication Reminder Apps",
      "Diagnostic Booking Apps",
      "Ambulance Tracking Apps",
    ],
    Icon: FaMobileAlt,
  },
];

const industries = [
  "Hospitals",
  "Multispecialty Clinics",
  "Primary Healthcare Centers",
  "Diagnostic Laboratories",
  "Imaging Centers",
  "Pharmaceutical Companies",
  "Health Insurance Providers",
  "Medical Colleges",
  "Nursing Institutions",
  "Allied Health Institutions",
  "Healthcare BPO Organizations",
  "Telemedicine Providers",
  "Public Health Organizations",
  "Healthcare Startups",
];

const whyChoose = [
  {
    title: "Healthcare Domain Expertise",
    body: "Our professionals understand both healthcare operations and advanced technology, enabling us to deliver practical and effective solutions.",
  },
  {
    title: "Customized Healthcare Solutions",
    body: "Every healthcare organization has unique operational requirements. We build solutions tailored to your workflows and business objectives.",
  },
  {
    title: "Regulatory Compliance",
    body: "Our solutions are developed with strong attention to healthcare standards, data privacy, and regulatory requirements.",
  },
  {
    title: "Security-First Development",
    body: "We prioritize data protection, patient privacy, and secure system architecture throughout every project.",
  },
  {
    title: "End-to-End Healthcare Technology Services",
    body: "From consulting and implementation to integration, training, maintenance, and technical support, we provide complete healthcare technology services.",
  },
  {
    title: "Long-Term Partnership",
    body: "We believe in building trusted relationships through continuous innovation, responsive support, and measurable business value.",
  },
];

const processSteps = [
  "Healthcare Needs Assessment",
  "Business & Clinical Workflow Analysis",
  "Solution Design & Planning",
  "Software Development & Integration",
  "Quality Assurance & Validation",
  "Deployment & User Training",
  "Go-Live Support",
  "Continuous Maintenance & Enhancement",
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function Eyebrow({ label, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -14 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
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

// ─── Service Content Component (Reused for Mobile & Desktop) ──────────────────
function ServiceDetailContent({ service, isMobile = false }) {
  const { Icon } = service;
  return (
    <div className={`${isMobile ? "p-6" : "p-8 md:p-10"} h-full flex flex-col`}>
      {/* Icon + title */}
      <div className="flex items-start gap-4 mb-6">
        <div
          className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center shrink-0"
          style={{ background: `linear-gradient(135deg, ${BLUE}18, ${TEAL}18)`, border: `1px solid ${TEAL}30` }}
        >
          <Icon size={22} style={{ color: BLUE }} />
        </div>
        <h3
          className="text-lg md:text-2xl font-extrabold leading-tight pt-1"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: NAVY }}
        >
          {service.title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-sm md:text-base leading-relaxed mb-7" style={{ color: NAVY, opacity: 0.72 }}>
        {service.description}
      </p>

      {/* List label */}
      <p
        className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
        style={{ color: BLUE, fontFamily: "'Space Mono', monospace" }}
      >
        {service.listLabel}
      </p>

      {/* Items grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {service.items.map((item, i) => (
          <div
            key={item}
            className="flex items-start gap-2.5 rounded-xl px-3 py-2.5"
            style={{ background: `${NAVY}05`, border: `1px solid ${NAVY}08` }}
          >
            <div
              className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
              style={{ background: i % 2 === 0 ? TEAL : BLUE }}
            />
            <span className="text-sm leading-snug" style={{ color: NAVY, opacity: 0.78 }}>
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Service detail panel (Desktop) ───────────────────────────────────────────
function ServicePanel({ service, visible }) {
  return (
    <motion.div
      key={service.title}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : 20 }}
      transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 overflow-y-auto"
      style={{ pointerEvents: visible ? "auto" : "none" }}
    >
      <ServiceDetailContent service={service} />
    </motion.div>
  );
}

// ─── Why choose card ──────────────────────────────────────────────────────────
function WhyCard({ title, body, index }) {
  const [hovered, setHovered] = useState(false);
  const accent = index % 3 === 0 ? TEAL : index % 3 === 1 ? BLUE : TEAL;
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.09 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        transition: "transform 0.32s cubic-bezier(0.23,1,0.32,1)",
      }}
      className="relative rounded-2xl p-7 overflow-hidden cursor-default"
    >
      <div
        className="absolute inset-0 rounded-2xl transition-all duration-500"
        style={{
          background: hovered ? `linear-gradient(145deg, ${NAVY}, #0c2060)` : "#ffffff",
          border: `1.5px solid ${hovered ? accent + "55" : NAVY + "0e"}`,
          boxShadow: hovered ? `0 20px 50px ${BLUE}22` : "0 2px 16px rgba(5,17,49,0.05)",
        }}
      />
      {/* Top bar */}
      <div
        className="absolute top-0 left-0 right-0 h-0.75 rounded-t-2xl transition-all duration-500"
        style={{
          background: hovered
            ? `linear-gradient(to right, ${accent}, ${accent === TEAL ? BLUE : TEAL})`
            : `${accent}44`,
        }}
      />
      {/* Number */}
      <span
        className="absolute bottom-3 right-5 text-[4rem] font-extrabold leading-none select-none pointer-events-none transition-colors duration-300"
        style={{
          color: accent,
          opacity: hovered ? 0.1 : 0.06,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3
        className="relative z-10 text-base font-bold mb-3 transition-colors duration-300"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: hovered ? "#ffffff" : NAVY }}
      >
        {title}
      </h3>
      <p
        className="relative z-10 text-sm leading-relaxed transition-colors duration-300"
        style={{ color: hovered ? "rgba(255,255,255,0.7)" : NAVY, opacity: hovered ? undefined : 0.68 }}
      >
        {body}
      </p>
    </motion.div>
  );
}

// ─── Marquee strip ────────────────────────────────────────────────────────────
function IndustryMarquee() {
  const doubled = [...industries, ...industries];
  return (
    <div className="relative overflow-hidden">
      {/* fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to right, ${NAVY}, transparent)` }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to left, ${NAVY}, transparent)` }} />

      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((name, i) => (
          <div
            key={i}
            className="shrink-0 px-5 py-3 rounded-full text-sm font-semibold whitespace-nowrap"
            style={{
              background: i % 3 === 0 ? `${TEAL}18` : i % 3 === 1 ? `${BLUE}18` : `rgba(255,255,255,0.06)`,
              border: `1px solid ${i % 3 === 0 ? TEAL : i % 3 === 1 ? BLUE : "rgba(255,255,255,0.12)"}28`,
              color: i % 3 === 0 ? TEAL : i % 3 === 1 ? "#7ec3ff" : "rgba(255,255,255,0.7)",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}
          >
            {name}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ServicePage() {
  const [mounted, setMounted] = useState(false);
  const [activeService, setActiveService] = useState(0);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t); }, []);

  const heroRef = useRef(null);

  return (
    <div
      className="min-h-screen w-full overflow-x-hidden"
      style={{ fontFamily: "'Inter', sans-serif", background: "#ffffff", color: NAVY }}
    >

      {/* ═══════════════════════════════════════════════════════════════════
          SERVICES HERO — centered, clean
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-24 pb-0 overflow-hidden" style={{ background: "#ffffff" }}>
        {/* Subtle radial wash */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 70% 55% at 50% -5%, ${BLUE}14 0%, transparent 65%),
              radial-gradient(ellipse 40% 35% at 90% 90%, ${TEAL}0e 0%, transparent 55%)
            `,
          }}
        />
        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: `radial-gradient(${NAVY}12 1px, transparent 1px)`, backgroundSize: "34px 34px" }}
        />

        <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center pb-20">

          {/* Headline */}
          <div className="overflow-hidden mb-3">
            <motion.h1
              initial={{ y: 90 }}
              animate={{ y: mounted ? 0 : 90 }}
              transition={{ duration: 0.95, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.8rem,6.5vw,5.5rem)] font-extrabold leading-none tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: NAVY }}
            >
              OUR SERVICES
            </motion.h1>
          </div>

          {/* Animated divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: mounted ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mx-auto mb-0 h-0.75 w-20 origin-center rounded-full"
            style={{ background: `linear-gradient(to right, ${BLUE}, ${TEAL})` }}
          />
        </div>

        {/* Wave into navy */}
        <div className="h-14 w-full"
          style={{ background: `linear-gradient(to bottom right, #ffffff 49%, ${NAVY} 50%)` }} />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SERVICES EXPLORER — navy bg, tab sidebar + panel / mobile accordion
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-16 md:py-20 overflow-hidden" style={{ background: NAVY }}>
        {/* Ambient glows */}
        <div className="absolute -top-32 -left-32 w-lg h-128 rounded-full pointer-events-none"
          style={{ background: BLUE, filter: "blur(130px)", opacity: 0.14 }} />
        <div className="absolute -bottom-32 -right-32 w-md h-112 rounded-full pointer-events-none"
          style={{ background: TEAL, filter: "blur(130px)", opacity: 0.1 }} />
        {/* Grid overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(${TEAL} 1px, transparent 1px), linear-gradient(to right, ${TEAL} 1px, transparent 1px)`,
            backgroundSize: "56px 56px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          
          {/* ── MOBILE ACCORDION (< lg) ── */}
          <div className="block lg:hidden space-y-3">
            {services.map((s, i) => {
              const active = activeService === i;
              return (
                <div key={s.title} className="flex flex-col">
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    onClick={() => setActiveService(active ? -1 : i)}
                    className="w-full text-left px-4 py-3.5 rounded-xl flex items-center gap-3 transition-all duration-300 group"
                    style={{
                      background: active ? `linear-gradient(135deg, ${BLUE}28, ${TEAL}18)` : "transparent",
                      border: `1px solid ${active ? TEAL + "40" : "rgba(255,255,255,0.05)"}`,
                    }}
                  >
                    <span className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <s.Icon size={16} style={{ color: active ? TEAL : "rgba(255,255,255,0.45)" }} />
                    </span>
                    <span
                      className="text-sm font-semibold leading-snug transition-colors duration-300"
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        color: active ? "#ffffff" : "rgba(255,255,255,0.55)",
                      }}
                    >
                      {s.title}
                    </span>
                    {active && (
                      <div className="ml-auto w-1.5 h-1.5 rounded-full shrink-0" style={{ background: TEAL }} />
                    )}
                  </motion.button>

                  <AnimatePresence>
                    {active && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden mt-2 rounded-2xl"
                        style={{
                          background: "#ffffff",
                          boxShadow: "0 16px 40px rgba(0,0,0,0.25)",
                        }}
                      >
                        <ServiceDetailContent service={s} isMobile />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* ── DESKTOP TABS & PANEL (>= lg) ── */}
          <div className="hidden lg:flex flex-row gap-8">
            {/* Sidebar */}
            <div className="w-72 xl:w-80 shrink-0">
              <div className="sticky top-8 space-y-1.5">
                {services.map((s, i) => {
                  const active = activeService === i;
                  return (
                    <motion.button
                      key={s.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: i * 0.055 }}
                      onClick={() => setActiveService(i)}
                      className="w-full text-left px-4 py-3.5 rounded-xl flex items-center gap-3 transition-all duration-300 group"
                      style={{
                        background: active ? `linear-gradient(135deg, ${BLUE}28, ${TEAL}18)` : "transparent",
                        border: `1px solid ${active ? TEAL + "40" : "rgba(255,255,255,0.05)"}`,
                      }}
                    >
                      <span className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                        <s.Icon size={16} style={{ color: active ? TEAL : "rgba(255,255,255,0.45)" }} />
                      </span>
                      <span
                        className="text-sm font-semibold leading-snug transition-colors duration-300"
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          color: active ? "#ffffff" : "rgba(255,255,255,0.55)",
                        }}
                      >
                        {s.title}
                      </span>
                      {active && (
                        <div className="ml-auto w-1.5 h-1.5 rounded-full shrink-0" style={{ background: TEAL }} />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Detail panel */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 rounded-3xl overflow-hidden relative"
              style={{
                background: "#ffffff",
                minHeight: 480,
                boxShadow: `0 32px 80px rgba(0,0,0,0.35)`,
              }}
            >
              {services.map((s, i) => (
                <ServicePanel key={s.title} service={s} visible={activeService === i} />
              ))}
            </motion.div>
          </div>

        </div>

        {/* Bottom diagonal into light */}
        <div className="absolute bottom-0 left-0 right-0 h-14 pointer-events-none"
          style={{ background: "#f0f5fc", clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          INDUSTRIES WE SERVE — marquee on navy, clean heading
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 overflow-hidden" style={{ background: "#f0f5fc" }}>
        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: `radial-gradient(${NAVY}12 1px, transparent 1px)`, backgroundSize: "30px 30px" }}
        />
        <div className="absolute -top-20 right-10 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: BLUE, filter: "blur(120px)", opacity: 0.07 }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mb-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="text-[clamp(1.9rem,3.8vw,3rem)] font-extrabold"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: NAVY }}
              >
                INDUSTRIES WE SERVE
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="max-w-xs text-sm leading-relaxed md:text-right"
              style={{ color: NAVY, opacity: 0.58 }}
            >
              Health Axis Technologies delivers healthcare technology solutions for:
            </motion.p>
          </div>
        </div>

        {/* Dark marquee strip */}
        <div className="relative py-6 overflow-hidden" style={{ background: NAVY }}>
          <IndustryMarquee />
        </div>

        {/* Industry grid (static, below marquee) */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 mt-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {industries.map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="rounded-xl px-3 py-3 text-center text-xs font-semibold leading-tight transition-all duration-300 hover:-translate-y-1 cursor-default"
                style={{
                  background: "#ffffff",
                  border: `1.5px solid ${NAVY}0d`,
                  color: NAVY,
                  opacity: 0.82,
                  boxShadow: "0 2px 12px rgba(5,17,49,0.05)",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                {name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          WHY CHOOSE — white bg, 3-col card grid
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-28 md:py-36 overflow-hidden" style={{ background: "#ffffff" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 60% 50% at 50% 100%, ${BLUE}0a 0%, transparent 65%)` }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          {/* Heading */}
          <div className="mb-16 max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="text-[clamp(1.9rem,3.8vw,3rem)] font-extrabold"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: NAVY }}
            >
              WHY CHOOSE HEALTH AXIS TECHNOLOGIES
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {whyChoose.map((item, i) => (
              <WhyCard key={item.title} title={item.title} body={item.body} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          IMPLEMENTATION PROCESS — navy, diagonal timeline
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative py-28 md:py-36 overflow-hidden" style={{ background: NAVY }}>
        {/* Ambient glows */}
        <div className="absolute top-0 left-0 w-120 h-120 rounded-full pointer-events-none"
          style={{ background: BLUE, filter: "blur(130px)", opacity: 0.14 }} />
        <div className="absolute bottom-0 right-0 w-md h-112 rounded-full pointer-events-none"
          style={{ background: TEAL, filter: "blur(130px)", opacity: 0.11 }} />
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(${TEAL} 1px, transparent 1px), linear-gradient(to right, ${TEAL} 1px, transparent 1px)`,
            backgroundSize: "56px 56px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          {/* Heading */}
          <div className="mb-16 md:mb-20 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="text-[clamp(1.9rem,3.8vw,3rem)] font-extrabold text-white"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              OUR IMPLEMENTATION PROCESS
            </motion.h2>
          </div>

          {/* Steps grid — 4 columns on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
            style={{ background: `rgba(255,255,255,0.06)`, borderRadius: 24, overflow: "hidden" }}
          >
            {processSteps.map((step, i) => {
              const accent = i % 2 === 0 ? TEAL : BLUE;
              return (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative p-7 group hover:z-10"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  {/* Hover bg */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{ background: `linear-gradient(145deg, ${accent}12, ${BLUE}0a)` }}
                  />

                  {/* Step number */}
                  <div
                    className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mb-5 transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${accent}30, ${accent}18)`,
                      border: `1.5px solid ${accent}50`,
                      color: accent,
                      fontFamily: "'Space Mono', monospace",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Step label */}
                  <p
                    className="relative z-10 text-sm font-semibold leading-snug text-white"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", opacity: 0.88 }}
                  >
                    {step}
                  </p>

                  {/* Arrow connector (right side, desktop only) */}
                  {i % 4 !== 3 && (
                    <div
                      className="absolute top-7 -right-px w-px h-8 pointer-events-none hidden lg:block"
                      style={{ background: `linear-gradient(to bottom, ${accent}60, transparent)` }}
                    />
                  )}

                  {/* Bottom accent bar on hover */}
                  <div
                    className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-400"
                    style={{ background: `linear-gradient(to right, ${accent}, transparent)` }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}