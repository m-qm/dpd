"use client"

import { useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"

export function LanguageAutoswitch() {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (typeof window === "undefined") return

    // Only run on the root path "/" (not on /es or other paths)
    if (pathname !== "/") return

    // Check if user has explicitly chosen a language
    const hasPreference = window.localStorage.getItem("dpd-lang")
    if (hasPreference) return

    // Get browser language
    const lang = navigator.language || navigator.languages?.[0] || ""

    // If browser language is Spanish, use router.push for faster client-side navigation
    // This is faster than window.location.replace and doesn't cause a full page reload
    if (lang.toLowerCase().startsWith("es")) {
      window.localStorage.setItem("dpd-lang", "es")
      // Use router.push instead of window.location for better performance
      router.push("/es")
    } else {
      // Set English as preference to avoid re-checking
      window.localStorage.setItem("dpd-lang", "en")
    }
  }, [pathname, router])

  return null
}









