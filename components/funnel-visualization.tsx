import { Card } from "@/components/ui/card"
import { FileText, Brain, Linkedin, Github, Phone, ClipboardCheck, FileCheck, Award } from "lucide-react"

const stages = [
  {
    icon: FileText,
    title: "Resume Upload",
    description: "Bulk upload up to 10,000 PDFs",
    candidates: "10,000",
    width: "100%",
  },
  {
    icon: Brain,
    title: "AI Resume Analysis",
    description: "Multi-provider intelligent evaluation",
    candidates: "8,500",
    width: "85%",
  },
  {
    icon: Linkedin,
    title: "LinkedIn Analysis",
    description: "Professional credibility scoring",
    candidates: "6,200",
    width: "62%",
  },
  {
    icon: Github,
    title: "GitHub Verification",
    description: "Technical skills & project authenticity",
    candidates: "4,100",
    width: "41%",
  },
  {
    icon: Phone,
    title: "AI Interviews",
    description: "Automated phone screening",
    candidates: "2,500",
    width: "25%",
  },
  {
    icon: ClipboardCheck,
    title: "Transcript Analysis",
    description: "Performance & competency scoring",
    candidates: "1,800",
    width: "18%",
  },
  {
    icon: FileCheck,
    title: "Final Scoring", // Updated title
    description: "Intelligent ranking & reasoning", // Updated description
    candidates: "850",
    width: "8.5%",
  },
  {
    icon: Award,
    title: "Top Candidates",
    description: "Strong hire recommendations",
    candidates: "247",
    width: "2.47%",
  },
]

export default function FunnelVisualization() {
  return (
    <section id="how-it-works" className="bg-muted/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-balance text-4xl font-bold lg:text-5xl">The Human Funnel Process</h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Watch candidates flow through 8 intelligent stages from initial upload to perfect hire
          </p>
        </div>

        {/* Desktop Funnel */}
        <div className="hidden lg:block">
          <div className="relative mx-auto max-w-5xl">
            {stages.map((stage, index) => {
              const Icon = stage.icon
              const isLast = index === stages.length - 1

              return (
                <div key={index} className="relative mb-6">
                  {/* Funnel Stage */}
                  <div
                    className="relative mx-auto transition-all duration-300 hover:scale-[1.02]"
                    style={{ width: stage.width }}
                  >
                    <Card className="border-primary/20 bg-card p-6 shadow-lg">
                      <div className="flex items-center gap-6">
                        {/* Icon */}
                        <div className="flex-shrink-0 rounded-xl bg-primary/10 p-3">
                          <Icon className="size-6 text-primary" />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-baseline gap-3">
                            <h3 className="text-lg font-bold">{stage.title}</h3>
                            <span className="text-xs text-muted-foreground">Stage {index + 1}</span>
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground">{stage.description}</p>
                        </div>

                        {/* Candidate Count */}
                        <div className="flex-shrink-0 text-right">
                          <div className="text-2xl font-bold text-primary">{stage.candidates}</div>
                          <div className="text-xs text-muted-foreground">candidates</div>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Connecting Line */}
                  {!isLast && (
                    <div className="relative mx-auto h-8" style={{ width: stage.width }}>
                      <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary/50 to-primary/20" />
                      <div className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile/Tablet Funnel */}
        <div className="space-y-6 lg:hidden">
          {stages.map((stage, index) => {
            const Icon = stage.icon
            const isLast = index === stages.length - 1

            return (
              <div key={index} className="relative">
                <Card className="border-primary/20 bg-card p-6 shadow-lg">
                  <div className="flex items-start gap-4">
                    {/* Icon & Stage Number */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="rounded-xl bg-primary/10 p-3">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <span className="text-xs text-muted-foreground">Stage {index + 1}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold">{stage.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{stage.description}</p>
                      <div className="mt-3 flex items-center gap-2">
                        <div className="text-xl font-bold text-primary">{stage.candidates}</div>
                        <div className="text-xs text-muted-foreground">candidates</div>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4 h-2 w-full rounded-full bg-muted">
                    <div className="h-full rounded-full bg-primary transition-all" style={{ width: stage.width }} />
                  </div>
                </Card>

                {/* Connecting Arrow */}
                {!isLast && (
                  <div className="flex justify-center py-2">
                    <div className="h-6 w-0.5 bg-gradient-to-b from-primary/50 to-primary/20" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="border-primary/20 bg-primary/5 p-8">
            <h3 className="text-2xl font-bold">See Your Hiring Pipeline Transform</h3>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Join companies processing thousands of candidates daily with unprecedented accuracy and speed
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
