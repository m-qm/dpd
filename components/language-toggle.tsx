"use client"

import { usePathname } from "next/navigation"

export function LanguageToggle() {
  const pathname = usePathname()

  const isSpanish = pathname.startsWith("/es")
  const basePath = isSpanish ? pathname.replace(/^\/es/, "") || "/" : pathname || "/"

  const targetHref = isSpanish ? basePath : `/es${basePath === "/" ? "" : basePath}`

  return (
    <a
      href={targetHref}
      className="text-xs md:text-sm uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground transition-colors"
    >
      {isSpanish ? "EN" : "ES"}
    </a>
  )
}


