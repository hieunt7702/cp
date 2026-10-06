"use client";

import React, { useState, useRef } from "react";
import {
  UeiHTLogo,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
  ZaloIcon,
} from "./BrandLogos";
import { useLanguage } from "@/context/LanguageContext";
import {
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tracking with smooth spring physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 140, mass: 0.4 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const parallaxX = useTransform(smoothX, [0, 1400], [-18, 18]);
  const parallaxY = useTransform(smoothY, [0, 800], [-18, 18]);
  const parallaxXRev = useTransform(smoothX, [0, 1400], [18, -18]);
  const parallaxYRev = useTransform(smoothY, [0, 800], [18, -18]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!footerRef.current) return;
    const rect = footerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  return (
    <footer
      id="contact"
      ref={footerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-[#f8fafc] border-t border-slate-200/80 pt-16 pb-12"
    >
      {/* Ambient Blobs */}
      <motion.div
        style={{ x: parallaxX, y: parallaxY }}
        className="absolute pointer-events-none rounded-full blur-3xl w-[500px] h-[500px] -top-28 -right-32 bg-sky-100/40"
        aria-hidden="true"
      />
      <motion.div
        style={{ x: parallaxXRev, y: parallaxYRev }}
        className="absolute pointer-events-none rounded-full blur-3xl w-[480px] h-[480px] -bottom-28 -left-32 bg-amber-100/35"
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
        className="pointer-events-none absolute w-[440px] h-[440px] rounded-full bg-radial from-sky-200/25 via-amber-200/15 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-200/80"
        >
          {/* Column 1: Brand & Socials (4 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <a href="#" className="flex items-center gap-3 group">
              <UeiHTLogo className="w-8 h-8" />
              <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors">
                {t.header.brand}
              </span>
            </a>
            <p className="text-xs sm:text-[13px] text-slate-500 max-w-xs leading-[1.65]">
              {t.footer.brandTagline}
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-2.5 pt-2">
              <motion.a
                href="https://www.facebook.com/profile.php?id=61595140709969"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#1877F2] hover:border-blue-300 transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/hi%E1%BA%BFu-nguy%E1%BB%85n-8b6713213/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#0A66C2] hover:border-sky-300 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="https://zalo.me/0334689521"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                aria-label="Zalo: 0334 689 521"
                className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-[#0068FF] hover:border-blue-300 transition-colors"
              >
                <ZaloIcon className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                aria-label="Twitter"
                className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-sky-600 hover:border-sky-300 transition-colors"
              >
                <TwitterIcon className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-sky-600 hover:border-sky-300 transition-colors"
              >
                <YoutubeIcon className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 leading-normal">
              {t.footer.quickLinksTitle}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-600">
              <li>
                <a href="#home" className="hover:text-sky-600 transition-colors">
                  {t.header.nav.home}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-600 transition-colors">
                  {t.header.nav.services}
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-sky-600 transition-colors">
                  {t.header.nav.products}
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-sky-600 transition-colors">
                  {t.header.nav.aboutUs}
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-sky-600 transition-colors">
                  {t.header.nav.blog}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sky-600 transition-colors">
                  {t.header.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 leading-normal">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-600">
              {t.services.items.map((item, idx) => (
                <li key={idx}>
                  <a href="#services" className="hover:text-sky-600 transition-colors">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 leading-normal">
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-[13px] text-slate-600">
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-sky-500 shrink-0" />
                <span className="leading-none">{t.footer.location}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-500 shrink-0" />
                <a
                  href={`mailto:${t.footer.email}`}
                  className="hover:text-sky-600 transition-colors leading-none"
                >
                  {t.footer.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-500 shrink-0" />
                <a
                  href={`tel:${t.footer.phone.replace(/\s+/g, "")}`}
                  className="hover:text-sky-600 transition-colors leading-none"
                >
                  {t.footer.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-4 h-4 shrink-0 flex items-center justify-center text-[#0068FF]">
                  <ZaloIcon className="w-3.5 h-3.5" />
                </div>
                <a
                  href="https://zalo.me/0334689521"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0068FF] transition-colors leading-none flex items-center gap-1.5 whitespace-nowrap"
                >
                  <span>0334 689 521</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-50 text-[#0068FF] font-medium leading-none">
                    Chat
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Subscribe to our newsletter (3 cols on lg) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 leading-normal">
              {t.footer.subscribeTitle}
            </h4>
            <p className="text-xs text-slate-500 mb-4 leading-[1.65]">
              {t.footer.subscribeSubtitle}
            </p>

            <form onSubmit={handleSubscribe} className="relative flex items-center">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.footer.emailPlaceholder}
                className="w-full bg-white border border-slate-200 rounded-full py-2.5 pl-4 pr-12 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-sky-500 transition-colors"
              />
              <button
                type="submit"
                aria-label={t.footer.subscribeBtn}
                className="absolute right-1 w-8 h-8 rounded-full bg-sky-500 hover:bg-sky-600 text-white flex items-center justify-center transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {subscribed && (
              <div className="flex items-center gap-1.5 mt-2 text-emerald-600 text-xs font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Thank you for subscribing!</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 leading-normal">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-slate-600 transition-colors">
              {t.footer.links.privacy}
            </a>
            <a href="#" className="hover:text-slate-600 transition-colors">
              {t.footer.links.terms}
            </a>
            <a href="#" className="hover:text-slate-600 transition-colors">
              {t.footer.links.help}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
