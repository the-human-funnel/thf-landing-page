import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    price: "$499",
    period: "/month",
    description: "Perfect for small teams and startups",
    features: [
      "Up to 1,000 candidates/month",
      "All 8 analysis stages",
      "AI-powered interviews",
      "Email support",
      "Basic reporting",
      "30-day data retention",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "$1,499",
    period: "/month",
    description: "For growing companies with active hiring",
    features: [
      "Up to 5,000 candidates/month",
      "All 8 analysis stages",
      "AI-powered interviews",
      "Priority support",
      "Advanced analytics",
      "90-day data retention",
      "Custom scoring weights",
      "API access",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Unlimited scale for large organizations",
    features: [
      "Unlimited candidates",
      "All 8 analysis stages",
      "AI-powered interviews",
      "24/7 dedicated support",
      "White-label solution",
      "Unlimited data retention",
      "Custom integrations",
      "SLA guarantee",
      "On-premise deployment",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-balance text-4xl font-bold lg:text-5xl">Simple, Transparent Pricing</h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Choose the plan that fits your hiring volume. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden p-8 transition-all ${
                plan.popular
                  ? "border-primary shadow-xl shadow-primary/20 ring-2 ring-primary/20"
                  : "border-border/50 hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-5xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
              </div>

              <Button asChild className={`mb-6 w-full ${plan.popular ? "" : "variant-outline"}`} size="lg">
                <Link href="#get-started">{plan.cta}</Link>
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="size-5 flex-shrink-0 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Enterprise CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Need a custom solution?{" "}
            <Link href="#contact" className="font-semibold text-primary hover:underline">
              Contact our sales team
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
