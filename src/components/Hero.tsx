"use client";

import React, { useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";
import { ArrowRight, MessageSquare, Smile, Calendar, Heart } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  const { t } = useLanguage();
  const { openModal } = useModal();
  const heroRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tracking with smooth spring physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 140, mass: 0.4 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Subtle parallax shift for ambient background blobs
  const parallaxX = useTransform(smoothX, [0, 1400], [-20, 20]);
  const parallaxY = useTransform(smoothY, [0, 900], [-20, 20]);
  const parallaxXRev = useTransform(smoothX, [0, 1400], [20, -20]);
  const parallaxYRev = useTransform(smoothY, [0, 900], [20, -20]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative pt-20 sm:pt-28 pb-20 sm:pb-24 overflow-hidden bg-white"
    >
      {/* Ambient background glow 1: Amber top-left */}
      <motion.div
        style={{ x: parallaxX, y: parallaxY }}
        className="absolute top-0 left-0 w-[540px] h-[540px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/3"
        aria-hidden="true"
      />

      {/* Ambient background glow 2: Sky top-right */}
      <motion.div
        style={{ x: parallaxXRev, y: parallaxYRev }}
        className="absolute top-0 right-10 w-[580px] h-[580px] bg-sky-100/45 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/4"
        aria-hidden="true"
      />

      {/* Interactive Cursor Spotlight Glow */}
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="pointer-events-none absolute w-[460px] h-[460px] rounded-full bg-radial from-sky-200/30 via-amber-200/20 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Pill Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-xs sm:text-[13px] font-semibold tracking-wide leading-normal mb-5">
              <span>{t.hero.badge}</span>
            </div>
          </motion.div>

          {/* Main Headline H1 */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-slate-900 tracking-[-0.03em] leading-[1.16] max-w-4xl mx-auto"
          >
            {t.hero.titleLine1}
            <br className="hidden sm:inline" />{" "}
            <span className="text-slate-900">{t.hero.titleLine2}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-5 text-base sm:text-[17px] text-slate-500 max-w-2xl mx-auto leading-[1.7] font-normal"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Primary CTA */}
          <motion.div variants={itemVariants} className="mt-8 flex justify-center">
            <motion.button
              type="button"
              onClick={openModal}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-medium text-sm leading-none transition-colors group cursor-pointer"
            >
              <span className="leading-none">{t.hero.getStarted}</span>
              <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            variants={itemVariants}
            className="mt-16 pt-8 border-t border-slate-100 w-full max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center justify-center"
          >
            {/* Stat 1 */}
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="text-sky-500 shrink-0 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 stroke-[1.75]" />
              </div>
              <div className="text-left flex flex-col justify-center">
                <div className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-none mb-1">
                  {t.hero.stats.projects.number}
                </div>
                <div className="text-xs text-slate-500 leading-none">
                  {t.hero.stats.projects.label}
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="text-sky-500 shrink-0 flex items-center justify-center">
                <Smile className="w-6 h-6 stroke-[1.75]" />
              </div>
              <div className="text-left flex flex-col justify-center">
                <div className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-none mb-1">
                  {t.hero.stats.clients.number}
                </div>
                <div className="text-xs text-slate-500 leading-none">
                  {t.hero.stats.clients.label}
                </div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="text-sky-500 shrink-0 flex items-center justify-center">
                <Calendar className="w-6 h-6 stroke-[1.75]" />
              </div>
              <div className="text-left flex flex-col justify-center">
                <div className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-none mb-1">
                  {t.hero.stats.experience.number}
                </div>
                <div className="text-xs text-slate-500 leading-none">
                  {t.hero.stats.experience.label}
                </div>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="text-sky-500 shrink-0 flex items-center justify-center">
                <Heart className="w-6 h-6 stroke-[1.75]" />
              </div>
              <div className="text-left flex flex-col justify-center">
                <div className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-none mb-1">
                  {t.hero.stats.satisfaction.number}
                </div>
                <div className="text-xs text-slate-500 leading-none">
                  {t.hero.stats.satisfaction.label}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
