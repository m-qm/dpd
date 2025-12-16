"use client"

import { useEffect, useState } from "react"

export function useScrollInversion() {
  const [invertedSections, setInvertedSections] = useState<Set<string>>(new Set())

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const newInverted = new Set<string>()

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        // Check if section is in the viewport
        const isInView = rect.top < window.innerHeight * 0.7 && rect.bottom > window.innerHeight * 0.3

        // Alternate sections: odd indices (1, 3, 5) are inverted when in view
        // This creates: dark, light, dark, light pattern
        if (isInView && index % 2 === 1) {
          newInverted.add(section.id)
        }
      })

      setInvertedSections(newInverted)
    }

    // Throttle scroll events for better performance
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
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", throttledScroll)
  }, [])

  return invertedSections
}

