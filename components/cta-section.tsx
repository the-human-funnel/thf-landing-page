import ContactForm from "@/components/contact-form"

export default function CTASection() {
  return (
    <section id="signup" className="relative overflow-hidden py-24 md:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="absolute left-1/4 top-0 size-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 size-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-4xl font-bold lg:text-5xl">Ready to Transform Your Hiring Process?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
            Join forward-thinking companies using AI to find perfect candidates 95% faster. Fill out the form below to
            get started.
          </p>
        </div>

        <ContactForm />

        <p className="mt-6 text-center text-sm text-muted-foreground">
          No credit card required · Get a response within 24 hours
        </p>
      </div>
    </section>
  )
}
