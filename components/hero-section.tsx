"use client"

import { useEffect, useState, useRef, Suspense } from "react"
import { motion } from "framer-motion"
import { HeroNavigation } from "@/components/hero-navigation"
import { copy, type Locale } from "@/lib/copy"
import { ArrowRight } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import dynamic from "next/dynamic"
import { textRevealVariants, staggerContainerVariants, buttonVariants } from "@/lib/animations"

// Lazy load Three.js - it's heavy and only needed for the particle background
const ParticleBackground = dynamic(
  () => import("@/components/particle-background").then((mod) => ({ default: mod.ParticleBackground })),
  {
    ssr: false,
    loading: () => null, // Don't show loading state for background
  }
)


// Two value proposition options for each locale (only titles change)
const heroVariants = {
  en: [
    {
      titleLines: ["Digital Solutions", "Built Around", "Your Process"],
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
      setTimeout(() => {
        setCurrentVariant((prev) => (prev + 1) % heroVariants[locale].length)
        // Small delay before fade in for smoother transition
        setTimeout(() => {
          setIsTransitioning(false)
        }, 50)
      }, 500) // Wait for fade out to complete (500ms)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [locale])

  const currentHero = heroVariants[locale][currentVariant]

  return (
    <section
      data-theme="dark"
      className="relative min-h-screen flex flex-col"
    >
      {/* 3D Cloud Canvas Background - Lazy loaded (desktop only to reduce JS on mobile) */}
      {!isMobile && (
        <div className="absolute inset-0 z-0">
          <Suspense fallback={null}>
            <ParticleBackground isMobile={isMobile} />
          </Suspense>
        </div>
      )}

      {/* Simple smooth gradient background for mobile */}
      {isMobile && (
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(46, 88, 255, 0.12), transparent 70%)',
            filter: 'blur(80px)',
            opacity: 0.6,
          }}
        />
      )}

      {/* Navigation */}
      <HeroNavigation locale={locale} />

      {/* Hero Content */}
      <div className="relative flex-1 min-h-0 flex items-center justify-center px-6 md:px-12 lg:px-20 py-20 md:py-24 lg:py-28 overflow-hidden z-10">
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

        <div className="dpd-container w-full relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainerVariants}
            className="w-full"
          >
            {/* Eyebrow */}
            <motion.div variants={textRevealVariants} className="mb-2 md:mb-3 hidden md:block">
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground/80 font-medium">
                {copy[locale].hero.eyebrow}
              </span>
            </motion.div>

            {/* Main Title - Fixed height to prevent layout shift */}
            <motion.h1 
              variants={textRevealVariants}
              className="relative mb-4 md:mb-6 font-serif h-[32vw] sm:h-[26vw] md:h-[16rem] lg:h-[17rem] flex flex-col justify-center overflow-hidden"
            >
              <div className="relative">
                {currentHero.titleLines.map((line, index) => (
                  <motion.span
                    key={`${locale}-${currentVariant}-${line}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isTransitioning ? 0 : 1, y: isTransitioning ? 8 : 0 }}
                    transition={{
                      duration: isTransitioning ? 0.5 : 0.7,
                      ease: isTransitioning ? [0.4, 0, 0.2, 1] : [0.16, 1, 0.3, 1],
                      delay: isTransitioning ? 0 : index * 0.12,
                    }}
                    className="block text-[10.4vw] sm:text-[8vw] md:text-[5.6vw] lg:text-[4.8rem] xl:text-[5.6rem] font-normal text-foreground leading-[0.95] tracking-[-0.02em]"
                  >
                    {line}
                  </motion.span>
                ))}
              </div>
            </motion.h1>

            {/* Subtitle - static, doesn't change */}
            <motion.p 
              variants={textRevealVariants}
              className="text-sm md:text-base lg:text-lg text-muted-foreground/90 leading-relaxed font-normal max-w-2xl mb-6 md:mb-8"
            >
              {copy[locale].hero.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div 
              variants={textRevealVariants}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 mb-6 md:mb-8"
            >
              <motion.a
                href="#contact"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="group relative inline-flex items-center justify-center px-7 md:px-8 py-3.5 md:py-4 text-sm md:text-base font-normal tracking-tight bg-foreground text-background overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30"
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
              </motion.a>
              <motion.a
                href="#capabilities"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="group relative inline-flex items-center justify-center px-7 md:px-8 py-3.5 md:py-4 text-sm md:text-base font-normal tracking-tight border-2 border-foreground/30 text-foreground hover:border-foreground/60 hover:bg-foreground/5 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 overflow-hidden"
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
              </motion.a>
            </motion.div>

            {/* Stats Section */}
            <motion.div 
              variants={staggerContainerVariants}
              className="hidden md:flex flex-wrap items-center gap-6 md:gap-10 mb-6 md:mb-8"
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
              ).map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={textRevealVariants}
                  className="flex items-baseline gap-2"
                >
                  <span className="text-xl md:text-3xl font-serif text-foreground tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[10px] md:text-sm uppercase tracking-[0.12em] text-muted-foreground/70 font-medium">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Service tags - visible on all screens but smaller on mobile */}
            <motion.div 
              variants={staggerContainerVariants}
              className="flex flex-wrap gap-2.5 md:gap-3 mb-6 md:mb-8"
            >
              {(
                locale === "es"
                  ? ["Software a medida", "Displays interactivos", "Automatización de procesos", "Integraciones de sistemas"]
                  : ["Custom software", "Interactive displays", "Process automation", "System integrations"]
              ).map((label, index) => (
                <motion.span
                  key={label}
                  variants={textRevealVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="inline-flex items-center px-2.5 md:px-3 py-1 md:py-1.5 text-[9px] md:text-[10px] uppercase tracking-[0.14em] text-muted-foreground/80 border border-border/40 bg-black/20 backdrop-blur-sm hover:border-border/60 hover:text-foreground/80 transition-all duration-200 cursor-default"
                >
                  {label}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
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
