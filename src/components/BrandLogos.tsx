import React from "react";

// UeiHT Brand Logo Mark
export function UeiHTLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div
      className={`rounded-xl bg-gradient-to-tr from-[#0284c7] via-[#0ea5e9] to-[#38bdf8] flex items-center justify-center text-white shrink-0 ${className}`}
    >
      <svg
        className="w-3/5 h-3/5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Modern geometric U monogram with tech lightning accent */}
        <path
          d="M5 4V13C5 16.866 8.13401 20 12 20C15.866 20 19 16.866 19 13V4"
          stroke="currentColor"
          strokeWidth="2.75"
          strokeLinecap="round"
        />
        <path
          d="M13 3L8 12H13L11 19L17 10H12L13 3Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

// Backward-compatibility alias
export const KhanhTechLogo = UeiHTLogo;

// 6 Logoipsum Logos matching the screenshot
export function Logoipsum1({ className = "h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 142 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 4L19 12L27 15L19 18L16 26L13 18L5 15L13 12L16 4Z" fill="#1E293B" />
      <circle cx="16" cy="15" r="2.5" fill="#FFFFFF" />
      <text x="36" y="22" fill="#1E293B" fontFamily="system-ui, -apple-system, sans-serif" fontSize="18" fontWeight="800" letterSpacing="-0.5px">
        logoipsum
      </text>
    </svg>
  );
}

export function Logoipsum2({ className = "h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 142 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 5L25 10V21L16 26L7 21V10L16 5Z" stroke="#1E293B" strokeWidth="2.5" />
      <circle cx="16" cy="15.5" r="3.5" fill="#1E293B" />
      <text x="36" y="22" fill="#1E293B" fontFamily="system-ui, -apple-system, sans-serif" fontSize="18" fontWeight="800" letterSpacing="-0.5px">
        logoipsum
      </text>
    </svg>
  );
}

export function Logoipsum3({ className = "h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 142 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 6L26 24H6L16 6Z" stroke="#1E293B" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M11 16H21" stroke="#1E293B" strokeWidth="2.5" />
      <text x="36" y="22" fill="#1E293B" fontFamily="system-ui, -apple-system, sans-serif" fontSize="18" fontWeight="800" letterSpacing="-0.5px">
        logoipsum
      </text>
    </svg>
  );
}

export function Logoipsum4({ className = "h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 142 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 16C7 11.5 10.5 8 15 8C19.5 8 21 11.5 24 16C27 20.5 28.5 24 33 24" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
      <text x="40" y="22" fill="#1E293B" fontFamily="system-ui, -apple-system, sans-serif" fontSize="18" fontWeight="800" letterSpacing="-0.5px">
        logoipsum
      </text>
    </svg>
  );
}

export function Logoipsum5({ className = "h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 142 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="7" y="8" width="18" height="6" rx="3" fill="#1E293B" />
      <rect x="13" y="18" width="18" height="6" rx="3" fill="#1E293B" />
      <text x="40" y="22" fill="#1E293B" fontFamily="system-ui, -apple-system, sans-serif" fontSize="18" fontWeight="800" letterSpacing="-0.5px">
        logoipsum
      </text>
    </svg>
  );
}

export function Logoipsum6({ className = "h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 142 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="11" r="3" fill="#1E293B" />
      <circle cx="17" cy="11" r="3" fill="#1E293B" />
      <circle cx="9" cy="19" r="3" fill="#1E293B" />
      <circle cx="17" cy="19" r="3" fill="#1E293B" />
      <text x="32" y="22" fill="#1E293B" fontFamily="system-ui, -apple-system, sans-serif" fontSize="18" fontStyle="italic" fontWeight="800" letterSpacing="-0.5px">
        logoipsum
      </text>
    </svg>
  );
}

// 6 Technology Stack Logos
export function ReactLogo({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
      <circle cx="0" cy="0" r="2.05" fill="#00d8ff" />
      <g stroke="#00d8ff" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function NextLogo({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 180 180" fill="none">
      <circle cx="90" cy="90" r="90" fill="black" />
      <path
        d="M149.508 157.086L69.142 54H54V125.97H66.924V69.754L137.408 160.038C141.602 159.18 145.656 158.188 149.508 157.086Z"
        fill="url(#paint0_linear_next)"
      />
      <rect x="115" y="54" width="13" height="72" fill="url(#paint1_linear_next)" />
      <defs>
        <linearGradient
          id="paint0_linear_next"
          x1="109"
          y1="116.5"
          x2="144.5"
          y2="160.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_next"
          x1="121"
          y1="54"
          x2="120.799"
          y2="106.875"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function NodeLogo({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <path
        d="M16 2.5L28.1244 9.5V23.5L16 30.5L3.87564 23.5V9.5L16 2.5Z"
        fill="#339933"
      />
      <path
        d="M16 4.8L26.1 10.6V22.2L16 28L5.9 22.2V10.6L16 4.8Z"
        fill="#267326"
      />
      <path
        d="M14.5 12V21H17.5V16L20 18.5V14.5L17.5 12H14.5Z"
        fill="white"
      />
    </svg>
  );
}

export function TypeScriptLogo({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="4" fill="#3178C6" />
      <path
        d="M17.8 19.5C18.4 20.3 19.4 20.9 20.6 20.9C22.1 20.9 23 20.1 23 19C23 17.8 21.9 17.3 20.2 16.5C18 15.5 16.7 14.5 16.7 12.3C16.7 9.8 18.7 8 21.6 8C23.3 8 24.7 8.6 25.7 9.8L23.7 11.6C23.1 10.9 22.4 10.5 21.5 10.5C20.4 10.5 19.7 11.1 19.7 12C19.7 12.9 20.4 13.4 22 14.1C24.4 15.1 26 16.1 26 18.6C26 21.3 23.9 23.3 20.5 23.3C18.2 23.3 16.5 22.4 15.5 20.8L17.8 19.5ZM13 10.5H16.8V8.3H6.4V10.5H10.2V23H13V10.5Z"
        fill="white"
      />
    </svg>
  );
}

export function PostgreSQLLogo({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <path
        d="M16 3C10.5 3 6 7.5 6 13C6 17.5 8.9 21.3 13 22.5V26.5C13 27.9 14.1 29 15.5 29C16.9 29 18 27.9 18 26.5V22.8C22.6 22.1 26 18.2 26 13.5C26 7.7 21.5 3 16 3Z"
        fill="#336791"
      />
      <circle cx="12" cy="12" r="1.5" fill="white" />
      <circle cx="20" cy="12" r="1.5" fill="white" />
      <path
        d="M14.5 18C15 19 16 19.5 17 19.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TailwindLogo({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none">
      <path
        d="M9 13.5C10.5 12 12.5 11.25 15 11.25C18.75 11.25 20.25 13.75 22.5 13.75C24 13.75 25.25 13 26.25 12.25C25 15 23 16.5 20.5 16.5C16.75 16.5 15.25 14 13 14C11.5 14 10.25 14.75 9 15.5V13.5Z"
        fill="#06B6D4"
      />
      <path
        d="M5 19.5C6.5 18 8.5 17.25 11 17.25C14.75 17.25 16.25 19.75 18.5 19.75C20 19.75 21.25 19 22.25 18.25C21 21 19 22.5 16.5 22.5C12.75 22.5 11.25 20 9 20C7.5 20 6.25 20.75 5 21.5V19.5Z"
        fill="#06B6D4"
      />
    </svg>
  );
}

// 8 Leading Partner Companies Logos
export function ShopeeLogo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all ${className}`}>
      <svg className="h-6 w-6 shrink-0" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="8" width="24" height="22" rx="4" fill="#EE4D2D" />
        <path d="M11 8C11 5.23858 13.2386 3 16 3C18.7614 3 21 5.23858 21 8" stroke="#EE4D2D" strokeWidth="2.5" />
        <path d="M19 14.5C19 13.4 17.7 12.5 16.2 12.5C14.5 12.5 13.5 13.3 13.5 14.3C13.5 17 18.8 16.3 18.8 19.2C18.8 20.6 17.5 21.5 15.8 21.5C14 21.5 12.9 20.4 12.9 19.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className="font-bold text-slate-800 text-lg tracking-tight leading-none">Shopee</span>
    </div>
  );
}

export function LazadaLogo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all ${className}`}>
      <svg className="h-6 w-6 shrink-0" viewBox="0 0 32 32" fill="none">
        <path d="M16 28L6 18C2 14 3 7 9 5C13 3.5 15 6 16 8C17 6 19 3.5 23 5C29 7 30 14 26 18L16 28Z" fill="#0F146D" />
        <path d="M16 24L9 17C6 14 6.5 9 11 8C14 7 15.5 9 16 10.5C16.5 9 18 7 21 8C25.5 9 26 14 23 17L16 24Z" fill="#F36F24" />
      </svg>
      <span className="font-bold text-slate-800 text-lg tracking-tight leading-none">Lazada</span>
    </div>
  );
}

export function TikiLogo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`flex items-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all ${className}`}>
      <span className="font-extrabold text-[#1A94FF] text-2xl tracking-tighter leading-none">
        Tiki<span className="text-yellow-400 text-lg leading-none">^</span>
      </span>
    </div>
  );
}

export function ViettelLogo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all ${className}`}>
      <span className="font-bold text-[#EE0033] text-xl tracking-wider leading-none">
        viettel
      </span>
    </div>
  );
}

export function GrabLogo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`flex items-center grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all ${className}`}>
      <span className="font-black text-[#00B14F] text-2xl tracking-tight italic leading-none">
        Grab
      </span>
    </div>
  );
}

export function TechcombankLogo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all ${className}`}>
      <div className="flex -space-x-1 items-center">
        <div className="w-3.5 h-3.5 bg-[#ED1C24] rotate-45" />
        <div className="w-3.5 h-3.5 bg-[#000000] rotate-45" />
      </div>
      <span className="font-black text-slate-900 text-xs tracking-wider uppercase leading-none">
        TECHCOMBANK
      </span>
    </div>
  );
}

export function VinaGroupLogo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1.5 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all ${className}`}>
      <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center text-white text-xs font-serif font-black leading-none">
        V
      </div>
      <span className="font-bold text-slate-800 text-base tracking-tight leading-none">
        VinaGroup
      </span>
    </div>
  );
}

export function FPTLogo({ className = "h-8" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all ${className}`}>
      <div className="flex items-center -space-x-0.5">
        <span className="w-2.5 h-5 bg-[#F26F21] -skew-x-12 rounded-sm inline-block" />
        <span className="w-2.5 h-5 bg-[#0066B3] -skew-x-12 rounded-sm inline-block" />
        <span className="w-2.5 h-5 bg-[#00A850] -skew-x-12 rounded-sm inline-block" />
      </div>
      <span className="font-black text-slate-900 text-lg tracking-wider ml-1 leading-none">
        FPT
      </span>
    </div>
  );
}

export function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

export function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.69 1.69 0 1 0 0-3.38 1.69 1.69 0 0 0 0 3.38M7.86 18.5V10.13H5.06V18.5h2.8z" />
    </svg>
  );
}

export function TwitterIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}
