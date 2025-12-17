import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Dual Perspective Digital — Boutique Digital Product Studio in Barcelona",
  description:
    "Dual Perspective Digital is a boutique digital product studio in Barcelona, specialised in custom software: products, internal tools, and integrations designed around real-world business processes.",
  metadataBase: new URL("https://dualperspective.digital"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/es",
    },
  },
  openGraph: {
    title: "Dual Perspective Digital — Boutique Digital Product Studio in Barcelona",
    description:
      "Boutique digital product studio in Barcelona building custom software, internal tools, and integrations that fit how your team actually works.",
    url: "https://dualperspective.digital",
    siteName: "Dual Perspective Digital",
    type: "website",
    locale: "en_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dual Perspective Digital — Boutique Digital Product Studio in Barcelona",
    description:
      "Custom digital products, internal tools, and process-focused integrations from a boutique studio in Barcelona.",
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    name: "Dual Perspective Digital",
    description:
      "Boutique digital product studio in Barcelona specialising in custom software, internal tools, and integrations designed around real-world business processes.",
    url: "https://dualperspective.digital",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Barcelona",
      addressCountry: "ES",
    },
    areaServed: [
      {
        "@type": "Place",
        name: "Spain",
      },
      {
        "@type": "Place",
        name: "European Union",
      },
    ],
  }

  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className={`font-sans antialiased`}>
        {children}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Analytics />
      </body>
    </html>
  )
}
