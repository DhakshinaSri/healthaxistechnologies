import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const NAVY = "#051131";
const BLUE = "#0B6FCE";
const TEAL = "#25BBAE";

const menus = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const servicesList = [
  "Healthcare Software Development",
  "Medical Coding & RCM",
  "Telemedicine Solutions",
  "Artificial Intelligence in Healthcare",
  "Healthcare Analytics & BI",
  "Cloud Healthcare Solutions",
  "Healthcare Cybersecurity",
  "Mobile Healthcare Applications",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative w-full overflow-hidden text-white"
      style={{ background: NAVY, fontFamily: "'Inter', sans-serif" }}
    >
      {/* ── Ambient Background Glows ── */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: BLUE, filter: "blur(140px)", opacity: 0.12 }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: TEAL, filter: "blur(140px)", opacity: 0.1 }}
      />

      {/* ── Main Footer Layer ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12">
        {/* TOP ROW: Intro, Quick Links, Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}>
          
          {/* Brand Intro Column */}
          <div className="lg:col-span-5 space-y-5">
            <Link to="/" className="inline-block">
              <h2
                className="text-2xl font-extrabold tracking-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#ffffff" }}
              >
                Health Axis{" "}
                <span
                  style={{
                    background: `linear-gradient(120deg, ${BLUE}, ${TEAL})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Technologies
                </span>
              </h2>
            </Link>
            <p
              className="text-sm leading-relaxed max-w-md"
              style={{ color: "rgba(255, 255, 255, 0.7)" }}
            >
              Health Axis Technologies is a healthcare technology company dedicated to transforming the healthcare ecosystem through innovative digital solutions.
            </p>
            <p
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: TEAL, fontFamily: "'Space Mono', monospace" }}
            >
              Innovating Healthcare. Empowering Lives.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <h3
              className="text-xs font-bold tracking-[0.22em] uppercase"
              style={{ color: BLUE, fontFamily: "'Space Mono', monospace" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {menus.map((menu) => (
                <li key={menu.name}>
                  <Link
                    to={menu.path}
                    className="text-sm transition-colors duration-300 hover:text-teal-400 block"
                    style={{ color: "rgba(255, 255, 255, 0.75)" }}
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services List Column */}
          <div className="lg:col-span-4 space-y-4">
            <h3
              className="text-xs font-bold tracking-[0.22em] uppercase"
              style={{ color: BLUE, fontFamily: "'Space Mono', monospace" }}
            >
              Our Services
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-1 gap-2.5">
              {servicesList.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm transition-colors duration-300 hover:text-teal-400 block"
                    style={{ color: "rgba(255, 255, 255, 0.75)" }}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* MIDDLE ROW: Address, Email & Business Hours */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-b" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}>
          
          {/* Address */}
          <div className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-1"
              style={{ background: `rgba(11, 111, 206, 0.15)`, border: `1px solid ${BLUE}30` }}
            >
              <FaMapMarkerAlt style={{ color: BLUE }} />
            </div>
            <div>
              <h4
                className="text-xs font-bold tracking-[0.18em] uppercase mb-1"
                style={{ color: TEAL, fontFamily: "'Space Mono', monospace" }}
              >
                Our Address
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                Health Axis Technologies
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-1"
              style={{ background: `rgba(37, 187, 174, 0.15)`, border: `1px solid ${TEAL}30` }}
            >
              <FaEnvelope style={{ color: TEAL }} />
            </div>
            <div>
              <h4
                className="text-xs font-bold tracking-[0.18em] uppercase mb-1"
                style={{ color: TEAL, fontFamily: "'Space Mono', monospace" }}
              >
                Email Us
              </h4>
              <p className="text-sm" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                info@healthaxistechnologies.in
              </p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="flex items-start gap-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-1"
              style={{ background: `rgba(11, 111, 206, 0.15)`, border: `1px solid ${BLUE}30` }}
            >
              <FaClock style={{ color: BLUE }} />
            </div>
            <div>
              <h4
                className="text-xs font-bold tracking-[0.18em] uppercase mb-2"
                style={{ color: TEAL, fontFamily: "'Space Mono', monospace" }}
              >
                Business Hours
              </h4>
              <ul className="text-sm space-y-1" style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                <li>Monday – Friday: 9:00 AM – 6:00 PM</li>
                <li>Saturday: 9:00 AM – 1:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: Copyrights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs" style={{ color: "rgba(255, 255, 255, 0.5)" }}>
          <p>© {currentYear} Health Axis Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-white transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}