"use client"
import type React from "react"
import { cn } from "@/lib/utils"
import { Globe } from "@/components/ui/globe"
import { motion } from "framer-motion"
import { IconSparkles, IconUsers, IconShieldCheck } from "@tabler/icons-react"

export default function AdvancedFeatures() {
  const features = [
    {
      title: "AI-Powered Precision",
      description:
        "Multi-provider AI architecture with Gemini, GPT-4, and Claude ensures robust analysis with automatic failover for 99.9% uptime.",
      skeleton: <SkeletonAI />,
      className: "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Scale to 10,000 Candidates",
      description:
        "Process massive candidate pools simultaneously with intelligent batching and parallel processing for rapid results.",
      skeleton: <SkeletonScale />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Global Talent Reach",
      description:
        "Connect with candidates worldwide. Our platform supports multi-language resumes and international profile analysis.",
      skeleton: <SkeletonGlobe />,
      className: "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
    },
    {
      title: "Enterprise-Grade Security",
      description:
        "Bank-level encryption, SOC 2 compliance, and GDPR-ready data handling ensure candidate information stays protected.",
      skeleton: <SkeletonSecurity />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ]

  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Built for Modern Recruitment
        </h4>

        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          The Human Funnel combines cutting-edge AI technology with enterprise-grade infrastructure to deliver
          unprecedented recruitment efficiency.
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  )
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) => {
  return <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>{children}</div>
}

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  )
}

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2",
      )}
    >
      {children}
    </p>
  )
}

const SkeletonAI = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full rounded-lg">
        <div className="flex flex-1 w-full h-full flex-col space-y-4">
          {/* AI Provider Icons */}
          <div className="flex items-center justify-around">
            {["Gemini", "GPT-4", "Claude"].map((provider, idx) => (
              <motion.div
                key={provider}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <IconSparkles className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground">{provider}</span>
              </motion.div>
            ))}
          </div>
          {/* Analysis Progress */}
          <div className="space-y-2">
            {[85, 92, 78].map((score, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-2"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: idx * 0.3, duration: 1, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
              >
                <div className="h-2 flex-1 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${score}%` }}
                    transition={{
                      delay: idx * 0.3 + 0.5,
                      duration: 1,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 3,
                    }}
                  />
                </div>
                <span className="text-xs font-mono">{score}%</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  )
}

const SkeletonScale = () => {
  const profiles = [
    { name: "John D.", score: 89 },
    { name: "Sarah M.", score: 92 },
    { name: "Alex K.", score: 87 },
    { name: "Emma L.", score: 94 },
    { name: "Mike R.", score: 85 },
  ]

  return (
    <div className="relative flex flex-col items-start p-8 gap-6 h-full overflow-hidden">
      {/* Candidate Cards Stack */}
      <div className="flex flex-col gap-3 w-full">
        {profiles.map((profile, idx) => (
          <motion.div
            key={profile.name}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: idx * 0.15, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
            className="flex items-center justify-between p-3 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <IconUsers className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm font-medium">{profile.name}</span>
            </div>
            <span className="text-xs font-mono font-bold text-primary">{profile.score}</span>
          </motion.div>
        ))}
      </div>

      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black to-transparent h-full pointer-events-none" />
    </div>
  )
}

const SkeletonGlobe = () => {
  return (
    <div className="h-60 md:h-60 flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  )
}

const SkeletonSecurity = () => {
  return (
    <div className="relative flex items-center justify-center h-full p-8">
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        className="flex items-center justify-center"
      >
        <div className="relative">
          {/* Outer Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="w-40 h-40 rounded-full border-4 border-primary/20"
          />
          {/* Middle Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute inset-4 rounded-full border-4 border-primary/30"
          />
          {/* Inner Shield */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
              <IconShieldCheck className="w-12 h-12 text-primary" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
