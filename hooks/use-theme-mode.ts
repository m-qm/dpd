"use client"

import { useEffect, useState } from "react"

export type ThemeMode = "dark" | "light"

export function applyThemeMode(theme: ThemeMode) {
  const root = document.documentElement
  root.dataset.theme = theme
}

export function useThemeMode(defaultTheme: ThemeMode = "dark") {
  const [theme, setTheme] = useState<ThemeMode>(defaultTheme)

  useEffect(() => {
    applyThemeMode(theme)
  }, [theme])

  return {
    theme,
    setTheme,
    toggleTheme: () => setTheme((t) => (t === "dark" ? "light" : "dark")),
  }
}



