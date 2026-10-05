"use client";

import React from "react";
import {
  Logoipsum1,
  Logoipsum2,
  Logoipsum3,
  Logoipsum4,
  Logoipsum5,
  Logoipsum6,
} from "./BrandLogos";
import { motion } from "framer-motion";

export default function LogoipsumBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full pt-4 pb-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 opacity-80 hover:opacity-100 transition-opacity">
          <Logoipsum1 className="h-6 sm:h-7 w-auto" />
          <Logoipsum2 className="h-6 sm:h-7 w-auto" />
          <Logoipsum3 className="h-6 sm:h-7 w-auto" />
          <Logoipsum4 className="h-6 sm:h-7 w-auto" />
          <Logoipsum5 className="h-6 sm:h-7 w-auto" />
          <Logoipsum6 className="h-6 sm:h-7 w-auto" />
        </div>
      </div>
    </motion.div>
  );
}
