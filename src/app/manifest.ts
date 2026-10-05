import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "UeiHT - Digital Products & Software Solutions",
    short_name: "UeiHT",
    description:
      "We design and develop modern web, mobile and CRM systems that help businesses work smarter, grow faster and deliver better experiences.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0284c7",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
