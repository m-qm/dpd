"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { SectionBadge } from "@/components/section-badge"
import { copy, type Locale } from "@/lib/copy"
import { Search, Palette, Code, TrendingUp } from "lucide-react"

const approachIcons = [Search, Palette, Code, TrendingUp]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
}

const lineGrow = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export function ApproachSection({ inverted = false, locale = "en" }: { inverted?: boolean; locale?: Locale }) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 })

  return (
    <section
      id="approach"
      ref={sectionRef}
      data-theme={inverted ? "light" : "dark"}
      className="dpd-section dpd-chapter relative overflow-hidden"
    >
      <div className="dpd-container relative z-10">
        <SectionBadge number={2} label={locale === "en" ? "Approach" : "Enfoque"} />

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
          className="mb-14 md:mb-20"
        >
          <motion.h2 variants={fadeUp} className="dpd-display font-normal text-foreground mb-6">
            {copy[locale].approachHeading}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
            {copy[locale].approachIntro}
          </motion.p>
        </motion.div>

        {/* Process steps with animated connectors */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6"
        >
          {copy[locale].approachSteps.map((step, index) => {
            const Icon = approachIcons[index]
            return (
              <motion.div key={index} variants={fadeUp} className="relative group">
                {/* Step number + connector line */}
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    className="h-10 w-10 rounded-md border border-accent-blue/30 bg-accent-blue/5 flex items-center justify-center flex-shrink-0"
                    whileHover={{
                      scale: 1.1,
                      borderColor: "rgba(46, 88, 255, 0.6)",
                      backgroundColor: "rgba(46, 88, 255, 0.1)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <Icon className="h-5 w-5 text-accent-blue" />
                  </motion.div>
                  {/* Animated horizontal connector */}
                  {index < 3 && (
                    <motion.div
                      variants={lineGrow}
                      className="hidden lg:block flex-1 h-px bg-border origin-left"
                    />
                  )}
                </div>

                <motion.div
                  className="text-xs font-mono uppercase tracking-widest text-accent-blue/70 mb-3"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                >
                  {`0${index + 1}`}
                </motion.div>

                <h3 className="text-lg md:text-xl font-normal text-foreground mb-3 tracking-tight leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Bottom accent line on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 h-px bg-accent-blue/40"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
