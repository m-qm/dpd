"use client"

import { useEffect, useRef, useState } from "react"
import { SectionBadge } from "@/components/section-badge"
import { copy, type Locale } from "@/lib/copy"
import { Search, Palette, Code, TrendingUp } from "lucide-react"

const approachIcons = [Search, Palette, Code, TrendingUp]

export function ApproachSection({ inverted = false, locale = "en" }: { inverted?: boolean; locale?: Locale }) {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
            setIsVisible(true)
            // Animate steps sequentially
            copy[locale].approachSteps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => [...prev, index])
              }, index * 150)
            })
            observer.disconnect()
          }
        })
      },
      { threshold: [0.2, 0.5] },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [locale])

  return (
    <section
      id="approach"
      ref={sectionRef}
      data-theme={inverted ? "light" : "dark"}
      className="dpd-section dpd-chapter relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Floating gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-float opacity-60" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float-delayed opacity-50" />
        
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="dpd-container relative z-10">
        <SectionBadge number={2} label={locale === "en" ? "Approach" : "Enfoque"} />
        
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-foreground mb-8 md:mb-12 tracking-tight leading-[0.9]">
            {copy[locale].approachHeading}
          </h2>

          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mb-16 md:mb-20 leading-relaxed font-normal">
            {copy[locale].approachIntro}
          </p>
        </div>

        <div className="relative">
          {/* Animated vertical timeline */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border/60 to-transparent" />
          
          {/* Animated progress line that fills as you scroll */}
          <div 
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-px bg-gradient-to-b from-blue-500/40 via-blue-500/60 to-transparent transition-all duration-1000"
            style={{ 
              height: isVisible ? '100%' : '0%',
              opacity: isVisible ? 1 : 0 
            }}
          />

          <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
            {copy[locale].approachSteps.map((step, index) => {
              const Icon = approachIcons[index]
              const isLeft = index % 2 === 0
              const isStepVisible = visibleSteps.includes(index)
              
              return (
                <div
                  key={index}
                  className={`relative group transition-all duration-700 ${
                    isStepVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Timeline dot with icon */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-14 h-14 rounded-full border-2 border-foreground/40 bg-background group-hover:border-blue-500/60 group-hover:scale-110 group-hover:bg-blue-500/5 transition-all duration-300">
                    {Icon && (
                      <Icon className="w-6 h-6 text-foreground/70 group-hover:text-blue-400 transition-colors duration-300" />
                    )}
                  </div>

                  {/* Mobile: Simple dot */}
                  <div className="md:hidden absolute left-0 top-6 w-3 h-3 rounded-full border-2 border-foreground/40 bg-background group-hover:border-blue-500/60 transition-all duration-300" />

                  <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Card */}
                    <div
                      className={`group/card relative p-8 md:p-10 lg:p-12 border-2 border-border/50 bg-background/40 backdrop-blur-sm hover:border-blue-500/30 hover:bg-background/60 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-500 ${
                        isLeft ? "md:order-1" : "md:order-2"
                      }`}
                    >
                      {/* Number badge - large and prominent */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 border-2 border-border/60 flex items-center justify-center bg-background/60 group-hover/card:border-blue-500/40 group-hover/card:scale-110 group-hover/card:bg-blue-500/5 transition-all duration-300">
                          {Icon && (
                            <Icon className="w-8 h-8 md:w-10 md:h-10 text-foreground/70 group-hover/card:text-blue-400 transition-colors duration-300" />
                          )}
                        </div>
                        <div className="text-4xl md:text-5xl lg:text-6xl font-normal text-foreground/30 group-hover/card:text-foreground/50 transition-colors duration-300 tracking-tight">
                          {index + 1 < 10 ? `0${index + 1}` : index + 1}
                        </div>
                      </div>

                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal text-foreground mb-4 md:mb-6 tracking-tight leading-tight group-hover/card:text-foreground transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed group-hover/card:text-muted-foreground/90 transition-colors duration-300">
                        {step.description}
                      </p>

                      {/* Hover accent line */}
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Spacer for desktop alignment */}
                    <div className={`hidden md:block ${isLeft ? "order-2" : "order-1"}`} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
