"use client"

import { useEffect, useRef, useState } from "react"
import { SectionBadge } from "@/components/section-badge"
import { copy, type Locale } from "@/lib/copy"

export function CapabilitiesSection({
  inverted = false,
  locale = "en",
}: {
  inverted?: boolean
  locale?: Locale
}) {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            copy[locale].capabilities.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, index])
              }, index * 100)
            })
            observer.disconnect()
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
      id="capabilities" 
      ref={sectionRef} 
      className={`py-24 md:py-32 lg:py-48 px-6 md:px-12 lg:px-20 border-t border-border transition-colors duration-500 ${
        inverted ? "section-inverted" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <SectionBadge number={1} label={copy[locale].capabilitiesLabel} />
        <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-foreground mb-24 md:mb-32 tracking-tight leading-[0.9]">
          {copy[locale].capabilitiesHeading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 lg:gap-24">
          {copy[locale].capabilities.map((capability, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal text-foreground mb-6 leading-tight tracking-tight">
                {capability.title}
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-normal">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
