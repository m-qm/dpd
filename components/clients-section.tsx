"use client"

import { SectionBadge } from "@/components/section-badge"
import { copy, type Locale } from "@/lib/copy"
import { ClientsMarquee } from "@/components/clients-marquee"

export function ClientsSection({
  inverted = false,
  locale = "en",
}: {
  inverted?: boolean
  locale?: Locale
}) {
  const testimonials = locale === "es"
    ? [
        { metric: "Tiempo de respuesta reducido un 80%", client: "Daikin" },
        { metric: "Captura de leads 3x en eventos", client: "PRO EXPO" },
        { metric: "Flujos de trabajo automatizados", client: "Maersk" },
      ]
    : [
        { metric: "Reduced response time by 80%", client: "Daikin" },
        { metric: "3x event lead capture", client: "PRO EXPO" },
        { metric: "Automated workflow processes", client: "Maersk" },
      ]

  return (
    <section
      id="clients"
      data-theme="dark"
      className="dpd-section dpd-chapter overflow-x-hidden"
    >
      <div className="dpd-container overflow-x-hidden">
        <SectionBadge number={3} label={copy[locale].clientsLabel} />
        <h2 className="dpd-display font-normal text-foreground mb-6">
          {copy[locale].clientsHeading}
        </h2>
        {copy[locale].clientsIntro && (
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mb-12 md:mb-16 leading-relaxed">
            {copy[locale].clientsIntro}
          </p>
        )}

        {/* Client metrics grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-14 md:mb-16">
          {testimonials.map((item) => (
            <div
              key={item.client}
              className="border border-border rounded-lg p-6 md:p-8"
            >
              <p className="text-lg md:text-xl font-normal text-foreground mb-3 tracking-tight leading-snug">
                {`"${item.metric}"`}
              </p>
              <span className="text-sm text-accent-blue font-medium">
                {`\u2014 ${item.client}`}
              </span>
            </div>
          ))}
        </div>

        {/* Clients logos marquee */}
        <div>
          <div className="flex items-center justify-center mb-5">
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              {locale === "es" ? "Nuestros clientes" : "Our clients"}
            </p>
          </div>
          <ClientsMarquee />
        </div>
      </div>
    </section>
  )
}
