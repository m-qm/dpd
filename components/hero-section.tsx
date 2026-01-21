"use client"

import { useEffect, useState, useRef, Suspense } from "react"
import { motion } from "framer-motion"
import { HeroNavigation } from "@/components/hero-navigation"
import { copy, type Locale } from "@/lib/copy"
import { ArrowRight } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import { textRevealVariants, staggerContainerVariants, buttonVariants } from "@/lib/animations"
import type { Variants } from "framer-motion"

// Mobile-optimized animation variants - simpler, faster
const mobileTextRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
}

const mobileStaggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

// Two value proposition options for each locale (only titles change)
const heroVariants = {
  en: [
    {
      titleLines: ["Digital Solutions", "Built Around You"],
    },
    {
      titleLines: ["Fast. Specialized.", "Visually Impactful."],
    },
  ],
  es: [
    {
      titleLines: ["Soluciones digitales", "a tu medida"],
    },
    {
      titleLines: ["Rápido. Especializado.", "Impactante."],
    },
  ],
}

export function HeroSection({ locale = "en" }: { locale?: Locale }) {
  const [currentVariant, setCurrentVariant] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const isMobile = useIsMobile()

  // Auto-rotate between variants every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade out
      setIsTransitioning(true)
      
      // After fade out completes, change content and fade in
      // Faster transitions on mobile
      const fadeOutDuration = isMobile ? 300 : 500
      setTimeout(() => {
        setCurrentVariant((prev) => (prev + 1) % heroVariants[locale].length)
        // Small delay before fade in for smoother transition
        setTimeout(() => {
          setIsTransitioning(false)
        }, 50)
      }, fadeOutDuration)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [locale, isMobile])

  const currentHero = heroVariants[locale][currentVariant]
  
  // Use simplified animations on mobile
  const containerVariants = isMobile ? mobileStaggerContainerVariants : staggerContainerVariants
  const textVariants = isMobile ? mobileTextRevealVariants : textRevealVariants

  return (
    <section
      data-theme="dark"
      className="relative min-h-screen flex flex-col"
    >
      {/* 3D Cloud Canvas Background - Disabled for Flora-style minimalism */}
      {/* {!isMobile && (
        <div className="absolute inset-0 z-0">
          <Suspense fallback={null}>
            <ParticleBackground isMobile={isMobile} />
          </Suspense>
        </div>
      )} */}

      {/* Simple smooth gradient background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(46, 88, 255, 0.12), transparent 70%)',
          filter: 'blur(80px)',
          opacity: 0.6,
        }}
      />

      {/* Navigation */}
      <HeroNavigation locale={locale} />

      {/* Hero Content */}
      <div className="relative flex-1 min-h-0 flex items-center justify-center px-6 md:px-12 lg:px-20 py-20 md:py-24 lg:py-28 overflow-hidden z-10">
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0 hero-gradient" />
        <div className="pointer-events-none absolute inset-0 hero-grid" />
        
        {/* Extended gradient that bleeds into next section */}
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
        
        {/* Animated orbs - more visible for depth (hidden on mobile via CSS if needed) */}
        <div className="hidden md:block pointer-events-none absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full animate-pulse opacity-30" style={{ filter: 'blur(60px)' }} />
        <div className="hidden md:block pointer-events-none absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full animate-pulse opacity-25" style={{ animationDelay: '1s', animationDuration: '4s', filter: 'blur(50px)' }} />
        <div className="hidden md:block pointer-events-none absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-500/4 rounded-full animate-pulse opacity-20" style={{ animationDelay: '2s', animationDuration: '5s', filter: 'blur(40px)' }} />
        
        {/* Floating geometric shapes */}
        <div className="hidden md:block pointer-events-none absolute top-[15%] right-[20%] w-2 h-2 bg-foreground/20 rounded-full animate-float" />
        <div className="hidden md:block pointer-events-none absolute bottom-[25%] right-[15%] w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-float-delayed" />
        <div className="hidden md:block pointer-events-none absolute top-[60%] left-[10%] w-1 h-1 bg-purple-400/25 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />

        {/* Flora-style floating visual element - Abstract gradient card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block absolute right-[8%] top-[20%] w-[420px] h-[520px] pointer-events-none z-[5]"
        >
          {/* Floating card with gradient and blur */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 2, 0],
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut",
              repeatType: "reverse" 
            }}
            className="relative w-full h-full"
          >
            {/* Main card */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10"
              style={{
                background: 'linear-gradient(135deg, rgba(46, 88, 255, 0.15) 0%, rgba(184, 160, 255, 0.1) 50%, rgba(0, 102, 255, 0.08) 100%)',
                boxShadow: '0 20px 60px rgba(46, 88, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              }}
            >
              {/* Grid pattern overlay */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px',
                }}
              />
              
              {/* Floating accent elements inside */}
              <div className="absolute top-8 left-8 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm" />
              <div className="absolute bottom-12 right-12 w-24 h-24 rounded-lg bg-blue-400/10 backdrop-blur-sm rotate-12" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-2 bg-white/20 rounded-full blur-sm" />
            </div>
            
            {/* Glow effect */}
            <div 
              className="absolute -inset-4 rounded-3xl opacity-40 blur-2xl"
              style={{
                background: 'radial-gradient(circle, rgba(46, 88, 255, 0.3) 0%, transparent 70%)',
              }}
            />
          </motion.div>
        </motion.div>

        <div className="dpd-container w-full relative z-10">
          {/* Single unified hero content - responsive design */}
          <div className="w-full">
            {/* Eyebrow - desktop only */}
            <div className="mb-2 md:mb-3 hidden md:block hero-fade-in" style={{ animationDelay: '0.1s' }}>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground/80 font-medium">
                {copy[locale].hero.eyebrow}
              </span>
            </div>

            {/* Main Title - responsive with CSS animations */}
            <h1 className="relative mb-5 md:mb-8 font-serif flex flex-col justify-center overflow-visible">
              <div className="relative">
                {currentHero.titleLines.map((line, index) => (
                  <span
                    key={`${locale}-${currentVariant}-${line}-${index}`}
                    className="block font-normal text-foreground leading-[0.95] tracking-[-0.02em] md:tracking-[-0.03em] hero-fade-in"
                    style={{
                      fontSize: 'clamp(38px, 11vw, 120px)',
                      animationDelay: `${0.1 + index * 0.1}s`,
                    }}
                  >
                    {line}
                  </span>
                ))}
              </div>
            </h1>

            {/* Subtitle */}
            <p 
              className="text-sm md:text-base lg:text-lg text-muted-foreground/90 leading-relaxed font-normal max-w-2xl mb-5 md:mb-8 hero-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              {copy[locale].hero.subtitle}
            </p>

            {/* CTAs - responsive layout */}
            <div 
              className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8 hero-fade-in"
              style={{ animationDelay: '0.5s' }}
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-normal tracking-tight bg-foreground text-background active:scale-[0.98] md:hover:shadow-xl md:hover:shadow-blue-500/30 transition-all duration-200"
              >
                <span className="flex items-center">
                  {copy[locale].ctaButton}
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5 md:group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </a>
              <a
                href="#capabilities"
                className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-normal tracking-tight border-2 border-foreground/30 text-foreground active:scale-[0.98] md:hover:border-foreground/60 md:hover:bg-foreground/5 transition-all duration-200"
              >
                {locale === "es" ? "Ver capacidades" : "View capabilities"}
              </a>
            </div>

            {/* Stats Section - desktop only */}
            <div 
              className="hidden md:flex flex-wrap items-center gap-6 md:gap-10 mb-6 md:mb-8 hero-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
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
              ).map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-baseline gap-2"
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
          </div>
        </div>
      </div>

      {/* Scroll indicator - positioned to avoid collision with service tags */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 hidden md:block z-[100] pointer-events-none"
      >
        <div className="flex flex-col items-center gap-3">
          <span 
            className="text-sm uppercase tracking-[0.2em] font-medium text-foreground"
            style={{
              textShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1)',
            }}
          >
            Scroll
          </span>
          <motion.div 
            className="w-0.5 h-12 bg-gradient-to-b from-foreground via-foreground/70 to-transparent"
            animate={{ 
              scaleY: [1, 1.2, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              boxShadow: '0 0 8px rgba(255, 255, 255, 0.4), 0 0 16px rgba(255, 255, 255, 0.2)',
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}