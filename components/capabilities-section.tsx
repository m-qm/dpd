"use client"

import { useEffect, useRef, useState } from "react"
import { SectionBadge } from "@/components/section-badge"
import { copy, type Locale } from "@/lib/copy"
import { useIsMobile } from "@/hooks/use-mobile"

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
  const isMobile = useIsMobile()
  const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches

  useEffect(() => {
    // Lower threshold on mobile for better performance
    const threshold = isMobile ? [0.05, 0.15] : [0.12, 0.35]
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Trigger earlier on smaller viewports (tall sections may never reach high intersection ratios on mobile).
          const minRatio = isMobile ? 0.05 : 0.12
          if (entry.isIntersecting && entry.intersectionRatio >= minRatio) {
            // On mobile or reduced motion, show all items at once or with minimal delay
            const delay = (isMobile || prefersReducedMotion) ? 30 : 120
            
            copy[locale].capabilities.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, index])
              }, index * delay)
            })
            observer.disconnect()
          }
        })
      },
      { threshold, rootMargin: isMobile ? '50px' : '0px' }, // Larger rootMargin on mobile
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [locale, isMobile, prefersReducedMotion])

  return (
    <section 
      id="capabilities" 
      ref={sectionRef} 
      data-theme={inverted ? "light" : "dark"}
      className="dpd-section dpd-chapter relative pt-24 md:pt-32 lg:pt-40"
    >
      {/* Gradient at bottom center */}
      
      {/* Additional subtle gradient layer for smoother transition */}
      <div 
        className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-[50vh] md:h-[40vh]"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(46, 88, 255, 0.12), transparent 65%)",
          filter: "blur(110px)",
          opacity: 0.6,
        }}
      />
      {/* Grid overlay to match Hero aesthetic */}
      <div className="pointer-events-none absolute inset-0 hero-grid" />
      
      <div className="dpd-container relative z-10">
        <SectionBadge number={1} label={copy[locale].capabilitiesLabel} />
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-normal text-foreground leading-[1.1] tracking-tight mb-6 md:mb-8">
          {copy[locale].capabilitiesHeading}
        </h2>
        <p className="dpd-kicker mb-14 md:mb-16 max-w-3xl">
          {locale === "es"
            ? "Soluciones enfocadas en el proceso · Con base en Barcelona · Diseñadas para durar"
            : "Process-focused solutions · Barcelona-based · Built to last"}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {copy[locale].capabilities.map((capability, index) => {
            const kind = iconKinds[index % iconKinds.length]
            return (
              <div
                key={index}
                className={`dpd-card group ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                } hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-500`}
                style={{
                  willChange: (!isMobile && !visibleItems.includes(index)) ? 'transform, opacity' : 'auto',
                  transform: 'translate3d(0, 0, 0)', // Hardware acceleration
                }}
              >
                <div className="relative p-8 md:p-10">
                  <div className="flex items-start justify-between gap-6 mb-10">
                    <div className="flex items-center gap-4">
                      <div className="h-11 w-11 border border-border flex items-center justify-center bg-black/[0.02] group-hover:border-foreground/50 group-hover:scale-110 transition-all duration-300">
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

                  <h3 className="text-2xl md:text-3xl font-normal text-foreground mb-4 leading-tight tracking-tight">
                    {capability.title}
                  </h3>
                  <p className="dpd-body max-w-xl">
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
