"use client"
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar"
import { NavbarLogo } from "@/components/navbar-logo"
import { useState } from "react"
import { IconBrandGithub } from "@tabler/icons-react"
import Link from "next/link"
import posthog from "posthog-js"
import { useContactForm } from "@/contexts/contact-form-context"

export default function THFNavbar() {
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Process",
      link: "#process",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ]

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { openContactForm } = useContactForm()

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <div className="flex items-center">
          <NavbarLogo />
        </div>
        <div className="flex-1 flex justify-center">
          <NavItems items={navItems} />
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/the-human-funnel/the-human-funnel"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => posthog.capture("github_navbar_clicked")}
            className="flex items-center gap-2 rounded-full border border-border/50 bg-background px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-muted"
          >
            <IconBrandGithub className="size-4" />
            <span className="hidden sm:inline">GitHub</span>
          </Link>
          <NavbarButton
            as="button"
            variant="gradient"
            onClick={() => {
              posthog.capture("book_demo_navbar_clicked")
              openContactForm()
            }}
          >
            Book a Demo
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isMobileMenuOpen}>
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <Link
            href="https://github.com/the-human-funnel"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              posthog.capture("github_mobile_navbar_clicked")
              setIsMobileMenuOpen(false)
            }}
            className="flex items-center gap-2 rounded-lg border border-border/50 bg-background px-4 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-muted"
          >
            <IconBrandGithub className="size-5" />
            <span>View on GitHub</span>
          </Link>
          <div className="flex w-full flex-col gap-4">
            <NavbarButton
              as="button"
              onClick={() => {
                posthog.capture("book_demo_mobile_navbar_clicked")
                openContactForm()
                setIsMobileMenuOpen(false)
              }}
              variant="gradient"
              className="w-full"
            >
              Book a Demo
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  )
}
