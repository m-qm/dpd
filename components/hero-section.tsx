"use client"

import { useEffect, useState, useRef, useMemo } from "react"
import type { MouseEvent } from "react"
import { LanguageToggle } from "@/components/language-toggle"
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
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
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
  }, [locale])

  const scrollToId = (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: "smooth", block: "center" })
    window.history.replaceState(null, "", `#${id}`)
  }

  return (
    <section
      data-theme="dark"
      className="relative h-[100svh] flex flex-col"
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
      <nav className="relative flex justify-between items-center px-6 md:px-12 lg:px-20 py-6 md:py-10 shrink-0 z-50">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0">
            <Image
              src="/favicon-512.png"
              alt="Dual Perspective Digital"
              width={36}
              height={36}
              className="h-9 w-9 rounded-md object-contain"
              priority
            />
          </div>
          <div className="text-sm md:text-base font-normal tracking-tight text-foreground">Dual Perspective Digital</div>
        </div>
        <div className="flex items-center gap-5 md:gap-8 text-sm md:text-base">
          <a
            href="#capabilities"
            onClick={scrollToId("capabilities")}
            className="text-foreground/80 hover:text-foreground transition-colors font-normal hidden md:inline"
          >
            {locale === "es" ? "Capacidades" : "Capabilities"}
          </a>
          <a
            href="#faq"
            onClick={scrollToId("faq")}
            className="text-foreground/80 hover:text-foreground transition-colors font-normal hidden md:inline"
          >
            FAQ
          </a>
          <a
            href="#contact"
            onClick={scrollToId("contact")}
            className="text-foreground/80 hover:text-foreground transition-colors font-normal hidden md:inline"
          >
            {locale === "es" ? "Contacto" : "Contact"}
          </a>
          <div className="hidden lg:flex items-center gap-2 text-foreground/60">
            <span>→</span>
            <a href="mailto:hello@dualperspective.digital" className="text-foreground/80 hover:text-foreground transition-colors font-normal text-sm">
              hello@dualperspective.digital
            </a>
          </div>
          <div className="hidden md:block h-5 w-px bg-border/40" />
          <LanguageToggle />
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative flex-1 min-h-0 flex items-center px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-20 overflow-hidden z-10">
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0 hero-gradient" />
        <div className="pointer-events-none absolute inset-0 hero-grid" />
        
        {/* Extended gradient that bleeds into next section - creates seamless transition */}
        <div 
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[60vh] md:h-[70vh] lg:h-[80vh]"
          style={{
            background: "radial-gradient(circle at 100% 0%, rgba(46, 88, 255, 0.18), transparent 75%)",
            filter: "blur(100px)",
            opacity: 0.7,
            transform: "translateY(20%)",
          }}
        />
        {/* Additional bottom gradient layer for extra smoothness */}
        <div 
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[40vh] md:h-[50vh]"
          style={{
            background: "radial-gradient(circle at 100% 5%, rgba(46, 88, 255, 0.12), transparent 65%)",
            filter: "blur(110px)",
            opacity: 0.5,
            transform: "translateY(30%)",
          }}
        />
        {/* Ultra-subtle third layer for perfect blend */}
        <div 
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[25vh] md:h-[35vh]"
          style={{
            background: "radial-gradient(circle at 100% 10%, rgba(46, 88, 255, 0.06), transparent 60%)",
            filter: "blur(120px)",
            opacity: 0.4,
            transform: "translateY(40%)",
          }}
        />
        
        {/* Subtle animated orbs - more subtle */}
        <div className="pointer-events-none absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl animate-pulse opacity-50" />
        <div className="pointer-events-none absolute bottom-1/4 left-1/4 w-80 h-80 bg-white/2 rounded-full blur-3xl animate-pulse opacity-40" style={{ animationDelay: '1s', animationDuration: '4s' }} />

        <div
          className={`relative max-w-7xl mx-auto w-full transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="mb-4 md:mb-8">
              <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-muted-foreground/80 font-medium">
                {copy[locale].hero.eyebrow}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="relative mb-6 md:mb-10">
              <div className="grid opacity-0 pointer-events-none">
                <div className="col-start-1 row-start-1">
                  {copy[locale].hero.titleLines.map((line) => (
                    <span key={line} className="block text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[6rem] xl:text-[7rem] leading-[0.95] tracking-[-0.03em]">
                      {line}
                    </span>
                  ))}
                </div>
                <div className="col-start-1 row-start-1">
                  <span className="block text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[6rem] xl:text-[7rem] leading-[0.95] tracking-[-0.03em]">
                    {locale === "es" ? "Soluciones digitales a medida" : "Local development, global impact"}
                  </span>
                </div>
              </div>

              <div className={`absolute inset-0 transition-opacity duration-800 ${isFading ? "opacity-0" : "opacity-100"}`}>
                {altLineActive ? (
                  <span className="block text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[6rem] xl:text-[7rem] font-normal text-foreground leading-[0.95] tracking-[-0.03em]">
                    {locale === "es" ? "Soluciones digitales a medida" : "Local development, global impact"}
                  </span>
                ) : (
                  <>
                    {copy[locale].hero.titleLines.map((line, index) => (
                      <span 
                        key={line} 
                        className="block text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[6rem] xl:text-[7rem] font-normal text-foreground leading-[0.95] tracking-[-0.03em]"
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
            <p className="text-base md:text-xl lg:text-2xl text-muted-foreground/90 leading-relaxed font-normal max-w-2xl mb-6 md:mb-12">
              {copy[locale].hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 mb-6 md:mb-12">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-normal tracking-tight bg-foreground text-background hover:bg-foreground/90 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                {copy[locale].ctaButton}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#capabilities"
                className="inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-normal tracking-tight border-2 border-foreground/30 text-foreground hover:border-foreground/60 hover:bg-foreground/5 transition-all duration-200"
              >
                {locale === "es" ? "Ver capacidades" : "View capabilities"}
              </a>
            </div>

            {/* Service tags - hidden on mobile */}
            <div className="hidden md:flex flex-wrap gap-3 mb-16 md:mb-20">
              {(
                locale === "es"
                  ? ["Software a medida", "Herramientas internas", "Automatización", "Integraciones"]
                  : ["Custom software", "Internal tools", "Automation", "Integrations"]
              ).map((label, index) => (
                <span
                  key={label}
                  className="inline-flex items-center px-4 py-2 text-xs uppercase tracking-[0.14em] text-muted-foreground/80 border border-border/40 bg-black/20 backdrop-blur-sm hover:border-border/60 hover:text-foreground/80 transition-all duration-200"
                  style={{
                    animationDelay: `${(index + 3) * 100}ms`,
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
          <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-foreground/40 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  )
}
