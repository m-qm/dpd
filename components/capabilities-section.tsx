"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { SectionBadge } from "@/components/section-badge"
import { copy, type Locale } from "@/lib/copy"
import { useIsMobile } from "@/hooks/use-mobile"
import { MessageCircle, Monitor, Link2, LayoutDashboard, Zap } from "lucide-react"

const serviceIcons = [MessageCircle, Monitor, Link2, LayoutDashboard, Zap]

export function CapabilitiesSection({
  inverted = false,
  locale = "en",
}: {
  inverted?: boolean
  locale?: Locale
}) {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    const threshold = isMobile ? [0.05] : [0.1]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = isMobile ? 30 : 100
            copy[locale].capabilities.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, index])
              }, index * delay)
            })
            observer.disconnect()
          }
        })
      },
      { threshold, rootMargin: isMobile ? '50px' : '0px' },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [locale, isMobile])

  return (
    <section
      id="capabilities"
      ref={sectionRef}
      data-theme={inverted ? "light" : "dark"}
      className="dpd-section dpd-chapter dpd-theme-owner relative"
    >
      <div className="dpd-container relative z-10">
        <SectionBadge number={1} label={copy[locale].capabilitiesLabel} />

        <div className="mb-12 md:mb-16">
          <h2 className="dpd-display font-normal text-foreground mb-6">
            {copy[locale].capabilitiesHeading}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
            {locale === "es"
              ? "Soluciones enfocadas en resultados que se pagan solas. Construido en Barcelona, con soporte presencial."
              : "Results-focused solutions that pay for themselves. Built in Barcelona, with in-person support."}
          </p>
        </div>

        {/* Service cards grid - 2 large on top, 3 on bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-4 md:mb-5">
          {copy[locale].capabilities.slice(0, 2).map((capability, index) => {
            const Icon = serviceIcons[index]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={visibleItems.includes(index) ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-card border border-border rounded-lg p-8 md:p-10 hover:border-accent-blue/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-10 w-10 rounded-md bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-accent-blue" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-normal text-foreground mb-3 tracking-tight leading-snug">
                  {capability.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {capability.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {copy[locale].capabilities.slice(2).map((capability, originalIndex) => {
            const index = originalIndex + 2
            const Icon = serviceIcons[index]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={visibleItems.includes(index) ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-card border border-border rounded-lg p-7 md:p-8 hover:border-accent-blue/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-9 w-9 rounded-md bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center">
                    <Icon className="h-4 w-4 text-accent-blue" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                </div>
                <h3 className="text-base md:text-lg font-normal text-foreground mb-2.5 tracking-tight leading-snug">
                  {capability.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {capability.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Pricing transparency */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={visibleItems.length >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 md:mt-16 border-t border-border pt-10 md:pt-12"
        >
          <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16">
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-normal text-foreground mb-3 tracking-tight">
                {locale === "es" ? "Precios transparentes" : "Transparent pricing"}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl">
                {locale === "es"
                  ? "La mayoría de proyectos: \u20ac8k\u2013\u20ac25k. Plazo: 6-12 semanas. Incluye estrategia, diseño, desarrollo, formación y 3 meses de soporte."
                  : "Most projects: \u20ac8k\u2013\u20ac25k. Timeline: 6-12 weeks from kickoff to launch. Includes strategy, design, development, training, and 3-month support."}
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium tracking-tight bg-foreground text-background rounded-sm hover:opacity-90 transition-opacity flex-shrink-0"
            >
              {locale === "es" ? "Solicitar presupuesto" : "Get a quote"}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
