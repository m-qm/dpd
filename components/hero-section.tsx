"use client"

import { useEffect, useState } from "react"
import { AnimatedD } from "@/components/animated-d"
import { LanguageToggle } from "@/components/language-toggle"
import { copy, type Locale } from "@/lib/copy"

export function HeroSection({ locale = "en" }: { locale?: Locale }) {
  const [isVisible, setIsVisible] = useState(false)
  const [altLineActive, setAltLineActive] = useState(false)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    // Small delay so the entrance animation starts after initial paint
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 450)

    return () => clearTimeout(timer)
  }, [])

  // Alternate the middle line between core claim and "Local development, global impact"
  // with a very subtle, slow fade-out → swap → fade-in loop
  useEffect(() => {
    let timeoutId: number | undefined
    const intervalId = window.setInterval(() => {
      setIsFading(true)

      timeoutId = window.setTimeout(() => {
        setAltLineActive((prev) => !prev)
        setIsFading(false)
      }, 1100)
    }, 9000)

    return () => {
      window.clearInterval(intervalId)
      if (timeoutId) {
        window.clearTimeout(timeoutId)
      }
    }
  }, [locale])

  return (
    <section className="relative min-h-screen flex flex-col bg-gradient-to-b from-background via-background/95 to-black">
      {/* Minimal Navigation - Norgram style */}
      <nav className="flex justify-between items-center px-6 md:px-12 lg:px-20 py-8 md:py-10 bg-black/40 backdrop-blur-sm border-b border-border/60">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0">
            <AnimatedD />
          </div>
          <div className="text-base md:text-lg font-normal tracking-tight">Dual Perspective Digital</div>
        </div>
        <div className="flex items-center gap-4 md:gap-6 text-sm md:text-base">
          <a href="#capabilities" className="text-foreground hover:opacity-60 transition-opacity font-normal hidden md:inline">
            Capabilities
          </a>
          <a href="#approach" className="text-foreground hover:opacity-60 transition-opacity font-normal hidden md:inline">
            Approach
          </a>
          <div className="flex items-center gap-2 text-foreground">
            <span className="font-normal">All enquiries</span>
            <span className="text-muted-foreground">→</span>
            <a href="mailto:hello@dualperspective.digital" className="text-foreground hover:opacity-60 transition-opacity font-normal">
              hello@dualperspective.digital
            </a>
          </div>
          <div className="hidden md:block h-4 w-px bg-border/60" />
          <LanguageToggle />
        </div>
      </nav>

      {/* Hero Content - Norgram style large typography */}
      <div className="relative flex-1 flex items-center justify-center px-6 md:px-12 lg:px-20 py-20 md:py-32 overflow-hidden">
        {/* Animated gradient highlight behind the hero title */}
        <div className="pointer-events-none absolute inset-0 hero-gradient" />

        <div
          className={`relative max-w-7xl mx-auto w-full transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1
            className={`text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-normal text-foreground mb-16 md:mb-20 leading-[0.85] tracking-[-0.02em] transition-opacity duration-1000 ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
          >
            {altLineActive ? (
              // Alt state: only the "Local development, global impact" line
              <span className="block">
                {locale === "es" ? "Desarrollo local, impacto global" : "Local development, global impact"}
                <br />
              </span>
            ) : (
              // Default state: Digital / Experiences / That Endure
              <>
                {copy[locale].hero.titleLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                    <br />
                  </span>
                ))}
              </>
            )}
          </h1>

          <div className="max-w-2xl">
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-normal">
              {copy[locale].hero.subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
