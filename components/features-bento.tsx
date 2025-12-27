import { Card } from "@/components/ui/card"
import { FileSearch, Brain, Globe, Phone, BarChart3, Zap, Shield, Clock } from "lucide-react"

export default function FeaturesBento() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-balance text-4xl font-bold lg:text-5xl">Multi-Stage AI Analysis Pipeline</h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            From resume parsing to final recommendation, every stage powered by cutting-edge AI
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3">
          {/* Resume Processing - Large Card */}
          <Card className="group relative overflow-hidden border-border/50 bg-card p-6 transition-all hover:border-primary/50 lg:col-span-2 lg:row-span-2">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                <FileSearch className="size-6 text-primary" />
              </div>
              <h3 className="mb-2 text-2xl font-bold">Resume Processing Engine</h3>
              <p className="text-muted-foreground">
                Advanced PDF parsing with AI-powered data extraction. Process up to 10,000 resumes simultaneously with
                intelligent contact info parsing, skills categorization, and experience structuring.
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <div className="size-1.5 rounded-full bg-primary" />
                  <span>Bulk upload support</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="size-1.5 rounded-full bg-primary" />
                  <span>Smart data extraction</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="size-1.5 rounded-full bg-primary" />
                  <span>Contact & project URL parsing</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Multi-Provider AI */}
          <Card className="group relative overflow-hidden border-border/50 bg-card p-6 transition-all hover:border-primary/50 lg:col-span-2">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                <Brain className="size-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Multi-Provider AI Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Intelligent failover across Gemini, OpenAI, and Claude for 99.9% uptime and unbiased evaluations.
              </p>
            </div>
          </Card>

          {/* LinkedIn Analysis */}
          <Card className="group relative overflow-hidden border-border/50 bg-card p-6 transition-all hover:border-primary/50">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                <Globe className="size-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">LinkedIn Credibility</h3>
              <p className="text-sm text-muted-foreground">
                Professional profile analysis with network quality, endorsements, and career progression scoring.
              </p>
            </div>
          </Card>

          {/* GitHub Analysis */}
          <Card className="group relative overflow-hidden border-border/50 bg-card p-6 transition-all hover:border-primary/50">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                <svg className="size-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">GitHub Verification</h3>
              <p className="text-sm text-muted-foreground">
                Technical skills validation with project authenticity checks and commit history analysis.
              </p>
            </div>
          </Card>

          {/* AI Interviews */}
          <Card className="group relative overflow-hidden border-border/50 bg-card p-6 transition-all hover:border-primary/50 lg:col-span-2">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                <Phone className="size-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Automated AI Interviews</h3>
              <p className="text-sm text-muted-foreground">
                VAPI-powered phone interviews with real-time transcription, adaptive questioning, and performance
                scoring.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-primary/5 p-3">
                  <div className="text-2xl font-bold text-primary">100+</div>
                  <div className="text-xs text-muted-foreground">Interviews/day</div>
                </div>
                <div className="rounded-lg bg-primary/5 p-3">
                  <div className="text-2xl font-bold text-primary">98%</div>
                  <div className="text-xs text-muted-foreground">Call quality</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Intelligent Scoring */}
          <Card className="group relative overflow-hidden border-border/50 bg-card p-6 transition-all hover:border-primary/50">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                <BarChart3 className="size-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Smart Scoring</h3>
              <p className="text-sm text-muted-foreground">
                Weighted composite scores with customizable thresholds and hiring recommendations.
              </p>
            </div>
          </Card>

          {/* Speed */}
          <Card className="group relative overflow-hidden border-border/50 bg-card p-6 transition-all hover:border-primary/50">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                <Clock className="size-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">
                Process 1,000+ resumes per hour with parallel AI analysis across multiple stages.
              </p>
            </div>
          </Card>

          {/* Security */}
          <Card className="group relative overflow-hidden border-border/50 bg-card p-6 transition-all hover:border-primary/50">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                <Shield className="size-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Enterprise Security</h3>
              <p className="text-sm text-muted-foreground">
                End-to-end encryption with compliance-ready data handling and audit trails.
              </p>
            </div>
          </Card>

          {/* Scalability */}
          <Card className="group relative overflow-hidden border-border/50 bg-card p-6 transition-all hover:border-primary/50">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                <Zap className="size-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Infinite Scale</h3>
              <p className="text-sm text-muted-foreground">
                Microservice architecture handles 10,000+ candidates with horizontal scaling support.
              </p>
            </div>
          </Card>
        </div>

        {/* Statistics Section */}
        <div className="mt-20 grid gap-8 rounded-2xl border border-primary/20 bg-primary/5 p-8 md:grid-cols-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">10,000+</div>
            <div className="mt-2 text-sm text-muted-foreground">Resumes Processed Daily</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">95%</div>
            <div className="mt-2 text-sm text-muted-foreground">Time Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">99.9%</div>
            <div className="mt-2 text-sm text-muted-foreground">AI Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">8</div>
            <div className="mt-2 text-sm text-muted-foreground">Analysis Stages</div>
          </div>
        </div>
      </div>
    </section>
  )
}
