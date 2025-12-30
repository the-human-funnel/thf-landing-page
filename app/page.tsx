import THFNavbar from "@/components/resizable-navbar-thf"
import HeroSection from "@/components/hero-section"
import BentoFeatures from "@/components/bento-features"
import THFTimeline from "@/components/thf-timeline"
// <CHANGE> Replaced CTASection with ConnectSection
import ConnectSection from "@/components/connect-section"
import FooterSection from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-primary/30">
      <THFNavbar />

      {/* Hero Section with sticky header */}
      <HeroSection />

      {/* Features Overview - 8 Stage Pipeline */}
      {/* <div id="features" className="scroll-mt-24">
        <BentoFeatures />
      </div> */}

      {/* Deep Dive into Process Stages */}
      <div id="process" className="scroll-mt-24">
        <THFTimeline />
      </div>

      {/* <CHANGE> New Connect Section with Wobble Cards */}
      <ConnectSection />

      {/* Footer */}
      <div id="contact">
        <FooterSection />
      </div>
    </main>
  )
}
