import { NextResponse } from "next/server"
import { Resend } from "resend"

const resendApiKey = process.env.RESEND_API_KEY
const resendFrom = process.env.RESEND_FROM
const resendTo = process.env.RESEND_TO

export async function POST(request: Request) {
  if (!resendApiKey || !resendFrom) {
    return NextResponse.json(
      { error: "Missing RESEND_API_KEY or RESEND_FROM." },
      { status: 500 }
    )
  }

  const body = await request.json()
  const { email, name, organization, source } = body ?? {}

  if (!email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 })
  }

  const resend = new Resend(resendApiKey)

  const subject = "Vigil demo request received"
  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>Thanks for requesting a Vigil demo</h2>
      <p>We received your request and will reach out shortly.</p>
      <p><strong>Name:</strong> ${name || "N/A"}</p>
      <p><strong>Organization:</strong> ${organization || "N/A"}</p>
    </div>
  `

  try {
    const { error } = await resend.emails.send({
      from: resendFrom,
      to: email,
      bcc: resendTo ? [resendTo] : undefined,
      subject,
      html,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
