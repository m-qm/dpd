"use client"

import { type Locale } from "@/lib/copy"
import { copy } from "@/lib/copy"

export function IndustriesMarquee({ locale = "en" }: { locale?: Locale }) {
  const industries = copy[locale].clientTypes

  // Duplicate items for seamless infinite scroll (need exact duplicates for smooth loop)
  const duplicatedIndustries = [...industries, ...industries]

  return (
    <div className="relative w-full overflow-hidden border-y border-border/40 py-6 md:py-8">
      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        {duplicatedIndustries.map((industry, index) => (
          <div
            key={`${industry}-${index}`}
            className="flex items-center px-8 md:px-12 flex-shrink-0"
          >
            <span className="text-lg md:text-xl lg:text-2xl font-normal text-foreground tracking-tight">
              {industry}
            </span>
            <span className="mx-8 md:mx-12 text-muted-foreground">·</span>
          </div>
        ))}
      </div>
    </div>
  )
}

