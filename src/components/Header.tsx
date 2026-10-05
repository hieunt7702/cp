"use client";

import React, { useState } from "react";
import { UeiHTLogo } from "./BrandLogos";
import { useLanguage } from "@/context/LanguageContext";
import { Search, Menu, X, Globe } from "lucide-react";

// Micro-component for optically centered dropdown arrow
function DropdownArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-2.5 h-2.5 shrink-0 transition-transform duration-200 ${className}`}
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M1 1L5 5L9 1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Header() {
  const { locale, setLocale, t } = useLanguage();
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleLanguageSelect = (lang: "en" | "vi") => {
    setLocale(lang);
    setLangMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a href="#" className="inline-flex items-center gap-3 group">
            <UeiHTLogo className="w-9 h-9" />
            <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-sky-600 transition-colors leading-none">
              {t.header.brand}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7">
            <a
              href="#home"
              className="text-sm font-medium text-slate-700 hover:text-sky-600 transition-colors leading-none py-2"
            >
              {t.header.nav.home}
            </a>

            {/* Services with Dropdown */}
            <div className="relative group">
              <a
                href="#services"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-sky-600 transition-colors py-2"
              >
                <span className="leading-none">{t.header.nav.services}</span>
                <DropdownArrow className="text-slate-400 group-hover:text-sky-600 group-hover:rotate-180" />
              </a>
              <div className="absolute top-full left-0 w-52 bg-white rounded-xl border border-slate-200/90 p-2 hidden group-hover:block transition-all">
                {t.services.items.map((srv, idx) => (
                  <a
                    key={idx}
                    href="#services"
                    className="block px-3 py-2 text-xs font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-600 rounded-lg transition-colors leading-normal"
                  >
                    {srv.title}
                  </a>
                ))}
              </div>
            </div>

            {/* Products with Dropdown */}
            <div className="relative group">
              <a
                href="#products"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-sky-600 transition-colors py-2"
              >
                <span className="leading-none">{t.header.nav.products}</span>
                <DropdownArrow className="text-slate-400 group-hover:text-sky-600 group-hover:rotate-180" />
              </a>
              <div className="absolute top-full left-0 w-52 bg-white rounded-xl border border-slate-200/90 p-2 hidden group-hover:block transition-all">
                {t.products.items.map((prod) => (
                  <a
                    key={prod.id}
                    href="#products"
                    className="block px-3 py-2 text-xs font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-600 rounded-lg transition-colors leading-normal"
                  >
                    {prod.name}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="#why-us"
              className="text-sm font-medium text-slate-700 hover:text-sky-600 transition-colors leading-none py-2"
            >
              {t.header.nav.aboutUs}
            </a>

            <a
              href="#testimonials"
              className="text-sm font-medium text-slate-700 hover:text-sky-600 transition-colors leading-none py-2"
            >
              {t.header.nav.blog}
            </a>

            <a
              href="#contact"
              className="text-sm font-medium text-slate-700 hover:text-sky-600 transition-colors leading-none py-2"
            >
              {t.header.nav.contact}
            </a>
          </nav>

          {/* Right Controls: Language & Search */}
          <div className="flex items-center space-x-3">
            {/* Search Toggle */}
            <div className="relative">
              {searchOpen ? (
                <div className="inline-flex items-center bg-slate-100 rounded-full px-3 py-1.5 transition-all">
                  <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={locale === "vi" ? "Tìm kiếm..." : "Search..."}
                    className="bg-transparent text-xs text-slate-800 focus:outline-none w-28 sm:w-40 leading-none"
                    autoFocus
                  />
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="text-slate-400 hover:text-slate-600 ml-1 text-xs leading-none"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  aria-label="Search"
                  className="p-2 text-slate-700 hover:text-sky-600 hover:bg-slate-50 rounded-full transition-colors flex items-center justify-center"
                >
                  <Search className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-700 hover:text-sky-600 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-200"
              >
                <Globe className="w-4 h-4 text-slate-500 shrink-0" />
                <span className="leading-none">{locale === "vi" ? "Vie" : "Eng"}</span>
                <DropdownArrow
                  className={`text-slate-400 ${
                    langMenuOpen ? "rotate-180 text-sky-600" : ""
                  }`}
                />
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl border border-slate-200/90 py-1.5 z-50">
                  <button
                    onClick={() => handleLanguageSelect("en")}
                    className={`w-full text-left px-3.5 py-2 text-xs font-medium flex items-center justify-between leading-none ${
                      locale === "en"
                        ? "text-sky-600 bg-sky-50 font-semibold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>English</span>
                    {locale === "en" && <span className="text-sky-600">✓</span>}
                  </button>
                  <button
                    onClick={() => handleLanguageSelect("vi")}
                    className={`w-full text-left px-3.5 py-2 text-xs font-medium flex items-center justify-between leading-none ${
                      locale === "vi"
                        ? "text-sky-600 bg-sky-50 font-semibold"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>Tiếng Việt</span>
                    {locale === "vi" && <span className="text-sky-600">✓</span>}
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-sky-600 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100 bg-white space-y-3">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-600 rounded-lg leading-normal"
            >
              {t.header.nav.home}
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-600 rounded-lg leading-normal"
            >
              {t.header.nav.services}
            </a>
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-600 rounded-lg leading-normal"
            >
              {t.header.nav.products}
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-600 rounded-lg leading-normal"
            >
              {t.header.nav.aboutUs}
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-600 rounded-lg leading-normal"
            >
              {t.header.nav.blog}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-600 rounded-lg leading-normal"
            >
              {t.header.nav.contact}
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
