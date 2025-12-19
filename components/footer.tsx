import { GeometricPattern } from "@/components/geometric-pattern"
import type { Locale } from "@/lib/copy"

export function Footer({ locale = "en" }: { locale?: Locale }) {
  return (
    <footer data-theme="dark" className="bg-transparent dpd-chapter">
      <div className="dpd-section pt-14 md:pt-16 lg:pt-20 pb-10 md:pb-12">
        <div className="dpd-container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="text-sm md:text-base text-foreground tracking-tight">
                Dual Perspective Digital
              </div>
              <a
                href="mailto:hello@dualperspective.digital"
                className="text-sm md:text-base text-muted-foreground hover:opacity-70 transition-opacity"
              >
                hello@dualperspective.digital
              </a>
            </div>

            <div className="flex items-center gap-4 text-sm md:text-base text-muted-foreground">
              <a
                href={locale === "es" ? "/es/privacy" : "/privacy"}
                className="hover:opacity-70 transition-opacity"
              >
                {locale === "es" ? "Privacidad" : "Privacy"}
              </a>
              <span className="opacity-40">·</span>
              <a
                href={locale === "es" ? "/es/cookies" : "/cookies"}
                className="hover:opacity-70 transition-opacity"
              >
                {locale === "es" ? "Cookies" : "Cookies"}
              </a>
              <span className="opacity-40">·</span>
              <div className="text-foreground">
                © DPD {new Date().getFullYear()}
              </div>
            </div>
          </div>
        </div>
      </div>

      <GeometricPattern />
    </footer>
  )
}


