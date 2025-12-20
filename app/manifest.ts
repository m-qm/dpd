import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Dual Perspective Digital - Custom Websites & Interactive Displays",
    short_name: "DPD",
    description:
      "Fast, specialized, visually striking. Custom websites, interactive displays, chatbots, and messaging integrations from Barcelona.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon-32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/favicon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}

