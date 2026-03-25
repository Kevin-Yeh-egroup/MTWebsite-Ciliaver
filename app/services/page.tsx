import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services/services-hero"
import { SituationCards } from "@/components/services/situation-cards"
import { SupportMessage } from "@/components/services/support-message"
import { ServicesFinalCta } from "@/components/services/services-final-cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "我們可以怎麼幫你｜馴錢師財商研究中心",
  description: "不同的狀況，我們用不同方式陪你整理。不用急著解決，我們先一起看清楚。免費家庭財務快篩，只需1分鐘。",
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <ServicesHero />
        <SituationCards />
        <SupportMessage />
        <ServicesFinalCta />
      </main>
      <Footer />
    </>
  )
}
