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
import { getFaqJsonLd } from "@/lib/faq"

export const metadata: Metadata = {
  title: "Dual Perspective Digital — Agencia boutique de software a medida en Barcelona",
  description:
    "Agencia boutique de software a medida en Barcelona: herramientas internas, automatización de procesos e integraciones diseñadas alrededor de tus flujos.",
  alternates: {
    canonical: "/es",
    languages: {
      en: "/",
      es: "/es",
    },
  },
  openGraph: {
    title: "Dual Perspective Digital — Agencia boutique de software a medida en Barcelona",
    description:
      "Software a medida, herramientas internas y automatización de procesos diseñados alrededor de tus flujos, desde Barcelona.",
    url: "https://dualperspective.digital/es",
    siteName: "Dual Perspective Digital",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Dual Perspective Digital" }],
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dual Perspective Digital — Agencia boutique de software a medida en Barcelona",
    description:
      "Software a medida, herramientas internas y automatización de procesos diseñados alrededor de tus flujos, desde Barcelona.",
    images: ["/og.png"],
  },
}

export default function HomeEs() {
  return (
    <main className="min-h-screen" lang="es">
      <HomeClient locale="es" />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFaqJsonLd("es")) }}
      />
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


