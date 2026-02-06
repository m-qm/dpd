import { SectionBadge } from "@/components/section-badge"
import { copy, type Locale } from "@/lib/copy"
import { ContactForm } from "@/components/contact-form"

export function CTASection({ inverted = false, locale = "en" }: { inverted?: boolean; locale?: Locale }) {
  return (
    <section
      id="contact"
      data-theme={inverted ? "light" : "dark"}
      className="dpd-section-compact dpd-chapter pt-[calc(6rem+30px)] md:pt-[calc(8rem+30px)] lg:pt-[calc(10rem+30px)] relative overflow-hidden"
    >
      {/* Subtle gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(46, 88, 255, 0.08), transparent 70%)",
        }}
      />

      <div className="dpd-container relative z-10">
        <SectionBadge number={5} label={locale === "es" ? "Contacto" : "Contact"} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
          {/* Left: copy */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-foreground mb-6 leading-[1.1] tracking-tight">
              {copy[locale].ctaHeading}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
              {copy[locale].ctaBody}
            </p>

            {/* What to expect */}
            <div className="border-t border-border pt-6">
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-4">
                {locale === "es" ? "Qué esperar" : "What to expect"}
              </p>
              <ul className="flex flex-col gap-3">
                {(locale === "es"
                  ? [
                      "Llamada de 30 minutos, sin compromiso",
                      "Análisis de tu flujo de trabajo actual",
                      "Propuesta clara con alcance y precio",
                    ]
                  : [
                      "30-minute call, no commitment",
                      "Analysis of your current workflow",
                      "Clear proposal with scope and pricing",
                    ]
                ).map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <ContactForm locale={locale} />
          </div>
        </div>
      </div>
    </section>
  )
}
