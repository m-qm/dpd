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
  const iconKinds = ["square", "circle", "triangle", "line", "grid"] as const

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Trigger earlier on smaller viewports (tall sections may never reach high intersection ratios on mobile).
          if (entry.isIntersecting && entry.intersectionRatio >= 0.12) {
            copy[locale].capabilities.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, index])
              }, index * 120)
            })
            observer.disconnect()
          }
        })
      },
      { threshold: [0.12, 0.35] },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [locale])

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {copy[locale].capabilities.map((capability, index) => {
            const kind = iconKinds[index % iconKinds.length]
            return (
              <div
                key={index}
                className={`group relative border border-border bg-black/[0.03] hover:bg-black/[0.05] transition-all duration-500 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                } hover:-translate-y-1`}
              >
                {/* subtle inner grid */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.12] hero-grid" />

                <div className="relative p-8 md:p-10">
                  <div className="flex items-start justify-between gap-6 mb-10">
                    <div className="flex items-center gap-4">
                      <div className="h-11 w-11 border border-border flex items-center justify-center bg-background/40">
                        {kind === "square" && <div className="h-5 w-5 border border-foreground/70" />}
                        {kind === "circle" && <div className="h-5 w-5 rounded-full border border-foreground/70" />}
                        {kind === "triangle" && (
                          <div
                            className="h-5 w-5 border border-foreground/70"
                            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                          />
                        )}
                        {kind === "line" && <div className="h-px w-6 bg-foreground/70" />}
                        {kind === "grid" && (
                          <div className="grid grid-cols-2 gap-1">
                            <div className="h-2 w-2 border border-foreground/70" />
                            <div className="h-2 w-2 border border-foreground/40" />
                            <div className="h-2 w-2 border border-foreground/40" />
                            <div className="h-2 w-2 border border-foreground/70" />
                          </div>
                        )}
                      </div>
                      <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                      </div>
                    </div>

                  </div>

                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal text-foreground mb-4 leading-tight tracking-tight">
                    {capability.title}
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-normal max-w-xl">
                    {capability.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
