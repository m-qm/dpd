"use client"

import type { Locale } from "@/lib/copy"

export function Footer({ locale = "en" }: { locale?: Locale }) {
  return (
    <footer data-theme="dark" className="bg-transparent dpd-chapter">
      <div className="dpd-section pt-16 md:pt-20 pb-12 md:pb-16">
        <div className="dpd-container">
          {/* Top: brand + nav */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 md:mb-16">
            <div>
              <div className="text-lg md:text-xl font-serif font-normal text-foreground tracking-tight mb-2">
                Dual Perspective Digital
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                {locale === "es"
                  ? "Automatización WhatsApp y displays interactivos. Con base en Barcelona."
                  : "WhatsApp automation and interactive displays. Barcelona-based."}
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a href="#capabilities" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {locale === "es" ? "Servicios" : "Services"}
              </a>
              <a href="#approach" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {locale === "es" ? "Enfoque" : "Approach"}
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {locale === "es" ? "Contacto" : "Contact"}
              </a>
            </div>
          </div>

          {/* Bottom: legal */}
          <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-4">
              <a
                href="mailto:hello@dualperspective.digital"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                hello@dualperspective.digital
              </a>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <a
                href={locale === "es" ? "/es/privacy" : "/privacy"}
                className="hover:text-foreground transition-colors"
              >
                {locale === "es" ? "Privacidad" : "Privacy"}
              </a>
              <span className="opacity-30">|</span>
              <a
                href={locale === "es" ? "/es/cookies" : "/cookies"}
                className="hover:text-foreground transition-colors"
              >
                Cookies
              </a>
              <span className="opacity-30">|</span>
              <span className="text-muted-foreground/60">
                {`\u00a9 Dual Perspective ${new Date().getFullYear()}`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
