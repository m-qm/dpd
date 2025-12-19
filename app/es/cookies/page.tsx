import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { CookieDeclaration } from "@/components/cookie-declaration"

export const metadata: Metadata = {
  title: "Cookies — Dual Perspective Digital",
  description:
    "Política de cookies y declaración de cookies de dualperspective.digital. Gestiona tu consentimiento y revisa las cookies utilizadas en este sitio.",
  alternates: {
    canonical: "/es/cookies",
    languages: { en: "/cookies", es: "/es/cookies" },
  },
}

export default function CookiesPageEs() {
  return (
    <main className="min-h-screen px-6 md:px-12 lg:px-20 py-20 md:py-24" lang="es">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs 
          items={[{ label: "Cookies" }]} 
          locale="es"
        />
        <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight mb-6">
          Cookies
        </h1>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10">
          Utilizamos cookies para que el sitio funcione y, con tu consentimiento, para entender el uso y mejorar el
          rendimiento. Puedes cambiar tus preferencias en cualquier momento desde el banner.
        </p>

        <div className="border-t border-border/60 pt-10">
          <h2 className="text-xl md:text-2xl tracking-tight mb-4">Declaración de cookies</h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
            La lista de cookies se genera automáticamente por nuestro gestor de consentimiento.
          </p>

          <CookieDeclaration locale="es" />
        </div>
      </div>
    </main>
  )
}


