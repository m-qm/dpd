"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { type Locale } from "@/lib/copy"

type BreadcrumbItem = {
  label: string
  href?: string
}

type BreadcrumbsProps = {
  items: BreadcrumbItem[]
  locale?: Locale
}

export function Breadcrumbs({ items, locale = "en" }: BreadcrumbsProps) {
  const homeLabel = locale === "es" ? "Inicio" : "Home"
  const homeHref = locale === "es" ? "/es" : "/"

  return (
    <nav className="mb-8 md:mb-12" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-sm md:text-base">
        <li>
          <Link
            href={homeHref}
            className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>{homeLabel}</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-muted-foreground/60" />
            {item.href ? (
              <Link
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}






