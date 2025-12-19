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
    <form onSubmit={handleSubmit} className="space-y-8 max-w-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-xs tracking-[0.16em] uppercase text-muted-foreground">
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
            className="rounded-none border-x-0 border-t-0 border-b border-border/60 !bg-transparent px-0 focus-visible:ring-0 focus-visible:border-foreground placeholder:text-muted-foreground/60"
            placeholder={isSpanish ? "Tu nombre" : "Your name"}
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-xs tracking-[0.16em] uppercase text-muted-foreground">
            {isSpanish ? "Correo electrónico" : "Email"} <span className="text-muted-foreground/70">*</span>
          </label>
          <Input
            type="email"
            autoComplete="email"
            required
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => validate()}
            className="rounded-none border-x-0 border-t-0 border-b border-border/60 !bg-transparent px-0 focus-visible:ring-0 focus-visible:border-foreground placeholder:text-muted-foreground/60"
            placeholder={isSpanish ? "tu@email.com" : "you@email.com"}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-xs tracking-[0.16em] uppercase text-muted-foreground">
            {isSpanish ? "Proyecto o contexto" : "Project or context"} <span className="text-muted-foreground/70">*</span>
          </label>
          <span className="text-xs text-muted-foreground">{Math.min(message.length, 1200)}/1200</span>
        </div>
        <Textarea
          required
          rows={4}
          maxLength={1200}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={() => validate()}
          className="min-h-[120px] rounded-none border-x-0 border-t-0 border-b border-border/60 !bg-transparent px-0 focus-visible:ring-0 focus-visible:border-foreground resize-none placeholder:text-muted-foreground/60"
          placeholder={
            isSpanish
              ? "Qué quieres construir, para quién y qué parte te está quitando tiempo hoy."
              : "What you want to build, who it’s for, and what’s currently taking time today."
          }
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
      </div>

      <Button
        type="submit"
        disabled={submitting || !email || !message}
        className="inline-flex px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-normal tracking-tight rounded-none bg-foreground text-background hover:bg-foreground/90 disabled:opacity-50"
      >
        {submitting ? (isSpanish ? "Enviando…" : "Sending…") : isSpanish ? "Enviar" : "Send message"}
      </Button>

      {status === "success" && (
        <p className="text-sm text-muted-foreground">
          {isSpanish
            ? "Gracias. Hemos recibido tu mensaje. Te responderemos pronto."
            : "Thanks. Your message has been sent. We’ll get back to you soon."}
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
  )
}


