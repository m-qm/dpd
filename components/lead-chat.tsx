"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
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
    return {
      ["--background" as any]: "#0a0a0f",
      ["--foreground" as any]: "#f5f5f7",
      ["--muted-foreground" as any]: "#8b8b9e",
      ["--border" as any]: "#1e1e2a",
      ["--muted" as any]: "#16161d",
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
      {/* Launcher buttons */}
      <AnimatePresence>
        {!open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-3"
          >
            {/* WhatsApp button */}
            <motion.a
              href="https://wa.me/34600000000"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center h-11 w-11 rounded-full border border-[#1e1e2a] shadow-lg"
              style={{
                backgroundColor: "#0a0a0f",
                boxShadow: "0 6px 24px rgba(0, 0, 0, 0.4)",
              }}
              aria-label="WhatsApp"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </motion.a>

            {/* Chat launcher */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={() => setOpen(true)}
              className="group relative flex items-center justify-center h-14 w-14 rounded-full border border-[#1e1e2a] shadow-2xl"
              style={{
                backgroundColor: "#0a0a0f",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5), 0 0 20px rgba(46, 88, 255, 0.15)",
              }}
              aria-label={c.launcher}
            >
              <MessageCircle className="relative h-6 w-6 text-[#f5f5f7]" />
              {hasUnread && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 h-4 w-4 rounded-full"
                  style={{
                    backgroundColor: "#2e58ff",
                    border: "2px solid #0a0a0f",
                  }}
                />
              )}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.16, 1, 0.3, 1]
            }}
            className="w-[92vw] max-w-[400px] border overflow-hidden"
            style={{
              ...panelVars,
              backgroundColor: panelVars["--background" as any],
              borderColor: panelVars["--border" as any],
              transformOrigin: "bottom right",
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
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  )
}
