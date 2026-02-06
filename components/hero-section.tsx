"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion"
import { HeroNavigation } from "@/components/hero-navigation"
import { copy, type Locale } from "@/lib/copy"
import { ArrowRight } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

/* ── Animated grid background ── */
function AnimatedGrid() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Animated grid pattern */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.3 }}
        style={{
          backgroundImage: `
            linear-gradient(rgba(46, 88, 255, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(46, 88, 255, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
      {/* Radial glow that follows a slow orbit */}
      <motion.div
        className="absolute w-[800px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(ellipse, rgba(46, 88, 255, 0.07), transparent 70%)",
          filter: "blur(40px)",
          left: "30%",
          top: "20%",
        }}
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -30, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      {/* Secondary glow accent */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(46, 88, 255, 0.05), transparent 60%)",
          filter: "blur(60px)",
          right: "10%",
          bottom: "20%",
        }}
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 40, -20, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  )
}

/* ── Animated counter for stats ── */
function AnimatedStat({ value, label, delay }: { value: string; label: string; delay: number }) {
  const numericMatch = value.match(/^(\d+)(.*)$/)
  const target = numericMatch ? parseInt(numericMatch[1]) : 0
  const suffix = numericMatch ? numericMatch[2] : value
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay * 1000 + 800)
    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!started) return
    const duration = 1200
    const steps = 30
    const increment = target / steps
    const stepDuration = duration / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)
    return () => clearInterval(timer)
  }, [started, target])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: delay + 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col"
    >
      <span className="text-2xl md:text-3xl lg:text-4xl font-serif text-foreground tracking-tight leading-none tabular-nums">
        {started ? count : 0}{suffix}
      </span>
      <span className="text-xs md:text-sm text-muted-foreground mt-1.5 tracking-wide">
        {label}
      </span>
    </motion.div>
  )
}

/* ── Magnetic hover CTA button ── */
function MagneticButton({
  href,
  children,
  variant = "primary",
}: {
  href: string
  children: React.ReactNode
  variant?: "primary" | "secondary"
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20 })
  const springY = useSpring(y, { stiffness: 300, damping: 20 })

  const handleMouse = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      x.set((e.clientX - cx) * 0.15)
      y.set((e.clientY - cy) * 0.15)
    },
    [x, y]
  )

  const handleLeave = useCallback(() => {
    x.set(0)
    y.set(0)
  }, [x, y])

  const isPrimary = variant === "primary"

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.97 }}
      className={`group inline-flex items-center justify-center px-7 md:px-9 py-3.5 md:py-4 text-sm md:text-base font-medium tracking-tight rounded-sm transition-all duration-200 ${
        isPrimary
          ? "bg-accent-blue text-[#f5f5f7] shadow-lg shadow-accent-blue/20 hover:shadow-xl hover:shadow-accent-blue/30 hover:brightness-110"
          : "border border-border text-foreground hover:bg-secondary"
      }`}
    >
      {children}
    </motion.a>
  )
}

/* ── Line reveal text ── */
const lineVariants = {
  hidden: { opacity: 0, y: 50, clipPath: "inset(100% 0% 0% 0%)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 0.8,
      delay: 0.2 + i * 0.12,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export function HeroSection({ locale = "en" }: { locale?: Locale }) {
  const isMobile = useIsMobile()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const stats =
    locale === "es"
      ? [
          { value: "20+", label: "horas ahorradas / semana" },
          { value: "85%", label: "reducci\u00f3n tiempo respuesta" },
          { value: "300%", label: "m\u00e1s leads en eventos" },
        ]
      : [
          { value: "20+", label: "hours saved weekly" },
          { value: "85%", label: "faster response time" },
          { value: "300%", label: "more event leads" },
        ]

  return (
    <section data-theme="dark" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Animated background */}
      {mounted && !isMobile && <AnimatedGrid />}

      {/* Simple radial fallback for mobile */}
      {(isMobile || !mounted) && (
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(46, 88, 255, 0.08), transparent 70%)",
          }}
        />
      )}

      {/* Navigation */}
      <HeroNavigation locale={locale} />

      {/* Hero Content */}
      <div className="relative flex-1 min-h-0 flex items-center px-6 md:px-12 lg:px-20 py-24 md:py-32 lg:py-36 z-10">
        <div className="dpd-container w-full">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 md:mb-8"
            >
              <span className="inline-flex items-center gap-2 text-xs md:text-sm uppercase tracking-[0.16em] text-accent-blue font-medium">
                <motion.span
                  className="w-2 h-2 rounded-full bg-accent-blue"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                {copy[locale].hero.eyebrow}
              </span>
            </motion.div>

            {/* Main headline with clip-path line reveal */}
            <h1 className="mb-6 md:mb-8 font-serif">
              {copy[locale].hero.titleLines.map((line, index) => (
                <motion.span
                  key={`${locale}-${line}-${index}`}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={lineVariants}
                  className="block font-normal text-foreground leading-[0.95] tracking-[-0.03em]"
                  style={{ fontSize: "clamp(40px, 10vw, 110px)" }}
                >
                  {line}
                </motion.span>
              ))}
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed font-normal max-w-2xl mb-8 md:mb-10"
            >
              {copy[locale].hero.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-12 md:mb-16"
            >
              <MagneticButton href="#contact" variant="primary">
                <span className="flex items-center gap-2">
                  {copy[locale].ctaButton}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </MagneticButton>
              <MagneticButton href="#capabilities" variant="secondary">
                {locale === "es" ? "Ver servicios" : "See our work"}
              </MagneticButton>
            </motion.div>

            {/* Stats bar with animated counters */}
            <div className="border-t border-border pt-8 md:pt-10">
              <div className="flex flex-wrap items-center gap-6 md:gap-10">
                {stats.map((stat, i) => (
                  <AnimatedStat key={stat.label} value={stat.value} label={stat.label} delay={i * 0.15} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {mounted && !isMobile && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[100] pointer-events-none"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-muted-foreground">
              Scroll
            </span>
            <motion.div
              className="w-px h-10 bg-gradient-to-b from-muted-foreground/60 to-transparent origin-top"
              animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </section>
  )
}
