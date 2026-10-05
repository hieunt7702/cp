import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ModalProvider } from "@/context/ModalContext";
import LeadModal from "@/components/LeadModal";
import ZaloWidget from "@/components/ZaloWidget";
import StructuredData from "@/components/StructuredData";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0284c7",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ueiht.vn"),
  title: {
    default: "UeiHT - Build Digital Products That Make an Impact",
    template: "%s | UeiHT",
  },
  description:
    "We design and develop modern web, mobile and CRM systems that help businesses work smarter, grow faster and deliver better experiences.",
  applicationName: "UeiHT",
  authors: [{ name: "UeiHT", url: "https://ueiht.vn" }],
  generator: "Next.js",
  keywords: [
    "UeiHT",
    "Web Development",
    "Mobile App Development",
    "CRM Systems",
    "API Integration",
    "Custom Software",
    "Phát triển website",
    "Thiết kế app mobile",
    "Phần mềm CRM",
    "Chuyển đổi số",
    "Gia công phần mềm",
    "Next.js",
    "React",
    "TypeScript",
  ],
  referrer: "origin-when-cross-origin",
  creator: "UeiHT",
  publisher: "UeiHT",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://ueiht.vn",
    languages: {
      "vi-VN": "https://ueiht.vn?lang=vi",
      "en-US": "https://ueiht.vn?lang=en",
    },
  },
  openGraph: {
    title: "UeiHT - Build Digital Products That Make an Impact",
    description:
      "We design and develop modern web, mobile and CRM systems that help businesses work smarter, grow faster and deliver better experiences.",
    url: "https://ueiht.vn",
    siteName: "UeiHT",
    locale: "vi_VN",
    alternateLocale: ["en_US"],
    type: "website",
    images: [
      {
        url: "/2.png",
        width: 1200,
        height: 630,
        alt: "UeiHT - Modern Web, Mobile & CRM Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UeiHT - Build Digital Products That Make an Impact",
    description:
      "Modern web, mobile and CRM systems that help businesses work smarter, grow faster and deliver better experiences.",
    site: "@ueiht",
    creator: "@ueiht",
    images: ["/2.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <StructuredData />
      </head>
      <body
        className="min-h-screen bg-white text-slate-900 font-sans antialiased flex flex-col selection:bg-sky-500 selection:text-white"
        suppressHydrationWarning
      >
        <LanguageProvider>
          <ModalProvider>
            {children}
            <LeadModal />
            <ZaloWidget />
          </ModalProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
