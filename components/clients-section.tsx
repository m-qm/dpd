"use client"

import { SectionBadge } from "@/components/section-badge"
import { copy, type Locale } from "@/lib/copy"
import { IndustriesMarquee } from "@/components/industries-marquee"
import { ClientsMarquee } from "@/components/clients-marquee"

export function ClientsSection({
  inverted = false,
  locale = "en",
}: {
  inverted?: boolean
  locale?: Locale
}) {

  return (
    <section 
      id="clients"
      data-theme="dark"
      className="dpd-section dpd-chapter overflow-x-hidden"
    >
      <div className="dpd-container overflow-x-hidden">
        <SectionBadge number={4} label={copy[locale].clientsLabel} />
        <h2 className="dpd-display font-normal text-foreground mb-8">
          {copy[locale].clientsHeading}
        </h2>
        {copy[locale].clientsIntro && (
          <p className="dpd-body max-w-3xl mb-14 md:mb-16">
            {copy[locale].clientsIntro}
          </p>
        )}

        {/* Industries marquee */}
        <div className="mb-14 md:mb-16">
          <IndustriesMarquee locale={locale} />
        </div>

        {/* Clients logos marquee - runs in opposite direction */}
        <div className="mb-14 md:mb-16">
          <div className="flex items-center justify-center mb-6">
            <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground text-center">
              {locale === "es" ? "Nuestros clientes" : "Our clients"}
            </p>
          </div>
          <ClientsMarquee />
        </div>
      </div>
    </section>
  )
}
