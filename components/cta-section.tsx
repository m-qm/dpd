import { SectionBadge } from "@/components/section-badge"
import { copy, type Locale } from "@/lib/copy"
import { ContactForm } from "@/components/contact-form"

export function CTASection({ inverted = false, locale = "en" }: { inverted?: boolean; locale?: Locale }) {
  return (
    <section 
      id="contact"
      data-theme={inverted ? "light" : "dark"}
      className="dpd-section-compact dpd-chapter scroll-mt-10 md:scroll-mt-14 pt-24 md:pt-32 lg:pt-40"
    >
      <div className="dpd-container-narrow">
        <SectionBadge number={6} label={locale === "es" ? "Contacto" : "Contact"} />
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-foreground mb-8 md:mb-12 leading-[1.1] tracking-tight">
          {copy[locale].ctaHeading}
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 md:mb-16 leading-relaxed font-normal max-w-3xl">
          {copy[locale].ctaBody}
        </p>

        <ContactForm locale={locale} />
      </div>
    </section>
  )
}
