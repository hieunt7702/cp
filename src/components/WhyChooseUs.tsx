"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, Rocket, Users2, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import SectionBackground, { BlobConfig } from "./SectionBackground";

const whyUsBlobs: BlobConfig[] = [
  { color: "sky", positionClass: "-bottom-28 -left-36", sizeClass: "w-[520px] h-[520px]" },
  { color: "amber", positionClass: "-top-20 -right-28", sizeClass: "w-[460px] h-[460px]" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const getFeatureIcon = (id: string) => {
    switch (id) {
      case "security":
        return <ShieldCheck className="w-5 h-5 text-sky-600" strokeWidth={2} />;
      case "delivery":
        return <Rocket className="w-5 h-5 text-sky-600" strokeWidth={2} />;
      case "team":
        return <Users2 className="w-5 h-5 text-sky-600" strokeWidth={2} />;
      case "support":
        return <Headphones className="w-5 h-5 text-sky-600" strokeWidth={2} />;
      default:
        return <ShieldCheck className="w-5 h-5 text-sky-600" strokeWidth={2} />;
    }
  };

  return (
    <SectionBackground id="why-us" blobs={whyUsBlobs} className="py-20 sm:py-24 bg-white">
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
            <span>{t.whyUs.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-[-0.025em] leading-[1.2]">
            {t.whyUs.title}
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-[1.65]">
            {t.whyUs.subtitle}
          </p>
        </motion.div>

        {/* 4 Feature Columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
        >
          {t.whyUs.items.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50/60 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-100/80 flex items-center justify-center shrink-0">
                {getFeatureIcon(item.id)}
              </div>
              <div className="flex-1">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5 tracking-tight leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-500 leading-[1.65]">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionBackground>
  );
}
