"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ZaloIcon } from "@/components/BrandLogos";
import { useLanguage } from "@/context/LanguageContext";

export default function ZaloWidget() {
  const { locale } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  const phoneNumber = "0334689521";
  const zaloUrl = `https://zalo.me/${phoneNumber}`;

  return (
    <aside
      aria-label="Zalo Contact"
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex items-center"
    >
      {/* Interactive Tooltip Pill on Hover / Desktop */}
      <AnimatePresence>
        {isHovered && (
          <motion.a
            href={zaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="hidden sm:flex items-center gap-2 mr-3 px-3.5 py-2 rounded-full bg-white/95 backdrop-blur-md border border-sky-100 shadow-[0_4px_20px_rgba(0,104,255,0.15)] hover:border-sky-300 transition-colors group cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-[#00C980] animate-pulse" />
            <span className="text-xs font-semibold text-slate-800 group-hover:text-[#0068FF] transition-colors whitespace-nowrap">
              {locale === "vi" ? "Chat Zalo: 0334 689 521" : "Chat on Zalo: 0334 689 521"}
            </span>
          </motion.a>
        )}
      </AnimatePresence>

      {/* Main Floating Circle Button */}
      <motion.a
        href={zaloUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat qua Zalo: 0334 689 521"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border border-sky-100/90 shadow-[0_8px_30px_rgba(0,104,255,0.28)] flex items-center justify-center cursor-pointer transition-shadow hover:shadow-[0_12px_36px_rgba(0,104,255,0.38)]"
      >
        {/* Ambient Pulsing Wave Effect */}
        <span
          className="absolute inset-0 rounded-full bg-[#0068FF] opacity-20 animate-ping pointer-events-none"
          aria-hidden="true"
        />
        <span
          className="absolute -inset-1 rounded-full bg-gradient-to-tr from-sky-400/20 to-[#0068FF]/30 blur-sm pointer-events-none"
          aria-hidden="true"
        />

        {/* Inner Disc */}
        <div className="relative z-10 w-full h-full rounded-full bg-white flex items-center justify-center p-2.5 sm:p-3">
          <ZaloIcon className="w-8 h-8 sm:w-9 sm:h-9 transition-transform group-hover:scale-105" />
        </div>

        {/* Online Status Badge (Top-Right Green Indicator Dot) */}
        <span
          className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 z-20 flex h-3.5 w-3.5 sm:h-4 sm:w-4 items-center justify-center"
          title="Online"
        >
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C980] opacity-60" />
          <span className="relative inline-flex rounded-full h-3 w-3 sm:h-3.5 sm:w-3.5 bg-[#00C980] border-2 border-white shadow-sm ring-1 ring-emerald-500/20" />
        </span>
      </motion.a>
    </aside>
  );
}
