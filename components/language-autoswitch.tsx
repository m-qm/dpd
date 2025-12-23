"use client"

import { useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"

export function LanguageAutoswitch() {
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (typeof window === "undefined") return

    // Only run on the root path "/"
    if (pathname !== "/") return

    // If the user previously chose English, redirect them to /en.
    const preference = window.localStorage.getItem("dpd-lang")
    if (preference === "en") {
      router.replace("/en")
    }
  }, [pathname, router])

  return null
}









