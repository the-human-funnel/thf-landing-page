"use client"
import { Timeline } from "@/components/ui/timeline"
import { FileText, Brain, Linkedin, Github, Phone, ClipboardCheck, FileCheck, Award } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function THFTimeline() {
  const data = [
    {
      title: "Stage 1",
      content: (
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-xl bg-primary/10 p-3">
              <FileText className="size-8 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Resume Upload & Processing</h3>
              <p className="text-sm text-muted-foreground">Bulk import up to 10,000 candidates</p>
            </div>
          </div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Upload thousands of resumes in bulk through our intelligent PDF processing system. Our AI extracts
            structured data from resumes in any format, handling multiple languages and layouts with 98% accuracy.
          </p>
          <div className="mb-6 grid grid-cols-2 gap-4">
            <Card className="border-primary/20 bg-card p-4">
              <div className="text-3xl font-bold text-primary">10,000</div>
              <div className="text-sm text-muted-foreground">Candidates Uploaded</div>
            </Card>
            <Card className="border-primary/20 bg-card p-4">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Extraction Accuracy</div>
            </Card>
          </div>
          <div className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
            <div className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-primary" />
              PDF parsing with multi-format support
            </div>
            <div className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-primary" />
              Automatic data extraction and structuring
            </div>
            <div className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-primary" />
              Duplicate detection and merging
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Stage 2",
      content: (
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-xl bg-primary/10 p-3">
              <Brain className="size-8 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">AI-Powered Resume Analysis</h3>
              <p className="text-sm text-muted-foreground">Multi-provider intelligent evaluation</p>
            </div>
          </div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Our multi-AI provider system analyzes resumes using GPT-4, Claude, and Gemini simultaneously. Each resume is
            scored across 50+ criteria including experience relevance, skill matching, career progression, and red flag
            detection.
          </p>
          <div className="mb-6 grid grid-cols-2 gap-4">
            <Card className="border-primary/20 bg-card p-4">
              <div className="text-3xl font-bold text-primary">8,500</div>
              <div className="text-sm text-muted-foreground">Qualified Candidates</div>
            </Card>
            <Card className="border-primary/20 bg-card p-4">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Evaluation Criteria</div>
            </Card>
          </div>
          <div className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
            <div className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-primary" />
              Multi-AI consensus scoring (GPT-4, Claude, Gemini)
            </div>
            <div className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-primary" />
              Experience relevance and skill matching
            </div>
            <div className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-primary" />
              Red flag detection and anomaly identification
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Stage 3",
      content: (
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-xl bg-primary/10 p-3">
              <Linkedin className="size-8 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">LinkedIn Professional Analysis</h3>
              <p className="text-sm text-muted-foreground">Professional credibility scoring</p>
            </div>
          </div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Automated LinkedIn profile verification checks professional network strength, endorsements, recommendations,
            and activity patterns. Our system cross-references resume claims with LinkedIn data to ensure authenticity.
          </p>
          <div className="mb-6 grid grid-cols-2 gap-4">
            <Card className="border-primary/20 bg-card p-4">
              <div className="text-3xl font-bold text-primary">6,200</div>
              <div className="text-sm text-muted-foreground">Verified Profiles</div>
            </Card>
            <Card className="border-primary/20 bg-card p-4">
              <div className="text-3xl font-bold text-primary">85%</div>
              <div className="text-sm text-muted-foreground">Match Rate</div>
            </Card>
          </div>
          <div className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
            <div className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-primary" />
              Network analysis and connection quality
            </div>
            <div className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-primary" />
              Endorsements and recommendations verification
            </div>
            <div className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-primary" />
              Professional activity and engagement tracking
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Stage 4",
      content: (
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-xl bg-primary/10 p-3">
              <Github className="size-8 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">GitHub Technical Assessment</h3>
              <p className="text-sm text-muted-foreground">Code quality and project authenticity</p>
            </div>
          </div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            For technical roles, our AI analyzes GitHub repositories, commit history, code quality, and contribution
            patterns. We verify project authenticity by analyzing commit timestamps, code complexity, and collaboration
            patterns to detect false claims.
          </p>
          <div className="mb-6 grid grid-cols-2 gap-4">
            <Card className="border-primary/20 bg-card p-4">
              <div className="text-3xl font-bold text-primary">4,100</div>
              <div className="text-sm text-muted-foreground">Technical Candidates</div>
            </Card>
            <Card className="border-primary/20 bg-card p-4">
              <div className="text-3xl font-bold text-primary">92%</div>
              <div className="text-sm text-muted-foreground">Authenticity Score</div>
            </Card>
          </div>
          <div className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
            <div className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-primary" />
              Repository analysis and code quality assessment
            </div>
            <div className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-primary" />
              Commit pattern analysis for authenticity
            </div>
            <div className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-primary" />
              Technology stack and skill verification
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Stage 5",
      content: (
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-xl bg-primary/10 p-3">
              <Phone className="size-8 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">AI-Powered Interviews</h3>
              <p className="text-sm text-muted-foreground">Automated phone screening</p>
            </div>
          </div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Our advanced AI interview system conducts natural phone conversations, asking role-specific questions and
            adapting based on responses. The system evaluates communication skills, technical knowledge, and cultural
            fit in real-time.
          </p>
          <div className="mb-6 grid grid-cols-2 gap-4">
            <Card className="border-primary/20 bg-card p-4">
              <div className="text-3xl font-bold text-primary">2,500</div>
              <div className="text-sm text-muted-foreground">Interviews Conducted</div>
            </Card>
            <Card className="border-primary/20 bg-card p-4">
              <div className="text-3xl font-bold text-primary">15min</div>
              <div className="text-sm text-muted-foreground">Avg Duration</div>
            </Card>
          </div>
          <div className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
            <div className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-primary" />
              Natural language conversation with adaptive questioning
            </div>
            <div className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-primary" />
              Real-time evaluation of technical and soft skills
            </div>
            <div className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-primary" />
              Automated scheduling and follow-up management
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Stage 6",
      content: (
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-xl bg-primary/10 p-3">
              <ClipboardCheck className="size-8 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Interview Transcript Analysis</h3>
              <p className="text-sm text-muted-foreground">Performance and competency scoring</p>
            </div>
          </div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Every interview is transcribed and analyzed using advanced NLP. Our system evaluates answer quality,
            technical accuracy, communication clarity, enthusiasm, and cultural alignment. Sentiment analysis detects
            confidence levels and authenticity.
          </p>
          <div className="mb-6 grid grid-cols-2 gap-4">
            <Card className="border-primary/20 bg-card p-4">
              <div className="text-3xl font-bold text-primary">1,800</div>
              <div className="text-sm text-muted-foreground">Strong Performers</div>
            </Card>
            <Card className="border-primary/20 bg-card p-4">
              <div className="text-3xl font-bold text-primary">20+</div>
              <div className="text-sm text-muted-foreground">Competency Metrics</div>
            </Card>
          </div>
          <div className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
            <div className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-primary" />
              NLP-powered answer quality assessment
            </div>
            <div className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-primary" />
              Sentiment analysis and confidence detection
            </div>
            <div className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-primary" />
              Technical accuracy verification
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Stage 7",
      content: (
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-xl bg-primary/10 p-3">
              <FileCheck className="size-8 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Comprehensive Scoring & Ranking</h3>
              <p className="text-sm text-muted-foreground">Intelligent ranking with reasoning</p>
            </div>
          </div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            All data points from previous stages are synthesized into a comprehensive score. Our proprietary algorithm
            weighs resume quality, professional verification, technical skills, and interview performance to create a
            final ranking with detailed reasoning.
          </p>
          <div className="mb-6 grid grid-cols-2 gap-4">
            <Card className="border-primary/20 bg-card p-4">
              <div className="text-3xl font-bold text-primary">850</div>
              <div className="text-sm text-muted-foreground">Final Candidates</div>
            </Card>
            <Card className="border-primary/20 bg-card p-4">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Transparency</div>
            </Card>
          </div>
          <div className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
            <div className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-primary" />
              Multi-dimensional scoring across all stages
            </div>
            <div className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-primary" />
              AI-generated reasoning for each ranking
            </div>
            <div className="flex items-center gap-2">
              <div className="size-1.5 rounded-full bg-primary" />
              Customizable weighting based on role requirements
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Stage 8",
      content: (
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-xl bg-primary/10 p-3">
              <Award className="size-8 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Top Candidates Report</h3>
              <p className="text-sm text-muted-foreground">Strong hire recommendations</p>
            </div>
          </div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            The final output is a ranked list of top candidates with comprehensive profiles, detailed scoring
            breakdowns, and AI-generated hire recommendations. Each profile includes strengths, potential concerns, and
            suggested interview questions.
          </p>
          <div className="mb-8">
            <div className="mb-2 flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <div className="size-1.5 rounded-full bg-primary" />
              247 top candidates identified from 10,000
            </div>
            <div className="mb-2 flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <div className="size-1.5 rounded-full bg-primary" />
              97.5% reduction in manual screening time
            </div>
            <div className="mb-2 flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <div className="size-1.5 rounded-full bg-primary" />
              100% transparent and explainable AI decisions
            </div>
            <div className="mb-2 flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <div className="size-1.5 rounded-full bg-primary" />
              Detailed profiles with actionable insights
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              <div className="size-1.5 rounded-full bg-primary" />
              Export to ATS or direct scheduling
            </div>
          </div>
          <Card className="border-primary/20 bg-primary/5 p-6">
            <h4 className="mb-2 text-lg font-bold text-foreground">Ready to Transform Your Hiring?</h4>
            <p className="text-sm text-muted-foreground">
              From 10,000 candidates to your perfect hire in hours, not months. Experience the power of The Human Funnel
              today.
            </p>
          </Card>
        </div>
      ),
    },
  ]

  return (
    <section id="process" className="relative w-full overflow-clip">
      <Timeline data={data} />
    </section>
  )
}
