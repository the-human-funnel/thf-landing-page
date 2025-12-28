"use client"
import { FloatingNav } from "@/components/ui/floating-navbar"
import { IconHome, IconInfoCircle, IconCurrencyDollar, IconMail } from "@tabler/icons-react"

export function FloatingNavTHF() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Features",
      link: "#features",
      icon: <IconInfoCircle className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <IconMail className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ]
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  )
}
