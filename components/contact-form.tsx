"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error submitting your form. Please try again or contact us directly at adityaghailbdrp1@gmail.com")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-screen-md px-4">
          <div className="text-center">
            <div className="mb-4 text-6xl">✓</div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
              Thank You!
            </h2>
            <p className="text-lg text-muted-foreground">
              We've received your request. Our team will reach out to you within 24 hours to schedule your personalized demo.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-screen-md px-4">
        <h2 className="mb-4 text-center text-4xl font-bold tracking-tight text-foreground">
          Book Your Demo
        </h2>
        <p className="mb-8 text-center text-lg font-light text-muted-foreground sm:text-xl lg:mb-12">
          Ready to revolutionize your recruitment process? Schedule a personalized demo and discover how The Human Funnel can help you find the perfect candidates 95% faster.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="block w-full rounded-lg border border-input bg-background p-3 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Work Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="block w-full rounded-lg border border-input bg-background p-3 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="john@company.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              className="block w-full rounded-lg border border-input bg-background p-3 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="Acme Inc."
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="block w-full rounded-lg border border-input bg-background p-3 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="+1 (555) 000-0000"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Tell us about your hiring needs
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="block w-full rounded-lg border border-input bg-background p-3 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              placeholder="Tell us about your current hiring challenges, team size, or any specific requirements..."
              required
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-6 text-base font-semibold"
          >
            {isSubmitting ? "Sending..." : "Book Your Demo"}
          </Button>
          <p className="text-center text-sm text-muted-foreground">
            We'll respond within 24 hours • No obligation • Free consultation
          </p>
        </form>
      </div>
    </section>
  )
}
