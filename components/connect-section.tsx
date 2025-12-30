"use client"

import { useState } from "react"
import { NoiseBackground } from "@/components/ui/noise-background"
import { MessageSquare } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import ContactForm from "@/components/contact-form"
import posthog from "posthog-js"

export default function ConnectSection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <section id="connect" className="relative overflow-hidden py-24 md:py-32">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="absolute left-1/4 top-0 size-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 size-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 md:px-8 lg:px-10">
          <div className="flex-1">
            <h2 className="mb-4 max-w-4xl text-lg font-normal text-black md:text-4xl dark:text-white">
              Connect With Us
            </h2>
            <p className="max-w-sm text-sm text-neutral-700 md:text-base dark:text-neutral-300">
              Get started with The Human Funnel or schedule a demo to see our AI-powered hiring platform in action
            </p>
          </div>

          <div className="flex justify-end">
            {/* Contact Form Button */}
            <NoiseBackground
              containerClassName="w-fit p-1 rounded-full"
              gradientColors={["rgb(168, 85, 247)", "rgb(236, 72, 153)", "rgb(251, 146, 60)"]}
            >
              <button
                onClick={() => {
                  posthog.capture("connect_button_clicked")
                  setIsDialogOpen(true)
                }}
                className="h-full w-full cursor-pointer rounded-full bg-gradient-to-r from-neutral-100 via-neutral-100 to-white px-6 py-2 text-black shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-98 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)]"
              >
                <div className="flex items-center gap-3">
                  <MessageSquare className="size-4" />
                  <div className="text-left">
                    <div className="font-bold text-base">Connect</div>
                    <div className="text-xs text-muted-foreground">Fill the form we reply fast!</div>
                  </div>
                </div>
              </button>
            </NoiseBackground>
          </div>
        </div>
      </div>

      {/* Contact Form Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Get in Touch</DialogTitle>
            <DialogDescription>Fill out the form below and we'll get back to you within 24 hours</DialogDescription>
          </DialogHeader>
          <ContactForm onSuccess={() => setIsDialogOpen(false)} />
        </DialogContent>
      </Dialog>
    </section>
  )
}
