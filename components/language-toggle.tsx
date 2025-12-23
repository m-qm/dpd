"use client"

import { usePathname, useRouter } from "next/navigation"

export function LanguageToggle() {
  const pathname = usePathname()
  const router = useRouter()

  // New logic: Spanish is the default language at "/"
  const isEnglish = pathname.startsWith("/en")
  const basePath = isEnglish ? pathname.replace(/^\/en/, "") || "/" : pathname || "/"

  const targetPath = isEnglish ? basePath : `/en${basePath === "/" ? "" : basePath}`

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    
    // Save language preference
    if (typeof window !== "undefined") {
      window.localStorage.setItem("dpd-lang", isEnglish ? "es" : "en")
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
      {isEnglish ? "ESPAÑOL" : "ENGLISH"}
    </a>
  )
}


