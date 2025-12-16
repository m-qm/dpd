"use client"

import { useEffect, useRef, useState } from "react"
import { SectionBadge } from "@/components/section-badge"

const steps = [
  {
    title: "Discovery & Strategy",
    description: "Deep understanding of your brand, audience, and objectives through thoughtful dialogue and strategic analysis.",
  },
  {
    title: "Design & Art Direction",
    description: "Defining refined visual languages and interaction patterns that communicate with clarity and distinction.",
  },
  {
    title: "Engineering & Craft",
    description: "Building with technical precision, exceptional performance, and meticulous attention to detail.",
  },
  {
    title: "Ongoing Partnership",
    description: "Evolving your digital presence as your brand grows, maintaining the highest standards of quality and execution.",
  },
]

export function ApproachSection({ inverted = false }: { inverted?: boolean }) {
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
      id="approach"
      ref={sectionRef}
      className={`py-24 md:py-32 lg:py-48 px-6 md:px-12 lg:px-20 border-t border-border transition-colors duration-500 ${
        inverted ? "section-inverted" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <SectionBadge number={2} label="Approach" />
        <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-foreground mb-12 md:mb-16 tracking-tight leading-[0.9]">
          Our Approach
        </h2>

        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mb-24 md:mb-32 leading-relaxed font-normal">
          We work with precision and purpose, balancing aesthetic refinement with functional excellence. Every element is considered, every detail intentional.
        </p>

        <div className="space-y-0">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`py-12 md:py-16 border-b border-border transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
            >
              <div className="flex items-start">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal text-foreground mb-6 tracking-tight leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
