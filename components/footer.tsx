"use client"

import { Logo } from "@/components/logo"
import Link from "next/link"
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react"
import posthog from "posthog-js"

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Integration", href: "#integration" },
  ],
  developers: [
    {
      name: "Harshit Srivastava",
      linkedin: "https://www.linkedin.com/in/harshitsrv/",
      github: "https://github.com/hrxsrv",
    },
    {
      name: "Aditya Ghai",
      linkedin: "https://www.linkedin.com/in/aditya-ghai/",
      github: "https://github.com/adityaghai07",
    },
  ],
  legal: [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "GDPR", href: "#gdpr" },
  ],
}

export default function FooterSection() {
  return (
    <footer className="border-t border-border/50 bg-muted/30 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" aria-label="home" className="inline-block">
              <Logo />
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              The Human Funnel transforms recruitment with AI-powered candidate analysis, automated interviews, and
              data-driven insights. Find your perfect hire in minutes, not months.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              <svg className="size-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Open Source Project
            </div>
            <div className="mt-6 flex gap-4">
              <Link
                href="#"
                aria-label="Twitter"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z" />
                </svg>
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
                </svg>
              </Link>
              <Link
                href="https://github.com/the-human-funnel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                onClick={() => posthog.capture("github_footer_project_clicked")}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Product Links Column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Developers Column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Developers</h3>
            <ul className="space-y-4">
              {footerLinks.developers.map((dev, index) => (
                <li key={index}>
                  <p className="text-sm font-medium text-foreground mb-2">{dev.name}</p>
                  <div className="flex gap-3">
                    <Link
                      href={dev.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${dev.name} LinkedIn`}
                      onClick={() => posthog.capture("developer_linkedin_clicked", { developer: dev.name })}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      <IconBrandLinkedin className="size-5" />
                    </Link>
                    <Link
                      href={dev.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${dev.name} GitHub`}
                      onClick={() => posthog.capture("developer_github_clicked", { developer: dev.name })}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      <IconBrandGithub className="size-5" />
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} The Human Funnel. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            {footerLinks.legal.map((link, index) => (
              <Link key={index} href={link.href} className="hover:text-primary">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
