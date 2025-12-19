"use client"

import type { MouseEvent } from "react"
import { LanguageToggle } from "@/components/language-toggle"
import type { Locale } from "@/lib/copy"
import Image from "next/image"

type HeroNavigationProps = {
  locale?: Locale
}

export function HeroNavigation({ locale = "en" }: HeroNavigationProps) {
  const scrollToId = (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    
    // Scroll smoothly to the section
    el.scrollIntoView({ behavior: "smooth", block: "start" })
    window.history.replaceState(null, "", `#${id}`)
    
    // Add subtle fade-in effect by triggering a class
    el.classList.add("section-reveal")
    
    // Remove the class after animation completes to allow re-triggering
    setTimeout(() => {
      el.classList.remove("section-reveal")
    }, 1000)
  }

  return (
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
  )
}

