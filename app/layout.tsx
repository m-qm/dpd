import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import { LeadChat } from "@/components/lead-chat"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Dual Perspective Digital — Boutique Custom Software Studio in Barcelona",
  description:
    "Dual Perspective Digital is a boutique custom software studio in Barcelona. We build internal tools, dashboards, and process automation with integrations tailored to how your team works.",
  metadataBase: new URL("https://dualperspective.digital"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/es",
    },
  },
  openGraph: {
    title: "Dual Perspective Digital — Boutique Custom Software Studio in Barcelona",
    description:
      "Boutique custom software studio in Barcelona building internal tools, dashboards, and process automation with integrations tailored to how your team works.",
    url: "https://dualperspective.digital",
    siteName: "Dual Perspective Digital",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Dual Perspective Digital" }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dual Perspective Digital — Boutique Custom Software Studio in Barcelona",
    description:
      "Custom software, internal tools, dashboards, and process automation from a boutique studio in Barcelona.",
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
      "Boutique custom software studio in Barcelona specialising in internal tools, dashboards, integrations, and process automation designed around real-world business processes.",
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
    <html lang="en" className={inter.variable} data-theme="dark" style={{ height: '100%', minHeight: '100%' }}>
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
