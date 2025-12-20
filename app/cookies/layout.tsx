import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookies — Dual Perspective Digital",
  description:
    "Cookie policy and cookie declaration for dualperspective.digital. Manage your consent preferences and review cookies used on this site.",
  alternates: {
    canonical: "/cookies",
    languages: { en: "/cookies", es: "/es/cookies" },
  },
}

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

