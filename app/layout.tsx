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
  title: "Custom Websites & Interactive Displays | Dual Perspective Digital Barcelona",
  description:
    "Fast, specialized, visually striking. Custom websites, interactive displays for events, chatbots, and WhatsApp/Telegram integrations. Boutique software studio in Barcelona delivering specialized solutions with rapid execution.",
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
    title: "Custom Websites & Interactive Displays | Dual Perspective Digital Barcelona",
    description:
      "Fast, specialized, visually striking. Custom websites, interactive displays for events, chatbots, and messaging integrations. Boutique software studio in Barcelona.",
    url: "https://dualperspective.digital",
    siteName: "Dual Perspective Digital",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Dual Perspective Digital - Custom Websites & Interactive Displays" }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Websites & Interactive Displays | Dual Perspective Digital",
    description:
      "Fast, specialized, visually striking. Custom websites, interactive displays, chatbots, and messaging integrations from Barcelona.",
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
      "Boutique custom software studio in Barcelona specializing in custom websites, interactive displays for events, chatbots, messaging platform integrations, and specialized web solutions with fast execution and exceptional visual design.",
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
      <body className={`font-sans antialiased`}>
        {/* Fix Chrome mobile navbar - use dynamic viewport height */}
        <Script
          id="viewport-height-fix"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window === 'undefined') return;
                
                // Use dynamic viewport height - allows content to extend naturally
                const setViewportHeight = () => {
                  // Use current viewport height (updates with navbar)
                  const height = window.innerHeight;
                  const vh = height * 0.01;
                  document.documentElement.style.setProperty('--vh', vh + 'px');
                };
                
                // Set initial value immediately
                setViewportHeight();
                
                // Update on resize (handles navbar show/hide)
                window.addEventListener('resize', setViewportHeight, { passive: true });
                
                // Update on orientation change
                window.addEventListener('orientationchange', function() {
                  setTimeout(setViewportHeight, 100);
                });
                
                // Use visualViewport API if available (better for Chrome mobile)
                if (window.visualViewport) {
                  window.visualViewport.addEventListener('resize', setViewportHeight);
                }
              })();
            `,
          }}
        />
        <div aria-hidden className="site-bg" />
        {/* Consent Mode v2 defaults (deny until the CMP grants consent). */}
        <Script
          id="consent-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{
  'ad_storage':'denied',
  'analytics_storage':'denied',
  'ad_user_data':'denied',
  'ad_personalization':'denied',
  'functionality_storage':'granted',
  'security_storage':'granted',
  'wait_for_update':500
});
gtag('set','ads_data_redaction',true);
`.trim(),
          }}
        />

        {/* Cookiebot CMP (blocks scripts by category; integrates with consent updates). */}
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          strategy="beforeInteractive"
          data-cbid="8d1922ed-2465-4011-9bb9-342ee3cd73fd"
          data-blockingmode="auto"
          type="text/javascript"
        />

        <Script
          id="cookiebot-consent-bridge"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
window.CookiebotCallback_OnAccept = function () {
  try {
    var c = window.Cookiebot && window.Cookiebot.consent ? window.Cookiebot.consent : null;
    if (!c) return;
    gtag('consent','update',{
      'analytics_storage': c.statistics ? 'granted' : 'denied',
      'ad_storage': c.marketing ? 'granted' : 'denied',
      'ad_user_data': c.marketing ? 'granted' : 'denied',
      'ad_personalization': c.marketing ? 'granted' : 'denied'
    });
  } catch (e) {}
};
window.CookiebotCallback_OnDecline = function () {
  try {
    gtag('consent','update',{
      'analytics_storage':'denied',
      'ad_storage':'denied',
      'ad_user_data':'denied',
      'ad_personalization':'denied'
    });
  } catch (e) {}
};
`.trim(),
          }}
        />

        <Script
          id="gtm"
          strategy="beforeInteractive"
          type="text/plain"
          data-cookieconsent="statistics"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PZ6K444B');`,
          }}
        />
        {children}
        <LeadChat />
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
