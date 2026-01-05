/**
 * Custom hook for scroll-triggered animations with Framer Motion
 * Provides easy-to-use scroll animation functionality
 */

import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"

interface ScrollAnimationOptions {
  threshold?: number
  triggerOnce?: boolean
  rootMargin?: string
  delay?: number
}

/**
 * Hook that returns whether an element is in view
 * Useful for triggering animations when element enters viewport
 */
export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const {
    threshold = 0.3,
    triggerOnce = true,
    rootMargin = "0px 0px -100px 0px",
    delay = 0,
  } = options

  const [isVisible, setIsVisible] = useState(false)
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
    rootMargin,
  })

  useEffect(() => {
    if (inView && !isVisible) {
      if (delay > 0) {
        const timer = setTimeout(() => setIsVisible(true), delay)
        return () => clearTimeout(timer)
      } else {
        setIsVisible(true)
      }
    }
  }, [inView, isVisible, delay])

  return { ref, isVisible, inView }
}

/**
 * Hook for staggered animations of list items
 * Returns refs and visibility state for each item
 */
export function useStaggerAnimation(count: number, options: ScrollAnimationOptions = {}) {
  const {
    threshold = 0.2,
    triggerOnce = true,
    rootMargin = "0px 0px -100px 0px",
    delay = 100, // Delay between each item
  } = options

  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
    rootMargin,
  })

  useEffect(() => {
    if (inView && visibleItems.length === 0) {
      // Stagger the visibility of items
      for (let i = 0; i < count; i++) {
        setTimeout(() => {
          setVisibleItems((prev) => [...prev, i])
        }, i * delay)
      }
    }
  }, [inView, count, delay, visibleItems.length])

  return { ref, visibleItems }
}

/**
 * Hook for parallax scroll effects
 * Returns a transform value based on scroll position
 */
export function useParallax(speed: number = 0.5) {
  const [offsetY, setOffsetY] = useState(0)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return
      
      const rect = elementRef.current.getBoundingClientRect()
      const scrolled = window.pageYOffset
      const elementTop = rect.top + scrolled
      const elementHeight = rect.height
      const windowHeight = window.innerHeight
      
      // Calculate parallax offset
      if (
        scrolled + windowHeight > elementTop &&
        scrolled < elementTop + elementHeight
      ) {
        const offset = (scrolled - elementTop) * speed
        setOffsetY(offset)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return { ref: elementRef, offsetY }
}

/**
 * Hook to detect if user prefers reduced motion
 */
export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange)
      return () => mediaQuery.removeEventListener("change", handleChange)
    }
    // Legacy browsers
    else {
      mediaQuery.addListener(handleChange)
      return () => mediaQuery.removeListener(handleChange)
    }
  }, [])

  return prefersReducedMotion
}

/**
 * Hook for scroll progress (0 to 1)
 * Useful for progress indicators
 */
export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = window.pageYOffset / totalHeight
      setScrollProgress(Math.min(Math.max(progress, 0), 1))
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return scrollProgress
}

/**
 * Hook for element-specific scroll progress
 * Returns 0-1 value based on element's position in viewport
 */
export function useElementScrollProgress() {
  const [progress, setProgress] = useState(0)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return

      const rect = elementRef.current.getBoundingClientRect()
      const elementHeight = rect.height
      const windowHeight = window.innerHeight

      // Calculate what percentage of the element has been scrolled past
      if (rect.top < windowHeight && rect.bottom > 0) {
        const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0)
        const scrolled = windowHeight - rect.top
        const elementProgress = scrolled / (elementHeight + windowHeight)
        setProgress(Math.min(Math.max(elementProgress, 0), 1))
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return { ref: elementRef, progress }
}

