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
      <div className="max-w-7xl mx-auto">
        <SectionBadge
          number={3}
          label={locale === "es" ? "Por qué trabajar con nosotros" : "Why Work With Us"}
        />
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-foreground leading-[1.1] tracking-tight mb-12 md:mb-16">
            {locale === "es" ? "Por qué trabajar con nosotros" : "Why Work With Us"}
          </h2>
          
          <div className="space-y-0">
            {locale === "es" ? (
              <>
                <div
                  className={`group py-12 md:py-16 border-b border-border/60 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: "0ms" }}
                >
                  <div className="flex items-start gap-8 md:gap-12">
                    <div className="flex-shrink-0 w-1 h-16 md:h-20 bg-foreground/20 group-hover:bg-foreground/40 transition-colors" />
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal text-foreground mb-4 tracking-tight">
                        Software a medida, no plantillas
                      </h3>
                      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                        Productos, paneles internos e integraciones que se adaptan a cómo trabaja tu equipo. Sin plantillas genéricas.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`group py-12 md:py-16 border-b border-border/60 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: "150ms" }}
                >
                  <div className="flex items-start gap-8 md:gap-12">
                    <div className="flex-shrink-0 w-1 h-16 md:h-20 bg-foreground/20 group-hover:bg-foreground/40 transition-colors" />
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal text-foreground mb-4 tracking-tight">
                        De idea a producto real
                      </h3>
                      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                        Hacemos que desarrollos complejos se sientan manejables. Explicamos cada paso con claridad. Sin sorpresas.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`group py-12 md:py-16 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: "300ms" }}
                >
                  <div className="flex items-start gap-8 md:gap-12">
                    <div className="flex-shrink-0 w-1 h-16 md:h-20 bg-foreground/20 group-hover:bg-foreground/40 transition-colors" />
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal text-foreground mb-4 tracking-tight">
                        Automatización & evolución
                      </h3>
                      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                        Convertimos procesos manuales en flujos automatizados. Iteramos a medida que tu negocio crece. Siempre.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div
                  className={`group py-12 md:py-16 border-b border-border/60 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: "0ms" }}
                >
                  <div className="flex items-start gap-8 md:gap-12">
                    <div className="flex-shrink-0 w-1 h-16 md:h-20 bg-foreground/20 group-hover:bg-foreground/40 transition-colors" />
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal text-foreground mb-4 tracking-tight">
                        Custom software, not templates
                      </h3>
                      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                        Products, internal tools, and integrations shaped around how your team actually works. No generic templates.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`group py-12 md:py-16 border-b border-border/60 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: "150ms" }}
                >
                  <div className="flex items-start gap-8 md:gap-12">
                    <div className="flex-shrink-0 w-1 h-16 md:h-20 bg-foreground/20 group-hover:bg-foreground/40 transition-colors" />
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal text-foreground mb-4 tracking-tight">
                        From idea to working product
                      </h3>
                      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                        We make complex builds feel manageable. We explain each step in clear language. No surprises.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`group py-12 md:py-16 transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: "300ms" }}
                >
                  <div className="flex items-start gap-8 md:gap-12">
                    <div className="flex-shrink-0 w-1 h-16 md:h-20 bg-foreground/20 group-hover:bg-foreground/40 transition-colors" />
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal text-foreground mb-4 tracking-tight">
                        Automation & long-term partnership
                      </h3>
                      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                        We turn manual processes into automated flows. We iterate as your business evolves. Always.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
