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
        "We specialise in bespoke web applications built with Next.js and React, internal dashboards, and process-focused tools designed around how your team actually works—not generic SaaS templates.",
    },
    {
      id: "integrations",
      question: "Can you integrate with WhatsApp, Telegram, Instagram, or other platforms?",
      answer:
        "Yes. A large part of our work is connecting software with external services such as WhatsApp, Telegram, Instagram, email providers, and logistics platforms to centralise communication and reduce manual work.",
    },
    {
      id: "automation",
      question: "Do you handle process automation?",
      answer:
        "We help you identify repetitive, manual steps in your workflows and automate them with custom logic, webhooks, and integrations—so your team can focus on the parts of the work that really need their attention.",
    },
    {
      id: "existing-systems",
      question: "Do you only build new products, or can you extend existing systems?",
      answer:
        "Both. We often take teams from a rough idea to a first product, but we also extend existing systems with new modules, APIs, and integrations on top of CRMs or tools you already use.",
    },
    {
      id: "getting-started",
      question: "How do projects usually start?",
      answer:
        "We begin with a few focused sessions to understand your processes, constraints, and goals. From there we define a clear product scope, technical approach, and roadmap before writing any code.",
    },
  ],
  es: [
    {
      id: "specialisation",
      question: "¿En qué tipo de software estáis especializados?",
      answer:
        "Estamos especializados en aplicaciones web a medida con Next.js y React, paneles internos y herramientas orientadas a procesos, diseñadas alrededor de cómo trabaja realmente tu equipo, no de una plantilla genérica.",
    },
    {
      id: "integrations",
      question: "¿Podéis integrar el software con WhatsApp, Telegram, Instagram u otras plataformas?",
      answer:
        "Sí. Gran parte de nuestro trabajo consiste en conectar el software con servicios externos como WhatsApp, Telegram, Instagram, plataformas de email o logística, para centralizar la comunicación y reducir trabajo manual.",
    },
    {
      id: "automation",
      question: "¿Os encargáis también de automatizar procesos?",
      answer:
        "Te ayudamos a detectar tareas repetitivas en tus flujos de trabajo y las automatizamos con lógica a medida, webhooks e integraciones, para que tu equipo pueda centrarse en el trabajo que realmente aporta valor.",
    },
    {
      id: "existing-systems",
      question: "¿Solo creáis productos nuevos o también ampliáis sistemas existentes?",
      answer:
        "Ambas cosas. A menudo pasamos de una idea poco definida a un primer producto, pero también ampliamos sistemas existentes con nuevos módulos, APIs e integraciones sobre CRMs o herramientas que ya utilizas.",
    },
    {
      id: "getting-started",
      question: "¿Cómo empieza normalmente un proyecto?",
      answer:
        "Empezamos con sesiones breves y enfocadas para entender tus procesos, limitaciones y objetivos. A partir de ahí definimos el alcance del producto, el enfoque técnico y una hoja de ruta antes de escribir una sola línea de código.",
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



