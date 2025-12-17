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

  const isSpanish = locale === "es"

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!email || !message) return

    setSubmitting(true)
    setStatus("idle")

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
        throw new Error(detail || "Request failed")
      }

      setStatus("success")
      setName("")
      setEmail("")
      setMessage("")
    } catch (err) {
      console.error("Contact form error", err)
      setStatus("error")
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-none border-x-0 border-t-0 border-b border-border/60 !bg-transparent px-0 focus-visible:ring-0 focus-visible:border-foreground placeholder:text-muted-foreground/60"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs tracking-[0.16em] uppercase text-muted-foreground">
            {isSpanish ? "Correo electrónico *" : "Email *"}
          </label>
          <Input
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-none border-x-0 border-t-0 border-b border-border/60 !bg-transparent px-0 focus-visible:ring-0 focus-visible:border-foreground placeholder:text-muted-foreground/60"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs tracking-[0.16em] uppercase text-muted-foreground">
          {isSpanish ? "Proyecto o contexto *" : "Project or context *"}
        </label>
        <Textarea
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="min-h-[120px] rounded-none border-x-0 border-t-0 border-b border-border/60 !bg-transparent px-0 focus-visible:ring-0 focus-visible:border-foreground resize-none placeholder:text-muted-foreground/60"
          placeholder={
            isSpanish
              ? "Cuéntanos brevemente sobre tu marca, proyecto o evento."
              : "Tell us a bit about your brand, project, or event."
          }
        />
      </div>

      <Button
        type="submit"
        disabled={submitting || !email || !message}
        className="inline-flex px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-normal tracking-tight rounded-none bg-foreground text-background hover:bg-foreground/90 disabled:opacity-50"
      >
        {isSpanish ? "Enviar" : "Send message"}
      </Button>

      {status === "success" && (
        <p className="text-sm text-muted-foreground">
          {isSpanish
            ? "Gracias. Hemos recibido tu mensaje."
            : "Thank you. Your message has been sent."}
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-destructive">
          {isSpanish
            ? "Ha habido un problema al enviar el mensaje. Por favor, inténtalo de nuevo."
            : "There was a problem sending your message. Please try again."}
        </p>
      )}
    </form>
  )
}


