"use client"

import { useEffect, useRef } from "react"
import { SectionBadge } from "@/components/section-badge"
import { copy, type Locale } from "@/lib/copy"
import { ContactForm } from "@/components/contact-form"

export function CTASection({ inverted = false, locale = "en" }: { inverted?: boolean; locale?: Locale }) {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Handle smooth scroll to contact section with offset
    const scrollToContact = () => {
      if (contentRef.current) {
        const element = contentRef.current
        const offset = 300 // Adjust this value as needed
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        })
      }
    }

    const handleHashChange = () => {
      if (window.location.hash === "#contact") {
        // Small delay to ensure element is positioned
        setTimeout(scrollToContact, 100)
      }
    }

    // Check on mount if hash is already #contact (with delay for positioning)
    if (window.location.hash === "#contact") {
      setTimeout(scrollToContact, 300)
    }

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange)
    
    // Also handle clicks on anchor links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href="#contact"]')
      if (link) {
        e.preventDefault()
        scrollToContact()
        // Update URL without triggering scroll
        window.history.pushState(null, "", "#contact")
      }
    }

    document.addEventListener("click", handleClick)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
      document.removeEventListener("click", handleClick)
    }
  }, [])

  return (
    <section 
      id="contact"
      data-theme={inverted ? "light" : "dark"}
      className="dpd-section-compact dpd-chapter pt-[calc(6rem+30px)] md:pt-[calc(8rem+30px)] lg:pt-[calc(10rem+30px)] relative overflow-hidden"
    >
      {/* Gradient centered to match other sections */}
      <div 
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(46, 88, 255, 0.15), transparent 45%)",
          filter: "blur(80px)",
          opacity: 0.6,
        }}
      />
      {/* Additional subtle layer */}
      <div 
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(46, 88, 255, 0.1), transparent 40%)",
          filter: "blur(90px)",
          opacity: 0.4,
        }}
      />
      
      <div ref={contentRef} className="dpd-container-narrow relative z-10">
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
