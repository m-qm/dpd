"use client"

import { useScrollTheme } from "@/hooks/use-scroll-theme"

type Props = {
  defaultTheme?: "dark" | "light"
}

/**
 * Mimics Onforyou-style “global theme” transitions:
 * sections declare data-theme="dark|light", and we toggle the root theme as you scroll.
 */
export function ScrollTheme({ defaultTheme = "dark" }: Props) {
  // Trigger line near the lower third of the viewport so the next chapter
  // takes over smoothly, but with a small delay so FAQ stays dark a bit longer
  // before Contact flips the background to light.
  useScrollTheme({ defaultTheme, triggerLine: 0.78 })

  return null
}


