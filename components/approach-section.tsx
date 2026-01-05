"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { SectionBadge } from "@/components/section-badge"
import { copy, type Locale } from "@/lib/copy"
import { Search, Palette, Code, TrendingUp } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import { staggerContainerVariants, fadeInUpVariants, gridItemVariants } from "@/lib/animations"

const approachIcons = [Search, Palette, Code, TrendingUp]

export function ApproachSection({ inverted = false, locale = "en" }: { inverted?: boolean; locale?: Locale }) {
  const [isVisible, setIsVisible] = useState(false)
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const [highlightedCards, setHighlightedCards] = useState<Set<number>>(new Set())
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const isMobile = useIsMobile()
  const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches

  useEffect(() => {
    // Lower threshold on mobile for better performance
    const threshold = isMobile ? [0.1, 0.3] : [0.2, 0.5]
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const minRatio = isMobile ? 0.1 : 0.2
          if (entry.isIntersecting && entry.intersectionRatio >= minRatio) {
            setIsVisible(true)
            // On mobile or reduced motion, show all steps at once or with minimal delay
            const delay = (isMobile || prefersReducedMotion) ? 50 : 150
            copy[locale].approachSteps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => [...prev, index])
              }, index * delay)
            })
            observer.disconnect()
          }
        })
      },
      { threshold, rootMargin: isMobile ? '50px' : '0px' }, // Larger rootMargin on mobile
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [locale, isMobile, prefersReducedMotion])

  // Track which cards are in viewport for highlight effect
  useEffect(() => {
    if (!isVisible) return

    const observers: IntersectionObserver[] = []

    cardRefs.current.forEach((cardRef, index) => {
      if (!cardRef) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
              setHighlightedCards((prev) => new Set(prev).add(index))
            } else {
              setHighlightedCards((prev) => {
                const next = new Set(prev)
                next.delete(index)
                return next
              })
            }
          })
        },
        {
          threshold: [0.3, 0.5, 0.7],
          rootMargin: '-10% 0px -10% 0px', // Only highlight when card is in center area
        }
      )

      observer.observe(cardRef)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [isVisible, locale])

  return (
    <section
      id="approach"
      ref={sectionRef}
      data-theme={inverted ? "light" : "dark"}
      className="dpd-section dpd-chapter relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Floating gradient orbs - disabled on mobile for performance */}
        {!isMobile && (
          <>
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl animate-float opacity-60" />
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float-delayed opacity-50" />
          </>
        )}
        
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
          <div className="mb-12 md:mb-16">
            <p className="text-sm md:text-base uppercase tracking-[0.2em] text-muted-foreground/80 font-medium mb-4 md:mb-6">
              {locale === "es" ? "Cómo trabajamos" : "How we work"}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-foreground mb-8 md:mb-10 tracking-tight leading-[1.1]">
              {copy[locale].approachHeading}
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed font-normal">
              {copy[locale].approachIntro}
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
            {copy[locale].approachSteps.map((step, index) => {
              const Icon = approachIcons[index]
              const isStepVisible = visibleSteps.includes(index)
              
              return (
                <div
                  key={index}
                  className={`relative group transition-all ${isMobile ? "duration-300" : "duration-700"} ${
                    isStepVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: isMobile ? `${index * 50}ms` : `${index * 150}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12 lg:gap-16">
                    {/* Large number - Draper B1 style */}
                    <div className="flex-shrink-0">
                      <div 
                        ref={(el) => (cardRefs.current[index] = el)}
                        className={`relative transition-all duration-500 ${
                          highlightedCards.has(index)
                            ? "scale-105"
                            : "group-hover:scale-105"
                        }`}
                      >
                        {/* Large number display */}
                        <div className={`text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-normal leading-none tracking-tight transition-all duration-500 ${
                          highlightedCards.has(index)
                            ? "text-foreground/20"
                            : "text-foreground/10 group-hover:text-foreground/15"
                        }`}>
                          {index + 1 < 10 ? `0${index + 1}` : index + 1}
                        </div>
                        
                        {/* Icon overlay on number */}
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                          highlightedCards.has(index)
                            ? "opacity-100 scale-110"
                            : "opacity-0 group-hover:opacity-100 scale-100"
                        }`}>
                          {Icon && (
                            <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-2 border-blue-500/40 bg-background/80 backdrop-blur-md flex items-center justify-center">
                              <Icon className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-blue-400" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Content section */}
                    <div className="flex-1 pt-4 md:pt-8 lg:pt-12">
                      <div className="max-w-2xl">
                        <h3 className={`text-xl md:text-2xl lg:text-3xl font-normal mb-6 md:mb-8 tracking-tight leading-[1.2] transition-colors duration-300 ${
                          highlightedCards.has(index)
                            ? "text-foreground"
                            : "text-foreground group-hover:text-foreground"
                        }`}>
                          {step.title}
                        </h3>
                        <p className={`text-base md:text-lg leading-relaxed transition-colors duration-300 ${
                          highlightedCards.has(index)
                            ? "text-muted-foreground/95"
                            : "text-muted-foreground group-hover:text-muted-foreground/90"
                        }`}>
                          {step.description}
                        </p>
                      </div>
                    </div>
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
