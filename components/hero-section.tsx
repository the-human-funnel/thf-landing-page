import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Spotlight } from "@/components/ui/spotlight"
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react"

export default function HeroSection() {
  return (
    <>
      <main className="overflow-x-hidden">
        <section className="relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />

          {/* Spotlight effect */}
          <Spotlight
            className="-top-40 left-0 md:-top-20 md:left-60"
            fill="white"
          />

          <div className="pb-24 pt-32 md:pb-32 lg:pb-40 lg:pt-44">
            <div className="mx-auto max-w-7xl px-6">
              <div className="mx-auto max-w-4xl text-center">
                {/* Badge */}
                <Badge
                  variant="secondary"
                  className="mb-6 border border-primary/20 bg-primary/10 text-primary hover:bg-primary/20"
                >
                  <Sparkles className="mr-1 size-3" />
                  AI-Powered Recruitment Automation
                </Badge>

                {/* Main Headline */}
                <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
                  Filter <span className="text-primary">10,000 Candidates</span> to Your Perfect Hire in Minutes
                </h1>

                {/* Subheadline */}
                <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
                  Transform your hiring process with multi-stage AI analysis, automated interviews, and data-driven
                  insights. From resume to hire in one intelligent pipeline.
                </p>

                {/* CTAs */}
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button asChild size="lg" className="group h-12 px-8 text-base font-semibold">
                    <Link href="#get-started">
                      <span>Start Filtering Now</span>
                      <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>

                {/* Social Proof / Key Benefits */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-primary" />
                    <span>Process 10,000+ resumes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-primary" />
                    <span>AI-powered interviews</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 text-primary" />
                    <span>95% time reduction</span>
                  </div>
                </div>
              </div>

              {/* Hero Visual - Preview Dashboard */}
              <div className="relative mx-auto mt-16 max-w-6xl">
                <div className="relative rounded-2xl border border-border/50 bg-card/50 p-2 shadow-2xl backdrop-blur-sm">
                  <div className="aspect-video overflow-hidden rounded-xl border border-border/50 bg-muted/30">
                    {/* Dashboard Preview Placeholder */}
                    <div className="grid h-full grid-cols-3 gap-4 p-6">
                      {/* Stats Cards */}
                      <div className="col-span-3 grid grid-cols-3 gap-4">
                        <div className="rounded-lg border border-border/50 bg-card p-4">
                          <div className="text-2xl font-bold text-primary">10,247</div>
                          <div className="text-xs text-muted-foreground">Resumes Processed</div>
                        </div>
                        <div className="rounded-lg border border-border/50 bg-card p-4">
                          <div className="text-2xl font-bold text-primary">847</div>
                          <div className="text-xs text-muted-foreground">Interviews Completed</div>
                        </div>
                        <div className="rounded-lg border border-border/50 bg-card p-4">
                          <div className="text-2xl font-bold text-primary">95%</div>
                          <div className="text-xs text-muted-foreground">Time Saved</div>
                        </div>
                      </div>

                      {/* Candidate List Preview */}
                      <div className="col-span-2 space-y-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 rounded-lg border border-border/50 bg-card p-3"
                          >
                            <div className="size-8 rounded-full bg-primary/20" />
                            <div className="flex-1 space-y-1">
                              <div className="h-2 w-24 rounded bg-foreground/20" />
                              <div className="h-2 w-32 rounded bg-foreground/10" />
                            </div>
                            <div className="text-xs font-semibold text-primary">{95 - i * 3}%</div>
                          </div>
                        ))}
                      </div>

                      {/* Funnel Visualization */}
                      <div className="rounded-lg border border-border/50 bg-card p-4">
                        <div className="space-y-2">
                          {[100, 75, 45, 20].map((width, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className="h-3 rounded-sm bg-primary/80" style={{ width: `${width}%` }} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 right-1/4 size-72 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute -bottom-4 left-1/4 size-72 rounded-full bg-primary/10 blur-3xl" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
