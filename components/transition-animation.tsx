"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { type Locale } from "@/lib/copy"
import { fadeInUpVariants, staggerContainerVariants } from "@/lib/animations"

function AnimatedCounter({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!started) return
    const steps = 60
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

export function TransitionAnimation({ locale = "en" }: { locale?: Locale }) {
  const stats = locale === "es"
    ? [
        { value: 20, suffix: "+", unit: "horas", label: "ahorradas semanalmente por cliente" },
        { value: 85, suffix: "%", unit: "", label: "reducción en tiempo de respuesta" },
        { value: 300, suffix: "%", unit: "", label: "más leads capturados en eventos" },
        { value: 8, suffix: "", unit: "semanas", label: "plazo medio de entrega" },
      ]
    : [
        { value: 20, suffix: "+", unit: "hours", label: "saved weekly per client" },
        { value: 85, suffix: "%", unit: "", label: "reduction in response time" },
        { value: 300, suffix: "%", unit: "", label: "increase in event lead capture" },
        { value: 8, suffix: "", unit: "weeks", label: "average delivery time" },
      ]

  return (
    <section
      id="results"
      className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden"
      data-theme="dark"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(46, 88, 255, 0.06), transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainerVariants}
          className="text-center mb-16 md:mb-20"
        >
          <motion.p
            variants={fadeInUpVariants}
            className="text-xs md:text-sm uppercase tracking-[0.16em] text-accent-blue font-medium mb-4"
          >
            {locale === "es" ? "Resultados reales" : "Real results"}
          </motion.p>
          <motion.h2
            variants={fadeInUpVariants}
            className="text-3xl md:text-5xl lg:text-6xl font-serif font-normal text-foreground tracking-tight"
          >
            {locale === "es" ? "Resultados que importan" : "Results that matter"}
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <div className="mb-2 flex items-baseline justify-center gap-1">
                <span
                  className="font-serif font-normal text-foreground tracking-tighter leading-none"
                  style={{ fontSize: 'clamp(48px, 8vw, 88px)' }}
                >
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </span>
                {stat.unit && (
                  <span className="text-lg md:text-2xl text-muted-foreground/40 font-normal ml-1">
                    {stat.unit}
                  </span>
                )}
              </div>
              <p className="text-xs md:text-sm text-muted-foreground tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
