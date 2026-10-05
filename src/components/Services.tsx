"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Code2, Smartphone, Users, Cloud, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionBackground, { BlobConfig } from "./SectionBackground";

const serviceBlobs: BlobConfig[] = [
  { color: "sky", positionClass: "top-1/4 -left-48", sizeClass: "w-[520px] h-[520px]" },
  { color: "amber", positionClass: "-bottom-24 -right-36", sizeClass: "w-[480px] h-[480px]" },
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Services() {
  const { t } = useLanguage();

  const getServiceIcon = (type: string) => {
    switch (type) {
      case "web":
        return {
          icon: <Code2 className="w-6 h-6 stroke-[2]" />,
          wrapperClass: "bg-sky-50 text-sky-600 border border-sky-100",
        };
      case "mobile":
        return {
          icon: <Smartphone className="w-6 h-6 stroke-[2]" />,
          wrapperClass: "bg-emerald-50 text-emerald-600 border border-emerald-100",
        };
      case "crm":
        return {
          icon: <Users className="w-6 h-6 stroke-[2]" />,
          wrapperClass: "bg-purple-50 text-purple-600 border border-purple-100",
        };
      case "api":
        return {
          icon: <Cloud className="w-6 h-6 stroke-[2]" />,
          wrapperClass: "bg-orange-50 text-orange-600 border border-orange-100",
        };
      default:
        return {
          icon: <Code2 className="w-6 h-6 stroke-[2]" />,
          wrapperClass: "bg-sky-50 text-sky-600 border border-sky-100",
        };
    }
  };

  return (
    <SectionBackground id="services" blobs={serviceBlobs} className="py-20 sm:py-24 bg-white">
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
            <span>{t.services.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-[-0.025em] leading-[1.2]">
            {t.services.title}
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-[1.65]">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {t.services.items.map((item, idx) => {
            const { icon, wrapperClass } = getServiceIcon(item.type);
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-white/90 backdrop-blur-xs rounded-2xl border border-slate-200/80 p-7 sm:p-8 flex flex-col justify-between hover:border-sky-300 transition-colors group cursor-pointer"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-105 ${wrapperClass}`}
                  >
                    {icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2.5 tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-500 leading-[1.65]">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-8">
                  <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 text-slate-600 group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600 flex items-center justify-center transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionBackground>
  );
}
