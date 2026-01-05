"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { MessageCircle } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"

type Locale = "en" | "es"
type ThemeMode = "dark" | "light"

type ScopeOption = "internal_tool" | "automation" | "integrations" | "website" | "other"

type ChatStep =
  | { id: "language" }
  | { id: "scope" }
  | { id: "other_details" }
  | { id: "contact_name" }
  | { id: "contact_email" }
  | { id: "done" }

type TranscriptItem = {
  id: string
  role: "bot" | "user"
  text: string
}

function detectLocale(): Locale {
  if (typeof window === "undefined" || typeof document === "undefined") return "en"
  const mainLang = document.querySelector("main")?.getAttribute("lang")
  const lang = (mainLang || document.documentElement.lang || "").toLowerCase()
  return lang.startsWith("es") ? "es" : "en"
}

function isLikelyInSpain(): boolean {
  if (typeof window === "undefined" || typeof Intl === "undefined") return false
  
  try {
    // Check timezone - Spain uses Europe/Madrid
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    if (timezone === "Europe/Madrid" || timezone === "Europe/Barcelona") {
      return true
    }
    
    // Check browser language
    const lang = navigator.language || navigator.languages?.[0] || ""
    if (lang.toLowerCase().startsWith("es")) {
      return true
    }
    
    // Check if any of the user's preferred languages is Spanish
    if (navigator.languages) {
      for (const l of navigator.languages) {
        if (l.toLowerCase().startsWith("es")) {
          return true
        }
      }
    }
  } catch {
    // Fallback: just check language if timezone detection fails
    const lang = navigator.language || navigator.languages?.[0] || ""
    return lang.toLowerCase().startsWith("es")
  }
  
  return false
}

function copyFor(locale: Locale) {
  const isEs = locale === "es"
  return {
    launcher: isEs ? "Chat" : "Chat",
    title: isEs ? "Cuéntanos qué necesitas" : "Tell us what you need",
    subtitle: isEs ? "Respuestas rápidas. Sin compromiso." : "Quick questions. No pressure.",
    close: isEs ? "Cerrar" : "Close",
    start: isEs ? "Empezar" : "Start",
    qLanguage: "¿Prefieres español? / Do you prefer Spanish?",
    optSpanish: "Español",
    optEnglish: "English",
    qScope: isEs ? "¿Qué necesitas?" : "What do you need?",
    optInternal: isEs ? "Herramienta interna" : "Internal tool",
    optAutomation: isEs ? "Automatización" : "Automation",
    optIntegrations: isEs ? "Integraciones" : "Integrations",
    optWebsite: isEs ? "Website" : "Website",
    optOther: isEs ? "Otro" : "Other",
    qOther: isEs ? "Perfecto. Cuéntanos en una frase." : "Great. Tell us in one sentence.",
    placeholderOther: isEs ? "Ej: automatizar reportes semanales…" : "e.g. automate weekly reporting…",
    qName: isEs ? "Genial. ¿Cómo te llamas?" : "Great. What's your name?",
    qEmail: isEs ? "¿Y tu email para que podamos escribirte?" : "And your email so we can reply?",
    name: isEs ? "Nombre" : "Name",
    email: isEs ? "Email" : "Email",
    send: isEs ? "Enviar" : "Send",
    next: isEs ? "Siguiente" : "Next",
    sending: isEs ? "Enviando…" : "Sending…",
    success: isEs ? "Gracias. Te escribiremos pronto." : "Thanks. We'll get back to you soon.",
    error: isEs ? "No se pudo enviar. Prueba de nuevo." : "Couldn't send. Please try again.",
    invalidEmail: isEs ? "Escribe un email válido." : "Write a valid email.",
    required: isEs ? "Obligatorio" : "Required",
  }
}

function scopeLabel(locale: Locale, scope: ScopeOption) {
  const c = copyFor(locale)
  switch (scope) {
    case "internal_tool":
      return c.optInternal
    case "automation":
      return c.optAutomation
    case "integrations":
      return c.optIntegrations
    case "website":
      return c.optWebsite
    case "other":
      return c.optOther
  }
}

export function LeadChat() {
  const router = useRouter()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [locale, setLocale] = useState<Locale>("en")
  const [surfaceTheme, setSurfaceTheme] = useState<ThemeMode>("dark")
  const lastSurfaceThemeRef = useRef<ThemeMode>("dark")

  const [step, setStep] = useState<ChatStep>({ id: "language" })
  const [transcript, setTranscript] = useState<TranscriptItem[]>([])

  const [scope, setScope] = useState<ScopeOption | null>(null)
  const [otherDetails, setOtherDetails] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [isTyping, setIsTyping] = useState(false)
  // Initialize to false to match server render, then update in useEffect after hydration
  const [hasUnread, setHasUnread] = useState(false)
  const [autoOpened, setAutoOpened] = useState(false)
  const transcriptIdRef = useRef(0)

  const scrollRef = useRef<HTMLDivElement>(null)

  const c = useMemo(() => copyFor(locale), [locale])

  useEffect(() => {
    setLocale(detectLocale())
  }, [])

  // Check for unread status after hydration to avoid mismatch
  useEffect(() => {
    if (typeof window !== "undefined") {
      const seen = window.localStorage.getItem("dpd-chat-seen")
      setHasUnread(!seen)
    }
  }, [])

  // Keep the launcher/panel always readable by adapting to the theme of what's *behind* it.
  // This mimics the "always visible" feel on weareonforyou.com.
  useEffect(() => {
    let rafId = 0

    const compute = () => {
      rafId = 0

      // Sample the extreme corner so we don't accidentally hit the chat itself.
      const x = Math.max(0, window.innerWidth - 1)
      const y = Math.max(0, window.innerHeight - 1)

      const el = document.elementFromPoint(x, y) as HTMLElement | null
      const themed = (el?.closest?.("section[data-theme], footer[data-theme]") as HTMLElement | null) ?? null
      const next = ((themed?.dataset.theme as ThemeMode | undefined) ||
        (document.documentElement.dataset.theme as ThemeMode | undefined) ||
        "dark") as ThemeMode

      if (next !== lastSurfaceThemeRef.current) {
        lastSurfaceThemeRef.current = next
        setSurfaceTheme(next)
      }
    }

    const schedule = () => {
      if (rafId) return
      rafId = window.requestAnimationFrame(compute)
    }

    schedule()
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule)

    return () => {
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
      if (rafId) window.cancelAnimationFrame(rafId)
    }
  }, [])

  // Launcher: invert against the underlying section (if page is dark, launcher is light; if light, launcher is dark)
  const launcherVars = useMemo<React.CSSProperties>(() => {
    if (surfaceTheme === "dark") {
      // Underlying is dark → launcher becomes light
      return {
        ["--launcher-bg" as any]: "oklch(0.1 0 0)",
        ["--launcher-text" as any]: "#f5f5f5",
        ["--launcher-border" as any]: "oklch(0.9 0 0)",
      }
    }
    // Underlying is light → launcher becomes dark
    return {
      ["--launcher-bg" as any]: "oklch(1 0 0)",
      ["--launcher-text" as any]: "#0b0b0b",
      ["--launcher-border" as any]: "oklch(0.2 0 0)",
    }
  }, [surfaceTheme])

  // Panel: use site's actual theme colors (dark theme)
  const panelVars = useMemo<React.CSSProperties>(() => {
    // Always use dark theme to match site's aesthetic
    return {
      ["--background" as any]: "#0b0b0b",
      ["--foreground" as any]: "oklch(1 0 0)",
      ["--muted-foreground" as any]: "oklch(0.6 0 0)",
      ["--border" as any]: "oklch(0.2 0 0)",
      ["--muted" as any]: "oklch(0.15 0 0)",
    }
  }, [])

  // Auto-scroll to bottom when transcript changes or typing state changes
  useEffect(() => {
    if (scrollRef.current) {
      // Use requestAnimationFrame for smoother scrolling
      requestAnimationFrame(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollTo({
            top: scrollRef.current.scrollHeight,
            behavior: "smooth",
          })
        }
      })
    }
  }, [transcript, isTyping])

  // Reset when opening
  useEffect(() => {
    if (!open) {
      // Reset autoOpened flag when chat closes
      setAutoOpened(false)
      return
    }
    // Mark as read when chat is opened
    if (typeof window !== "undefined") {
      window.localStorage.setItem("dpd-chat-seen", "true")
      setHasUnread(false)
    }
    // Detect current page language
    const currentPageLocale = detectLocale()
    // Always start with language selection (even for Spanish users, ask them)
    setStep({ id: "language" })
    transcriptIdRef.current = 0
    setTranscript([{ id: (transcriptIdRef.current++).toString(), role: "bot", text: copyFor("en").qLanguage }])
    // Set locale to current page language initially, will be confirmed/updated when user chooses
    setLocale(currentPageLocale)
    setScope(null)
    setOtherDetails("")
    setName("")
    setEmail("")
    setStatus("idle")
  }, [open])

  const pushUser = (text: string) => {
    const id = (transcriptIdRef.current++).toString()
    setTranscript((t) => [...t, { id, role: "user", text }])
  }
  const pushBot = (text: string, delay: number = 0) => {
    const id = (transcriptIdRef.current++).toString()
    
    if (delay > 0) {
      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
        setTranscript((t) => [...t, { id, role: "bot", text }])
      }, delay)
    } else {
      setTranscript((t) => [...t, { id, role: "bot", text }])
    }
  }

  const onPickLanguage = (selectedLocale: Locale) => {
    setLocale(selectedLocale)
    const langLabel = selectedLocale === "es" ? copyFor("en").optSpanish : copyFor("en").optEnglish
    pushUser(langLabel)
    
    // Save language preference
    if (typeof window !== "undefined") {
      window.localStorage.setItem("dpd-lang", selectedLocale)
    }
    
    // Redirect to appropriate page if needed
    // Note: "/" is Spanish by default, "/en" is English, "/es" is also Spanish
    const isOnEnglishPage = pathname.startsWith("/en")
    const isOnSpanishPage = pathname === "/" || pathname.startsWith("/es")
    
    if (selectedLocale === "es" && isOnEnglishPage) {
      // Spanish selected, but on English page → redirect to Spanish
      const basePath = pathname.replace(/^\/en/, "") || "/"
      router.push(basePath === "/" ? "/" : `/es${basePath}`)
    } else if (selectedLocale === "en" && isOnSpanishPage) {
      // English selected, but on Spanish page → redirect to English
      const basePath = pathname === "/" ? "" : pathname.replace(/^\/es/, "")
      router.push(`/en${basePath === "/" ? "" : basePath}`)
    }
    
    // Continue with the normal flow
    setStep({ id: "scope" })
    const c = copyFor(selectedLocale)
    pushBot(c.qScope, 300)
  }

  const onPickScope = (value: ScopeOption) => {
    setScope(value)
    pushUser(scopeLabel(locale, value))

    if (value === "other") {
      setStep({ id: "other_details" })
      pushBot(c.qOther, 300)
      return
    }

    setStep({ id: "contact_name" })
    pushBot(c.qName, 300)
  }

  const onSubmitOther = () => {
    const v = otherDetails.trim()
    if (!v) return
    pushUser(v)
    setStep({ id: "contact_name" })
    pushBot(c.qName, 300)
  }

  const onSubmitName = () => {
    const v = name.trim()
    if (!v) return
    pushUser(v)
    setStep({ id: "contact_email" })
    pushBot(c.qEmail, 300)
  }

  const onSubmitEmail = () => {
    const v = email.trim()
    if (!v) return

    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
    if (!isValid) {
      pushBot(c.invalidEmail, 200)
      return
    }

    pushUser(v)
    onSubmit()
  }

  const buildMessage = () => {
    const lines: string[] = []
    lines.push("Lead chat (sequential)")
    lines.push("")
    if (scope) lines.push(`Scope: ${scopeLabel(locale, scope)}`)
    if (scope === "other" && otherDetails.trim()) lines.push(`Details: ${otherDetails.trim()}`)
    lines.push("")
    lines.push("Transcript:")
    for (const item of transcript) {
      lines.push(`${item.role === "bot" ? "Bot" : "User"}: ${item.text}`)
    }
    return lines.join("\n")
  }

  const onSubmit = async () => {
    if (!email.trim() || !name.trim()) return
    setStatus("sending")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: buildMessage(),
          locale,
        }),
      })
      if (!res.ok) throw new Error("Failed")
      setStatus("success")
      setStep({ id: "done" })
      pushBot(c.success, 400)
    } catch {
      setStatus("error")
      pushBot(c.error, 400)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {/* Launcher */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={`relative flex items-center justify-center h-14 w-14 md:h-16 md:w-16 rounded-full border-2 transition-all duration-500 ease-out hover:scale-110 active:scale-95 shadow-2xl hover:shadow-blue-500/30 ${
            hasUnread ? "animate-chatPulse" : ""
          }`}
          style={{
            backgroundColor: "#0b0b0b",
            color: "oklch(1 0 0)",
            borderColor: "oklch(0.35 0 0)",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(46, 88, 255, 0.2)",
          }}
          aria-label={c.launcher}
        >
          {/* Glow effect */}
          <div 
            className="absolute inset-0 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500 ease-out"
            style={{
              background: "radial-gradient(circle, rgba(46, 88, 255, 0.3) 0%, transparent 70%)",
              filter: "blur(8px)",
            }}
          />
          <MessageCircle className="relative h-6 w-6 md:h-7 md:w-7" style={{ color: "oklch(1 0 0)" }} />
          {hasUnread && (
            <>
              {/* Notification badge - larger and more visible */}
              <span
                className="absolute -top-1 -right-1 h-4 w-4 md:h-5 md:w-5 rounded-full animate-badgePulse"
                style={{
                  backgroundColor: "#ef4444",
                  border: `3px solid #0b0b0b`,
                  boxShadow: "0 0 10px rgba(239, 68, 68, 0.6)",
                }}
              />
              {/* Outer pulse ring - more visible */}
              <span
                className="absolute inset-0 rounded-full animate-ringPulse"
                style={{
                  border: `2px solid #ef4444`,
                  opacity: 0.6,
                  boxShadow: "0 0 20px rgba(239, 68, 68, 0.4)",
                }}
              />
            </>
          )}
        </button>
      )}

      {/* Panel */}
      {open && (
        <div 
          className="w-[92vw] max-w-[400px] border overflow-hidden"
          style={{
            ...panelVars,
            backgroundColor: panelVars["--background" as any],
            borderColor: panelVars["--border" as any],
            animation: "chatSlideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            transformOrigin: "bottom right",
            willChange: "transform, opacity",
          }}
        >
          <div 
            className="px-5 py-4 border-b flex items-center justify-between"
            style={{
              borderColor: panelVars["--border" as any],
            }}
          >
            <div>
              <div className="text-sm tracking-tight" style={{ color: panelVars["--foreground" as any] }}>{c.title}</div>
              <div className="text-xs mt-0.5" style={{ color: panelVars["--muted-foreground" as any] }}>{c.subtitle}</div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="h-8 w-8 flex items-center justify-center transition-all duration-300 ease-out hover:opacity-70 hover:scale-110 active:scale-95"
              style={{ color: panelVars["--muted-foreground" as any] }}
              aria-label={c.close}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div ref={scrollRef} className="max-h-[50vh] overflow-auto px-5 py-4 space-y-3" style={{ backgroundColor: panelVars["--background" as any] }}>
            {transcript.map((m) => (
              <div 
                key={m.id}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} chat-message-enter`}
              >
                <div
                  className="max-w-[80%] text-sm leading-relaxed px-4 py-2.5 border"
                  style={{
                    backgroundColor: m.role === "user" 
                      ? panelVars["--foreground" as any]
                      : panelVars["--muted" as any],
                    color: m.role === "user"
                      ? panelVars["--background" as any]
                      : panelVars["--foreground" as any],
                    borderColor: panelVars["--border" as any],
                  }}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start chat-message-enter">
                <div 
                  className="max-w-[80%] px-4 py-3 border"
                  style={{
                    backgroundColor: panelVars["--muted" as any],
                    borderColor: panelVars["--border" as any],
                  }}
                >
                  <div className="flex gap-1.5">
                    <span 
                      className="w-2 h-2 rounded-full animate-bounce" 
                      style={{ 
                        backgroundColor: panelVars["--foreground" as any],
                        opacity: 0.6,
                        animationDelay: "0ms",
                        animationDuration: "1.4s",
                        animationTimingFunction: "ease-in-out",
                      }} 
                    />
                    <span 
                      className="w-2 h-2 rounded-full animate-bounce" 
                      style={{ 
                        backgroundColor: panelVars["--foreground" as any],
                        opacity: 0.6,
                        animationDelay: "200ms",
                        animationDuration: "1.4s",
                        animationTimingFunction: "ease-in-out",
                      }} 
                    />
                    <span 
                      className="w-2 h-2 rounded-full animate-bounce" 
                      style={{ 
                        backgroundColor: panelVars["--foreground" as any],
                        opacity: 0.6,
                        animationDelay: "400ms",
                        animationDuration: "1.4s",
                        animationTimingFunction: "ease-in-out",
                      }} 
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div 
            className="px-5 py-4 border-t"
            style={{
              borderColor: panelVars["--border" as any],
            }}
          >
            {step.id === "language" && (
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => onPickLanguage("es")}
                  className="px-4 py-2.5 text-sm tracking-tight border transition-all duration-300 ease-out hover:opacity-70 hover:scale-[1.02] active:opacity-50 active:scale-[0.98]"
                  style={{
                    backgroundColor: panelVars["--background" as any],
                    color: panelVars["--foreground" as any],
                    borderColor: panelVars["--border" as any],
                  }}
                >
                  {copyFor("en").optSpanish}
                </button>
                <button
                  type="button"
                  onClick={() => onPickLanguage("en")}
                  className="px-4 py-2.5 text-sm tracking-tight border transition-all duration-300 ease-out hover:opacity-70 hover:scale-[1.02] active:opacity-50 active:scale-[0.98]"
                  style={{
                    backgroundColor: panelVars["--background" as any],
                    color: panelVars["--foreground" as any],
                    borderColor: panelVars["--border" as any],
                  }}
                >
                  {copyFor("en").optEnglish}
                </button>
              </div>
            )}

            {step.id === "scope" && (
              <div className="grid grid-cols-2 gap-2.5">
                {(["internal_tool", "automation", "integrations", "website", "other"] as const).map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => onPickScope(v)}
                    className="px-4 py-2.5 text-sm tracking-tight border transition-all duration-300 ease-out hover:opacity-70 hover:scale-[1.02] active:opacity-50 active:scale-[0.98]"
                    style={{
                      backgroundColor: panelVars["--background" as any],
                      color: panelVars["--foreground" as any],
                      borderColor: panelVars["--border" as any],
                    }}
                  >
                    {scopeLabel(locale, v)}
                  </button>
                ))}
              </div>
            )}

            {step.id === "other_details" && (
              <div className="space-y-3">
                <textarea
                  value={otherDetails}
                  onChange={(e) => setOtherDetails(e.target.value)}
                  rows={3}
                  placeholder={c.placeholderOther}
                  className="w-full text-sm tracking-tight border px-4 py-3 focus:outline-none transition-all duration-300 ease-out focus:border-foreground/50 resize-none"
                  style={{
                    backgroundColor: panelVars["--background" as any],
                    color: panelVars["--foreground" as any],
                    borderColor: panelVars["--border" as any],
                  }}
                />
                <button
                  type="button"
                  onClick={onSubmitOther}
                  className="w-full px-4 py-2.5 text-sm tracking-tight border transition-all duration-300 ease-out hover:opacity-70 hover:scale-[1.01] active:opacity-50 active:scale-[0.99]"
                  style={{
                    backgroundColor: panelVars["--foreground" as any],
                    color: panelVars["--background" as any],
                    borderColor: panelVars["--foreground" as any],
                  }}
                >
                  {c.start}
                </button>
              </div>
            )}

            {step.id === "contact_name" && (
              <div className="space-y-3">
                <div className="space-y-2">
                  <label className="text-xs tracking-tight" style={{ color: panelVars["--muted-foreground" as any] }}>
                    {c.name} <span style={{ opacity: 0.6 }}>· {c.required}</span>
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault()
                        onSubmitName()
                      }
                    }}
                    className="w-full text-sm tracking-tight border px-4 py-3 focus:outline-none transition-all duration-300 ease-out focus:border-foreground/50"
                    style={{
                      backgroundColor: panelVars["--background" as any],
                      color: panelVars["--foreground" as any],
                      borderColor: panelVars["--border" as any],
                    }}
                    placeholder={c.name}
                    autoComplete="name"
                  />
                </div>
                <button
                  type="button"
                  disabled={status === "sending" || !name.trim()}
                  onClick={onSubmitName}
                  className="w-full px-4 py-2.5 text-sm tracking-tight border transition-all duration-300 ease-out hover:opacity-70 hover:scale-[1.01] active:opacity-50 active:scale-[0.99] disabled:opacity-30 disabled:scale-100"
                  style={{
                    backgroundColor: panelVars["--foreground" as any],
                    color: panelVars["--background" as any],
                    borderColor: panelVars["--foreground" as any],
                  }}
                >
                  {c.next}
                </button>
              </div>
            )}

            {step.id === "contact_email" && (
              <div className="space-y-3">
                <div className="space-y-2">
                  <label className="text-xs tracking-tight" style={{ color: panelVars["--muted-foreground" as any] }}>
                    {c.email} <span style={{ opacity: 0.6 }}>· {c.required}</span>
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault()
                        onSubmitEmail()
                      }
                    }}
                    className="w-full text-sm tracking-tight border px-4 py-3 focus:outline-none transition-all duration-300 ease-out focus:border-foreground/50"
                    style={{
                      backgroundColor: panelVars["--background" as any],
                      color: panelVars["--foreground" as any],
                      borderColor: panelVars["--border" as any],
                    }}
                    placeholder={c.email}
                    autoComplete="email"
                    type="email"
                  />
                </div>
                <button
                  type="button"
                  disabled={status === "sending" || !email.trim() || !name.trim()}
                  onClick={onSubmitEmail}
                  className="w-full px-4 py-2.5 text-sm tracking-tight border transition-all duration-300 ease-out hover:opacity-70 hover:scale-[1.01] active:opacity-50 active:scale-[0.99] disabled:opacity-30 disabled:scale-100"
                  style={{
                    backgroundColor: panelVars["--foreground" as any],
                    color: panelVars["--background" as any],
                    borderColor: panelVars["--foreground" as any],
                  }}
                >
                  {status === "sending" ? c.sending : c.send}
                </button>
              </div>
            )}

            {step.id === "done" && (
              <div className="flex justify-between items-center">
                <div className="text-sm tracking-tight" style={{ 
                  color: status === "success" ? "oklch(0.7 0.15 150)" : "oklch(0.6 0.2 25)" 
                }}>
                  {status === "success" ? c.success : c.error}
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="h-8 w-8 flex items-center justify-center transition-opacity hover:opacity-70"
                  style={{ color: panelVars["--muted-foreground" as any] }}
                  aria-label={c.close}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}