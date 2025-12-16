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
          <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            {locale === "es" ? (
              <>
                <p>
                  Somos una agencia de producto digital enfocada en software completamente a medida y hecho con cuidado:
                  productos, paneles internos e integraciones (WhatsApp, Instagram, automatizaciones de procesos) que se
                  adaptan a cómo trabaja tu equipo, no al revés. No usamos plantillas genéricas ni soluciones de “talla
                  única”.
                </p>
                <p>
                  Somos especialmente adecuados para primeros proyectos de software: hacemos que desarrollos complejos
                  se sientan manejables. Desde la primera idea hasta el lanzamiento, explicamos cada paso con un lenguaje
                  claro para que siempre sepas qué está pasando y por qué. Te mantienes al tanto y en control, sin
                  necesidad de ser “técnico”.
                </p>
                <p>
                  Pasar de una idea vaga a un producto real: muchos clientes llegan solo con un concepto inicial. Te
                  ayudamos a convertirlo en una estrategia de producto, flujos de usuario y un plan técnico claro, y
                  después lo transformamos en una plataforma funcional que la gente pueda usar y disfrutar.
                </p>
                <p>
                  Soluciones a medida, perspectiva global: con experiencia en distintos sectores y mercados, aportamos
                  una mirada estratégica amplia a tu proyecto, manteniendo un código limpio, mantenible y de alta calidad.
                  El resultado es un producto que no solo se ve bien, sino que encaja de verdad con tu negocio y puede
                  crecer con él en el tiempo.
                </p>
              </>
            ) : (
              <>
                <p>
                  We are a digital product agency focused on fully custom, handcrafted software — not boilerplates or
                  one-size-fits-all templates. Every project is designed and engineered around your specific business,
                  users, and goals.
                </p>
                <p>
                  Perfect for first-time software projects: we’re known for making complex digital builds feel simple and
                  manageable. From the first idea to launch, we explain each step in clear language so you always know
                  what’s happening and why. You stay informed and in control, without needing to be “technical.”
                </p>
                <p>
                  From vague idea to working product: many of our clients start with only a rough concept. We help you
                  refine that into a clear product strategy, user flows, and technical plan — and then turn it into a
                  real, functioning platform that people can use and love.
                </p>
                <p>
                  Handcrafted solutions, global perspective: with experience across industries and markets, we bring a
                  broad, strategic view to your project while still delivering clean, maintainable, high-quality code.
                  The result: a product that doesn’t just look good, but genuinely fits your business and can grow with it
                  over time.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
