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

export function FAQSection({ locale = "en" }: { locale?: Locale }) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
            setIsVisible(true)
          }
        })
      },
      { threshold: [0.35, 0.6] },
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
      className="py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-20 border-t border-border bg-background"
    >
      <div className="max-w-5xl mx-auto">
        <SectionBadge number={6} label={locale === "es" ? "Preguntas frecuentes" : "FAQ"} />
        <div
          className={`transition-all duration-700 ${
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
              ? "Respuestas rápidas sobre cómo trabajamos: software a medida con Next.js y React, integraciones con WhatsApp y Telegram, automatización de procesos y evolución continua del producto."
              : "Quick answers to how we work: custom software with Next.js and React, WhatsApp and Telegram integrations, process automation, and long-term product evolution."}
          </p>
          <Accordion type="single" collapsible className="w-full border-t border-border/60">
            {items.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="border-b border-border/60">
                <AccordionTrigger className="text-left text-base md:text-lg font-normal tracking-tight text-foreground py-4">
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



