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
    if (isVisible) return

    let isMobile = false
    if (typeof window !== "undefined") {
      isMobile = window.matchMedia("(max-width: 768px)").matches
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const minRatio = isMobile ? 0.05 : 0.2
          if (entry.isIntersecting && entry.intersectionRatio >= minRatio) {
            if (isVisible) {
              observer.disconnect()
              return
            }

            setIsVisible(true)
            
            // Animate speed counter with easing
            const speedTarget = 8
            const speedDuration = 1800
            const speedSteps = 50
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

            // Animate efficiency counter with easing
            const efficiencyTarget = 95
            const efficiencyDuration = 2200
            const efficiencySteps = 70
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

            observer.disconnect()
          }
        })
      },
      {
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
          label: "De idea a producto",
          highlight: true
        },
        { 
          value: efficiencyCount > 0 ? `${efficiencyCount}` : "95",
          unit: "%",
          label: "Proyectos a tiempo",
          highlight: true
        },
        { 
          value: "100",
          unit: "%",
          label: "Stack moderno",
          highlight: false
        },
      ]
    : [
        { 
          value: speedCount > 0 ? `${speedCount}` : "8",
          unit: "weeks",
          label: "Idea to product",
          highlight: true
        },
        { 
          value: efficiencyCount > 0 ? `${efficiencyCount}` : "95",
          unit: "%",
          label: "On-time delivery",
          highlight: true
        },
        { 
          value: "100",
          unit: "%",
          label: "Modern stack",
          highlight: false
        },
      ]

  return (
    <section
      id="transition-animation"
      className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden"
      data-theme="dark"
    >
      {/* Enhanced background with gradient mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary glow */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] opacity-50 animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/8 rounded-full blur-[120px] opacity-40 animate-pulse-slow" 
          style={{ animationDelay: '1s' }} 
        />
        
        {/* Secondary ambient glow */}
        <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-cyan-500/6 rounded-full blur-[100px] opacity-30" />
        
        {/* Subtle grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(255 255 255 / 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(255 255 255 / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Refined heading with better spacing */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainerVariants}
          className="text-center mb-16 md:mb-24 lg:mb-28"
        >
          <motion.h2 
            variants={fadeInUpVariants}
            className="text-3xl md:text-5xl lg:text-6xl font-light text-foreground mb-5 tracking-tight"
          >
            {locale === "es" ? "Velocidad y eficiencia" : "Speed & Efficiency"}
          </motion.h2>
          <motion.p 
            variants={fadeInUpVariants}
            className="text-base md:text-lg lg:text-xl text-muted-foreground/60 max-w-2xl mx-auto font-light"
          >
            {locale === "es" 
              ? "Entregamos rápido, sin compromisos."
              : "We deliver fast, without compromise."}
          </motion.p>
        </motion.div>

        {/* Enhanced stats grid with better visual hierarchy */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 lg:gap-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeInUpVariants}
              className="relative text-center group"
            >
              {/* Subtle card effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
                  filter: 'blur(20px)',
                }}
              />

              <div className="relative">
                {/* Number container with better alignment */}
                <div className="mb-3 md:mb-5 flex items-baseline justify-center gap-1">
                  <motion.span 
                    className="font-light text-foreground tracking-tighter leading-none inline-block tabular-nums"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    style={{
                      fontSize: 'clamp(72px, 10vw, 140px)',
                    }}
                  >
                    {stat.value}
                  </motion.span>
                  <motion.span 
                    className="text-muted-foreground/30 font-light tracking-tight"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.1 + 0.2 
                    }}
                    style={{
                      fontSize: 'clamp(32px, 5vw, 64px)',
                      lineHeight: 1,
                    }}
                  >
                    {stat.unit}
                  </motion.span>
                </div>

                {/* Refined label with subtle animation */}
                <motion.div 
                  className="text-sm md:text-base lg:text-lg text-muted-foreground/50 font-light tracking-wide uppercase"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1 + 0.4 
                  }}
                  style={{
                    letterSpacing: '0.1em'
                  }}
                >
                  {stat.label}
                </motion.div>

                {/* Subtle accent line */}
                <motion.div
                  className="mx-auto mt-6 h-[1px] bg-gradient-to-r from-transparent via-muted-foreground/20 to-transparent"
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: '60%', opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1, 
                    delay: index * 0.1 + 0.6,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Optional: Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="mt-20 md:mt-28 flex justify-center"
        >
          <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent" />
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}