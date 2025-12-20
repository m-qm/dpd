"use client"

import { useEffect, useState, useRef, Suspense } from "react"
import { HeroNavigation } from "@/components/hero-navigation"
import { copy, type Locale } from "@/lib/copy"
import { ArrowRight } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import dynamic from "next/dynamic"

// Lazy load Three.js - it's heavy and only needed for the particle background
const ParticleBackground = dynamic(() => import("@/components/particle-background").then(mod => ({ default: mod.ParticleBackground })), {
  ssr: false,
  loading: () => null, // Don't show loading state for background
})


export function HeroSection({ locale = "en" }: { locale?: Locale }) {
  const [isVisible, setIsVisible] = useState(false)
  const [altLineActive, setAltLineActive] = useState(false)
  const [isFading, setIsFading] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    // Reset visibility state when locale changes to prevent glitches
    setIsVisible(false)
    setAltLineActive(false)
    setIsFading(false)
    
    // Wait for any ongoing transitions to complete before showing new content
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 200)

    return () => clearTimeout(timer)
  }, [locale])

  useEffect(() => {
    // Only start the alternating title animation after initial visibility
    if (!isVisible) return
    
    // Reset to default state when locale changes
    setAltLineActive(false)
    setIsFading(false)
    
    let intervalId: number | undefined
    let timeoutId: number | undefined
    
    // Wait a bit before starting the alternating animation
    const startTimer = setTimeout(() => {
      intervalId = window.setInterval(() => {
        setIsFading(true)
        timeoutId = window.setTimeout(() => {
          setAltLineActive((prev) => !prev)
          setIsFading(false)
        }, 800)
      }, 10000)
    }, 2000) // Start alternating after 2 seconds

    return () => {
      clearTimeout(startTimer)
      if (intervalId) {
        window.clearInterval(intervalId)
      }
      if (timeoutId) {
        window.clearTimeout(timeoutId)
      }
    }
  }, [locale, isVisible])


  return (
    <section
      data-theme="dark"
      className="relative h-[100vh] h-[100dvh] flex flex-col"
      style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}
    >
      {/* 3D Cloud Canvas Background - Lazy loaded */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <ParticleBackground isMobile={isMobile} />
        </Suspense>
      </div>

      {/* Navigation */}
      <HeroNavigation locale={locale} />

      {/* Hero Content */}
      <div className="relative flex-1 min-h-0 flex items-center justify-center px-6 md:px-12 lg:px-20 py-12 md:py-12 lg:py-16 overflow-hidden z-10">
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0 hero-gradient" />
        <div className="pointer-events-none absolute inset-0 hero-grid" />
        
        {/* Extended gradient that bleeds into next section - more visible */}
        <div 
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[60vh] md:h-[70vh] lg:h-[80vh]"
          style={{
            background: "radial-gradient(circle at 100% 0%, rgba(46, 88, 255, 0.08), transparent 95%)",
            opacity: 0.15,
            transform: "translateY(20%)",
            filter: "blur(40px)",
          }}
        />
        {/* Additional bottom gradient layer */}
        <div 
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[40vh] md:h-[50vh]"
          style={{
            background: "radial-gradient(circle at 100% 5%, rgba(184, 160, 255, 0.06), transparent 90%)",
            opacity: 0.12,
            transform: "translateY(30%)",
            filter: "blur(30px)",
          }}
        />
        {/* Third layer for depth */}
        <div 
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[25vh] md:h-[35vh]"
          style={{
            background: "radial-gradient(circle at 100% 10%, rgba(160, 200, 255, 0.04), transparent 85%)",
            opacity: 0.08,
            transform: "translateY(40%)",
            filter: "blur(20px)",
          }}
        />
        
        {/* Animated orbs - more visible for depth, reduced on mobile */}
        {!isMobile && (
          <>
            <div className="pointer-events-none absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full animate-pulse opacity-30" style={{ filter: 'blur(60px)' }} />
            <div className="pointer-events-none absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full animate-pulse opacity-25" style={{ animationDelay: '1s', animationDuration: '4s', filter: 'blur(50px)' }} />
            <div className="pointer-events-none absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-500/4 rounded-full animate-pulse opacity-20" style={{ animationDelay: '2s', animationDuration: '5s', filter: 'blur(40px)' }} />
            
            {/* Floating geometric shapes */}
            <div className="pointer-events-none absolute top-[15%] right-[20%] w-2 h-2 bg-foreground/20 rounded-full animate-float" />
            <div className="pointer-events-none absolute bottom-[25%] right-[15%] w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-float-delayed" />
            <div className="pointer-events-none absolute top-[60%] left-[10%] w-1 h-1 bg-purple-400/25 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
          </>
        )}

        <div
          key={`hero-content-${locale}`}
          className={`relative max-w-7xl mx-auto w-full transition-all duration-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div 
              key={`eyebrow-${locale}`}
              className={`mb-4 md:mb-8 hidden md:block transition-opacity duration-300 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground/80 font-medium">
                {copy[locale].hero.eyebrow}
              </span>
            </div>

            {/* Main Title */}
            <h1 key={locale} className="relative mb-4 md:mb-10 font-serif">
              <div className="grid opacity-0 pointer-events-none">
                <div className="col-start-1 row-start-1">
                  {copy[locale].hero.titleLines.map((line) => (
                    <span key={line} className="block text-[10.4vw] sm:text-[8vw] md:text-[5.6vw] lg:text-[4.8rem] xl:text-[5.6rem] leading-[0.95] tracking-[-0.02em]">
                      {line}
                    </span>
                  ))}
                </div>
                <div className="col-start-1 row-start-1">
                  {locale === "es" ? (
                    <>
                      <span className="block text-[10.4vw] sm:text-[8vw] md:text-[5.6vw] lg:text-[4.8rem] xl:text-[5.6rem] leading-[0.95] tracking-[-0.02em]">Soluciones</span>
                      <span className="block text-[10.4vw] sm:text-[8vw] md:text-[5.6vw] lg:text-[4.8rem] xl:text-[5.6rem] leading-[0.95] tracking-[-0.02em]">que funcionan</span>
                    </>
                  ) : (
                    <>
                      <span className="block text-[10.4vw] sm:text-[8vw] md:text-[5.6vw] lg:text-[4.8rem] xl:text-[5.6rem] leading-[0.95] tracking-[-0.02em]">Solutions</span>
                      <span className="block text-[10.4vw] sm:text-[8vw] md:text-[5.6vw] lg:text-[4.8rem] xl:text-[5.6rem] leading-[0.95] tracking-[-0.02em]">that work</span>
                    </>
                  )}
                </div>
              </div>

              <div 
                key={`title-content-${locale}`}
                className={`absolute inset-0 transition-opacity duration-300 ${isFading && isVisible ? "opacity-0" : isVisible ? "opacity-100" : "opacity-0"}`}
              >
                {altLineActive ? (
                  locale === "es" ? (
                    <>
                      <span className="block text-[10.4vw] sm:text-[8vw] md:text-[5.6vw] lg:text-[4.8rem] xl:text-[5.6rem] font-normal text-foreground leading-[0.95] tracking-[-0.02em]">Soluciones</span>
                      <span className="block text-[10.4vw] sm:text-[8vw] md:text-[5.6vw] lg:text-[4.8rem] xl:text-[5.6rem] font-normal text-foreground leading-[0.95] tracking-[-0.02em]">que funcionan</span>
                    </>
                  ) : (
                    <>
                      <span className="block text-[10.4vw] sm:text-[8vw] md:text-[5.6vw] lg:text-[4.8rem] xl:text-[5.6rem] font-normal text-foreground leading-[0.95] tracking-[-0.02em]">Solutions</span>
                      <span className="block text-[10.4vw] sm:text-[8vw] md:text-[5.6vw] lg:text-[4.8rem] xl:text-[5.6rem] font-normal text-foreground leading-[0.95] tracking-[-0.02em]">that work</span>
                    </>
                  )
                ) : (
                  <>
                    {copy[locale].hero.titleLines.map((line, index) => (
                      <span 
                        key={line} 
                        className="block text-[10.4vw] sm:text-[8vw] md:text-[5.6vw] lg:text-[4.8rem] xl:text-[5.6rem] font-normal text-foreground leading-[0.95] tracking-[-0.02em]"
                        style={{ 
                          animationDelay: `${index * 100}ms`,
                          animation: isVisible ? 'fadeInUp 0.8s ease-out forwards' : 'none',
                          opacity: isVisible ? 1 : 0
                        }}
                      >
                        {line}
                      </span>
                    ))}
                  </>
                )}
              </div>
            </h1>

            {/* Subtitle */}
            <p 
              key={`subtitle-${locale}`}
              className={`text-sm md:text-lg lg:text-xl text-muted-foreground/90 leading-relaxed font-normal max-w-2xl mb-5 md:mb-12 transition-opacity duration-300 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              {copy[locale].hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 mb-6 md:mb-12">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-7 md:px-8 py-3.5 md:py-4 text-sm md:text-base font-normal tracking-tight bg-foreground text-background overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] hover:shadow-xl hover:shadow-blue-500/30"
              >
                {/* Animated gradient shimmer effect */}
                <span 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(46, 88, 255, 0.2) 50%, transparent 100%)',
                    backgroundSize: '200% 100%',
                    animation: 'shimmer 2s ease-in-out infinite',
                  }}
                />
                <span className="relative z-10 flex items-center">
                  {copy[locale].ctaButton}
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                {/* Subtle glow effect on hover */}
                <span 
                  className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md -z-10"
                  style={{
                    background: 'radial-gradient(circle, rgba(46, 88, 255, 0.5) 0%, transparent 70%)',
                  }}
                />
              </a>
              <a
                href="#capabilities"
                className="group relative inline-flex items-center justify-center px-7 md:px-8 py-3.5 md:py-4 text-sm md:text-base font-normal tracking-tight border-2 border-foreground/30 text-foreground hover:border-foreground/60 hover:bg-foreground/5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg hover:shadow-blue-500/10 overflow-hidden"
              >
                {/* Animated border glow */}
                <span 
                  className="absolute inset-0 border-2 border-blue-500/40 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: '0 0 20px rgba(46, 88, 255, 0.3)',
                  }}
                />
                {/* Subtle background shimmer */}
                <span 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(46, 88, 255, 0.05) 50%, transparent 100%)',
                    backgroundSize: '200% 100%',
                    animation: 'shimmer 3s ease-in-out infinite',
                  }}
                />
                <span className="relative z-10">
                  {locale === "es" ? "Ver capacidades" : "View capabilities"}
                </span>
              </a>
            </div>

            {/* Stats Section */}
            <div className="hidden md:flex flex-wrap items-center gap-4 md:gap-8 mb-6 md:mb-12">
              {(
                locale === "es"
                  ? [
                      { value: "Barcelona", label: "Estudio" },
                      { value: "A medida", label: "Enfoque" },
                    ]
                  : [
                      { value: "Barcelona", label: "Studio" },
                      { value: "Custom", label: "Focus" },
                    ]
              ).map((stat, index) => (
                <div
                  key={stat.label}
                  className="flex items-baseline gap-2"
                  style={{
                    animationDelay: `${(index + 5) * 100}ms`,
                    animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none',
                    opacity: isVisible ? 1 : 0
                  }}
                >
                  <span className="text-xl md:text-3xl font-serif text-foreground tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[10px] md:text-sm uppercase tracking-[0.12em] text-muted-foreground/70 font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Service tags - visible on all screens but smaller on mobile */}
            <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-16">
              {(
                locale === "es"
                  ? ["Software a medida", "Herramientas internas", "Automatización", "Integraciones"]
                  : ["Custom software", "Internal tools", "Automation", "Integrations"]
              ).map((label, index) => (
                <span
                  key={label}
                  className="inline-flex items-center px-2.5 md:px-3 py-1 md:py-1.5 text-[9px] md:text-[10px] uppercase tracking-[0.14em] text-muted-foreground/80 border border-border/40 bg-black/20 backdrop-blur-sm hover:border-border/60 hover:text-foreground/80 transition-all duration-200"
                  style={{
                    animationDelay: `${(index + 8) * 100}ms`,
                    animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none',
                    opacity: isVisible ? 1 : 0
                  }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - positioned to avoid collision with service tags */}
      <div className="absolute bottom-16 md:bottom-8 left-1/2 -translate-x-1/2 hidden md:block z-50">
        <div className="flex flex-col items-center gap-2 text-muted-foreground/60">
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-foreground/40 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  )
}
