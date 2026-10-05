"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export interface BlobConfig {
  color: "amber" | "sky" | "cyan" | "purple" | "rose";
  positionClass: string;
  sizeClass?: string;
}

interface SectionBackgroundProps {
  blobs: BlobConfig[];
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function SectionBackground({
  blobs,
  children,
  className = "",
  id,
}: SectionBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
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
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const getBlobColorClass = (color: BlobConfig["color"]) => {
    switch (color) {
      case "amber":
        return "bg-amber-100/45";
      case "sky":
        return "bg-sky-100/50";
      case "cyan":
        return "bg-cyan-100/45";
      case "purple":
        return "bg-purple-100/35";
      case "rose":
        return "bg-rose-100/35";
      default:
        return "bg-sky-100/45";
    }
  };

  return (
    <section
      id={id}
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Parallax Ambient Background Blobs at randomized/custom positions */}
      {blobs.map((blob, idx) => {
        const isEven = idx % 2 === 0;
        return (
          <motion.div
            key={idx}
            style={{
              x: isEven ? parallaxX : parallaxXRev,
              y: isEven ? parallaxY : parallaxYRev,
            }}
            className={`absolute pointer-events-none rounded-full blur-3xl transition-transform ${
              blob.sizeClass || "w-[500px] h-[500px]"
            } ${blob.positionClass} ${getBlobColorClass(blob.color)}`}
            aria-hidden="true"
          />
        );
      })}

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

      {/* Section Content */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
