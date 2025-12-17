"use client"

import { CursorSpark } from "@/components/cursor-spark"
import { LanguageAutoswitch } from "@/components/language-autoswitch"

export function HomeClient({ locale }: { locale: "en" | "es" }) {
  return (
    <>
      {locale === "en" && <LanguageAutoswitch />}
      <CursorSpark />
    </>
  )
}


