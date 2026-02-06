"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { type Locale } from "@/lib/copy"

/* ── Animated counter with spring feel ── */
function AnimatedCounter({
  target,
  suffix = "",
  duration = 1600,
  started,
}: {
  target: number
  suffix?: string
  duration?: number
  started: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    const steps = 40
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
  }, [started, target, duration])

  return (
    <span className="tabular-nums">
      {started ? count : 0}
      {suffix}
    </span>
  )
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
}

export function TransitionAnimation({ locale = "en" }: { locale?: Locale }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [countersStarted, setCountersStarted] = useState(false)

  useEffect(() => {
    if (isInView && !countersStarted) {
      const t = setTimeout(() => setCountersStarted(true), 400)
      return () => clearTimeout(t)
    }
  }, [isInView, countersStarted])

  const stats =
    locale === "es"
      ? [
          { value: 20, suffix: "+", unit: "horas", label: "ahorradas semanalmente por cliente" },
          { value: 85, suffix: "%", unit: "", label: "reducci\u00f3n en tiempo de respuesta" },
          { value: 300, suffix: "%", unit: "", label: "m\u00e1s leads capturados en eventos" },
          { value: 8, suffix: "", unit: "semanas", label: "plazo medio de entrega" },
        ]
      : [
          { value: 20, suffix: "+", unit: "hours", label: "saved weekly per client" },
          { value: 85, suffix: "%", unit: "", label: "reduction in response time" },
          { value: 300, suffix: "%", unit: "", label: "increase in event lead capture" },
          { value: 8, suffix: "", unit: "weeks", label: "average delivery time" },
        ]

  return (
    <section id="results" ref={ref} className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden" data-theme="dark">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.5 }}
          style={{
            background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(46, 88, 255, 0.06), transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
          className="text-center mb-16 md:mb-20"
        >
          <motion.p variants={fadeUp} className="text-xs md:text-sm uppercase tracking-[0.16em] text-accent-blue font-medium mb-4">
            {locale === "es" ? "Resultados reales" : "Real results"}
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl lg:text-6xl font-serif font-normal text-foreground tracking-tight">
            {locale === "es" ? "Resultados que importan" : "Results that matter"}
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div key={stat.label} variants={fadeUp} className="text-center group">
              <div className="mb-2 flex items-baseline justify-center gap-1">
                <motion.span
                  className="font-serif font-normal text-foreground tracking-tighter leading-none"
                  style={{ fontSize: "clamp(48px, 8vw, 88px)" }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} started={countersStarted} />
                </motion.span>
                {stat.unit && (
                  <span className="text-lg md:text-2xl text-muted-foreground/40 font-normal ml-1">{stat.unit}</span>
                )}
              </div>
              <p className="text-xs md:text-sm text-muted-foreground tracking-wide uppercase">{stat.label}</p>
              {/* Accent underline on hover */}
              <motion.div
                className="mx-auto mt-3 h-px bg-accent-blue/40"
                initial={{ width: 0 }}
                whileHover={{ width: 40 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
