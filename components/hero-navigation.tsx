"use client"

import { useEffect, useState, useRef } from "react"
import { LanguageToggle } from "@/components/language-toggle"
import type { Locale } from "@/lib/copy"
import Image from "next/image"

type HeroNavigationProps = {
  locale?: Locale
}

export function HeroNavigation({ locale = "en" }: HeroNavigationProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show navbar at the very top (first 100px)
      if (currentScrollY < 100) {
        setIsVisible(true)
        setIsScrolled(false)
      } else {
        setIsScrolled(true)
        // Hide when scrolling down, show when scrolling up
        if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
      }
      
      lastScrollY.current = currentScrollY
    }

    // Throttle scroll events - more aggressive on mobile
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768
    let ticking = false
    let lastTime = 0
    const throttleDelay = isMobile ? 32 : 16 // ~30fps on mobile, 60fps on desktop
    
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
      className={`fixed top-0 left-0 right-0 flex justify-between items-center px-6 md:px-12 lg:px-20 py-3 md:py-4 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/20" : "bg-transparent"}`}
    >
      <div className="flex items-center gap-2.5">
        <div className="flex-shrink-0">
          <Image
            src="/favicon-512.png"
            alt="Dual Perspective Digital"
            width={28}
            height={28}
            className="h-7 w-7 rounded-md object-contain"
            priority
          />
        </div>
        <div className="text-xs md:text-sm font-normal tracking-tight text-foreground">Dual Perspective Digital</div>
      </div>
      <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm">
        <div className="hidden lg:flex items-center gap-1.5 text-foreground/60">
          <span className="text-xs">→</span>
          <a href="mailto:hello@dualperspective.digital" className="text-foreground/80 hover:text-foreground transition-colors font-normal text-xs">
            hello@dualperspective.digital
          </a>
        </div>
        <div className="hidden md:block h-5 w-px bg-border/40" />
        <LanguageToggle />
      </div>
    </nav>
  )
}

