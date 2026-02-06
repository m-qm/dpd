"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
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
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 100)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#capabilities", label: locale === "es" ? "Servicios" : "Services" },
    { href: "#approach", label: locale === "es" ? "Enfoque" : "Approach" },
    { href: "#clients", label: locale === "es" ? "Clientes" : "Clients" },
  ]

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 px-6 md:px-12 lg:px-20 py-4 sm:py-5 md:py-6 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-[#0a0a0f]/85 backdrop-blur-md border-b border-border/30" : "bg-transparent"
      }`}
      style={{
        paddingTop: "max(1rem, env(safe-area-inset-top, 0px))",
        minHeight: "calc(3.5rem + env(safe-area-inset-top, 0px))",
      }}
    >
      <div className="dpd-container w-full flex justify-between items-center">
        <Link
          href={locale === "es" ? "/es" : "/"}
          className="flex items-center gap-3 min-w-0 flex-1 pr-2 hover:opacity-80 transition-opacity"
        >
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
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="relative text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent-blue group-hover:w-full transition-all duration-300 ease-out" />
              </motion.a>
            ))}
          </nav>

          <div className="hidden md:block h-5 w-px bg-border/40" />

          {/* CTA button */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs md:text-sm font-medium tracking-tight rounded-sm transition-all duration-300 ${
              isScrolled
                ? "bg-accent-blue text-[#f5f5f7] shadow-md shadow-accent-blue/20"
                : "bg-[#f5f5f7]/10 text-foreground hover:bg-[#f5f5f7]/15"
            }`}
          >
            {locale === "es" ? "Consulta" : "Book call"}
            <ArrowRight className="h-3.5 w-3.5" />
          </motion.a>

          <LanguageToggle />
        </div>
      </div>
    </motion.nav>
  )
}
