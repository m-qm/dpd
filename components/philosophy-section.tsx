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
      {/* Unique background - diagonal gradient lines */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 100px,
              rgba(46, 88, 255, 0.1) 100px,
              rgba(46, 88, 255, 0.1) 200px
            )`,
          }}
        />
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
          {/* Draper B1 style header */}
          <div className="mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-foreground leading-[1.1] tracking-tight mb-6 md:mb-8">
              {locale === "es" ? "Trabajamos" : "We work"}
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-foreground leading-[1.1] tracking-tight mb-6 md:mb-8">
              {locale === "es" ? "con personas" : "with people"}
            </h3>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
              {locale === "es" 
                ? "Apoyamos e invertimos en equipos ambiciosos que buscan transformar sus procesos digitales."
                : "We support and invest in ambitious teams looking to transform their digital processes."}
            </p>
          </div>
          
          {/* Unique visual design - no numbers, just beautiful content blocks */}
          <div className="space-y-20 md:space-y-28 lg:space-y-32">
            {philosophyPoints.map((point, index) => {
              const Icon = point.icon
              const isLast = index === philosophyPoints.length - 1
              return (
                <div
                  key={index}
                  className={`group relative transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${index * 300}ms` }}
                >
                  {/* Large icon as focal point - no numbers */}
                  <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 lg:gap-16">
                    {/* Icon section - large and prominent */}
                    <div className="flex-shrink-0 relative">
                      <div className="relative">
                        {/* Glow effect behind icon */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl group-hover:blur-3xl group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-700 opacity-50 group-hover:opacity-100" />
                        {/* Icon container */}
                        <div className="relative w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-3xl border-2 border-border/60 bg-background/90 backdrop-blur-xl flex items-center justify-center group-hover:border-blue-500/80 group-hover:bg-blue-500/15 group-hover:scale-105 group-hover:rotate-[-2deg] transition-all duration-700 ease-out shadow-2xl group-hover:shadow-blue-500/20">
                          <Icon className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 text-foreground/90 group-hover:text-blue-400 transition-colors duration-700" />
                        </div>
                      </div>
                    </div>

                    {/* Content section */}
                    <div className="flex-1 space-y-6 md:space-y-8">
                      <div>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-normal text-foreground tracking-tight leading-[1.2] mb-6 group-hover:text-foreground transition-colors duration-700">
                          {point.title}
                        </h3>
                        {/* Decorative underline that expands */}
                        <div className="h-1 w-20 bg-gradient-to-r from-blue-500/80 via-blue-500/60 to-transparent group-hover:w-32 transition-all duration-700 rounded-full" />
                      </div>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl group-hover:text-muted-foreground/95 transition-colors duration-700">
                        {point.description}
                      </p>
                    </div>
                  </div>

                  {/* Connecting decorative line between items (only on desktop) */}
                  {!isLast && (
                    <div className="hidden md:block absolute left-12 md:left-16 lg:left-20 top-full mt-10 md:mt-14 lg:mt-16 bottom-auto w-px h-20 md:h-28 bg-gradient-to-b from-border/60 via-border/30 to-transparent" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
