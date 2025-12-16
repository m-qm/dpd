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
  title: "Dual Perspective Digital — Young Barcelona Digital Agency",
  description:
    "Dual Perspective Digital is a young Barcelona-based digital agency partnering with brands, cultural institutions, and agencies to design and build refined, long-lasting digital experiences.",
  metadataBase: new URL("https://digital-agency-website-5i3k91izl-mqms-projects.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/es",
    },
  },
  openGraph: {
    title: "Dual Perspective Digital — Young Barcelona Digital Agency",
    description:
      "A Barcelona-based digital agency crafting refined digital experiences for brands, cultural institutions, and partner agencies.",
    url: "https://digital-agency-website-5i3k91izl-mqms-projects.vercel.app",
    siteName: "Dual Perspective Digital",
    type: "website",
    locale: "en_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dual Perspective Digital — Young Barcelona Digital Agency",
    description:
      "Barcelona-based digital agency for brands, cultural institutions, and agencies seeking refined digital experiences.",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
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
      "Young digital agency in Barcelona partnering with brands, cultural institutions, and agencies to design and build refined digital experiences.",
    url: "https://digital-agency-website-5i3k91izl-mqms-projects.vercel.app",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Barcelona",
      addressCountry: "ES",
    },
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
