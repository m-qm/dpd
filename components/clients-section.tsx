"use client"

import { useEffect, useRef, useState } from "react"
import { SectionBadge } from "@/components/section-badge"

const clientTypes = [
  "Luxury brands",
  "Cultural institutions",
  "Premium hospitality",
  "Design-led agencies",
  "High-end retail",
]

export function ClientsSection({ inverted = false }: { inverted?: boolean }) {
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
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="clients"
      ref={sectionRef} 
      className={`py-24 md:py-32 lg:py-48 px-6 md:px-12 lg:px-20 border-t border-border transition-colors duration-500 ${
        inverted ? "section-inverted" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <SectionBadge number={3} label="Clients" />
        <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-foreground mb-24 md:mb-32 tracking-tight leading-[0.9]">
          Select Clients
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {clientTypes.map((type, index) => {
            const isLastRow = index >= clientTypes.length - (clientTypes.length % 3 || 3)
            const isLastCol = (index + 1) % 3 === 0
            
            return (
              <div
                key={index}
                className={`py-12 md:py-16 px-6 md:px-8 border-b border-r border-border transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                } ${isLastCol ? "lg:border-r-0" : ""} ${isLastRow ? "border-b-0" : ""}`}
              >
                <p className="text-xl md:text-2xl font-normal text-foreground tracking-tight">{type}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
