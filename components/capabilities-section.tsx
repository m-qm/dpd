"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { SectionBadge } from "@/components/section-badge"
import { copy, type Locale } from "@/lib/copy"
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

/* ── Stagger container ── */
const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
}

/* ── Micro-stat ── */
function MicroStat({ icon: Icon, value, label }: { icon: React.ElementType; value: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="h-3.5 w-3.5 text-accent-blue" />
      <span className="text-xs font-mono text-foreground">{value}</span>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  )
}

/* ── Capability Card with hover interactions ── */
function CapabilityCard({
  cap,
  index,
  icon: Icon,
  stats,
  isHero,
}: {
  cap: { title: string; description: string }
  index: number
  icon: React.ElementType
  stats?: { icon: React.ElementType; value: string; label: string }[]
  isHero: boolean
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
      className={`group relative overflow-hidden rounded-xl border border-border bg-card transition-colors duration-300 hover:border-accent-blue/30 ${
        isHero ? "p-8 md:p-10" : "p-7 md:p-8"
      }`}
    >
      {/* Glow on hover */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-48 w-48 rounded-full bg-accent-blue/[0.05] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Accent line at top on hover */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-accent-blue"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "left" }}
      />

      <div className="relative flex flex-col gap-5 md:gap-6">
        {/* Icon + number */}
        <div className="flex items-center justify-between">
          <motion.div
            className={`flex items-center justify-center rounded-lg bg-accent-blue/10 border border-accent-blue/20 ${
              isHero ? "h-11 w-11" : "h-9 w-9"
            }`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <Icon className={`text-accent-blue ${isHero ? "h-5 w-5" : "h-4 w-4"}`} />
          </motion.div>
          <span className="text-xs font-mono text-muted-foreground/40 tracking-widest">
            0{index + 1}
          </span>
        </div>

        {/* Copy */}
        <div>
          <h3
            className={`font-medium text-foreground mb-2 md:mb-3 tracking-tight leading-snug ${
              isHero ? "text-lg md:text-xl" : "text-base md:text-lg"
            }`}
          >
            {cap.title}
          </h3>
          <p
            className={`text-muted-foreground leading-relaxed ${
              isHero ? "text-sm md:text-[0.95rem]" : "text-sm"
            }`}
          >
            {cap.description}
          </p>
        </div>

        {/* Micro-stats bar (hero cards only) */}
        {stats && stats.length > 0 && (
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-4 border-t border-border">
            {stats.map((s, i) => (
              <MicroStat key={i} icon={s.icon} value={s.value} label={s.label} />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export function CapabilitiesSection({
  inverted = false,
  locale = "en",
}: {
  inverted?: boolean
  locale?: Locale
}) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const c = copy[locale]

  const heroStats: Record<number, { icon: React.ElementType; value: string; label: string }[]> = {
    0: [
      { icon: Clock, value: "15-20 h", label: locale === "es" ? "ahorradas / semana" : "saved / week" },
      { icon: Users, value: "100+", label: locale === "es" ? "conversaciones simul." : "simultaneous chats" },
    ],
    1: [
      { icon: TrendingUp, value: "3x", label: locale === "es" ? "m\u00e1s leads capturados" : "more leads captured" },
      { icon: Users, value: "MWC / ISE", label: locale === "es" ? "eventos principales" : "major events" },
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

        {/* Header row */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20"
        >
          <motion.div variants={fadeUp} className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-foreground text-balance leading-[1.08]">
              {c.capabilitiesHeading}
            </h2>
          </motion.div>
          <motion.p variants={fadeUp} className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
            {locale === "es"
              ? "Soluciones enfocadas en resultados que se pagan solas. Construido en Barcelona, con soporte presencial."
              : "Results-focused solutions that pay for themselves. Built in Barcelona, with in-person support."}
          </motion.p>
        </motion.div>

        {/* 2 hero cards */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-4 md:mb-5"
        >
          {c.capabilities.slice(0, 2).map((cap, index) => (
            <CapabilityCard
              key={index}
              cap={cap}
              index={index}
              icon={serviceIcons[index]}
              stats={heroStats[index]}
              isHero
            />
          ))}
        </motion.div>

        {/* 3 supporting cards */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{ ...stagger, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.35 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
        >
          {c.capabilities.slice(2).map((cap, i) => {
            const index = i + 2
            return (
              <CapabilityCard
                key={index}
                cap={cap}
                index={index}
                icon={serviceIcons[index]}
                isHero={false}
              />
            )
          })}
        </motion.div>

        {/* Pricing transparency strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ borderColor: "rgba(46, 88, 255, 0.25)" }}
          className="mt-14 md:mt-20 border border-border rounded-xl p-8 md:p-10 bg-card/50 transition-colors duration-300"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg md:text-xl font-medium text-foreground mb-2 tracking-tight">
                {locale === "es" ? "Precios transparentes" : "Transparent pricing"}
              </h3>
              <p className="text-sm md:text-[0.95rem] text-muted-foreground leading-relaxed max-w-xl">
                {locale === "es"
                  ? "La mayor\u00eda de proyectos: \u20ac8k\u2013\u20ac25k. Plazo: 6\u201312 semanas. Incluye estrategia, dise\u00f1o, desarrollo, formaci\u00f3n y 3 meses de soporte."
                  : "Most projects: \u20ac8k\u2013\u20ac25k. Timeline: 6\u201312 weeks from kickoff to launch. Includes strategy, design, development, training, and 3-month support."}
              </p>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group/btn inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-medium tracking-tight bg-accent-blue text-[#f5f5f7] rounded-lg hover:bg-accent-blue/90 transition-colors flex-shrink-0"
            >
              {locale === "es" ? "Solicitar presupuesto" : "Get a quote"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
