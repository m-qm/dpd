"use client"

import { useEffect, useRef, useState } from "react"
import { SectionBadge } from "@/components/section-badge"
import type { Locale } from "@/lib/copy"
import { Sparkles, Zap, Code2, Rocket } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

export function PhilosophySection({ inverted = false, locale = "en" }: { inverted?: boolean; locale?: Locale }) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    // Lower threshold on mobile for better performance
    const threshold = isMobile ? 0.2 : 0.4
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
            setIsVisible(true)
          }
        })
      },
      { threshold: [threshold, threshold + 0.3] },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isMobile])

  const philosophyPoints = locale === "es" 
    ? [
        {
          icon: Code2,
          title: "Software a medida, no plantillas",
          description: "Productos, paneles internos e integraciones que se adaptan a cómo trabaja tu equipo. Sin plantillas genéricas.",
        },
        {
          icon: Rocket,
          title: "De idea a producto real",
          description: "Hacemos que desarrollos complejos se sientan manejables. Explicamos cada paso con claridad. Sin sorpresas.",
        },
        {
          icon: Zap,
          title: "Automatización & evolución",
          description: "Convertimos procesos manuales en flujos automatizados. Iteramos a medida que tu negocio crece. Siempre.",
        },
      ]
    : [
        {
          icon: Code2,
          title: "Custom software, not templates",
          description: "Products, internal tools, and integrations shaped around how your team actually works. No generic templates.",
        },
        {
          icon: Rocket,
          title: "From idea to working product",
          description: "We make complex builds feel manageable. We explain each step in clear language. No surprises.",
        },
        {
          icon: Zap,
          title: "Automation & long-term partnership",
          description: "We turn manual processes into automated flows. We iterate as your business evolves. Always.",
        },
      ]

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      data-theme={inverted ? "light" : "dark"}
      className="dpd-section dpd-chapter relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse opacity-60" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse opacity-50" style={{ animationDelay: '1s', animationDuration: '4s' }} />
      </div>

      <div className="dpd-container relative z-10">
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {philosophyPoints.map((point, index) => {
              const Icon = point.icon
              return (
                <div
                  key={index}
                  className={`group relative p-8 md:p-10 border-2 border-border/30 bg-background/40 backdrop-blur-sm hover:border-blue-500/50 hover:bg-background/70 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300 ease-out ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Animated icon container */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg blur-xl group-hover:blur-2xl group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300 ease-out" />
                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-xl border-2 border-border/40 bg-background/60 backdrop-blur-sm flex items-center justify-center group-hover:border-blue-500/60 group-hover:bg-blue-500/10 group-hover:scale-110 transition-all duration-300 ease-out">
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-foreground/70 group-hover:text-blue-400 transition-colors duration-300 ease-out" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl md:text-3xl font-normal text-foreground mb-4 tracking-tight group-hover:text-foreground transition-colors duration-300 ease-out">
                    {point.title}
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed group-hover:text-muted-foreground/95 transition-colors duration-300 ease-out">
                    {point.description}
                  </p>

                  {/* Decorative accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
