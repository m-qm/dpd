"use client"

import { useEffect, useState } from "react"

export function useScrollAccent() {
  const [accentedSections, setAccentedSections] = useState<Set<string>>(new Set())

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const newAccented = new Set<string>()

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        const isInView = rect.top < window.innerHeight * 0.7 && rect.bottom > window.innerHeight * 0.3

        // Invert alternating sections (clients and contact get white background)
        // Skip capabilities (index 0) as it's always inverted
        if (isInView && (section.id === "clients" || section.id === "contact")) {
          newAccented.add(section.id)
        }
      })

      setAccentedSections(newAccented)
    }

    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", throttledScroll)
  }, [])

  return accentedSections
}

