import { SectionBadge } from "@/components/section-badge"
import { copy, type Locale } from "@/lib/copy"
import { ContactForm } from "@/components/contact-form"

export function CTASection({ inverted = false, locale = "en" }: { inverted?: boolean; locale?: Locale }) {
  return (
    <section 
      id="contact"
      className={`py-24 md:py-32 lg:py-48 px-6 md:px-12 lg:px-20 border-t border-border transition-colors duration-500 ${
        inverted ? "section-inverted" : ""
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <SectionBadge number={5} label="Contact" />
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
