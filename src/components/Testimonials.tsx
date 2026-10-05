"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import SectionBackground, { BlobConfig } from "./SectionBackground";

const testimonialBlobs: BlobConfig[] = [
  { color: "sky", positionClass: "-top-24 -left-36", sizeClass: "w-[480px] h-[480px]" },
  { color: "amber", positionClass: "-bottom-28 left-1/2 -translate-x-1/2", sizeClass: "w-[540px] h-[420px]" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <SectionBackground id="testimonials" blobs={testimonialBlobs} className="py-20 sm:py-24 bg-[#f8fafc] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-xs sm:text-[13px] font-semibold tracking-wide leading-normal mb-3.5">
            <span>{t.testimonials.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-[-0.025em] leading-[1.2]">
            {t.testimonials.title}
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-[1.65]">
            {t.testimonials.subtitle}
          </p>
        </motion.div>

        {/* 3 Testimonial Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {t.testimonials.items.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-white/95 backdrop-blur-xs rounded-2xl border border-slate-200/80 p-7 sm:p-8 flex flex-col justify-between hover:border-sky-300 transition-colors group cursor-pointer"
            >
              <div>
                {/* Cyan Quote Mark */}
                <div className="text-sky-400 mb-4 opacity-90">
                  <Quote className="w-7 h-7 fill-sky-50 stroke-sky-400 stroke-[1.5]" />
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-600 leading-[1.7] font-normal">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 overflow-hidden flex items-center justify-center shrink-0">
                  <svg
                    className="w-full h-full text-slate-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-400 font-medium leading-normal mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionBackground>
  );
}
