"use client"

import { useEffect, useRef, useState } from "react"
import { SectionBadge } from "@/components/section-badge"
import { copy, type Locale } from "@/lib/copy"
import { Search, Palette, Code, TrendingUp } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

const approachIcons = [Search, Palette, Code, TrendingUp]

export function ApproachSection({ inverted = false, locale = "en" }: { inverted?: boolean; locale?: Locale }) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: [0.1], rootMargin: isMobile ? '50px' : '0px' },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isMobile])

  return (
    <section
      id="approach"
      ref={sectionRef}
      data-theme={inverted ? "light" : "dark"}
      className="dpd-section dpd-chapter relative overflow-hidden"
    >
      <div className="dpd-container relative z-10">
        <SectionBadge number={2} label={locale === "en" ? "Approach" : "Enfoque"} />

        <div className="mb-14 md:mb-20">
          <h2 className="dpd-display font-normal text-foreground mb-6">
            {copy[locale].approachHeading}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
            {copy[locale].approachIntro}
          </p>
        </div>

        {/* Process steps - clean horizontal timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {copy[locale].approachSteps.map((step, index) => {
            const Icon = approachIcons[index]
            return (
              <div
                key={index}
                className={`relative transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* Step number + connector line */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-md border border-accent-blue/30 bg-accent-blue/5 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-accent-blue" />
                  </div>
                  {/* Horizontal connector (hidden on last item and mobile) */}
                  {index < 3 && (
                    <div className="hidden lg:block flex-1 h-px bg-border" />
                  )}
                </div>

                <div className="text-xs font-mono uppercase tracking-widest text-accent-blue/70 mb-3">
                  {`0${index + 1}`}
                </div>

                <h3 className="text-lg md:text-xl font-normal text-foreground mb-3 tracking-tight leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
