import type { Metadata } from "next"
import { HomeClient } from "@/components/home-client"
import { HeroSection } from "@/components/hero-section"
import dynamic from "next/dynamic"
import { getFaqJsonLd } from "@/lib/faq"

// Lazy load components that are below the fold
const CapabilitiesSection = dynamic(
  () => import("@/components/capabilities-section").then(mod => ({ default: mod.CapabilitiesSection })),
  {
    loading: () => <div className="h-screen" />,
  },
)

const ApproachSection = dynamic(
  () => import("@/components/approach-section").then(mod => ({ default: mod.ApproachSection })),
  {
    loading: () => <div className="h-screen" />,
  },
)

const PhilosophySection = dynamic(
  () => import("@/components/philosophy-section").then(mod => ({ default: mod.PhilosophySection })),
  {
    loading: () => <div className="h-96" />,
  },
)

const ClientsSection = dynamic(
  () => import("@/components/clients-section").then(mod => ({ default: mod.ClientsSection })),
  {
    loading: () => <div className="h-64" />,
  },
)

const FAQSection = dynamic(
  () => import("@/components/faq-section").then(mod => ({ default: mod.FAQSection })),
  {
    loading: () => <div className="h-96" />,
  },
)

const TransitionAnimation = dynamic(
  () => import("@/components/transition-animation").then(mod => ({ default: mod.TransitionAnimation })),
  {
    loading: () => null,
  },
)

const CTASection = dynamic(
  () => import("@/components/cta-section").then(mod => ({ default: mod.CTASection })),
  {
    loading: () => <div className="h-96" />,
  },
)

const Footer = dynamic(() => import("@/components/footer").then(mod => ({ default: mod.Footer })), {
  loading: () => null,
})

// Revalidate the homepage periodically to keep HTML stable between crawls
export const revalidate = 3600

export const metadata: Metadata = {
  title: "Dual Perspective Digital | Estudio de Software Digital y Sitios Web a Medida Barcelona",
  description:
    "Dual Perspective Digital - Estudio boutique de software digital en Barcelona. Sitios web a medida, displays interactivos para eventos, chatbots e integraciones de WhatsApp/Telegram con una doble perspectiva de negocio y tecnología.",
}

export default function HomeEsDefault() {
  return (
    <main className="min-h-screen overflow-x-hidden" lang="es">
      <HomeClient locale="es" />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqJsonLd("es")) }}
      />
      <HeroSection locale="es" />
      <CapabilitiesSection inverted={false} locale="es" />
      <ApproachSection inverted={false} locale="es" />
      {/* PhilosophySection removed for Flora-style minimalism */}
      <ClientsSection inverted={false} locale="es" />
      <FAQSection locale="es" inverted={false} />
      <TransitionAnimation locale="es" />
      <CTASection inverted={false} locale="es" />
      <Footer locale="es" />
    </main>
  )
}
