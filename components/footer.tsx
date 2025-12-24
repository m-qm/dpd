"use client"

import type { Locale } from "@/lib/copy"

export function Footer({ locale = "en" }: { locale?: Locale }) {
  return (
    <footer data-theme="dark" className="bg-transparent dpd-chapter">
      <div className="dpd-section pt-16 md:pt-20 lg:pt-24 pb-12 md:pb-16 lg:pb-20">
        <div className="dpd-container">
          {/* Mobile: Vertical stack, Desktop: Horizontal */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-6">
            {/* Brand section */}
            <div className="space-y-3 md:space-y-2">
              <div className="text-base md:text-lg font-normal text-foreground tracking-tight">
                Dual Perspective Digital
              </div>
              <a
                href="mailto:hello@dualperspective.digital"
                className="block text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                hello@dualperspective.digital
              </a>
            </div>

            {/* Links section - better mobile layout */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 w-full md:w-auto">
              {/* Mobile: Stack links vertically */}
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
                <a
                  href={locale === "es" ? "/es/privacy" : "/privacy"}
                  className="text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors duration-200 py-1 md:py-0"
                >
                  {locale === "es" ? "Privacidad" : "Privacy"}
                </a>
                <span className="hidden md:inline opacity-30">·</span>
                <a
                  href={locale === "es" ? "/es/cookies" : "/cookies"}
                  className="text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors duration-200 py-1 md:py-0"
                >
                  {locale === "es" ? "Cookies" : "Cookies"}
                </a>
              </div>
              
              {/* Copyright - separate on mobile */}
              <div className="text-xs md:text-sm text-muted-foreground/80 pt-2 md:pt-0 md:pl-4 md:border-l md:border-border/30">
                © Dual Perspective {new Date().getFullYear()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


