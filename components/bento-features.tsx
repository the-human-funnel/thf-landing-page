"use client"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import {
  IconFileText,
  IconBrain,
  IconBrandLinkedin,
  IconBrandGithub,
  IconPhone,
  IconChartBar,
  IconTrophy,
  IconFileDownload,
} from "@tabler/icons-react"
import { motion } from "framer-motion"

// Skeleton Components
const SkeletonResumeUpload = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 relative overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="text-4xl opacity-50"
      >
        📄
      </motion.div>
    </div>
  </div>
)

const SkeletonAIAnalysis = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="text-3xl"
      >
        🧠
      </motion.div>
    </div>
  </div>
)

const SkeletonLinkedIn = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 relative overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="text-3xl"
      >
        💼
      </motion.div>
    </div>
  </div>
)

const SkeletonGitHub = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 relative overflow-hidden">
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
      <div className="flex gap-2">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
            className="w-2 h-8 bg-primary/50 rounded"
          />
        ))}
      </div>
    </div>
  </div>
)

const SkeletonInterview = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        className="text-4xl"
      >
        🎙️
      </motion.div>
    </div>
  </div>
)

const SkeletonTranscript = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 relative overflow-hidden p-4">
    <div className="flex flex-col gap-2 w-full">
      {[80, 60, 90].map((width, i) => (
        <motion.div
          key={i}
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ delay: i * 0.2, duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
          className="h-2 bg-primary/30 rounded"
        />
      ))}
    </div>
  </div>
)

const SkeletonRanking = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 relative overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="text-4xl"
      >
        🏆
      </motion.div>
    </div>
  </div>
)

const SkeletonReport = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 relative overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="text-4xl opacity-70"
      >
        📊
      </motion.div>
    </div>
  </div>
)

export default function BentoFeatures() {
  const features = [
    {
      title: "Resume Upload & Processing",
      description: "Bulk upload up to 10,000 PDFs with intelligent text extraction and AI-powered data structuring.",
      header: <SkeletonResumeUpload />,
      icon: <IconFileText className="h-4 w-4 text-primary" />,
      className: "md:col-span-2",
    },
    {
      title: "AI Resume Analysis",
      description: "Multi-provider AI scoring with Gemini, GPT-4, and Claude for robust evaluation.",
      header: <SkeletonAIAnalysis />,
      icon: <IconBrain className="h-4 w-4 text-primary" />,
      className: "md:col-span-1",
    },
    {
      title: "LinkedIn Credibility Check",
      description: "Professional network analysis, endorsements, and career progression evaluation.",
      header: <SkeletonLinkedIn />,
      icon: <IconBrandLinkedin className="h-4 w-4 text-primary" />,
      className: "md:col-span-1",
    },
    {
      title: "GitHub Authentication",
      description: "Verify project authenticity through commit history and code quality analysis.",
      header: <SkeletonGitHub />,
      icon: <IconBrandGithub className="h-4 w-4 text-primary" />,
      className: "md:col-span-2",
    },
    {
      title: "AI Phone Interviews",
      description: "Automated VAPI-powered interviews with dynamic questions and real-time transcription.",
      header: <SkeletonInterview />,
      icon: <IconPhone className="h-4 w-4 text-primary" />,
      className: "md:col-span-2",
    },
    {
      title: "Transcript Analysis",
      description: "Multi-dimensional scoring: performance, communication, technical, and competency assessment.",
      header: <SkeletonTranscript />,
      icon: <IconChartBar className="h-4 w-4 text-primary" />,
      className: "md:col-span-1",
    },
    {
      title: "Smart Ranking",
      description: "Weighted composite scoring with Strong Hire, Hire, Maybe, and No Hire categories.",
      header: <SkeletonRanking />,
      icon: <IconTrophy className="h-4 w-4 text-primary" />,
      className: "md:col-span-1",
    },
    {
      title: "Report Generation",
      description: "Professional PDF reports with executive summaries and exportable CSV data.",
      header: <SkeletonReport />,
      icon: <IconFileDownload className="h-4 w-4 text-primary" />,
      className: "md:col-span-2",
    },
  ]

  return null
}
