"use client"

import { useEffect, useState, useRef } from "react"
import { LanguageToggle } from "@/components/language-toggle"
import type { Locale } from "@/lib/copy"
import Image from "next/image"

type HeroNavigationProps = {
  locale?: Locale
}

export function HeroNavigation({ locale = "en" }: HeroNavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      // Only update background state, header always stays visible
      setIsScrolled(currentScrollY > 100)
    }

    // Throttle scroll events for better performance
    let ticking = false
    let lastTime = 0
    const throttleDelay = 16 // ~60fps
    
    const throttledScroll = () => {
      const now = performance.now()
      if (!ticking && (now - lastTime) >= throttleDelay) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
          lastTime = now
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", throttledScroll)
  }, [])

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 px-6 md:px-12 lg:px-20 py-4 sm:py-5 md:py-6 lg:py-7 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/20" : "bg-transparent"
      }`}
      style={{ 
        paddingTop: 'max(1rem, env(safe-area-inset-top, 0px))',
        paddingBottom: 'max(1rem, env(safe-area-inset-bottom, 0px))',
        minHeight: 'calc(3.5rem + env(safe-area-inset-top, 0px) + env(safe-area-inset-bottom, 0px))',
        transform: 'translateY(0)',
        opacity: 1,
        visibility: 'visible',
        display: 'flex'
      }}
    >
      <div className="dpd-container w-full flex justify-between items-center">
        <div className="flex items-center gap-3 sm:gap-3.5 md:gap-4 min-w-0 flex-1 pr-2">
          <div className="flex-shrink-0">
            <Image
              src="/favicon-512.png"
              alt="Dual Perspective Digital"
              width={28}
              height={28}
              className="h-7 w-7 sm:h-8 sm:w-8 rounded-md object-contain"
              priority
              fetchPriority="high"
            />
          </div>
          <div className="text-xs sm:text-sm md:text-sm font-normal tracking-tight text-foreground truncate">
            Dual Perspective Digital
          </div>
        </div>
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-xs md:text-sm flex-shrink-0">
          <div className="hidden lg:flex items-center gap-1.5 text-foreground/60">
            <span className="text-xs">→</span>
            <a href="mailto:hello@dualperspective.digital" className="text-foreground/80 hover:text-foreground transition-colors font-normal text-xs">
              hello@dualperspective.digital
            </a>
          </div>
          <div className="hidden md:block h-5 w-px bg-border/40" />
          <LanguageToggle />
        </div>
      </div>
    </nav>
  )
}

