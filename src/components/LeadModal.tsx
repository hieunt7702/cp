"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  User,
  Phone,
  Mail,
  Briefcase,
  DollarSign,
  MessageSquare,
  CheckCircle2,
  Loader2,
  ShieldCheck,
  ArrowRight,
  Check,
} from "lucide-react";

// Micro-component for the code badge icon matching the design
function CodeBadgeIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="5 2 1 7 5 12" />
      <polyline points="15 2 19 7 15 12" />
      <line x1="12" y1="2" x2="8" y2="12" />
    </svg>
  );
}

// Micro-component for optically centered dropdown arrow identical to Header.tsx
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

// Reusable custom select matching website header style & optical alignment
interface CustomSelectProps {
  icon: React.ReactNode;
  value: string;
  placeholder: string;
  options: string[];
  onChange: (val: string) => void;
}

function CustomSelect({
  icon,
  value,
  placeholder,
  options,
  onChange,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between pl-9 pr-3 py-2 rounded-lg border text-xs text-left transition-all cursor-pointer ${
          isOpen
            ? "border-sky-500 ring-2 ring-sky-500/10 bg-white shadow-sm"
            : "border-slate-200/90 bg-slate-50/40 hover:bg-slate-50 hover:border-slate-300"
        }`}
      >
        {/* Left Icon optically centered */}
        <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-slate-400 pointer-events-none">
          {icon}
        </div>

        {/* Selected Label or Placeholder */}
        <span
          className={`truncate leading-none text-xs ${
            value ? "text-slate-800 font-medium" : "text-slate-400"
          }`}
        >
          {value || placeholder}
        </span>

        {/* Dropdown Arrow */}
        <DropdownArrow
          className={`text-slate-400 ${
            isOpen ? "rotate-180 text-sky-600" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu Panel with compact sizing & custom sleek scrollbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 right-0 top-full mt-1 bg-white rounded-xl border border-slate-200/90 shadow-lg shadow-sky-950/5 p-1 z-40 max-h-52 overflow-y-auto custom-scrollbar"
          >
            {options.map((opt, idx) => {
              const isSelected = value === opt;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    onChange(opt);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center justify-between cursor-pointer leading-tight ${
                    isSelected
                      ? "bg-sky-50 text-sky-600 font-semibold"
                      : "text-slate-600 hover:bg-sky-50/70 hover:text-sky-600"
                  }`}
                >
                  <span className="truncate">{opt}</span>
                  {isSelected && (
                    <Check className="w-3.5 h-3.5 text-sky-600 shrink-0 ml-1.5" />
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function LeadModal() {
  const { t } = useLanguage();
  const { isOpen, closeModal } = useModal();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Lock body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // Reset status shortly after exit
      const timer = setTimeout(() => {
        setIsSuccess(false);
        setErrorMessage("");
      }, 300);
      return () => clearTimeout(timer);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen && !isSubmitting) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, isSubmitting, closeModal]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage("");
  };

  const handleSelectChange = (field: "service" | "budget", val: string) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
    if (errorMessage) setErrorMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic client validation
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMessage(t.modal.errorRequired);
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || t.modal.errorGeneric);
      }

      setIsSuccess(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        budget: "",
        message: "",
      });
    } catch (err: unknown) {
      console.error("Submission failed:", err);
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage(t.modal.errorGeneric);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => !isSubmitting && closeModal()}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Container (No colored top border, clean modern rounded card) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-white rounded-2xl border border-slate-200/90 shadow-2xl overflow-visible z-10 my-auto"
            role="dialog"
            aria-modal="true"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              disabled={isSubmitting}
              aria-label={t.modal.close}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors disabled:opacity-50 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              /* Success State Screen */
              <div className="p-8 sm:p-10 text-center flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 15, stiffness: 200 }}
                  className="w-16 h-16 rounded-full bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 mb-5"
                >
                  <CheckCircle2 className="w-9 h-9 stroke-[2.2]" />
                </motion.div>

                <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
                  {t.modal.successTitle}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base max-w-md leading-relaxed mb-8">
                  {t.modal.successDesc}
                </p>

                <button
                  type="button"
                  onClick={closeModal}
                  className="px-8 py-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-medium text-sm transition-all shadow-sm active:scale-95 cursor-pointer"
                >
                  {t.modal.close}
                </button>
              </div>
            ) : (
              /* Input Form Screen */
              <div className="p-6 sm:p-8">
                {/* Header matching provided images */}
                <div className="mb-6 pr-6">
                  {/* Badge pill: </> LET’S BUILD SOMETHING GREAT */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-500 text-xs font-bold tracking-wider uppercase mb-3 select-none">
                    <CodeBadgeIcon className="w-4 h-3.5 shrink-0" />
                    <span className="leading-none">{t.modal.badge}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
                    {t.modal.title}
                  </h2>

                  {/* Subtitle matching image 2 */}
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                    {t.modal.subtitle}
                  </p>

                  {/* Dot tagline matching image 2: Free consultation · No commitment */}
                  <div className="mt-2.5 flex items-center gap-2 text-xs text-slate-600">
                    <span
                      className="w-2 h-2 rounded-full bg-sky-500 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="font-medium text-slate-600 leading-none">
                      {t.modal.guarantee}
                    </span>
                  </div>
                </div>

                {/* Error Banner */}
                {errorMessage && (
                  <div className="mb-5 p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm leading-snug">
                    {errorMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Two Columns for Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        {t.modal.fullName} <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative flex items-center">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none text-slate-400">
                          <User className="w-3.5 h-3.5 shrink-0" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t.modal.fullNamePlaceholder}
                          className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200/90 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/10 transition-all bg-slate-50/40 leading-normal"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        {t.modal.phone} <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative flex items-center">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none text-slate-400">
                          <Phone className="w-3.5 h-3.5 shrink-0" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder={t.modal.phonePlaceholder}
                          className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200/90 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/10 transition-all bg-slate-50/40 leading-normal"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      {t.modal.email} <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none text-slate-400">
                        <Mail className="w-3.5 h-3.5 shrink-0" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t.modal.emailPlaceholder}
                        className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-200/90 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/10 transition-all bg-slate-50/40 leading-normal"
                      />
                    </div>
                  </div>

                  {/* Two Columns for Service & Budget with Synchronized Custom Dropdowns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Service Selection */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        {t.modal.service}
                      </label>
                      <CustomSelect
                        icon={<Briefcase className="w-4 h-4 shrink-0" />}
                        value={formData.service}
                        placeholder={t.modal.serviceSelect}
                        options={t.modal.servicesList}
                        onChange={(val) => handleSelectChange("service", val)}
                      />
                    </div>

                    {/* Budget Selection */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        {t.modal.budget}
                      </label>
                      <CustomSelect
                        icon={<DollarSign className="w-4 h-4 shrink-0" />}
                        value={formData.budget}
                        placeholder={t.modal.budgetSelect}
                        options={t.modal.budgetList}
                        onChange={(val) => handleSelectChange("budget", val)}
                      />
                    </div>
                  </div>

                  {/* Requirements Message */}
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{t.modal.message}</span>
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.modal.messagePlaceholder}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200/90 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/10 transition-all bg-slate-50/40 resize-none leading-normal"
                    />
                  </div>

                  {/* Submit Button & Security Note */}
                  <div className="pt-2 space-y-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-6 rounded-lg bg-[#0ea5e9] hover:bg-[#0284c7] disabled:bg-sky-400 text-white font-semibold text-xs sm:text-sm transition-all shadow-sm active:scale-[0.99] cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>{t.modal.submitting}</span>
                        </>
                      ) : (
                        <>
                          <span className="leading-none">{t.modal.submit}</span>
                          <ArrowRight className="w-4 h-4 shrink-0" />
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 text-center">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="leading-none">{t.modal.privacyNote}</span>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
