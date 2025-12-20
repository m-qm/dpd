 "use client"

import { useEffect, useRef, useState } from "react"
import type { Locale } from "@/lib/copy"
import { SectionBadge } from "@/components/section-badge"
import { faqContent } from "@/lib/faq"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useIsMobile } from "@/hooks/use-mobile"

export function FAQSection({ locale = "en", inverted = false }: { locale?: Locale; inverted?: boolean }) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.12) {
            setIsVisible(true)
          }
        })
      },
      { threshold: [0.12, 0.35] },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const items = faqContent[locale]

  return (
    <section
      id="faq"
      ref={sectionRef}
      data-theme={inverted ? "light" : "dark"}
      className="dpd-section dpd-chapter pb-32 md:pb-40 lg:pb-48"
    >
      <div className="dpd-container-narrow">
        <SectionBadge number={5} label={locale === "es" ? "Preguntas frecuentes" : "FAQ"} />
        <div
          className={`transition-all ${isMobile ? "duration-300" : "duration-700"} ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-foreground mb-4 tracking-tight leading-tight">
            {locale === "es"
              ? "Preguntas frecuentes sobre nuestro trabajo"
              : "Frequently asked questions about our work"}
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-8 max-w-2xl">
            {locale === "es"
              ? "Respuestas rápidas sobre cómo trabajamos: software a medida, herramientas internas, automatización e integraciones."
              : "Quick answers on how we work: custom software, internal tools, automation, and integrations."}
          </p>
          <Accordion type="single" collapsible className="w-full border-t border-border/60">
            {items.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="border-b border-border/60">
                <AccordionTrigger className="text-left text-base md:text-lg font-sans font-normal tracking-tight py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}



