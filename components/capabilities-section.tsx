"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { SectionBadge } from "@/components/section-badge"
import { copy, type Locale } from "@/lib/copy"
import { useIsMobile } from "@/hooks/use-mobile"
import {
  MessageCircle,
  Monitor,
  Link2,
  LayoutDashboard,
  Zap,
  ArrowRight,
  Clock,
  Users,
  TrendingUp,
} from "lucide-react"

const serviceIcons = [MessageCircle, Monitor, Link2, LayoutDashboard, Zap]

/* Micro-stat shown inside the hero cards */
function MicroStat({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ElementType
  value: string
  label: string
}) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="h-3.5 w-3.5 text-accent-blue" />
      <span className="text-xs font-mono text-foreground">{value}</span>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  )
}

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
            const delay = isMobile ? 40 : 120
            copy[locale].capabilities.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) =>
                  prev.includes(index) ? prev : [...prev, index]
                )
              }, index * delay)
            })
            observer.disconnect()
          }
        })
      },
      { threshold, rootMargin: isMobile ? "50px" : "0px" }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [locale, isMobile])

  const c = copy[locale]

  /* ---------- micro-stats for the two hero cards ---------- */
  const heroStats: Record<number, { icon: React.ElementType; value: string; label: string }[]> = {
    0: [
      {
        icon: Clock,
        value: "15-20 h",
        label: locale === "es" ? "ahorradas / semana" : "saved / week",
      },
      {
        icon: Users,
        value: "100+",
        label: locale === "es" ? "conversaciones simul." : "simultaneous chats",
      },
    ],
    1: [
      {
        icon: TrendingUp,
        value: "3x",
        label: locale === "es" ? "más leads capturados" : "more leads captured",
      },
      {
        icon: Users,
        value: "MWC / ISE",
        label: locale === "es" ? "eventos principales" : "major events",
      },
    ],
  }

  return (
    <section
      id="capabilities"
      ref={sectionRef}
      data-theme={inverted ? "light" : "dark"}
      className="dpd-section dpd-chapter dpd-theme-owner relative"
    >
      <div className="dpd-container relative z-10">
        <SectionBadge number={1} label={c.capabilitiesLabel} />

        {/* ---- header row ---- */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-foreground text-balance leading-[1.08]">
              {c.capabilitiesHeading}
            </h2>
          </div>
          <p className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
            {locale === "es"
              ? "Soluciones enfocadas en resultados que se pagan solas. Construido en Barcelona, con soporte presencial."
              : "Results-focused solutions that pay for themselves. Built in Barcelona, with in-person support."}
          </p>
        </div>

        {/* ---- 2 hero cards ---- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-4 md:mb-5">
          {c.capabilities.slice(0, 2).map((cap, index) => {
            const Icon = serviceIcons[index]
            const stats = heroStats[index] ?? []
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  visibleItems.includes(index)
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 md:p-10 transition-colors duration-300 hover:border-accent-blue/30"
              >
                {/* subtle top-left glow on hover */}
                <div className="pointer-events-none absolute -top-24 -left-24 h-48 w-48 rounded-full bg-accent-blue/[0.04] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative flex flex-col gap-6">
                  {/* icon + number */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-blue/10 border border-accent-blue/20">
                      <Icon className="h-5 w-5 text-accent-blue" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground/50 tracking-widest">
                      0{index + 1}
                    </span>
                  </div>

                  {/* copy */}
                  <div>
                    <h3 className="text-lg md:text-xl font-medium text-foreground mb-3 tracking-tight leading-snug">
                      {cap.title}
                    </h3>
                    <p className="text-sm md:text-[0.95rem] text-muted-foreground leading-relaxed">
                      {cap.description}
                    </p>
                  </div>

                  {/* micro-stats bar */}
                  {stats.length > 0 && (
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 border-t border-border">
                      {stats.map((s, i) => (
                        <MicroStat key={i} icon={s.icon} value={s.value} label={s.label} />
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* ---- 3 supporting cards ---- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {c.capabilities.slice(2).map((cap, i) => {
            const index = i + 2
            const Icon = serviceIcons[index]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={
                  visibleItems.includes(index)
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 24 }
                }
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-7 md:p-8 transition-colors duration-300 hover:border-accent-blue/30"
              >
                <div className="pointer-events-none absolute -top-20 -left-20 h-40 w-40 rounded-full bg-accent-blue/[0.04] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative flex flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-blue/10 border border-accent-blue/20">
                      <Icon className="h-4 w-4 text-accent-blue" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground/50 tracking-widest">
                      0{index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-medium text-foreground mb-2 tracking-tight leading-snug">
                      {cap.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* ---- pricing transparency strip ---- */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={
            visibleItems.length >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
          }
          transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 md:mt-20 border border-border rounded-xl p-8 md:p-10 bg-card/50"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            {/* left: headline + body */}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg md:text-xl font-medium text-foreground mb-2 tracking-tight">
                {locale === "es" ? "Precios transparentes" : "Transparent pricing"}
              </h3>
              <p className="text-sm md:text-[0.95rem] text-muted-foreground leading-relaxed max-w-xl">
                {locale === "es"
                  ? "La mayoría de proyectos: \u20ac8k\u2013\u20ac25k. Plazo: 6\u201312 semanas. Incluye estrategia, diseño, desarrollo, formación y 3 meses de soporte."
                  : "Most projects: \u20ac8k\u2013\u20ac25k. Timeline: 6\u201312 weeks from kickoff to launch. Includes strategy, design, development, training, and 3-month support."}
              </p>
            </div>

            {/* right: CTA */}
            <a
              href="#contact"
              className="group/btn inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-medium tracking-tight bg-accent-blue text-accent-foreground rounded-lg hover:bg-accent-blue/90 transition-colors flex-shrink-0"
            >
              {locale === "es" ? "Solicitar presupuesto" : "Get a quote"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
