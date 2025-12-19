"use client"

import { useEffect } from "react"

export function LanguageAutoswitch() {
  useEffect(() => {
    if (typeof window === "undefined") return

    // Only run on the root path and if user hasn't explicitly chosen a language
    const hasPreference = window.localStorage.getItem("dpd-lang")
    if (hasPreference || window.location.pathname.startsWith("/es")) return

    const lang = navigator.language || navigator.languages?.[0] || ""

    // If browser language is Spanish, prefer /es as default
    if (lang.toLowerCase().startsWith("es")) {
      window.localStorage.setItem("dpd-lang", "es")
      window.location.replace("/es")
    }
  }, [])

  return null
}






