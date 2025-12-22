import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import { LeadChat } from "@/components/lead-chat"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Dual Perspective Digital | Custom Websites & Interactive Displays Barcelona",
  description:
    "Dual Perspective Digital - Fast, specialized, visually striking. Custom websites, interactive displays for events, chatbots, and WhatsApp/Telegram integrations. Boutique software studio in Barcelona delivering specialized solutions with rapid execution.",
  keywords: [
    "custom website Barcelona",
    "interactive displays events",
    "chatbot development Barcelona",
    "WhatsApp integration",
    "Telegram integration",
    "custom software Barcelona",
    "web development Barcelona",
    "event technology solutions",
    "fast web development",
    "custom web applications",
    "interactive TV displays",
    "messaging platform integration",
    "specialized software solutions",
    "boutique web development",
  ],
  metadataBase: new URL("https://dualperspective.digital"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/es",
    },
  },
  openGraph: {
    title: "Dual Perspective Digital | Custom Websites & Interactive Displays Barcelona",
    description:
      "Dual Perspective Digital - Fast, specialized, visually striking. Custom websites, interactive displays for events, chatbots, and messaging integrations. Boutique software studio in Barcelona.",
    url: "https://dualperspective.digital",
    siteName: "Dual Perspective Digital",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Dual Perspective Digital - Custom Websites & Interactive Displays" }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dual Perspective Digital | Custom Websites & Interactive Displays",
    description:
      "Dual Perspective Digital - Fast, specialized, visually striking. Custom websites, interactive displays, chatbots, and messaging integrations from Barcelona.",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dual Perspective Digital",
    description:
      "Dual Perspective Digital - Boutique custom software studio in Barcelona specializing in custom websites, interactive displays for events, chatbots, messaging platform integrations, and specialized web solutions with fast execution and exceptional visual design.",
    url: "https://dualperspective.digital",
    logo: "https://dualperspective.digital/favicon-512.png",
    email: "hello@dualperspective.digital",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Barcelona",
      addressRegion: "Catalonia",
      addressCountry: "ES",
    },
    areaServed: [
      {
        "@type": "Place",
        name: "Barcelona",
      },
      {
        "@type": "Place",
        name: "Spain",
      },
      {
        "@type": "Place",
        name: "European Union",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Website Development",
            description: "Bespoke websites and web applications tailored to your needs",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Interactive Display Systems",
            description: "Interactive TV displays and screens for events and fairs",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Chatbot Development",
            description: "Intelligent chatbots and conversational interfaces",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Messaging Platform Integration",
            description: "WhatsApp, Telegram, and messaging platform integrations",
          },
        },
      ],
    },
    sameAs: [
      "https://www.linkedin.com/company/dual-perspective-digital",
    ],
  }

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} data-theme="dark" style={{ height: '100%', minHeight: '100%' }}>
      <head>
        {/* Favicons for search engines and browsers */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-512.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* Preload critical resources for LCP optimization */}
        <link
          rel="preload"
          href="/og.png"
          as="image"
        />
        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`font-sans antialiased`}>
        <div aria-hidden className="site-bg" />
        {children}
        <LeadChat />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {/* Vercel Analytics - Server-side, no cookies needed, GDPR compliant */}
        <Analytics />
      </body>
    </html>
  )
}
