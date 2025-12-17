 "use client"

import Head from "next/head"
import { HeroSection } from "@/components/hero-section"
import { CapabilitiesSection } from "@/components/capabilities-section"
import { ApproachSection } from "@/components/approach-section"
import { ClientsSection } from "@/components/clients-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { CursorSpark } from "@/components/cursor-spark"
import { FAQSection } from "@/components/faq-section"
import { useScrollAccent } from "@/hooks/use-scroll-accent"
import { LanguageAutoswitch } from "@/components/language-autoswitch"

export default function Home() {
  const accentedSections = useScrollAccent()

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What kind of software do you specialise in?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "We specialise in bespoke web applications built with Next.js and React, internal dashboards, and process-focused tools designed around how your team actually works—not generic SaaS templates.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can you integrate with WhatsApp, Telegram, Instagram, or other platforms?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Yes. A large part of our work is connecting software with external services such as WhatsApp, Telegram, Instagram, email providers, and logistics platforms to centralise communication and reduce manual work.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you handle process automation?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "We help you identify repetitive, manual steps in your workflows and automate them with custom logic, webhooks, and integrations—so your team can focus on the parts of the work that really need their attention.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you only build new products, or can you extend existing systems?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "Both. We often take teams from a rough idea to a first product, but we also extend existing systems with new modules, APIs, and integrations on top of CRMs or tools you already use.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do projects usually start?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text:
                      "We begin with a few focused sessions to understand your processes, constraints, and goals. From there we define a clear product scope, technical approach, and roadmap before writing any code.",
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      <main className="min-h-screen">
        <LanguageAutoswitch />
        <CursorSpark />
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
    </>
  )
}
