import { HeroNavigation } from "@/components/hero-navigation"
import { Footer } from "@/components/footer"
import { ScrollTheme } from "@/components/scroll-theme"
import { CursorSpark } from "@/components/cursor-spark"

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ScrollTheme />
      <CursorSpark />
      <HeroNavigation locale="en" />
      {children}
      <Footer locale="en" />
    </>
  )
}

