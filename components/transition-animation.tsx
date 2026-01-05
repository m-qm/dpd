"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { type Locale } from "@/lib/copy"
import { fadeInUpVariants, staggerContainerVariants } from "@/lib/animations"

export function TransitionAnimation({ locale = "en" }: { locale?: Locale }) {
  const [isVisible, setIsVisible] = useState(false)
  const [speedCount, setSpeedCount] = useState(0)
  const [efficiencyCount, setEfficiencyCount] = useState(0)

  useEffect(() => {
    // If already triggered, don't re‑attach observer (prevents double timers)
    if (isVisible) return

    // Detect mobile to trigger earlier and with more lenient margins
    let isMobile = false
    if (typeof window !== "undefined") {
      isMobile = window.matchMedia("(max-width: 768px)").matches
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const minRatio = isMobile ? 0.05 : 0.2
          if (entry.isIntersecting && entry.intersectionRatio >= minRatio) {
            // Guard in case the callback fires multiple times
            if (isVisible) {
              observer.disconnect()
              return
            }

            setIsVisible(true)
            
            // Animate speed counter (weeks to delivery)
            const speedTarget = 8
            const speedDuration = 1500
            const speedSteps = 40
            const speedIncrement = speedTarget / speedSteps
            const speedStepDuration = speedDuration / speedSteps

            let speedCurrent = 0
            const speedTimer = setInterval(() => {
              speedCurrent += speedIncrement
              if (speedCurrent >= speedTarget) {
                setSpeedCount(speedTarget)
                clearInterval(speedTimer)
              } else {
                setSpeedCount(Math.floor(speedCurrent))
              }
            }, speedStepDuration)

            // Animate efficiency counter
            const efficiencyTarget = 95
            const efficiencyDuration = 2000
            const efficiencySteps = 60
            const efficiencyIncrement = efficiencyTarget / efficiencySteps
            const efficiencyStepDuration = efficiencyDuration / efficiencySteps

            let efficiencyCurrent = 0
            const efficiencyTimer = setInterval(() => {
              efficiencyCurrent += efficiencyIncrement
              if (efficiencyCurrent >= efficiencyTarget) {
                setEfficiencyCount(efficiencyTarget)
                clearInterval(efficiencyTimer)
              } else {
                setEfficiencyCount(Math.floor(efficiencyCurrent))
              }
            }, efficiencyStepDuration)

            // Once triggered for the first time, we can stop observing
            observer.disconnect()
          }
        })
      },
      {
        // On mobile, trigger earlier and with some look‑ahead margin
        threshold: isMobile ? 0.05 : 0.2,
        rootMargin: isMobile ? "100px 0px" : "0px",
      }
    )

    const element = document.getElementById("transition-animation")
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
      observer.disconnect()
    }
  }, [isVisible])

  const stats = locale === "es" 
    ? [
        { 
          value: speedCount > 0 ? `${speedCount}` : "8",
          unit: "semanas",
          label: "De idea a producto"
        },
        { 
          value: efficiencyCount > 0 ? `${efficiencyCount}` : "95",
          unit: "%",
          label: "Proyectos a tiempo"
        },
        { 
          value: "100",
          unit: "%",
          label: "Stack moderno"
        },
      ]
    : [
        { 
          value: speedCount > 0 ? `${speedCount}` : "8",
          unit: "weeks",
          label: "Idea to product"
        },
        { 
          value: efficiencyCount > 0 ? `${efficiencyCount}` : "95",
          unit: "%",
          label: "On-time delivery"
        },
        { 
          value: "100",
          unit: "%",
          label: "Modern stack"
        },
      ]

  return (
    <section
      id="transition-animation"
      className="relative w-full py-32 md:py-40 lg:py-48 overflow-hidden"
      data-theme="dark"
    >
      {/* Flora-style subtle background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/6 rounded-full blur-3xl opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Flora-style heading - minimal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainerVariants}
          className="text-center mb-20 md:mb-28 lg:mb-32"
        >
          <motion.h2 
            variants={fadeInUpVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-normal text-foreground mb-4"
          >
            {locale === "es" ? "Velocidad y eficiencia" : "Speed & Efficiency"}
          </motion.h2>
          <motion.p 
            variants={fadeInUpVariants}
            className="text-base md:text-lg text-muted-foreground/70 max-w-xl mx-auto"
          >
            {locale === "es" 
              ? "Entregamos rápido, sin compromisos."
              : "We deliver fast, without compromise."}
          </motion.p>
        </motion.div>

        {/* Flora-style stats - MASSIVE numbers */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20 lg:gap-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeInUpVariants}
              className="text-center group"
            >
              {/* MASSIVE number - Flora style */}
              <div className="mb-4 md:mb-6">
                <span 
                  className="font-normal text-foreground tracking-tight leading-none block"
                  style={{
                    fontSize: 'clamp(80px, 12vw, 160px)',
                  }}
                >
                  {stat.value}
                  <span 
                    className="text-muted-foreground/40"
                    style={{
                      fontSize: 'clamp(40px, 6vw, 80px)',
                    }}
                  >
                    {stat.unit}
                  </span>
                </span>
              </div>

              {/* Minimal label */}
              <div className="text-sm md:text-base text-muted-foreground/70">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
