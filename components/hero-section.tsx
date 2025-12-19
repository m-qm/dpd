"use client"

import { useEffect, useState, useRef, useMemo } from "react"
import { HeroNavigation } from "@/components/hero-navigation"
import { copy, type Locale } from "@/lib/copy"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import * as THREE from "three"

// Cloud particle component
function CloudParticles({ particleCount = 4000, opacity = 0.2, size = 0.08 }: { particleCount?: number; opacity?: number; size?: number }) {
  const cloudRef = useRef<THREE.Points>(null)
  
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      
      // Create cloud-like distribution
      const radius = Math.random() * 20 + 8
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = (Math.random() - 0.5) * 12
      positions[i3 + 2] = radius * Math.sin(phi) * Math.sin(theta)
      
      // Galaxy-like color palette: purples, pinks, blues, whites
      const colorType = Math.random()
      const brightness = Math.random() * 0.3 + 0.5 // Subtle brightness
      
      if (colorType < 0.3) {
        // Deep purple/magenta
        colors[i3] = brightness * 0.8 // R
        colors[i3 + 1] = brightness * 0.4 // G
        colors[i3 + 2] = brightness * 1.0 // B
      } else if (colorType < 0.55) {
        // Pink/magenta
        colors[i3] = brightness * 1.0 // R
        colors[i3 + 1] = brightness * 0.6 // G
        colors[i3 + 2] = brightness * 0.9 // B
      } else if (colorType < 0.75) {
        // Blue/cyan
        colors[i3] = brightness * 0.3 // R
        colors[i3 + 1] = brightness * 0.7 // G
        colors[i3 + 2] = brightness * 1.0 // B
      } else if (colorType < 0.9) {
        // Purple-blue
        colors[i3] = brightness * 0.6 // R
        colors[i3 + 1] = brightness * 0.5 // G
        colors[i3 + 2] = brightness * 1.0 // B
      } else {
        // Soft white/blue-white
        colors[i3] = brightness * 0.95 // R
        colors[i3 + 1] = brightness * 0.95 // G
        colors[i3 + 2] = brightness * 1.0 // B
      }
    }
    
    return { positions, colors }
  }, [])

  useFrame((state) => {
    if (cloudRef.current) {
      cloudRef.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={cloudRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        vertexColors
        transparent
        opacity={opacity}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

// Multiple cloud layers for depth
function CloudLayers({ isMobile = false }: { isMobile?: boolean }) {
  const particleCount = isMobile ? 1200 : 4000
  const opacity = isMobile ? 0.12 : 0.2
  const size = isMobile ? 0.06 : 0.08
  
  return (
    <>
      <CloudParticles particleCount={particleCount} opacity={opacity} size={size} />
      {!isMobile && (
        <group position={[6, 1, -4]} scale={0.6}>
          <CloudParticles particleCount={Math.floor(particleCount * 0.6)} opacity={opacity * 0.8} size={size} />
        </group>
      )}
    </>
  )
}

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
    
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [locale])

  useEffect(() => {
    // Only start the alternating title animation after initial visibility
    if (!isVisible) return
    
    let timeoutId: number | undefined
    const intervalId = window.setInterval(() => {
      setIsFading(true)
      timeoutId = window.setTimeout(() => {
        setAltLineActive((prev) => !prev)
        setIsFading(false)
      }, 800)
    }, 10000)

    return () => {
      window.clearInterval(intervalId)
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
      {/* 3D Cloud Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 25]} fov={75} />
          
          {/* Lighting - Galaxy colors */}
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={0.5} color="#b8a0ff" />
          <pointLight position={[-10, -10, -5]} intensity={0.25} color="#ffa0d0" />
          <pointLight position={[5, -8, 3]} intensity={0.2} color="#a0c8ff" />
          <pointLight position={[-5, 8, -3]} intensity={0.2} color="#d0a0ff" />
          
          {/* Cloud layers */}
          <CloudLayers isMobile={isMobile} />
          
          {/* Controls for interaction */}
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.2}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </div>

      {/* Navigation */}
      <HeroNavigation locale={locale} />

      {/* Hero Content */}
      <div className="relative flex-1 min-h-0 flex items-center justify-center px-6 md:px-12 lg:px-20 py-8 md:py-12 lg:py-16 overflow-hidden z-10">
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
        
        {/* Animated orbs - more visible for depth */}
        <div className="pointer-events-none absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full animate-pulse opacity-30" style={{ filter: 'blur(60px)' }} />
        <div className="pointer-events-none absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full animate-pulse opacity-25" style={{ animationDelay: '1s', animationDuration: '4s', filter: 'blur(50px)' }} />
        <div className="pointer-events-none absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-500/4 rounded-full animate-pulse opacity-20" style={{ animationDelay: '2s', animationDuration: '5s', filter: 'blur(40px)' }} />
        
        {/* Floating geometric shapes */}
        <div className="pointer-events-none absolute top-[15%] right-[20%] w-2 h-2 bg-foreground/20 rounded-full animate-float" />
        <div className="pointer-events-none absolute bottom-[25%] right-[15%] w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-float-delayed" />
        <div className="pointer-events-none absolute top-[60%] left-[10%] w-1 h-1 bg-purple-400/25 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />

        <div
          className={`relative max-w-7xl mx-auto w-full transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="mb-4 md:mb-8 hidden md:block">
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground/80 font-medium">
                {copy[locale].hero.eyebrow}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="relative mb-6 md:mb-10 font-serif">
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

              <div className={`absolute inset-0 transition-opacity duration-800 ${isFading ? "opacity-0" : "opacity-100"}`}>
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
            <p className="text-sm md:text-lg lg:text-xl text-muted-foreground/90 leading-relaxed font-normal max-w-2xl mb-6 md:mb-12">
              {copy[locale].hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 mb-8 md:mb-12">
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
            <div className="flex flex-wrap items-center gap-6 md:gap-8 mb-8 md:mb-12">
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
                  <span className="text-2xl md:text-3xl font-serif text-foreground tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs md:text-sm uppercase tracking-[0.12em] text-muted-foreground/70 font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Service tags - visible on all screens but smaller on mobile */}
            <div className="flex flex-wrap gap-2 md:gap-3 mb-12 md:mb-16">
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
