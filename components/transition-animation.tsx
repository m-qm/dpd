"use client"

import { useEffect, useState } from "react"
import { type Locale } from "@/lib/copy"
import { Zap, Rocket, Code2 } from "lucide-react"

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
          icon: Rocket, 
          label: "Semanas a entrega", 
          value: speedCount > 0 ? `${speedCount}` : "—",
          suffix: " semanas",
          description: "De idea a producto funcional"
        },
        { 
          icon: Zap, 
          label: "Eficiencia de entrega", 
          value: efficiencyCount > 0 ? `${efficiencyCount}%` : "—",
          description: "Proyectos entregados a tiempo"
        },
        { 
          icon: Code2, 
          label: "Stack moderno", 
          value: "100%",
          description: "Tecnologías de última generación"
        },
      ]
    : [
        { 
          icon: Rocket, 
          label: "Weeks to delivery", 
          value: speedCount > 0 ? `${speedCount}` : "—",
          suffix: " weeks",
          description: "From idea to working product"
        },
        { 
          icon: Zap, 
          label: "Delivery efficiency", 
          value: efficiencyCount > 0 ? `${efficiencyCount}%` : "—",
          description: "Projects delivered on time"
        },
        { 
          icon: Code2, 
          label: "Modern stack", 
          value: "100%",
          description: "Cutting-edge technologies"
        },
      ]

  return (
    <div
      id="transition-animation"
      className="relative w-full py-24 md:py-36 overflow-hidden"
      data-theme="dark"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Multiple floating orbs with different colors */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/12 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        
        {/* Animated grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            animation: 'gridMove 20s linear infinite',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Main heading */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-foreground mb-4 transition-all duration-1000 opacity-100 translate-y-0">
            {locale === "es" ? "Velocidad y eficiencia" : "Speed & Efficiency"}
          </h2>
          <p className="text-sm md:text-base text-muted-foreground/80 max-w-2xl mx-auto transition-all duration-1000 delay-200 opacity-100 translate-y-0">
            {locale === "es" 
              ? "Entregamos soluciones modernas rápidamente, sin comprometer la calidad."
              : "We deliver modern solutions fast, without compromising quality."}
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="group relative p-8 md:p-10 border border-border/40 bg-black/20 backdrop-blur-sm hover:border-border/60 hover:bg-black/30 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 opacity-100 translate-y-0"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg border border-border/40 bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center group-hover:border-border/60 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300">
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-foreground/80 group-hover:text-foreground group-hover:scale-110 transition-all duration-300" />
                  </div>
                </div>

                {/* Value */}
                <div className="mb-3">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-foreground tracking-tight">
                    {stat.value}
                    {stat.suffix && <span className="text-2xl md:text-3xl text-muted-foreground/60">{stat.suffix}</span>}
                  </div>
                </div>

                {/* Label */}
                <div className="text-sm md:text-base uppercase tracking-[0.16em] text-muted-foreground mb-2">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-xs md:text-sm text-muted-foreground/70 leading-relaxed">
                  {stat.description}
                </div>

                {/* Animated underline on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
