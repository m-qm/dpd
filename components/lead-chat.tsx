"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { MessageCircle } from "lucide-react"

type Locale = "en" | "es"
type ThemeMode = "dark" | "light"

type ScopeOption = "internal_tool" | "automation" | "integrations" | "website" | "other"

type ChatStep =
  | { id: "scope" }
  | { id: "other_details" }
  | { id: "contact_name" }
  | { id: "contact_email" }
  | { id: "done" }

type TranscriptItem =
  | { role: "bot"; text: string }
  | { role: "user"; text: string }

function detectLocale(): Locale {
  const mainLang = document.querySelector("main")?.getAttribute("lang")
  const lang = (mainLang || document.documentElement.lang || "").toLowerCase()
  return lang.startsWith("es") ? "es" : "en"
}

function copyFor(locale: Locale) {
  const isEs = locale === "es"
  return {
    launcher: isEs ? "Chat" : "Chat",
    title: isEs ? "Cuéntanos qué necesitas" : "Tell us what you need",
    subtitle: isEs ? "Respuestas rápidas. Sin compromiso." : "Quick questions. No pressure.",
    close: isEs ? "Cerrar" : "Close",
    start: isEs ? "Empezar" : "Start",
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
    success: isEs ? "Gracias. Te escribiremos pronto." : "Thanks. We’ll get back to you soon.",
    error: isEs ? "No se pudo enviar. Prueba de nuevo." : "Couldn’t send. Please try again.",
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
  const [open, setOpen] = useState(false)
  const [locale, setLocale] = useState<Locale>("en")
  const [surfaceTheme, setSurfaceTheme] = useState<ThemeMode>("dark")
  const lastSurfaceThemeRef = useRef<ThemeMode>("dark")

  const [step, setStep] = useState<ChatStep>({ id: "scope" })
  const [transcript, setTranscript] = useState<TranscriptItem[]>([])

  const [scope, setScope] = useState<ScopeOption | null>(null)
  const [otherDetails, setOtherDetails] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [isTyping, setIsTyping] = useState(false)

  const c = useMemo(() => copyFor(locale), [locale])

  useEffect(() => {
    setLocale(detectLocale())
  }, [])

  // Keep the launcher/panel always readable by adapting to the theme of what's *behind* it.
  // This mimics the “always visible” feel on weareonforyou.com.
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

  // Panel: invert against the underlying section (same as launcher - if page is dark, panel is light; if light, panel is dark)
  const panelVars = useMemo<React.CSSProperties>(() => {
    if (surfaceTheme === "dark") {
      // Underlying is dark → panel becomes light
      return {
        ["--background" as any]: "#f5f5f5",
        ["--foreground" as any]: "oklch(0.1 0 0)",
        ["--muted-foreground" as any]: "oklch(0.4 0 0)",
        ["--border" as any]: "oklch(0.9 0 0)",
      }
    }
    // Underlying is light → panel becomes dark
    return {
      ["--background" as any]: "#0b0b0b",
      ["--foreground" as any]: "oklch(1 0 0)",
      ["--muted-foreground" as any]: "oklch(0.6 0 0)",
      ["--border" as any]: "oklch(0.2 0 0)",
    }
  }, [surfaceTheme])

  // Reset when opening
  useEffect(() => {
    if (!open) return
    const l = detectLocale()
    setLocale(l)
    setStep({ id: "scope" })
    setTranscript([{ role: "bot", text: copyFor(l).qScope }])
    setScope(null)
    setOtherDetails("")
    setName("")
    setEmail("")
    setStatus("idle")
  }, [open])

  const pushUser = (text: string) => setTranscript((t) => [...t, { role: "user", text }])
  const pushBot = (text: string, delay: number = 0) => {
    if (delay > 0) {
      setIsTyping(true)
      setTimeout(() => {
        setIsTyping(false)
        setTranscript((t) => [...t, { role: "bot", text }])
      }, delay)
    } else {
      setTranscript((t) => [...t, { role: "bot", text }])
    }
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
    <div className="fixed bottom-5 right-5 z-[60]">
      {/* Launcher */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex items-center justify-center h-13 w-13 rounded-full shadow-lg transition-transform duration-150"
          style={{
            backgroundColor: launcherVars["--launcher-bg" as any],
            color: launcherVars["--launcher-text" as any],
            border: `2px solid ${launcherVars["--launcher-border" as any]}`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.04)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)"
          }}
          aria-label={c.launcher}
        >
          <MessageCircle className="h-6 w-6" style={{ color: launcherVars["--launcher-text" as any] }} />
        </button>
      )}

      {/* Panel */}
      {open && (
        <div 
          className="w-[92vw] max-w-[360px] border-2 border-foreground/30 bg-background/90 backdrop-blur-sm shadow-lg"
          style={{
            ...panelVars,
            animation: "chatSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
            transformOrigin: "bottom right",
          }}
        >
          <div className="px-4 py-3 border-b-2 border-foreground/20 flex items-center justify-between">
            <div>
              <div className="text-sm text-foreground tracking-tight">{c.title}</div>
              <div className="text-xs text-muted-foreground">{c.subtitle}</div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-xs uppercase tracking-[0.18em] text-muted-foreground hover:opacity-70 transition-opacity"
            >
              {c.close}
            </button>
          </div>

          <div className="max-h-[46vh] overflow-auto px-4 py-4 space-y-3">
            {transcript.map((m, idx) => (
              <div 
                key={`${m.role}-${idx}-${m.text.slice(0, 10)}`}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} transition-opacity duration-200`}
              >
                <div
                  className={`max-w-[85%] text-sm leading-relaxed px-3 py-2 border ${
                    m.role === "user"
                      ? "bg-foreground text-background border-foreground"
                      : "bg-background text-foreground border-2 border-foreground/30"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-[85%] bg-background text-foreground border-2 border-foreground/30 px-3 py-2">
                  <div className="flex gap-1.5 py-1">
                    <span className="w-1.5 h-1.5 bg-foreground/60 rounded-full" style={{ animation: "bounce 1.4s ease-in-out infinite" }} />
                    <span className="w-1.5 h-1.5 bg-foreground/60 rounded-full" style={{ animation: "bounce 1.4s ease-in-out infinite 0.2s" }} />
                    <span className="w-1.5 h-1.5 bg-foreground/60 rounded-full" style={{ animation: "bounce 1.4s ease-in-out infinite 0.4s" }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="px-4 py-4 border-t-2 border-foreground/20">
            {step.id === "scope" && (
              <div className="grid grid-cols-2 gap-2">
                {(["internal_tool", "automation", "integrations", "website", "other"] as const).map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => onPickScope(v)}
                    className="px-3 py-2 text-xs uppercase tracking-[0.16em] border-2 border-foreground/40 hover:border-foreground/80 hover:bg-foreground/10 active:scale-[0.98] transition-all duration-200 text-foreground"
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
                  rows={2}
                  placeholder={c.placeholderOther}
                  className="w-full text-sm text-foreground bg-transparent border-2 border-foreground/40 px-3 py-2 focus:outline-none focus:border-foreground/80 transition-all duration-200 placeholder:text-muted-foreground"
                />
                <button
                  type="button"
                  onClick={onSubmitOther}
                  className="w-full px-3 py-2 bg-foreground text-background text-sm hover:bg-foreground/90 active:scale-[0.98] transition-all duration-200"
                >
                  {c.start}
                </button>
              </div>
            )}

            {step.id === "contact_name" && (
              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {c.name} · {c.required}
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
                    className="w-full text-sm text-foreground bg-transparent border-2 border-foreground/40 px-3 py-2 focus:outline-none focus:border-foreground/80 transition-all duration-200 placeholder:text-muted-foreground"
                    autoComplete="name"
                  />
                </div>
                <button
                  type="button"
                  disabled={status === "sending" || !name.trim()}
                  onClick={onSubmitName}
                  className="w-full px-3 py-2 bg-foreground text-background text-sm border-2 border-foreground hover:bg-foreground/90 active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:border-foreground/50"
                >
                  {c.next}
                </button>
              </div>
            )}

            {step.id === "contact_email" && (
              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {c.email} · {c.required}
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
                    className="w-full text-sm text-foreground bg-transparent border-2 border-foreground/40 px-3 py-2 focus:outline-none focus:border-foreground/80 transition-all duration-200 placeholder:text-muted-foreground"
                    autoComplete="email"
                    type="email"
                  />
                </div>
                <button
                  type="button"
                  disabled={status === "sending" || !email.trim() || !name.trim()}
                  onClick={onSubmitEmail}
                  className="w-full px-3 py-2 bg-foreground text-background text-sm border-2 border-foreground hover:bg-foreground/90 active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:border-foreground/50"
                >
                  {status === "sending" ? c.sending : c.send}
                </button>
              </div>
            )}

            {step.id === "done" && (
              <div className="flex justify-between items-center">
                <div className={`text-xs transition-colors duration-300 ${status === "success" ? "text-green-500" : "text-red-500"}`}>
                  {status === "success" ? c.success : c.error}
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="text-xs uppercase tracking-[0.18em] text-muted-foreground hover:opacity-70 transition-opacity"
                >
                  {c.close}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}


