"use client"

import { CursorSpark } from "@/components/cursor-spark"
import { LanguageAutoswitch } from "@/components/language-autoswitch"
import { ScrollTheme } from "@/components/scroll-theme"

export function HomeClient({ locale }: { locale: "en" | "es" }) {
  return (
    <>
      {locale === "en" && <LanguageAutoswitch />}
      <ScrollTheme defaultTheme="dark" />
      <CursorSpark />
    </>
  )
}


