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
        {/* Section 3: Philosophy - always inverted (white) */}
        <PhilosophySection inverted={true} locale="en" />
        {/* Section 4: Clients - dedicated dark section */}
        <ClientsSection inverted={false} locale="en" />
        {/* Section 5: FAQ */}
        <FAQSection locale="en" inverted={true} />
        {/* Cool transition animation */}
        <TransitionAnimation locale="en" />
        {/* Section 6: Contact */}
        <CTASection inverted={false} locale="en" />
        <Footer locale="en" />
    </main>
  )
}
