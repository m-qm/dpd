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

export const revalidate = 3600

export const metadata: Metadata = {
  title: "Dual Perspective Digital | Digital Software Studio & Custom Websites Barcelona",
  description:
    "Dual Perspective Digital - A boutique digital software studio in Barcelona. Custom websites, interactive displays for events, chatbots, and WhatsApp/Telegram integrations with a dual perspective on business and technology.",
}

export default function HomeEn() {
  return (
    <main className="min-h-screen overflow-x-hidden" lang="en">
      <HomeClient locale="en" />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqJsonLd("en")) }}
      />
      <HeroSection locale="en" />
      <CapabilitiesSection inverted={false} locale="en" />
      <ApproachSection inverted={false} locale="en" />
      <PhilosophySection inverted={false} locale="en" />
      <ClientsSection inverted={false} locale="en" />
      <FAQSection locale="en" inverted={false} />
      <TransitionAnimation locale="en" />
      <CTASection inverted={false} locale="en" />
      <Footer locale="en" />
    </main>
  )
}


