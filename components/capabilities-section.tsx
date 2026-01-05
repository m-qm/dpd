"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { SectionBadge } from "@/components/section-badge"
import { copy, type Locale } from "@/lib/copy"
import { useIsMobile } from "@/hooks/use-mobile"
import { staggerContainerVariants, gridItemVariants, fadeInUpVariants } from "@/lib/animations"

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
      className="dpd-section dpd-chapter dpd-theme-owner relative pt-24 md:pt-32 lg:pt-40"
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
        <motion.div
          initial="hidden"
          animate={visibleItems.length > 0 ? "visible" : "hidden"}
          variants={staggerContainerVariants}
        >
          <motion.div variants={fadeInUpVariants}>
            <SectionBadge number={1} label={copy[locale].capabilitiesLabel} />
          </motion.div>
          
          <motion.h2 variants={fadeInUpVariants} className="dpd-display font-normal text-foreground mb-6 md:mb-8">
            {copy[locale].capabilitiesHeading}
          </motion.h2>
          
          <motion.p variants={fadeInUpVariants} className="dpd-kicker mb-14 md:mb-16 max-w-3xl">
            {locale === "es"
              ? "Soluciones enfocadas en el proceso · Con base en Barcelona · Diseñadas para durar"
              : "Process-focused solutions · Barcelona-based · Built to last"}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {copy[locale].capabilities.map((capability, index) => {
            const kind = iconKinds[index % iconKinds.length]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={visibleItems.includes(index) ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={!isMobile ? { y: -8, scale: 1.02 } : undefined}
                className="dpd-card group hover:shadow-lg hover:shadow-blue-500/10"
                style={{
                  willChange: (!isMobile && !visibleItems.includes(index)) ? 'transform, opacity' : 'auto',
                  transform: 'translate3d(0, 0, 0)', // Hardware acceleration
                }}
              >
                <div className="relative p-8 md:p-10">
                  <div className="flex items-start justify-between gap-6 mb-10">
                    <div className="flex items-center gap-4">
                      <motion.div 
                        className="h-11 w-11 border border-border flex items-center justify-center bg-black/[0.02] group-hover:border-foreground/50 transition-colors duration-300"
                        whileHover={!isMobile ? { scale: 1.1, rotate: 180 } : undefined}
                        transition={{ duration: 0.6 }}
                      >
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
                      </motion.div>
                      <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                      </div>
                    </div>

                  </div>

                  <h3 className="text-xl md:text-2xl font-normal text-foreground mb-4 leading-tight tracking-tight">
                    {capability.title}
                  </h3>
                  <p className="dpd-body max-w-xl">
                    {capability.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
