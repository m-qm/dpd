import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, message, locale } = await request.json()

    if (!email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }

    const subject =
      locale === "es" ? "Nuevo proyecto desde dualperspective.digital" : "New project from dualperspective.digital"

    const safeMessage = (message as string).replace(/</g, "&lt;").replace(/>/g, "&gt;")

    await resend.emails.send({
      from: "website@dualperspective.digital",
      to: "hello@dualperspective.digital",
      subject,
      replyTo: email,
      html: `
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#050505;padding:32px 0;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;border:1px solid #262626;border-collapse:collapse;background:#050505;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Inter',sans-serif;color:#f5f5f5;">
                <tr>
                  <td style="padding:24px 28px 12px 28px;border-bottom:1px solid #262626;">
                    <div style="font-size:11px;letter-spacing:0.18em;text-transform:uppercase;color:#a3a3a3;margin-bottom:8px;">
                      Dual Perspective Digital
                    </div>
                    <div style="font-size:22px;line-height:1.1;font-weight:400;">
                      ${subject}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px 28px 6px 28px;border-bottom:1px solid #262626;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:13px;color:#e5e5e5;">
                      <tr>
                        <td style="padding:4px 0;width:96px;color:#737373;">Name</td>
                        <td style="padding:4px 0;">${name ? String(name) : "—"}</td>
                      </tr>
                      <tr>
                        <td style="padding:4px 0;width:96px;color:#737373;">Email</td>
                        <td style="padding:4px 0;">${email}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:22px 28px 28px 28px;">
                    <div style="font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#737373;margin-bottom:10px;">
                      ${locale === "es" ? "Mensaje" : "Message"}
                    </div>
                    <div style="font-size:14px;line-height:1.6;color:#e5e5e5;white-space:pre-wrap;">
                      ${safeMessage}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:16px 28px 22px 28px;border-top:1px solid #262626;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:11px;color:#737373;">
                      <tr>
                        <td style="padding-top:4px;">
                          Dual Perspective Digital — Barcelona
                        </td>
                        <td align="right" style="padding-top:4px;">
                          <a href="mailto:hello@dualperspective.digital" style="color:#f5f5f5;text-decoration:none;">
                            hello@dualperspective.digital
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Resend error", error)
    return NextResponse.json({ error: "Email failed" }, { status: 500 })
  }
}


