import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SituationSection } from "@/components/situation-section"
import { ResultPreviewSection } from "@/components/result-preview-section"
import { WhyUsSection } from "@/components/why-us-section"
import { PodcastSection } from "@/components/podcast-section"
import { TrustSection } from "@/components/trust-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <HeroSection />
        <SituationSection />
        <ResultPreviewSection />
        <WhyUsSection />
        <PodcastSection />
        <TrustSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  )
}
