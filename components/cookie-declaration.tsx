"use client"

import { useEffect, useState } from "react"
import Script from "next/script"

type Locale = "en" | "es"

export function CookieDeclaration({ locale = "en" }: { locale?: Locale }) {
  const [error, setError] = useState(false)
  const [isLocalhost, setIsLocalhost] = useState(false)

  useEffect(() => {
    // Check if we're on localhost
    if (typeof window !== "undefined") {
      const hostname = window.location.hostname
      setIsLocalhost(hostname === "localhost" || hostname === "127.0.0.1")
    }
  }, [])

  useEffect(() => {
    // Listen for Cookiebot errors
    const handleError = () => {
      setError(true)
    }

    // Check for error after script loads
    const timer = setTimeout(() => {
      const declarationDiv = document.getElementById("CookieDeclaration")
      if (declarationDiv && declarationDiv.textContent?.includes("not authorized")) {
        setError(true)
      }
    }, 2000)

    window.addEventListener("error", handleError)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("error", handleError)
    }
  }, [])

  if (isLocalhost || error) {
    const isEs = locale === "es"
    return (
      <div className="rounded-lg border border-border/40 bg-muted/30 p-6">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {isLocalhost ? (
            <>
              <strong className="text-foreground">
                {isEs ? "Modo desarrollo:" : "Development mode:"}
              </strong>{" "}
              {isEs 
                ? "La declaración de cookies no está disponible en localhost. Para ver la declaración de cookies, por favor añade"
                : "The cookie declaration is not available on localhost. To view the cookie declaration, please add"
              }{" "}
              <code className="px-1.5 py-0.5 bg-background rounded text-xs">localhost</code>{" "}
              {isEs 
                ? "a tu grupo de dominios de Cookiebot, o visita esta página en producción."
                : "to your Cookiebot domain group, or visit this page in production."
              }
            </>
          ) : (
            <>
              <strong className="text-foreground">
                {isEs ? "Declaración de cookies no disponible:" : "Cookie declaration unavailable:"}
              </strong>{" "}
              {isEs
                ? "Hubo un error al cargar la declaración de cookies. Por favor, asegúrate de que tu dominio esté autorizado en el Cookiebot Manager."
                : "There was an error loading the cookie declaration. Please ensure your domain is authorized in the Cookiebot Manager."
              }
            </>
          )}
        </p>
      </div>
    )
  }

  return (
    <>
      <Script
        id="CookieDeclaration"
        src="https://consent.cookiebot.com/8d1922ed-2465-4011-9bb9-342ee3cd73fd/cd.js"
        strategy="afterInteractive"
        type="text/javascript"
        onError={() => setError(true)}
      />
      <div id="CookieDeclaration" />
    </>
  )
}

