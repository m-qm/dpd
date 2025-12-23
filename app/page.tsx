import { HomeClient } from "@/components/home-client"
import { HeroSection } from "@/components/hero-section"
import dynamic from "next/dynamic"
import { getFaqJsonLd } from "@/lib/faq"

// Lazy load components that are below the fold
const CapabilitiesSection = dynamic(() => import("@/components/capabilities-section").then(mod => ({ default: mod.CapabilitiesSection })), {
  loading: () => <div className="h-screen" />, // Prevent layout shift
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

// Revalidate the homepage periodically to keep HTML stable between crawls
export const revalidate = 3600

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden" lang="en">
      <HomeClient locale="en" />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqJsonLd("en")) }}
      />
        <HeroSection locale="en" />
        {/* Section 1: Capabilities - stays dark like Hero, no color change */}
        <CapabilitiesSection inverted={false} locale="en" />
        {/* Section 2: Approach - stays dark, never inverts */}
        <ApproachSection inverted={false} locale="en" />
        {/* Section 3: Philosophy - stays dark */}
        <PhilosophySection inverted={false} locale="en" />
        {/* Section 4: Clients - dedicated dark section */}
        <ClientsSection inverted={false} locale="en" />
        {/* Section 5: FAQ */}
        <FAQSection locale="en" inverted={false} />
        {/* Cool transition animation */}
        <TransitionAnimation locale="en" />
        {/* Section 6: Contact */}
        <CTASection inverted={false} locale="en" />
        <Footer locale="en" />
    </main>
  )
}
