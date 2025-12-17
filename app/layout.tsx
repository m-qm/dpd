import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
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
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Dual Perspective Digital" }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dual Perspective Digital — Boutique Digital Product Studio in Barcelona",
    description:
      "Custom digital products, internal tools, and process-focused integrations from a boutique studio in Barcelona.",
    images: ["/og.png"],
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
        <Script
          id="gtm"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PZ6K444B');`,
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PZ6K444B"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
