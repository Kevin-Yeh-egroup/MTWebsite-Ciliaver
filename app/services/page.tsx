import { PageShell } from "@/components/page-shell"
import { ServicesHero } from "@/components/services/services-hero"
import { SituationCards } from "@/components/services/situation-cards"
import { SupportMessage } from "@/components/services/support-message"
import { ServicesFinalCta } from "@/components/services/services-final-cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "依狀況選服務｜馴錢師財商研究中心",
  description: "不同的狀況，我們用不同方式陪你整理。不用急著解決，我們先一起看清楚。免費家庭財務快篩，只需 1 分鐘。",
}

export default function ServicesPage() {
  return (
    <PageShell>
      <ServicesHero />
      <SituationCards />
      <SupportMessage />
      <ServicesFinalCta />
    </PageShell>
  )
}
