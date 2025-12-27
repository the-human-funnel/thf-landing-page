import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section id="get-started" className="relative overflow-hidden py-24 md:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="absolute left-1/4 top-0 size-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 size-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-balance text-4xl font-bold lg:text-5xl">Ready to Transform Your Hiring Process?</h2>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
          Join forward-thinking companies using AI to find perfect candidates 95% faster. Start your free trial today,
          no credit card required.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="group h-14 px-8 text-lg font-semibold">
            <Link href="#signup">
              <span>Start Free 14-Day Trial</span>
              <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold bg-transparent">
            <Link href="#demo">
              <span>Schedule a Demo</span>
            </Link>
          </Button>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          14-day free trial · No credit card required · Cancel anytime
        </p>
      </div>
    </section>
  )
}
