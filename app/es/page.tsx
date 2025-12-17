import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { CapabilitiesSection } from "@/components/capabilities-section"
import { ApproachSection } from "@/components/approach-section"
import { ClientsSection } from "@/components/clients-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { CursorSpark } from "@/components/cursor-spark"
import { FAQSection } from "@/components/faq-section"

export const metadata: Metadata = {
  title: "Dual Perspective Digital — Agencia boutique de producto digital en Barcelona",
  description:
    "Agencia boutique de producto digital en Barcelona, especializada en software a medida: productos, herramientas internas e integraciones (WhatsApp, Instagram, automatizaciones) diseñadas alrededor de tus procesos reales.",
  alternates: {
    canonical: "/es",
    languages: {
      en: "/",
      es: "/es",
    },
  },
  openGraph: {
    title: "Dual Perspective Digital — Agencia boutique de producto digital en Barcelona",
    description:
      "Software a medida, herramientas internas e integraciones conectadas a tus procesos reales, diseñado y desarrollado desde Barcelona.",
    url: "https://dualperspective.digital/es",
    siteName: "Dual Perspective Digital",
    type: "website",
    locale: "es_ES",
  },
}

export default function HomeEs() {
  return (
    <main className="min-h-screen">
      <CursorSpark />
      <HeroSection locale="es" />
      <CapabilitiesSection inverted={true} locale="es" />
      <ApproachSection inverted={false} locale="es" />
      <PhilosophySection inverted={true} locale="es" />
      <ClientsSection inverted={false} locale="es" />
      <CTASection inverted={true} locale="es" />
      <FAQSection locale="es" />
      <Footer />
    </main>
  )
}


