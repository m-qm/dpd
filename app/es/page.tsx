import type { Metadata } from "next"
import { HomeClient } from "@/components/home-client"
import { HeroSection } from "@/components/hero-section"
import { CapabilitiesSection } from "@/components/capabilities-section"
import { ApproachSection } from "@/components/approach-section"
import { ClientsSection } from "@/components/clients-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { FAQSection } from "@/components/faq-section"
import { TransitionAnimation } from "@/components/transition-animation"
import { getFaqJsonLd } from "@/lib/faq"

export const metadata: Metadata = {
  title: "Sitios Web a Medida y Displays Interactivos | Dual Perspective Digital Barcelona",
  description:
    "Rápido. Especializado. Visualmente Impactante. Sitios web a medida, displays interactivos para eventos, chatbots e integraciones de WhatsApp/Telegram. Estudio boutique en Barcelona con ejecución rápida.",
  keywords: [
    "sitio web a medida Barcelona",
    "displays interactivos eventos",
    "desarrollo chatbot Barcelona",
    "integración WhatsApp",
    "integración Telegram",
    "software a medida Barcelona",
    "desarrollo web Barcelona",
    "soluciones tecnología eventos",
    "desarrollo web rápido",
    "aplicaciones web a medida",
    "displays TV interactivos",
    "integración plataformas mensajería",
    "soluciones software especializadas",
    "desarrollo web boutique",
  ],
  alternates: {
    canonical: "/es",
    languages: {
      en: "/",
      es: "/es",
    },
  },
  openGraph: {
    title: "Sitios Web a Medida y Displays Interactivos | Dual Perspective Digital Barcelona",
    description:
      "Rápido. Especializado. Visualmente Impactante. Sitios web a medida, displays interactivos para eventos, chatbots e integraciones de mensajería. Estudio boutique en Barcelona.",
    url: "https://dualperspective.digital/es",
    siteName: "Dual Perspective Digital",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Dual Perspective Digital - Sitios Web a Medida y Displays Interactivos" }],
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sitios Web a Medida y Displays Interactivos | Dual Perspective Digital",
    description:
      "Rápido. Especializado. Visualmente Impactante. Sitios web a medida, displays interactivos, chatbots e integraciones de mensajería desde Barcelona.",
    images: ["/og.png"],
  },
}

export default function HomeEs() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService", "WebDesignCompany"],
    name: "Dual Perspective Digital",
    description:
      "Estudio boutique de software a medida en Barcelona especializado en sitios web a medida, displays interactivos para eventos, chatbots, integraciones con plataformas de mensajería y soluciones web especializadas con ejecución rápida y diseño visual excepcional.",
    url: "https://dualperspective.digital/es",
    logo: "https://dualperspective.digital/favicon-512.png",
    email: "hello@dualperspective.digital",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Barcelona",
      addressRegion: "Cataluña",
      addressCountry: "ES",
    },
    areaServed: [
      {
        "@type": "Place",
        name: "Barcelona",
      },
      {
        "@type": "Place",
        name: "España",
      },
      {
        "@type": "Place",
        name: "Unión Europea",
      },
    ],
    serviceType: [
      "Desarrollo de Sitios Web a Medida",
      "Sistemas de Displays Interactivos",
      "Desarrollo de Chatbots",
      "Integración de Plataformas de Mensajería",
      "Desarrollo de Aplicaciones Web",
      "Soluciones de Tecnología para Eventos",
    ],
    offers: {
      "@type": "Offer",
      description: "Sitios web a medida, displays interactivos, chatbots e integraciones de mensajería con ejecución rápida y diseño visual excepcional",
    },
    sameAs: [
      "https://www.linkedin.com/company/dual-perspective-digital",
    ],
  }

  return (
    <main className="min-h-screen overflow-x-hidden" lang="es">
      <HomeClient locale="es" />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqJsonLd("es")) }}
      />
      <HeroSection locale="es" />
      {/* Section 1: Capabilities - stays dark like Hero, no color change */}
      <CapabilitiesSection inverted={false} locale="es" />
      <ApproachSection inverted={false} locale="es" />
      <PhilosophySection inverted={false} locale="es" />
      <ClientsSection inverted={false} locale="es" />
      <FAQSection locale="es" inverted={false} />
      {/* Cool transition animation */}
      <TransitionAnimation locale="es" />
      <CTASection inverted={false} locale="es" />
      <Footer locale="es" />
    </main>
  )
}


