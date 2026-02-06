"use client"

import { useState } from "react"
import type { Locale } from "@/lib/copy"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"

type ContactFormProps = {
  locale?: Locale
}

export function ContactForm({ locale = "en" }: ContactFormProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [statusDetail, setStatusDetail] = useState<string | null>(null)
  const [errors, setErrors] = useState<{ email?: string; message?: string }>({})

  const isSpanish = locale === "es"

  const emailLooksValid = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())

  const validate = () => {
    const next: typeof errors = {}
    if (!email.trim()) {
      next.email = isSpanish ? "El email es obligatorio." : "Email is required."
    } else if (!emailLooksValid(email)) {
      next.email = isSpanish ? "Introduce un email v\u00e1lido." : "Enter a valid email."
    }
    if (!message.trim()) {
      next.message = isSpanish ? "El mensaje es obligatorio." : "Message is required."
    } else if (message.trim().length < 10) {
      next.message = isSpanish ? "A\u00f1ade un poco m\u00e1s de contexto." : "Add a bit more context."
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setStatus("idle")
    setStatusDetail(null)
    if (!validate()) { setStatus("error"); return }

    setSubmitting(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, locale }),
      })
      if (!res.ok) {
        let detail = ""
        try { const data = await res.json(); if (data?.error) detail = String(data.error) } catch { /* ignore */ }
        throw new Error(detail || (isSpanish ? "No se pudo enviar el mensaje." : "Could not send message."))
      }
      setStatus("success")
      setName(""); setEmail(""); setMessage(""); setErrors({})
    } catch (err) {
      console.error("Contact form error", err)
      setStatus("error")
      setStatusDetail(
        err instanceof Error ? err.message : isSpanish ? "Ha habido un problema." : "There was a problem sending your message."
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="bg-card border border-border rounded-lg p-6 md:p-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {isSpanish ? "Nombre" : "Name"}
          </label>
          <Input
            type="text"
            autoComplete="given-name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-sm border-border bg-background/50 px-4 py-3 text-sm text-foreground focus-visible:ring-1 focus-visible:ring-accent-blue placeholder:text-muted-foreground/50 transition-colors"
            placeholder={isSpanish ? "Tu nombre" : "Your name"}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {isSpanish ? "Email" : "Email"} <span className="text-accent-blue">*</span>
          </label>
          <Input
            type="email"
            autoComplete="email"
            required
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => validate()}
            className={`rounded-sm border-border bg-background/50 px-4 py-3 text-sm text-foreground focus-visible:ring-1 focus-visible:ring-accent-blue placeholder:text-muted-foreground/50 transition-colors ${errors.email ? "border-destructive" : ""}`}
            placeholder={isSpanish ? "tu@email.com" : "you@email.com"}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
        </div>

        {/* Brief challenge / message */}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {isSpanish ? "Tu reto" : "Brief challenge"} <span className="text-accent-blue">*</span>
          </label>
          <Textarea
            required
            rows={4}
            maxLength={1200}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onBlur={() => validate()}
            className={`min-h-[100px] rounded-sm border-border bg-background/50 px-4 py-3 text-sm text-foreground focus-visible:ring-1 focus-visible:ring-accent-blue resize-none placeholder:text-muted-foreground/50 transition-colors ${errors.message ? "border-destructive" : ""}`}
            placeholder={
              isSpanish
                ? "Qu\u00e9 quieres automatizar o construir..."
                : "What do you want to automate or build..."
            }
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting || !email || !message}
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium tracking-tight rounded-sm bg-accent-blue text-foreground hover:brightness-110 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed shadow-md shadow-accent-blue/20"
        >
          {submitting
            ? (isSpanish ? "Enviando..." : "Sending...")
            : (isSpanish ? "Enviar mensaje" : "Send message")}
          {!submitting && <ArrowRight className="h-4 w-4" />}
        </button>

        {status === "success" && (
          <p className="text-sm text-accent-blue">
            {isSpanish
              ? "Gracias. Te responderemos pronto."
              : "Thanks. We'll get back to you soon."}
          </p>
        )}
        {status === "error" && statusDetail && (
          <p className="text-sm text-destructive">{statusDetail}</p>
        )}

        <p className="text-[11px] text-muted-foreground/60 leading-relaxed">
          {isSpanish ? (
            <>
              Al enviar, aceptas nuestra{" "}
              <a className="underline hover:text-muted-foreground transition-colors" href="/es/privacy">pol\u00edtica de privacidad</a>.
            </>
          ) : (
            <>
              By sending, you agree to our{" "}
              <a className="underline hover:text-muted-foreground transition-colors" href="/privacy">privacy policy</a>.
            </>
          )}
        </p>
      </form>
    </div>
  )
}
