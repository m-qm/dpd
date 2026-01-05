import { HeroNavigation } from "@/components/hero-navigation"
import { Footer } from "@/components/footer"
import { ScrollTheme } from "@/components/scroll-theme"
import { CursorSpark } from "@/components/cursor-spark"

export default function ServicesLayoutEs({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ScrollTheme />
      <CursorSpark />
      <HeroNavigation locale="es" />
      {children}
      <Footer locale="es" />
    </>
  )
}

