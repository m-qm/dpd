"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { HeroNavigation } from "@/components/hero-navigation"
import { copy, type Locale } from "@/lib/copy"
import { ArrowRight } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

export function HeroSection({ locale = "en" }: { locale?: Locale }) {
  const isMobile = useIsMobile()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      data-theme="dark"
      className="relative min-h-screen flex flex-col"
    >
      {/* Subtle radial glow */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(46, 88, 255, 0.08), transparent 70%)',
        }}
      />

      {/* Navigation */}
      <HeroNavigation locale={locale} />

      {/* Hero Content */}
      <div className="relative flex-1 min-h-0 flex items-center px-6 md:px-12 lg:px-20 py-24 md:py-32 lg:py-36 z-10">
        <div className="dpd-container w-full">
          <div className="max-w-4xl">
            {/* Eyebrow / Trust indicator */}
            <div 
              className="mb-6 md:mb-8 hero-fade-in"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="inline-flex items-center gap-2 text-xs md:text-sm uppercase tracking-[0.16em] text-accent-blue font-medium">
                <span className="w-2 h-2 rounded-full bg-accent-blue" />
                {copy[locale].hero.eyebrow}
              </span>
            </div>

            {/* Main headline */}
            <h1 className="mb-6 md:mb-8 font-serif">
              {copy[locale].hero.titleLines.map((line, index) => (
                <span
                  key={`${locale}-${line}-${index}`}
                  className="block font-normal text-foreground leading-[0.95] tracking-[-0.03em] hero-fade-in"
                  style={{
                    fontSize: 'clamp(40px, 10vw, 110px)',
                    animationDelay: `${0.15 + index * 0.1}s`,
                  }}
                >
                  {line}
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <p 
              className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed font-normal max-w-2xl mb-8 md:mb-10 hero-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              {copy[locale].hero.subtitle}
            </p>

            {/* CTAs */}
            <div 
              className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-12 md:mb-16 hero-fade-in"
              style={{ animationDelay: '0.5s' }}
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-7 md:px-9 py-3.5 md:py-4 text-sm md:text-base font-medium tracking-tight bg-accent-blue text-foreground rounded-sm hover:brightness-110 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-accent-blue/20"
              >
                <span className="flex items-center gap-2">
                  {copy[locale].ctaButton}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                </span>
              </a>
              <a
                href="#capabilities"
                className="inline-flex items-center justify-center px-7 md:px-9 py-3.5 md:py-4 text-sm md:text-base font-medium tracking-tight border border-border text-foreground rounded-sm hover:bg-secondary active:scale-[0.98] transition-all duration-200"
              >
                {locale === "es" ? "Ver servicios" : "See our work"}
              </a>
            </div>

            {/* Stats bar */}
            <div
              className="hero-fade-in"
              style={{ animationDelay: '0.65s' }}
            >
              <div className="flex flex-wrap items-center gap-6 md:gap-10 border-t border-border pt-8 md:pt-10">
                {(locale === "es"
                  ? [
                      { value: "20+", label: "horas ahorradas / semana" },
                      { value: "85%", label: "reducción tiempo respuesta" },
                      { value: "300%", label: "más leads en eventos" },
                    ]
                  : [
                      { value: "20+", label: "hours saved weekly" },
                      { value: "85%", label: "faster response time" },
                      { value: "300%", label: "more event leads" },
                    ]
                ).map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="text-2xl md:text-3xl lg:text-4xl font-serif text-foreground tracking-tight leading-none">
                      {stat.value}
                    </span>
                    <span className="text-xs md:text-sm text-muted-foreground mt-1.5 tracking-wide">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {mounted && !isMobile && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[100] pointer-events-none"
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-muted-foreground">
              Scroll
            </span>
            <motion.div 
              className="w-px h-10 bg-gradient-to-b from-muted-foreground/60 to-transparent"
              animate={{ scaleY: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </section>
  )
}
