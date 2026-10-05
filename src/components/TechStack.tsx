"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  ReactLogo,
  NextLogo,
  NodeLogo,
  TypeScriptLogo,
  PostgreSQLLogo,
  TailwindLogo,
} from "./BrandLogos";
import { motion } from "framer-motion";
import SectionBackground, { BlobConfig } from "./SectionBackground";

const techBlobs: BlobConfig[] = [
  { color: "sky", positionClass: "-top-32 left-1/2 -translate-x-1/2", sizeClass: "w-[560px] h-[400px]" },
  { color: "amber", positionClass: "-bottom-24 -right-32", sizeClass: "w-[460px] h-[460px]" },
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

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function TechStack() {
  const { t } = useLanguage();

  const getTechLogo = (key: string) => {
    switch (key) {
      case "react":
        return <ReactLogo className="w-7 h-7" />;
      case "nextjs":
        return <NextLogo className="w-7 h-7" />;
      case "nodejs":
        return <NodeLogo className="w-7 h-7" />;
      case "typescript":
        return <TypeScriptLogo className="w-7 h-7" />;
      case "postgresql":
        return <PostgreSQLLogo className="w-7 h-7" />;
      case "tailwind":
        return <TailwindLogo className="w-7 h-7" />;
      default:
        return null;
    }
  };

  return (
    <SectionBackground id="tech-stack" blobs={techBlobs} className="py-20 sm:py-24 bg-white">
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
            <span>{t.techStack.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-[-0.025em] leading-[1.2]">
            {t.techStack.title}
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-[1.65]">
            {t.techStack.subtitle}
          </p>
        </motion.div>

        {/* 6 Tech Cards in Row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5"
        >
          {t.techStack.items.map((item) => (
            <motion.div
              key={item.key}
              variants={cardVariants}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-white/95 backdrop-blur-xs rounded-2xl border border-slate-200/80 py-4 px-5 flex items-center justify-center gap-3.5 hover:border-sky-300 transition-colors group cursor-pointer"
            >
              <div className="shrink-0 transition-transform group-hover:scale-110">
                {getTechLogo(item.key)}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 tracking-tight leading-normal whitespace-nowrap">
                {item.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionBackground>
  );
}
