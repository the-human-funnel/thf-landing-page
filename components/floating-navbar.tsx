"use client"
import { FloatingNav } from "@/components/ui/floating-navbar"
import { IconSparkles, IconCreditCard, IconMail, IconFilter } from "@tabler/icons-react"

export default function FloatingNavbar() {
  const navItems = [
    {
      name: "Features",
      link: "#features",
      icon: <IconSparkles className="h-4 w-4" />, // Removed extra text classes
    },
    {
      name: "Process",
      link: "#process",
      icon: <IconFilter className="h-4 w-4" />,
    },
    {
      name: "Pricing",
      link: "#pricing",
      icon: <IconCreditCard className="h-4 w-4" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <IconMail className="h-4 w-4" />,
    },
  ]

  return <FloatingNav navItems={navItems} />
}
