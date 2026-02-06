"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { LanguageToggle } from "@/components/language-toggle"
import { ArrowRight } from "lucide-react"
import type { Locale } from "@/lib/copy"
import Image from "next/image"

type HeroNavigationProps = {
  locale?: Locale
}

export function HeroNavigation({ locale = "en" }: HeroNavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    let ticking = false
    let lastTime = 0
    const throttleDelay = 16

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
    handleScroll()

    return () => window.removeEventListener("scroll", throttledScroll)
  }, [])

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 px-6 md:px-12 lg:px-20 py-4 sm:py-5 md:py-6 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-background/85 backdrop-blur-md border-b border-border/30" : "bg-transparent"
      }`}
      style={{ 
        paddingTop: 'max(1rem, env(safe-area-inset-top, 0px))',
        minHeight: 'calc(3.5rem + env(safe-area-inset-top, 0px))',
      }}
    >
      <div className="dpd-container w-full flex justify-between items-center">
        <Link href={locale === "es" ? "/es" : "/"} className="flex items-center gap-3 min-w-0 flex-1 pr-2 hover:opacity-80 transition-opacity">
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
          <div className="text-xs sm:text-sm font-normal tracking-tight text-foreground truncate">
            Dual Perspective Digital
          </div>
        </Link>
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6 flex-shrink-0">
          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#capabilities" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {locale === "es" ? "Servicios" : "Services"}
            </a>
            <a href="#approach" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {locale === "es" ? "Enfoque" : "Approach"}
            </a>
            <a href="#clients" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {locale === "es" ? "Clientes" : "Clients"}
            </a>
          </nav>

          <div className="hidden md:block h-5 w-px bg-border/40" />

          {/* CTA button - always visible when scrolled */}
          <a
            href="#contact"
            className={`hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs md:text-sm font-medium tracking-tight rounded-sm transition-all duration-300 ${
              isScrolled
                ? "bg-accent-blue text-foreground shadow-md shadow-accent-blue/20"
                : "bg-foreground/10 text-foreground hover:bg-foreground/15"
            }`}
          >
            {locale === "es" ? "Consulta" : "Book call"}
            <ArrowRight className="h-3.5 w-3.5" />
          </a>

          <LanguageToggle />
        </div>
      </div>
    </nav>
  )
}
