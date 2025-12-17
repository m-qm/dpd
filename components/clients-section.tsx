"use client"

import { useEffect, useRef, useState } from "react"
import { SectionBadge } from "@/components/section-badge"
import { copy, type Locale } from "@/lib/copy"
import Image from "next/image"

export function ClientsSection({
  inverted = false,
  locale = "en",
}: {
  inverted?: boolean
  locale?: Locale
}) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
            setIsVisible(true)
          }
        })
      },
      { threshold: [0.35, 0.6] },
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
      className="py-24 md:py-32 lg:py-48 px-6 md:px-12 lg:px-20 border-t border-border bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <SectionBadge number={4} label={copy[locale].clientsLabel} />
        <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-foreground mb-8 md:mb-10 tracking-tight leading-[0.9]">
          {copy[locale].clientsHeading}
        </h2>
        {copy[locale].clientsIntro && (
          <p className="text-sm md:text-base text-muted-foreground max-w-3xl mb-16 md:mb-20 leading-relaxed">
            {copy[locale].clientsIntro}
          </p>
        )}

        {/* Client types grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {copy[locale].clientTypes.map((type, index) => {
            const isLastRow = index >= copy[locale].clientTypes.length - (copy[locale].clientTypes.length % 3 || 3)
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

        {/* Current clients logos */}
        <div className="mt-16 md:mt-20 border-t border-border pt-10 md:pt-12">
          <div className="flex items-center justify-center mb-6">
            <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground text-center">
              {locale === "es" ? "Nuestros clientes" : "Our clients"}
            </p>
          </div>

          <div
            className={`flex flex-wrap items-center justify-center gap-10 md:gap-16 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {[
              { name: "PRO EXPO", src: "/clients/proexpo.webp", alt: "PRO EXPO logo — experiential events partner" },
              { name: "DAIKIN", src: "/clients/daikin.svg", alt: "Daikin logo — HVAC manufacturer client" },
              { name: "Maersk", src: "/clients/maersk.png", alt: "Maersk logo — global logistics and shipping client" },
            ].map((client) => {
              const isMaersk = client.name === "Maersk"
              const isDaikin = client.name === "DAIKIN"

              // Slightly larger Maersk, smaller Daikin, neutral Pro Expo
              const width = isMaersk ? 260 : isDaikin ? 110 : 180
              const height = isMaersk ? 120 : isDaikin ? 60 : 90
              const maxHeight = isMaersk
                ? "max-h-16 md:max-h-24"
                : isDaikin
                  ? "max-h-8 md:max-h-12"
                  : "max-h-12 md:max-h-18"

              return (
                <div key={client.name} className="flex h-16 md:h-28 items-center justify-center px-4 md:px-8">
                  <Image
                    src={client.src}
                    alt={client.alt}
                    width={width}
                    height={height}
                    className={`${maxHeight} w-auto object-contain`}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
