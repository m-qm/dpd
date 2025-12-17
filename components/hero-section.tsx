"use client"

import { useEffect, useState } from "react"
import { LanguageToggle } from "@/components/language-toggle"
import { copy, type Locale } from "@/lib/copy"
import Image from "next/image"

export function HeroSection({ locale = "en" }: { locale?: Locale }) {
  const [isVisible, setIsVisible] = useState(false)
  const [altLineActive, setAltLineActive] = useState(false)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    // Small delay so the entrance animation starts after initial paint
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 450)

    return () => clearTimeout(timer)
  }, [])

  // Alternate the middle line between core claim and "Local development, global impact"
  // with a very subtle, slow fade-out → swap → fade-in loop
  useEffect(() => {
    let timeoutId: number | undefined
    const intervalId = window.setInterval(() => {
      setIsFading(true)

      timeoutId = window.setTimeout(() => {
        setAltLineActive((prev) => !prev)
        setIsFading(false)
      }, 1100)
    }, 9000)

    return () => {
      window.clearInterval(intervalId)
      if (timeoutId) {
        window.clearTimeout(timeoutId)
      }
    }
  }, [locale])

  return (
    <section className="relative min-h-screen flex flex-col bg-gradient-to-b from-background via-background/95 to-black">
      {/* Minimal Navigation - Norgram style */}
      <nav className="flex justify-between items-center px-6 md:px-12 lg:px-20 py-8 md:py-10 bg-black/40 backdrop-blur-sm border-b border-border/60">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0">
            <Image
              src="/favicon-512.png"
              alt="Dual Perspective Digital"
              width={32}
              height={32}
              className="h-8 w-8 rounded-md object-contain"
              priority
            />
          </div>
          <div className="text-base md:text-lg font-normal tracking-tight">Dual Perspective Digital</div>
        </div>
        <div className="flex items-center gap-4 md:gap-6 text-sm md:text-base">
          <a href="#capabilities" className="text-foreground hover:opacity-60 transition-opacity font-normal hidden md:inline">
            {locale === "es" ? "Capacidades" : "Capabilities"}
          </a>
          <a href="#faq" className="text-foreground hover:opacity-60 transition-opacity font-normal hidden md:inline">
            FAQ
          </a>
          <a href="#contact" className="text-foreground hover:opacity-60 transition-opacity font-normal hidden md:inline">
            {locale === "es" ? "Contacto" : "Contact"}
          </a>
          <div className="hidden md:flex items-center gap-2 text-foreground">
            <span className="text-muted-foreground">→</span>
            <a href="mailto:hello@dualperspective.digital" className="text-foreground hover:opacity-60 transition-opacity font-normal">
              hello@dualperspective.digital
            </a>
          </div>
          <div className="hidden md:block h-4 w-px bg-border/60" />
          <LanguageToggle />
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative flex-1 flex items-center px-6 md:px-12 lg:px-20 py-20 md:py-28 lg:py-32 overflow-hidden">
        {/* Background accents */}
        <div className="pointer-events-none absolute inset-0 hero-gradient" />
        <div className="pointer-events-none absolute inset-0 hero-grid" />

        <div
          className={`relative max-w-7xl mx-auto w-full transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Copy */}
            <div className="lg:col-span-7">
              <div className="text-xs md:text-sm uppercase tracking-[0.18em] text-muted-foreground mb-6">
                {copy[locale].hero.eyebrow}
              </div>

              <h1 className="relative text-[12.5vw] sm:text-[9.5vw] md:text-[6vw] lg:text-[5.25rem] xl:text-[6.25rem] font-normal text-foreground mb-8 leading-[0.95] md:leading-[0.9] tracking-[-0.04em]">
                {/* Invisible skeleton to lock height for both title states (prevents overlap when alt line wraps) */}
                <div className="grid opacity-0">
                  <div className="col-start-1 row-start-1">
                    {copy[locale].hero.titleLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                        <br />
                      </span>
                    ))}
                  </div>
                  <div className="col-start-1 row-start-1">
                    <span className="block">
                      {locale === "es" ? "Soluciones digitales a medida" : "Local development, global impact"}
                      <br />
                    </span>
                  </div>
                </div>

                {/* Animated layer on top */}
                <div className={`absolute inset-0 transition-opacity duration-1000 ${isFading ? "opacity-0" : "opacity-100"}`}>
                  {altLineActive ? (
                    <span className="block">
                      {locale === "es" ? "Soluciones digitales a medida" : "Local development, global impact"}
                      <br />
                    </span>
                  ) : (
                    <>
                      {copy[locale].hero.titleLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                          <br />
                        </span>
                      ))}
                    </>
                  )}
                </div>
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-normal max-w-2xl">
                {copy[locale].hero.subtitle}
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-7 md:px-9 py-3.5 md:py-4 text-base md:text-lg font-normal tracking-tight rounded-none bg-foreground text-background hover:bg-foreground/90 transition-colors"
                >
                  {copy[locale].ctaButton}
                </a>
                <a
                  href="#capabilities"
                  className="inline-flex items-center justify-center px-7 md:px-9 py-3.5 md:py-4 text-base md:text-lg font-normal tracking-tight rounded-none border border-border/70 text-foreground hover:border-foreground/70 hover:bg-white/5 transition-colors"
                >
                  {locale === "es" ? "Ver capacidades" : "View capabilities"}
                </a>
              </div>

              {/* Chips */}
              <div className="mt-8 flex flex-wrap gap-2">
                {(
                  locale === "es"
                    ? ["Software a medida", "Herramientas internas", "Automatización de procesos", "Integraciones"]
                    : ["Custom software", "Internal tools", "Process automation", "Integrations"]
                ).map((label) => (
                  <span
                    key={label}
                    className="inline-flex items-center px-3 py-1 text-xs md:text-sm uppercase tracking-[0.16em] text-muted-foreground border border-border/60 bg-black/20 backdrop-blur-sm"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Visual */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative border border-border/60 bg-black/30 backdrop-blur-sm p-8 overflow-hidden">
                <div className="pointer-events-none absolute inset-0 opacity-60 hero-grid" />
                <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/favicon-32.png"
                        alt="Dual Perspective Digital"
                        width={28}
                        height={28}
                        className="h-7 w-7 rounded-md object-contain"
                      />
                      <div className="text-sm text-foreground tracking-tight">Dual Perspective Digital</div>
                    </div>
                    <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Barcelona</div>
                  </div>

                  <div className="mt-10 grid grid-cols-2 gap-6">
                    {[
                      {
                        title: locale === "es" ? "Herramientas internas" : "Internal tools",
                        body: locale === "es" ? "Paneles, CRM, operaciones." : "Dashboards, ops, CRM.",
                        shape: "square",
                      },
                      {
                        title: locale === "es" ? "Automatización" : "Automation",
                        body: locale === "es" ? "Menos trabajo manual." : "Less manual work.",
                        shape: "circle",
                      },
                      {
                        title: locale === "es" ? "Integraciones" : "Integrations",
                        body: locale === "es" ? "Sistemas conectados." : "Systems connected.",
                        shape: "triangle",
                      },
                      {
                        title: locale === "es" ? "Datos" : "Data",
                        body: locale === "es" ? "Visibilidad y control." : "Clarity and control.",
                        shape: "line",
                      },
                    ].map((item) => (
                      <div key={item.title} className="border-t border-border/60 pt-5">
                        <div className="flex items-start gap-3">
                          <div className="mt-1.5 h-4 w-4 flex items-center justify-center">
                            {item.shape === "square" && <div className="h-3.5 w-3.5 border border-foreground/70" />}
                            {item.shape === "circle" && <div className="h-3.5 w-3.5 rounded-full border border-foreground/70" />}
                            {item.shape === "triangle" && (
                              <div
                                className="h-3.5 w-3.5 border border-foreground/70"
                                style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                              />
                            )}
                            {item.shape === "line" && <div className="h-px w-4 bg-foreground/70" />}
                          </div>
                          <div>
                            <div className="text-sm text-foreground tracking-tight">{item.title}</div>
                            <div className="text-xs text-muted-foreground mt-1">{item.body}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
