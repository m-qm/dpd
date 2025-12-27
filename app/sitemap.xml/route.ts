export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const baseUrl = "https://dualperspective.digital"

function xmlEscape(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

export async function GET() {
  const now = new Date().toISOString()

  // Solo incluir páginas válidas que no redirigen
  // /es redirige a /, por lo que no se incluye aquí
  const urls = [
    { loc: `${baseUrl}/`, lastmod: now, changefreq: "weekly", priority: "1.0" },
    { loc: `${baseUrl}/en`, lastmod: now, changefreq: "weekly", priority: "0.9" },
    { loc: `${baseUrl}/privacy`, lastmod: now, changefreq: "yearly", priority: "0.3" },
    { loc: `${baseUrl}/es/privacy`, lastmod: now, changefreq: "yearly", priority: "0.3" },
    { loc: `${baseUrl}/cookies`, lastmod: now, changefreq: "yearly", priority: "0.3" },
    { loc: `${baseUrl}/es/cookies`, lastmod: now, changefreq: "yearly", priority: "0.3" },
  ]

  const body =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    urls
      .map(
        (u) =>
          `<url>` +
          `<loc>${xmlEscape(u.loc)}</loc>` +
          `<lastmod>${u.lastmod}</lastmod>` +
          `<changefreq>${u.changefreq}</changefreq>` +
          `<priority>${u.priority}</priority>` +
          `</url>`,
      )
      .join("") +
    `</urlset>`

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  })
}



