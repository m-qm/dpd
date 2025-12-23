import type { Metadata } from "next"
import { HomeClient } from "@/components/home-client"
import { HeroSection } from "@/components/hero-section"
import dynamic from "next/dynamic"
import { getFaqJsonLd } from "@/lib/faq"

// Lazy load components that are below the fold
const CapabilitiesSection = dynamic(() => import("@/components/capabilities-section").then(mod => ({ default: mod.CapabilitiesSection })), {
  loading: () => <div className="h-screen" />,
})

const ApproachSection = dynamic(() => import("@/components/approach-section").then(mod => ({ default: mod.ApproachSection })), {
  loading: () => <div className="h-screen" />,
})

const PhilosophySection = dynamic(() => import("@/components/philosophy-section").then(mod => ({ default: mod.PhilosophySection })), {
  loading: () => <div className="h-96" />,
})

const ClientsSection = dynamic(() => import("@/components/clients-section").then(mod => ({ default: mod.ClientsSection })), {
  loading: () => <div className="h-64" />,
})

const FAQSection = dynamic(() => import("@/components/faq-section").then(mod => ({ default: mod.FAQSection })), {
  loading: () => <div className="h-96" />,
})

const TransitionAnimation = dynamic(() => import("@/components/transition-animation").then(mod => ({ default: mod.TransitionAnimation })), {
  loading: () => null,
})

const CTASection = dynamic(() => import("@/components/cta-section").then(mod => ({ default: mod.CTASection })), {
  loading: () => <div className="h-96" />,
})

const Footer = dynamic(() => import("@/components/footer").then(mod => ({ default: mod.Footer })), {
  loading: () => null,
})

// Revalidate the Spanish homepage periodically to keep HTML stable between crawls
export const revalidate = 3600

export const metadata: Metadata = {
  title: "Dual Perspective Digital | Estudio de Software Digital y Sitios Web a Medida Barcelona",
  description:
    "Dual Perspective Digital - Estudio boutique de software digital en Barcelona. Sitios web a medida, displays interactivos para eventos, chatbots e integraciones de WhatsApp/Telegram con una doble perspectiva de negocio y tecnología.",
  keywords: [
    "dual perspective",
    "Dual Perspective Digital",
    "software digital",
    "software digital Barcelona",
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
    "servicio abierto",
    "nuevas perspectivas digitales",
  ],
  alternates: {
    canonical: "/es",
    languages: {
      en: "/",
      es: "/es",
    },
  },
  openGraph: {
    title: "Dual Perspective Digital | Sitios Web a Medida y Displays Interactivos Barcelona",
    description:
      "Dual Perspective Digital - Rápido. Especializado. Visualmente Impactante. Sitios web a medida, displays interactivos para eventos, chatbots e integraciones de mensajería. Estudio boutique en Barcelona.",
    url: "https://dualperspective.digital/es",
    siteName: "Dual Perspective Digital",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Dual Perspective Digital - Sitios Web a Medida y Displays Interactivos" }],
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dual Perspective Digital | Sitios Web a Medida y Displays Interactivos",
    description:
      "Dual Perspective Digital - Rápido. Especializado. Visualmente Impactante. Sitios web a medida, displays interactivos, chatbots e integraciones de mensajería desde Barcelona.",
    images: ["/og.png"],
  },
}

export default function HomeEs() {

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
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
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Desarrollo de Sitios Web a Medida",
            description: "Sitios web y aplicaciones web personalizadas adaptadas a tus necesidades",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sistemas de Displays Interactivos",
            description: "Displays interactivos y pantallas para eventos y ferias",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Desarrollo de Chatbots",
            description: "Chatbots inteligentes e interfaces conversacionales",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Integración de Plataformas de Mensajería",
            description: "Integraciones con WhatsApp, Telegram y otras plataformas de mensajería",
          },
        },
      ],
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


