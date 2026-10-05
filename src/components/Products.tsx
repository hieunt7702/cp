"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  Users2,
  ShoppingCart,
  CalendarCheck,
  UserCheck,
  Box,
  LayoutGrid,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionBackground, { BlobConfig } from "./SectionBackground";

const productBlobs: BlobConfig[] = [
  { color: "cyan", positionClass: "-top-28 -right-36", sizeClass: "w-[520px] h-[520px]" },
  { color: "purple", positionClass: "-bottom-28 -left-36", sizeClass: "w-[480px] h-[480px]" },
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

export default function Products() {
  const { t } = useLanguage();

  const getProductIcon = (id: string) => {
    switch (id) {
      case "crm":
        return <Users2 className="w-6 h-6 text-sky-500" strokeWidth={1.8} />;
      case "ecommerce":
        return <ShoppingCart className="w-6 h-6 text-teal-500" strokeWidth={1.8} />;
      case "booking":
        return <CalendarCheck className="w-6 h-6 text-emerald-500" strokeWidth={1.8} />;
      case "hrm":
        return <UserCheck className="w-6 h-6 text-blue-500" strokeWidth={1.8} />;
      case "inventory":
        return <Box className="w-6 h-6 text-orange-500" strokeWidth={1.8} />;
      case "custom":
        return <LayoutGrid className="w-6 h-6 text-indigo-500" strokeWidth={1.8} />;
      default:
        return <LayoutGrid className="w-6 h-6 text-sky-500" strokeWidth={1.8} />;
    }
  };

  return (
    <SectionBackground id="products" blobs={productBlobs} className="py-20 sm:py-24 bg-[#f8fafc] border-y border-slate-100">
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
            <span>{t.products.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-[-0.025em] leading-[1.2]">
            {t.products.title}
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-[1.65]">
            {t.products.subtitle}
          </p>
        </motion.div>

        {/* 6 Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5"
        >
          {t.products.items.map((prod) => (
            <motion.div
              key={prod.id}
              variants={cardVariants}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-white/95 backdrop-blur-xs rounded-2xl border border-slate-200/80 p-6 flex flex-col items-center justify-center text-center hover:border-sky-300 transition-colors group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-sky-50 group-hover:border-sky-100 flex items-center justify-center mb-4 transition-colors">
                {getProductIcon(prod.id)}
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-slate-800 tracking-tight leading-snug group-hover:text-sky-600 transition-colors">
                {prod.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionBackground>
  );
}
