 "use client"

import { useEffect, useRef, useState } from "react"
import type { Locale } from "@/lib/copy"
import { SectionBadge } from "@/components/section-badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type QA = { id: string; question: string; answer: string }

const faqContent: Record<Locale, QA[]> = {
  en: [
    {
      id: "specialisation",
      question: "What kind of software do you specialise in?",
      answer:
        "Bespoke web applications with Next.js and React, internal dashboards, and process-focused tools tailored to how your team works.",
    },
    {
      id: "integrations",
      question: "Can you integrate with WhatsApp, Telegram, Instagram, or other platforms?",
      answer:
        "Yes. We connect software with WhatsApp, Telegram, Instagram, email providers, and logistics platforms to centralise communication and reduce manual work.",
    },
    {
      id: "automation",
      question: "Do you handle process automation?",
      answer:
        "We identify repetitive steps and automate them with custom logic, webhooks, and integrations so your team focuses on what matters.",
    },
    {
      id: "existing-systems",
      question: "Do you only build new products, or can you extend existing systems?",
      answer:
        "Both. We take teams from idea to first product, and we extend existing systems with new modules, APIs, and integrations.",
    },
    {
      id: "getting-started",
      question: "How do projects usually start?",
      answer:
        "We start with focused sessions to understand your processes and goals. Then we define product scope, technical approach, and roadmap before coding.",
    },
  ],
  es: [
    {
      id: "specialisation",
      question: "¿En qué tipo de software estáis especializados?",
      answer:
        "Aplicaciones web a medida con Next.js y React, paneles internos y herramientas orientadas a procesos, adaptadas a cómo trabaja tu equipo.",
    },
    {
      id: "integrations",
      question: "¿Podéis integrar el software con WhatsApp, Telegram, Instagram u otras plataformas?",
      answer:
        "Sí. Conectamos el software con WhatsApp, Telegram, Instagram, plataformas de email o logística para centralizar comunicación y reducir trabajo manual.",
    },
    {
      id: "automation",
      question: "¿Os encargáis también de automatizar procesos?",
      answer:
        "Detectamos tareas repetitivas y las automatizamos con lógica a medida, webhooks e integraciones para que tu equipo se centre en lo que aporta valor.",
    },
    {
      id: "existing-systems",
      question: "¿Solo creáis productos nuevos o también ampliáis sistemas existentes?",
      answer:
        "Ambas cosas. Pasamos de idea a primer producto, y ampliamos sistemas existentes con nuevos módulos, APIs e integraciones.",
    },
    {
      id: "getting-started",
      question: "¿Cómo empieza normalmente un proyecto?",
      answer:
        "Empezamos con sesiones enfocadas para entender tus procesos y objetivos. Luego definimos alcance, enfoque técnico y hoja de ruta antes de codificar.",
    },
  ],
}

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



