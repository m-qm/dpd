"use client"

import { HeroSection } from "@/components/hero-section"
import { CapabilitiesSection } from "@/components/capabilities-section"
import { ApproachSection } from "@/components/approach-section"
import { ClientsSection } from "@/components/clients-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { CursorSpark } from "@/components/cursor-spark"
import { useScrollAccent } from "@/hooks/use-scroll-accent"

export default function Home() {
  const accentedSections = useScrollAccent()

  return (
    <main className="min-h-screen">
      <CursorSpark />
      <HeroSection locale="en" />
      {/* Section 1: Capabilities - always inverted (white) */}
      <CapabilitiesSection inverted={true} locale="en" />
      {/* Section 2: Approach - stays dark, never inverts */}
      <ApproachSection inverted={false} locale="en" />
      {/* Section 3: Clients - dedicated dark section */}
      <ClientsSection inverted={false} locale="en" />
      {/* Section 4: Philosophy - stays dark, never inverts */}
      <PhilosophySection inverted={false} />
      {/* Section 5: Contact - always inverted (white) */}
      <CTASection inverted={true} locale="en" />
      <Footer />
    </main>
  )
}
