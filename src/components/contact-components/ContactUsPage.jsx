import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from "@/components/contact-components/ContactForm";

/* ─── Health Axis Brand Palette ─────────────────────────────── */
const NAVY = "#051131";
const BLUE = "#0B6FCE";
const TEAL = "#25BBAE";

export default function ContactUsPage() {
  const faderUp = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  return (
    <main className="w-full min-h-screen select-none relative bg-white overflow-hidden">
      
      {/* ── Dynamic Watermark / Background System ── */}
      <div style={{
        position: "absolute", bottom: "50%", left: "50%",
        transform: "translate(-50%,50%)",
        fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 900,
        fontSize: "clamp(6rem,14vw,18rem)", color: `${BLUE}06`,
        whiteSpace: "nowrap", pointerEvents: "none", userSelect: "none",
        lineHeight: 1, letterSpacing: "-0.05em", zIndex: 0
      }}>
        CONNECT
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div 
          className="absolute top-1/4 -right-40 w-150 h-150 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          style={{ backgroundColor: BLUE }}
        />
        <div 
          className="absolute bottom-1/4 -left-40 w-150 h-150 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          style={{ backgroundColor: TEAL }}
        />
      </div>

      {/* ── MAIN CONTENT LAYER ── */}
      <section className="relative z-10 pt-32 pb-24 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Top Headline + Body Section */}
          <div className="max-w-4xl space-y-8">
            <div className="space-y-4">
              <motion.h1 
                variants={faderUp}
                className="font-extrabold tracking-tight leading-none"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)", color: NAVY }}
              >
                Let's Build Smarter Healthcare Together
              </motion.h1>
            </div>

            <motion.p 
              variants={faderUp} 
              className="text-base md:text-lg leading-relaxed font-normal" 
              style={{ fontFamily: "'Inter', sans-serif", color: NAVY, opacity: 0.72, maxWidth: 720 }}
            >
              Whether you are modernizing hospital operations, implementing digital health solutions,
              improving revenue cycle performance, or developing innovative healthcare applications,
              Health Axis Technologies is ready to support your transformation journey.
            </motion.p>
          </div>

          {/* Brand gradient accent rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            style={{ height: 1, width: "100%", background: `linear-gradient(90deg, ${BLUE}, ${TEAL}, transparent)`, transformOrigin: "left" }}
          />

          {/* Information Columns + Form Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Corporate details & Hours */}
            <div className="lg:col-span-5 space-y-16">
              
              {/* Corporate Identity */}
              <div className="space-y-4">
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: NAVY }}>
                  <p className="font-extrabold text-2xl mb-1" style={{ color: BLUE }}>
                    Health Axis Technologies
                  </p>
                  <p className="text-base font-medium opacity-75">
                    Innovating Healthcare. Empowering Lives.
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="space-y-6">
                <h3 style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: BLUE }}>
                  Business Hours
                </h3>
                
                <div className="space-y-4">
                  <div className="border-b pb-3" style={{ borderColor: `${NAVY}15` }}>
                    <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", fontWeight: 700, color: TEAL, textTransform: "uppercase", marginBottom: "2px", letterSpacing: "0.1em" }}>
                      Weekdays
                    </p>
                    <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1rem", fontWeight: 700, color: NAVY }}>
                      Monday – Friday: 9:00 AM – 6:00 PM
                    </p>
                  </div>

                  <div className="border-b pb-3" style={{ borderColor: `${NAVY}15` }}>
                    <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", fontWeight: 700, color: BLUE, textTransform: "uppercase", marginBottom: "2px", letterSpacing: "0.1em" }}>
                      Saturdays
                    </p>
                    <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1rem", fontWeight: 700, color: NAVY }}>
                      Saturday: 9:00 AM – 1:00 PM
                    </p>
                  </div>

                  <div>
                    <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", fontWeight: 700, color: TEAL, textTransform: "uppercase", marginBottom: "2px", letterSpacing: "0.1em" }}>
                      Sundays
                    </p>
                    <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1rem", fontWeight: 700, color: NAVY }}>
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </motion.div>
      </section>
    </main>
  );
}