import React from "react";

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://ueiht.vn/#organization",
        name: "UeiHT",
        url: "https://ueiht.vn",
        logo: {
          "@type": "ImageObject",
          url: "https://ueiht.vn/logo.png",
          caption: "UeiHT - Digital Products & Software Solutions",
        },
        description:
          "UeiHT designs and develops modern web, mobile and CRM systems that help businesses work smarter, grow faster and deliver better experiences.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ha Noi",
          addressCountry: "VN",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+84-334-689-521",
          contactType: "customer service",
          areaServed: ["VN", "US", "Global"],
          availableLanguage: ["Vietnamese", "English"],
        },
        sameAs: [
          "https://facebook.com/ueiht",
          "https://linkedin.com/company/ueiht",
          "https://twitter.com/ueiht",
          "https://youtube.com/@ueiht",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://ueiht.vn/#website",
        url: "https://ueiht.vn",
        name: "UeiHT",
        description:
          "End-to-End Digital Solutions, Web Development, Mobile Apps, and CRM Systems.",
        publisher: {
          "@id": "https://ueiht.vn/#organization",
        },
        inLanguage: ["vi-VN", "en-US"],
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://ueiht.vn/#service",
        name: "UeiHT Digital Solutions",
        image: "https://ueiht.vn/og-image.png",
        priceRange: "$$",
        telephone: "+84-334-689-521",
        url: "https://ueiht.vn",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ha Noi",
          addressCountry: "VN",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Software & Digital Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Web Development",
                description:
                  "Modern, scalable and secure web applications with the latest technologies.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Mobile App Development",
                description:
                  "Native & cross-platform apps for iOS and Android with great user experience.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "CRM Systems",
                description:
                  "Custom CRM solutions to manage your customers, sales and operations efficiently.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "API & Integration",
                description:
                  "Connect your systems with RESTful APIs and third-party services.",
              },
            },
          ],
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
