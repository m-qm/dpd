"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function LanguageAutoswitch() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === "undefined") return

    // Only run on the root path "/" (not on /es or other paths)
    if (pathname !== "/") return

    // Check if user has explicitly chosen a language
    const hasPreference = window.localStorage.getItem("dpd-lang")
    if (hasPreference) return

    // Get browser language
    const lang = navigator.language || navigator.languages?.[0] || ""

    // If browser language is Spanish, redirect to /es
    if (lang.toLowerCase().startsWith("es")) {
      window.localStorage.setItem("dpd-lang", "es")
      window.location.replace("/es")
    } else {
      // Set English as preference to avoid re-checking
      window.localStorage.setItem("dpd-lang", "en")
    }
  }, [pathname])

  return null
}









