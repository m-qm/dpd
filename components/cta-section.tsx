"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { SectionBadge } from "@/components/section-badge"
import { copy, type Locale } from "@/lib/copy"
import { ContactForm } from "@/components/contact-form"

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
}

export function CTASection({ inverted = false, locale = "en" }: { inverted?: boolean; locale?: Locale }) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 })

  return (
    <section
      id="contact"
      ref={sectionRef}
      data-theme={inverted ? "light" : "dark"}
      className="dpd-section-compact dpd-chapter pt-[calc(6rem+30px)] md:pt-[calc(8rem+30px)] lg:pt-[calc(10rem+30px)] relative overflow-hidden"
    >
      {/* Subtle gradient */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(46, 88, 255, 0.08), transparent 70%)",
        }}
      />

      <div className="dpd-container relative z-10">
        <SectionBadge number={5} label={locale === "es" ? "Contacto" : "Contact"} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
          {/* Left: copy */}
          <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={stagger}>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-foreground mb-6 leading-[1.1] tracking-tight"
            >
              {copy[locale].ctaHeading}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
              {copy[locale].ctaBody}
            </motion.p>

            {/* What to expect */}
            <motion.div variants={fadeUp} className="border-t border-border pt-6">
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground mb-4">
                {locale === "es" ? "Qu\u00e9 esperar" : "What to expect"}
              </p>
              <ul className="flex flex-col gap-3">
                {(locale === "es"
                  ? [
                      "Llamada de 30 minutos, sin compromiso",
                      "An\u00e1lisis de tu flujo de trabajo actual",
                      "Propuesta clara con alcance y precio",
                    ]
                  : [
                      "30-minute call, no commitment",
                      "Analysis of your current workflow",
                      "Clear proposal with scope and pricing",
                    ]
                ).map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-1.5 flex-shrink-0"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 + i * 0.1, type: "spring", stiffness: 500, damping: 15 }}
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <ContactForm locale={locale} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
