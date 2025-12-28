import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, phone, message } = body

    // Validate required fields
    if (!name || !email || !company || !phone || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    // Email configuration
    const recipientEmail = "adityaghailbdrp1@gmail.com"

    // Format email content as HTML for better presentation
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #84cc16; padding-bottom: 10px;">
          New Demo Request - The Human Funnel
        </h2>

        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 10px 0;"><strong>Company:</strong> ${company}</p>
          <p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>
        </div>

        <div style="margin: 20px 0;">
          <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
          <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #888; font-size: 12px;">
          <p>Submitted at: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `

    // Plain text version
    const textContent = `
New Demo Request from The Human Funnel Landing Page
---------------------------------------------------

Name: ${name}
Email: ${email}
Company: ${company}
Phone: ${phone}

Message:
${message}

---------------------------------------------------
Submitted at: ${new Date().toLocaleString()}
    `.trim()

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "The Human Funnel <onboarding@resend.dev>", // Update this to your verified domain once you have one
      to: [recipientEmail],
      subject: `New Demo Request from ${name} - ${company}`,
      html: htmlContent,
      text: textContent,
      replyTo: email, // Allows you to reply directly to the submitter
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      )
    }

    console.log("Email sent successfully:", data)

    return NextResponse.json(
      {
        success: true,
        message: "Form submitted successfully. We'll contact you soon!",
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to submit form. Please try again." },
      { status: 500 }
    )
  }
}
