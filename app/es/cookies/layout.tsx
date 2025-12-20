import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookies — Dual Perspective Digital",
  description:
    "Política de cookies y declaración de cookies de dualperspective.digital. Gestiona tu consentimiento y revisa las cookies utilizadas en este sitio.",
  alternates: {
    canonical: "/es/cookies",
    languages: { en: "/cookies", es: "/es/cookies" },
  },
}

export default function CookiesLayoutEs({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

