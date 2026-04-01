import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { HomeExploreSection } from "@/components/home-explore"
import { FinalCtaSection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <HeroSection />
        <HomeExploreSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  )
}
