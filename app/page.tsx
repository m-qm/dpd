import { HomeClient } from "@/components/home-client"
import { HeroSection } from "@/components/hero-section"
import { CapabilitiesSection } from "@/components/capabilities-section"
import { ApproachSection } from "@/components/approach-section"
import { ClientsSection } from "@/components/clients-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { FAQSection } from "@/components/faq-section"
import { getFaqJsonLd } from "@/lib/faq"

export default function Home() {
  return (
    <main className="min-h-screen" lang="en">
      <HomeClient locale="en" />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqJsonLd("en")) }}
      />
        <HeroSection locale="en" />
        {/* Section 1: Capabilities - always inverted (white) */}
        <CapabilitiesSection inverted={true} locale="en" />
        {/* Section 2: Approach - stays dark, never inverts */}
        <ApproachSection inverted={false} locale="en" />
        {/* Section 3: Philosophy - always inverted (white) */}
        <PhilosophySection inverted={true} locale="en" />
        {/* Section 4: Clients - dedicated dark section */}
        <ClientsSection inverted={false} locale="en" />
        {/* Section 5: FAQ */}
        <FAQSection locale="en" />
        {/* Section 6: Contact - always inverted (white) */}
        <CTASection inverted={true} locale="en" />
        <Footer />
    </main>
  )
}
