"use client"

import { useEffect, useRef } from "react"
import { applyThemeMode, type ThemeMode } from "@/hooks/use-theme-mode"

type Options = {
  defaultTheme?: ThemeMode
  selector?: string
  /** 0..1 viewport ratio used as the trigger line */
  triggerLine?: number
}

/**
 * Scroll-driven theme switching: picks the active section (by viewport trigger line)
 * and flips the whole app between dark/light so content stays readable.
 */
export function useScrollTheme({
  defaultTheme = "dark",
  selector = "main [data-theme]",
  triggerLine = 0.72,
}: Options = {}) {
  const lastThemeRef = useRef<ThemeMode>(defaultTheme)
  const lastOwnerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    applyThemeMode(defaultTheme)
    lastThemeRef.current = defaultTheme

    let nodes: HTMLElement[] = []
    let rafId = 0
    let resizeTimeout: NodeJS.Timeout | null = null
    let moTimeout: NodeJS.Timeout | null = null

    const rescan = () => {
      nodes = Array.from(document.querySelectorAll<HTMLElement>(selector))
    }

    const apply = () => {
      rafId = 0
      if (!nodes.length) return

      const y = window.innerHeight * triggerLine
      let active: HTMLElement | null = null

      for (const el of nodes) {
        const r = el.getBoundingClientRect()
        if (r.top <= y && r.bottom >= y) {
          active = el
          break
        }
      }

      if (!active) {
        let best: { el: HTMLElement; dist: number } | null = null
        for (const el of nodes) {
          const r = el.getBoundingClientRect()
          const dist = Math.min(Math.abs(r.top - y), Math.abs(r.bottom - y))
          if (!best || dist < best.dist) best = { el, dist }
        }
        active = best?.el ?? null
      }

      // Mark the active section as the "theme owner" so its local tokens stay pinned
      // while older/newer chapters fall back to the global theme.
      if (active !== lastOwnerRef.current) {
        if (lastOwnerRef.current) {
          lastOwnerRef.current.classList.remove("dpd-theme-owner")
        }
        if (active) {
          active.classList.add("dpd-theme-owner")
        }
        lastOwnerRef.current = active
      }

      const next = (active?.dataset.theme as ThemeMode | undefined) ?? defaultTheme
      if (next !== lastThemeRef.current) {
        lastThemeRef.current = next
        applyThemeMode(next)
      }
    }

    // Throttle scroll handler for better mobile performance
    let lastScrollTime = 0
    const scrollThrottle = 16 // ~60fps
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768
    const throttleDelay = isMobile ? 32 : 16 // Slower on mobile

    const schedule = () => {
      if (rafId) return
      const now = performance.now()
      if (now - lastScrollTime < throttleDelay) {
        // Schedule for next frame if throttled
        setTimeout(() => {
          if (!rafId) {
            rafId = window.requestAnimationFrame(apply)
          }
        }, throttleDelay - (now - lastScrollTime))
        return
      }
      lastScrollTime = now
      rafId = window.requestAnimationFrame(apply)
    }

    // Wait for hydration to complete before adding classes
    // This prevents hydration mismatches
    const initAfterHydration = () => {
      // Use requestIdleCallback or setTimeout to ensure DOM is fully hydrated
      if (typeof requestIdleCallback !== 'undefined') {
        requestIdleCallback(() => {
          rescan()
          schedule()
        }, { timeout: 1000 })
      } else {
        setTimeout(() => {
          rescan()
          schedule()
        }, 100)
      }
    }
    
    // Retry a few times (client sections mount after hydration)
    let attempts = 0
    const retry = () => {
      attempts += 1
      rescan()
      if (nodes.length) {
        schedule()
      } else if (attempts < 10) {
        window.setTimeout(retry, 200)
      }
    }
    
    // Initialize after a short delay to ensure hydration is complete
    initAfterHydration()
    // Also retry in case sections load later
    setTimeout(retry, 300)

    window.addEventListener("scroll", schedule, { passive: true })
    
    // Debounce resize for better performance
    const onResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        rescan()
        schedule()
      }, 150)
    }
    window.addEventListener("resize", onResize, { passive: true })

    // Throttle MutationObserver for better performance
    const moTarget = document.querySelector("main") ?? document.body
    const mo = new MutationObserver(() => {
      if (moTimeout) clearTimeout(moTimeout)
      moTimeout = setTimeout(() => {
        rescan()
        schedule()
      }, 100)
    })
    mo.observe(moTarget, { subtree: true, childList: true, attributes: true })

    return () => {
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", onResize)
      mo.disconnect()
      if (rafId) window.cancelAnimationFrame(rafId)
      if (resizeTimeout) clearTimeout(resizeTimeout)
      if (moTimeout) clearTimeout(moTimeout)
      if (lastOwnerRef.current) {
        lastOwnerRef.current.classList.remove("dpd-theme-owner")
        lastOwnerRef.current = null
      }
    }
  }, [defaultTheme, selector, triggerLine])
}



