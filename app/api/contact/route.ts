import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, message, locale } = await request.json()

    if (!email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }

    await resend.emails.send({
      from: "website@dualperspective.digital",
      to: "hello@dualperspective.digital",
      subject:
        locale === "es"
          ? "Nuevo proyecto desde la web"
          : "New project from the website",
      replyTo: email,
      text: [
        `Name: ${name || "-"}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Resend error", error)
    return NextResponse.json({ error: "Email failed" }, { status: 500 })
  }
}


