"use client"

import { useEffect, useRef, useState } from "react"
import { SectionBadge } from "@/components/section-badge"
import { copy, type Locale } from "@/lib/copy"

export function ApproachSection({ inverted = false, locale = "en" }: { inverted?: boolean; locale?: Locale }) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="approach"
      ref={sectionRef}
      className={`py-24 md:py-32 lg:py-48 px-6 md:px-12 lg:px-20 border-t border-border transition-colors duration-500 ${
        inverted ? "section-inverted" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Subtle circular gradient accent */}
        <div
          className="pointer-events-none absolute -left-32 md:-left-40 top-24 md:top-32 h-56 w-56 md:h-72 md:w-72 rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.02) 40%, transparent 70%)",
          }}
        />

        {/* Decorative shapes - subtle Norgram-style geometry */}
        <div className="pointer-events-none absolute -right-10 md:-right-16 top-10 md:top-16 hidden md:flex flex-col gap-4 opacity-60">
          <div className="h-16 w-16 border border-border" />
          <div className="h-10 w-24 border border-border/60" />
          <div className="flex gap-2 justify-end">
            <div className="h-6 w-6 border border-border/40" />
            <div className="h-6 w-10 border border-border/40" />
          </div>
        </div>

        <SectionBadge number={2} label={locale === "en" ? "Approach" : "Enfoque"} />
        <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-foreground mb-12 md:mb-16 tracking-tight leading-[0.9]">
          {copy[locale].approachHeading}
        </h2>

        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mb-24 md:mb-32 leading-relaxed font-normal">
          {copy[locale].approachIntro}
        </p>

        <div className="space-y-0">
          {copy[locale].approachSteps.map((step, index) => (
            <div
              key={index}
              className={`py-12 md:py-16 border-b border-border transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
            >
              <div className="flex items-start">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal text-foreground mb-6 tracking-tight leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
