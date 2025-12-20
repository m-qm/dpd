"use client"

import { usePathname, useRouter } from "next/navigation"

export function LanguageToggle() {
  const pathname = usePathname()
  const router = useRouter()

  const isSpanish = pathname.startsWith("/es")
  const basePath = isSpanish ? pathname.replace(/^\/es/, "") || "/" : pathname || "/"

  const targetPath = isSpanish ? basePath : `/es${basePath === "/" ? "" : basePath}`

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    
    // Save language preference
    if (typeof window !== "undefined") {
      window.localStorage.setItem("dpd-lang", isSpanish ? "en" : "es")
    }
    
    // Use client-side navigation to avoid hard reload
    router.push(targetPath)
  }

  return (
    <a
      href={targetPath}
      onClick={handleClick}
      className="text-xs md:text-sm uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
    >
      {isSpanish ? "ENGLISH" : "ESPAÑOL"}
    </a>
  )
}


