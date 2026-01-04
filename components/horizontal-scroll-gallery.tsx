"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { type Locale } from "@/lib/copy"
import { fadeInUpVariants, staggerContainerVariants } from "@/lib/animations"
import { useScrollAnimation } from "@/hooks/use-scroll-animations"

interface GalleryItem {
  id: string
  title: string
  description?: string
  image?: string
  link?: string
  badge?: string
  icon?: React.ReactNode
}

interface HorizontalScrollGalleryProps {
  items: GalleryItem[]
  locale?: Locale
  title?: string
  subtitle?: string
  cardStyle?: "default" | "minimal" | "bordered"
}

export function HorizontalScrollGallery({
  items,
  locale = "en",
  title,
  subtitle,
  cardStyle = "default",
}: HorizontalScrollGalleryProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  
  const { ref: sectionRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
    triggerOnce: true,
  })

  const checkScrollButtons = () => {
    if (!scrollRef.current) return
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
  }

  useEffect(() => {
    checkScrollButtons()
    window.addEventListener("resize", checkScrollButtons)
    return () => window.removeEventListener("resize", checkScrollButtons)
  }, [items])

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    
    const scrollAmount = scrollRef.current.clientWidth * 0.8
    const newScrollLeft = direction === "left"
      ? scrollRef.current.scrollLeft - scrollAmount
      : scrollRef.current.scrollLeft + scrollAmount
    
    scrollRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    })
    
    // Update button states after scroll
    setTimeout(checkScrollButtons, 300)
  }

  return (
    <motion.section
      ref={sectionRef}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={staggerContainerVariants}
      className="dpd-section relative overflow-hidden"
    >
      <div className="dpd-container">
        {/* Header */}
        {(title || subtitle) && (
          <motion.div variants={fadeInUpVariants} className="mb-12 md:mb-16">
            {title && (
              <h2 className="dpd-display text-foreground mb-4 md:mb-6">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="dpd-kicker max-w-3xl">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        {/* Gallery Container */}
        <div className="relative -mx-6 md:mx-0">
          {/* Navigation Buttons - Desktop */}
          <div className="hidden md:flex items-center justify-end gap-3 mb-6">
            <motion.button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`p-3 border-2 transition-all duration-300 ${
                canScrollLeft
                  ? "border-foreground/30 hover:border-foreground hover:bg-foreground/5"
                  : "border-border/20 opacity-30 cursor-not-allowed"
              }`}
              whileHover={canScrollLeft ? { scale: 1.05 } : {}}
              whileTap={canScrollLeft ? { scale: 0.95 } : {}}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`p-3 border-2 transition-all duration-300 ${
                canScrollRight
                  ? "border-foreground/30 hover:border-foreground hover:bg-foreground/5"
                  : "border-border/20 opacity-30 cursor-not-allowed"
              }`}
              whileHover={canScrollRight ? { scale: 1.05 } : {}}
              whileTap={canScrollRight ? { scale: 0.95 } : {}}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            onScroll={checkScrollButtons}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 px-6 md:px-0 scrollbar-hide cursor-grab active:cursor-grabbing"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex-shrink-0 snap-start first:ml-0 last:mr-0"
                style={{ width: "min(400px, 85vw)" }}
              >
                {item.link ? (
                  <a
                    href={item.link}
                    className="block group h-full"
                    draggable={false}
                  >
                    <GalleryCard item={item} cardStyle={cardStyle} isDragging={isDragging} />
                  </a>
                ) : (
                  <GalleryCard item={item} cardStyle={cardStyle} isDragging={isDragging} />
                )}
              </motion.div>
            ))}
          </div>

          {/* Gradient Overlays - Left and Right */}
          <div className="hidden md:block pointer-events-none absolute left-0 top-0 bottom-8 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="hidden md:block pointer-events-none absolute right-0 top-0 bottom-8 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        </div>

        {/* Scroll Indicator - Mobile */}
        <div className="md:hidden flex justify-center gap-2 mt-6">
          {items.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-foreground/20"
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </motion.section>
  )
}

function GalleryCard({
  item,
  cardStyle,
  isDragging,
}: {
  item: GalleryItem
  cardStyle: "default" | "minimal" | "bordered"
  isDragging: boolean
}) {
  const cardClasses = {
    default: "border-2 border-border/40 bg-background hover:border-foreground/40 hover:shadow-lg",
    minimal: "bg-background/50 hover:bg-background",
    bordered: "border-2 border-foreground/20 hover:border-foreground/60 hover:shadow-xl",
  }

  return (
    <motion.div
      whileHover={!isDragging ? { y: -8, scale: 1.02 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`relative h-full p-8 transition-all duration-300 ${cardClasses[cardStyle]}`}
    >
      {/* Badge */}
      {item.badge && (
        <div className="inline-flex items-center px-3 py-1 text-xs uppercase tracking-wider text-foreground/70 border border-border/40 bg-background/80 backdrop-blur-sm mb-6">
          {item.badge}
        </div>
      )}

      {/* Icon */}
      {item.icon && (
        <div className="mb-6 text-foreground/80">
          {item.icon}
        </div>
      )}

      {/* Image */}
      {item.image && (
        <div className="mb-6 aspect-video bg-muted/20 rounded overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            draggable={false}
          />
        </div>
      )}

      {/* Content */}
      <h3 className="text-2xl md:text-3xl font-normal text-foreground mb-4 tracking-tight">
        {item.title}
      </h3>
      
      {item.description && (
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      )}

      {/* Arrow indicator for links */}
      {item.link && (
        <div className="mt-6 flex items-center text-sm text-foreground/60 group-hover:text-foreground transition-colors">
          <span className="mr-2">Learn more</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      )}
    </motion.div>
  )
}

