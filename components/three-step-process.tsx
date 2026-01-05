"use client"

import { motion } from "framer-motion"
import { type Locale } from "@/lib/copy"
import { fadeInUpVariants, staggerContainerVariants, drawLineVariants } from "@/lib/animations"
import { useScrollAnimation, useElementScrollProgress } from "@/hooks/use-scroll-animations"

interface ProcessStep {
  number: string
  title: string
  description: string
  icon?: React.ReactNode
}

interface ThreeStepProcessProps {
  steps: ProcessStep[]
  locale?: Locale
  title?: string
  subtitle?: string
  orientation?: "horizontal" | "vertical"
}

export function ThreeStepProcess({
  steps,
  locale = "en",
  title,
  subtitle,
  orientation = "horizontal",
}: ThreeStepProcessProps) {
  const { ref: sectionRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true,
  })

  const { ref: progressRef, progress } = useElementScrollProgress()

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={staggerContainerVariants}
      className="dpd-section relative"
    >
      <div className="dpd-container">
        {/* Header */}
        {(title || subtitle) && (
          <motion.div variants={fadeInUpVariants} className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
            {title && (
              <h2 className="dpd-display text-foreground mb-4 md:mb-6">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="dpd-kicker">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        {/* Process Steps */}
        <div ref={progressRef} className="relative">
          {orientation === "horizontal" ? (
            /* Horizontal Layout */
            <>
              {/* Connecting Line - Desktop */}
              <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5">
                <div className="absolute inset-0 bg-border/30" />
                <motion.div
                  className="absolute inset-0 bg-foreground/40 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={isVisible ? { scaleX: progress } : { scaleX: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    variants={fadeInUpVariants}
                    custom={index}
                    className="relative"
                  >
                    {/* Step Circle - Desktop connector */}
                    <div className="hidden lg:flex absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-border bg-background z-10">
                      <motion.div
                        className="w-full h-full rounded-full bg-foreground scale-0"
                        animate={isVisible ? { scale: progress > (index / steps.length) ? 1 : 0 } : { scale: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.3 }}
                      />
                    </div>

                    <StepCard step={step} index={index} isVisible={isVisible} />
                  </motion.div>
                ))}
              </div>
            </>
          ) : (
            /* Vertical Layout */
            <>
              {/* Connecting Line - Vertical */}
              <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5">
                <div className="absolute inset-0 bg-border/30" />
                <motion.div
                  className="absolute inset-0 bg-foreground/40 origin-top"
                  initial={{ scaleY: 0 }}
                  animate={isVisible ? { scaleY: progress } : { scaleY: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </div>

              <div className="space-y-16 md:space-y-20">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    variants={fadeInUpVariants}
                    custom={index}
                    className="relative md:pl-24"
                  >
                    {/* Step Circle - Vertical connector */}
                    <div className="hidden md:flex absolute left-6 top-8 w-4 h-4 rounded-full border-2 border-border bg-background z-10">
                      <motion.div
                        className="w-full h-full rounded-full bg-foreground scale-0"
                        animate={isVisible ? { scale: progress > (index / steps.length) ? 1 : 0 } : { scale: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.3 }}
                      />
                    </div>

                    <StepCard step={step} index={index} isVisible={isVisible} layout="vertical" />
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </motion.section>
  )
}

function StepCard({
  step,
  index,
  isVisible,
  layout = "horizontal",
}: {
  step: ProcessStep
  index: number
  isVisible: boolean
  layout?: "horizontal" | "vertical"
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`group relative ${layout === "horizontal" ? "text-center pt-12" : "text-left"}`}
    >
      {/* Large Number */}
      <motion.div
        className={`font-serif text-6xl md:text-7xl lg:text-8xl font-light text-foreground/10 group-hover:text-foreground/20 transition-colors duration-500 mb-6 ${
          layout === "horizontal" ? "" : "absolute -left-24 top-0 hidden md:block"
        }`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
      >
        {step.number}
      </motion.div>

      {/* Mobile Number */}
      {layout === "vertical" && (
        <div className="md:hidden inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-border mb-4">
          <span className="text-xl font-normal text-foreground">{step.number}</span>
        </div>
      )}

      {/* Icon */}
      {step.icon && (
        <motion.div
          className={`mb-6 text-foreground/70 ${layout === "horizontal" ? "flex justify-center" : ""}`}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
        >
          {step.icon}
        </motion.div>
      )}

      {/* Title */}
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal text-foreground mb-4 tracking-tight">
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md mx-auto">
        {step.description}
      </p>

      {/* Decorative element on hover */}
      <motion.div
        className="absolute -inset-4 border border-border/0 rounded-lg -z-10 group-hover:border-border/30 transition-colors duration-500"
        initial={false}
      />
    </motion.div>
  )
}

// Compact variant for service pages
export function CompactStepProcess({
  steps,
  locale = "en",
}: {
  steps: { step: string; title: string; description: string }[]
  locale?: Locale
}) {
  const { ref: sectionRef, isVisible } = useScrollAnimation({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={staggerContainerVariants}
      className="space-y-8 md:space-y-12 max-w-3xl"
    >
      {steps.map((item, i) => (
        <motion.div
          key={i}
          variants={fadeInUpVariants}
          className="flex gap-6 group"
        >
          <div className="flex-shrink-0">
            <div className="text-4xl md:text-5xl font-normal text-foreground/20 group-hover:text-foreground/40 transition-colors duration-300">
              {item.step}
            </div>
          </div>
          <div className="flex-1 pt-1">
            <h3 className="text-xl md:text-2xl font-normal text-foreground mb-2 tracking-tight">
              {item.title}
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

