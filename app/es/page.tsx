"use client"

import { HeroSection } from "@/components/hero-section"
import { CapabilitiesSection } from "@/components/capabilities-section"
import { ApproachSection } from "@/components/approach-section"
import { ClientsSection } from "@/components/clients-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { CursorSpark } from "@/components/cursor-spark"

export default function HomeEs() {
  return (
    <main className="min-h-screen">
      <CursorSpark />
      <HeroSection locale="es" />
      <CapabilitiesSection inverted={true} locale="es" />
      <ApproachSection inverted={false} locale="es" />
      <ClientsSection inverted={false} locale="es" />
      <PhilosophySection inverted={false} />
      <CTASection inverted={true} locale="es" />
      <Footer />
    </main>
  )
}


