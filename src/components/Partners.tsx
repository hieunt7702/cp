"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  ShopeeLogo,
  LazadaLogo,
  TikiLogo,
  ViettelLogo,
  GrabLogo,
  TechcombankLogo,
  VinaGroupLogo,
  FPTLogo,
} from "./BrandLogos";
import { motion } from "framer-motion";
import SectionBackground, { BlobConfig } from "./SectionBackground";

const partnerBlobs: BlobConfig[] = [
  { color: "amber", positionClass: "-top-20 -left-32", sizeClass: "w-[480px] h-[480px]" },
  { color: "sky", positionClass: "-bottom-20 -right-28", sizeClass: "w-[500px] h-[500px]" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const logoVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Partners() {
  const { t } = useLanguage();

  return (
    <SectionBackground id="partners" blobs={partnerBlobs} className="py-20 sm:py-24 bg-[#f8fafc] border-y border-slate-100">
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
            <span>{t.partners.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-[-0.025em] leading-[1.2]">
            {t.partners.title}
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-[1.65]">
            {t.partners.subtitle}
          </p>
        </motion.div>

        {/* 8 Partner Enterprise Logos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="w-full grid grid-cols-2 sm:grid-cols-4 lg:flex lg:items-center lg:justify-between gap-y-8 gap-x-6 sm:gap-x-8 lg:gap-0"
        >
          <motion.div variants={logoVariants} whileHover={{ scale: 1.05 }} className="flex items-center justify-center">
            <ShopeeLogo />
          </motion.div>
          <motion.div variants={logoVariants} whileHover={{ scale: 1.05 }} className="flex items-center justify-center">
            <LazadaLogo />
          </motion.div>
          <motion.div variants={logoVariants} whileHover={{ scale: 1.05 }} className="flex items-center justify-center">
            <TikiLogo />
          </motion.div>
          <motion.div variants={logoVariants} whileHover={{ scale: 1.05 }} className="flex items-center justify-center">
            <ViettelLogo />
          </motion.div>
          <motion.div variants={logoVariants} whileHover={{ scale: 1.05 }} className="flex items-center justify-center">
            <GrabLogo />
          </motion.div>
          <motion.div variants={logoVariants} whileHover={{ scale: 1.05 }} className="flex items-center justify-center">
            <TechcombankLogo />
          </motion.div>
          <motion.div variants={logoVariants} whileHover={{ scale: 1.05 }} className="flex items-center justify-center">
            <VinaGroupLogo />
          </motion.div>
          <motion.div variants={logoVariants} whileHover={{ scale: 1.05 }} className="flex items-center justify-center">
            <FPTLogo />
          </motion.div>
        </motion.div>
      </div>
    </SectionBackground>
  );
}
