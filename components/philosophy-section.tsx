"use client"

import { useEffect, useRef, useState } from "react"
import { SectionBadge } from "@/components/section-badge"

export function PhilosophySection({ inverted = false }: { inverted?: boolean }) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className={`py-24 md:py-32 lg:py-48 px-6 md:px-12 lg:px-20 border-t border-border transition-colors duration-500 ${
        inverted ? "section-inverted" : ""
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <SectionBadge number={4} label="Philosophy" />
        <blockquote
          className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-foreground leading-[1.1] tracking-tight transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          We believe digital experiences should feel effortless, intuitive, and considered — never outdated, never
          overdesigned.
        </blockquote>
      </div>
    </section>
  )
}
