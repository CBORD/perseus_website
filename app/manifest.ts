import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Website Foundation",
    short_name: "Foundation",
    description: "Scalable website starter",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f172a",
    icons: [
      {
        src: "/favicons/icon-192.png",
        sizes: "192x192",
        type: "image/png"
      }
    ]
  };
}
