"use client"

import { useEffect, useState } from "react"
import { AnimatedD } from "@/components/animated-d"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Minimal Navigation - Norgram style */}
      <nav className="flex justify-between items-center px-6 md:px-12 lg:px-20 py-8 md:py-10">
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
        </div>
      </nav>

      {/* Hero Content - Norgram style large typography */}
      <div className="flex-1 flex items-center justify-center px-6 md:px-12 lg:px-20 py-20 md:py-32">
        <div
          className={`max-w-7xl mx-auto w-full transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h1 className="text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-normal text-foreground mb-16 md:mb-20 leading-[0.85] tracking-[-0.02em]">
            Digital
            <br />
            Experiences
            <br />
            That Endure
          </h1>

          <div className="max-w-2xl">
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-normal">
              A design studio creating essential digital experiences for luxury brands, cultural institutions, and discerning agencies. Where precision meets purpose.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
