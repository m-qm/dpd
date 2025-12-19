"use client"

import { useState } from "react"
import type { Locale } from "@/lib/copy"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

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
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({})

  const isSpanish = locale === "es"

  const emailLooksValid = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())

  const validate = () => {
    const next: typeof errors = {}

    if (!email.trim()) {
      next.email = isSpanish ? "El email es obligatorio." : "Email is required."
    } else if (!emailLooksValid(email)) {
      next.email = isSpanish ? "Introduce un email válido." : "Enter a valid email."
    }

    if (!message.trim()) {
      next.message = isSpanish ? "El mensaje es obligatorio." : "Message is required."
    } else if (message.trim().length < 10) {
      next.message = isSpanish ? "Añade un poco más de contexto (mín. 10 caracteres)." : "Add a bit more context (min. 10 characters)."
    }

    // Name is optional, but if provided make it minimally useful
    if (name.trim() && name.trim().length < 2) {
      next.name = isSpanish ? "Nombre demasiado corto." : "Name is too short."
    }

    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setStatus("idle")
    setStatusDetail(null)

    if (!validate()) {
      setStatus("error")
      return
    }

    setSubmitting(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, locale }),
      })

      if (!res.ok) {
        let detail = ""
        try {
          const data = await res.json()
          if (data?.error) detail = String(data.error)
        } catch {
          // ignore
        }
        throw new Error(detail || (isSpanish ? "No se pudo enviar el mensaje." : "Could not send message."))
      }

      setStatus("success")
      setStatusDetail(null)
      setName("")
      setEmail("")
      setMessage("")
      setErrors({})
    } catch (err) {
      console.error("Contact form error", err)
      setStatus("error")
      setStatusDetail(
        err instanceof Error
          ? err.message
          : isSpanish
            ? "Ha habido un problema al enviar el mensaje."
            : "There was a problem sending your message.",
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="max-w-xl">
      <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            {isSpanish ? "Nombre" : "Name"}
          </label>
          <Input
            type="text"
            autoComplete="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => {
              if (!Object.keys(errors).length) return
              validate()
            }}
            className={`rounded-none border-x-0 border-t-0 border-b-2 ${
              errors.name ? "border-destructive" : "border-border/80 focus-visible:border-foreground"
            } !bg-transparent px-0 py-3.5 text-base text-foreground focus-visible:ring-0 placeholder:text-muted-foreground/60 transition-colors`}
            placeholder={isSpanish ? "Tu nombre" : "Your name"}
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <p className="text-sm text-destructive mt-1.5">{errors.name}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            {isSpanish ? "Correo electrónico" : "Email"} <span className="text-destructive">*</span>
          </label>
          <Input
            type="email"
            autoComplete="email"
            required
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => validate()}
            className={`rounded-none border-x-0 border-t-0 border-b-2 ${
              errors.email ? "border-destructive" : "border-border/80 focus-visible:border-foreground"
            } !bg-transparent px-0 py-3.5 text-base text-foreground focus-visible:ring-0 placeholder:text-muted-foreground/60 transition-colors`}
            placeholder={isSpanish ? "tu@email.com" : "you@email.com"}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <p className="text-sm text-destructive mt-1.5">{errors.email}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium text-foreground">
            {isSpanish ? "Proyecto o contexto" : "Project or context"} <span className="text-destructive">*</span>
          </label>
          <span className="text-sm text-muted-foreground">{Math.min(message.length, 1200)}/1200</span>
        </div>
        <Textarea
          required
          rows={4}
          maxLength={1200}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={() => validate()}
          className={`min-h-[120px] rounded-none border-x-0 border-t-0 border-b-2 ${
            errors.message ? "border-destructive" : "border-border/80 focus-visible:border-foreground"
          } !bg-transparent px-0 py-3.5 text-base text-foreground focus-visible:ring-0 resize-none placeholder:text-muted-foreground/60 transition-colors`}
          placeholder={
            isSpanish
              ? "Qué quieres construir, para quién y qué parte te está quitando tiempo hoy."
              : "What you want to build, who it's for, and what's currently taking time today."
          }
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <p className="text-sm text-destructive mt-1.5">{errors.message}</p>}
      </div>

      <div className="space-y-4">
        <Button
          type="submit"
          disabled={submitting || !email || !message}
          className="inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-normal tracking-tight rounded-none bg-foreground text-background hover:bg-foreground/90 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {submitting ? (isSpanish ? "Enviando…" : "Sending…") : isSpanish ? "Enviar mensaje" : "Send message"}
        </Button>

        {status === "success" && (
          <p className="text-sm text-muted-foreground">
            {isSpanish
              ? "Gracias. Hemos recibido tu mensaje. Te responderemos pronto."
              : "Thanks. Your message has been sent. We'll get back to you soon."}
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-destructive">
            {statusDetail ||
              (isSpanish
                ? "Ha habido un problema al enviar el mensaje. Por favor, inténtalo de nuevo."
                : "There was a problem sending your message. Please try again.")}
          </p>
        )}
      </div>

      <p className="text-xs text-muted-foreground leading-relaxed">
        {isSpanish ? (
          <>
            Al enviar, aceptas nuestra{" "}
            <a className="text-foreground hover:opacity-70 transition-opacity" href="/es/privacy">
              política de privacidad
            </a>{" "}
            y el uso de cookies según la{" "}
            <a className="text-foreground hover:opacity-70 transition-opacity" href="/es/cookies">
              política de cookies
            </a>
            .
          </>
        ) : (
          <>
            By sending, you agree to our{" "}
            <a className="text-foreground hover:opacity-70 transition-opacity" href="/privacy">
              privacy policy
            </a>{" "}
            and cookies as described in the{" "}
            <a className="text-foreground hover:opacity-70 transition-opacity" href="/cookies">
              cookie policy
            </a>
            .
          </>
        )}
      </p>
    </form>
    </div>
  )
}


