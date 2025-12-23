import type { MetadataRoute } from "next"

const baseUrl = "https://dualperspective.digital"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/_next/static/", "/_next/data/"],
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/static/", "/_next/data/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}


