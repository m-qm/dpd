 "use client"

import { useEffect, useRef, useState } from "react"
import { SectionBadge } from "@/components/section-badge"
import type { Locale } from "@/lib/copy"

export function PhilosophySection({ inverted = false, locale = "en" }: { inverted?: boolean; locale?: Locale }) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
            setIsVisible(true)
          }
        })
      },
      { threshold: [0.4, 0.7] },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className={`py-24 md:py-32 lg:py-48 px-6 md:px-12 lg:px-20 border-t border-border transition-colors duration-500 ${
        inverted ? "section-inverted" : ""
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <SectionBadge
          number={4}
          label={locale === "es" ? "Por qué trabajar con nosotros" : "Why Work With Us"}
        />
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-foreground leading-[1.1] tracking-tight mb-8">
            {locale === "es" ? "Por qué trabajar con nosotros" : "Why Work With Us"}
          </h2>
          <div className="space-y-8 text-base md:text-lg text-muted-foreground leading-relaxed">
            {locale === "es" ? (
              <>
                <div className="space-y-3">
                  <h3 className="text-sm md:text-base font-normal uppercase tracking-[0.18em] text-foreground/80">
                    Software a medida, no plantillas
                  </h3>
                  <p>
                    Somos una agencia de producto digital enfocada en software completamente a medida y hecho con cuidado:
                    productos, paneles internos e integraciones (WhatsApp, Telegram, Instagram, automatizaciones de
                    procesos) que se adaptan a cómo trabaja tu equipo, no al revés.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-muted-foreground/90">
                    <li>Herramientas internas y paneles para equipos de operaciones y marketing.</li>
                    <li>Integraciones y automatizaciones alrededor de tus procesos reales.</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm md:text-base font-normal uppercase tracking-[0.18em] text-foreground/80">
                    De idea a producto real
                  </h3>
                  <p>
                    Somos especialmente adecuados para primeros proyectos de software: hacemos que desarrollos complejos
                    se sientan manejables. Desde la primera idea hasta el lanzamiento, explicamos cada paso con un lenguaje
                    claro para que siempre sepas qué está pasando y por qué.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-muted-foreground/90">
                    <li>Definición conjunta de alcance, flujos y prioridades.</li>
                    <li>Entregas por fases para que veas valor pronto y puedas ajustar.</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm md:text-base font-normal uppercase tracking-[0.18em] text-foreground/80">
                    Automatización & evolución continua
                  </h3>
                  <p>
                    Te ayudamos a convertir procesos manuales en flujos automatizados y medibles. A medida que tu negocio
                    evoluciona, iteramos sobre el producto para que siga encajando con la realidad del día a día.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-muted-foreground/90">
                    <li>Automatización de tareas repetitivas y notificaciones.</li>
                    <li>Ajustes continuos en función de cómo se usa el software.</li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-3">
                  <h3 className="text-sm md:text-base font-normal uppercase tracking-[0.18em] text-foreground/80">
                    Custom software, not templates
                  </h3>
                  <p>
                    We are a digital product agency focused on fully custom, handcrafted software — not boilerplates or
                    one-size-fits-all templates. Every project is designed and engineered around your specific business,
                    users, and goals.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-muted-foreground/90">
                    <li>Custom internal tools and dashboards for operations and marketing teams.</li>
                    <li>Integrations and automations wrapped around your real-world processes.</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm md:text-base font-normal uppercase tracking-[0.18em] text-foreground/80">
                    From rough idea to working product
                  </h3>
                  <p>
                    We’re a good fit for first-time software projects: we make complex builds feel manageable. From the
                    first idea to launch, we explain each step in clear language so you always know what’s happening and
                    why.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-muted-foreground/90">
                    <li>Co-defining scope, flows, and priorities with your team.</li>
                    <li>Phase-based delivery so you see value early and can adjust.</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm md:text-base font-normal uppercase tracking-[0.18em] text-foreground/80">
                    Automation & long-term partnership
                  </h3>
                  <p>
                    We help you turn manual, repetitive processes into automated, trackable flows. As your business
                    evolves, we iterate on the product so it continues to fit how your teams actually work.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-muted-foreground/90">
                    <li>Automating repetitive tasks and notifications.</li>
                    <li>Continuous refinements based on how the software is really used.</li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
