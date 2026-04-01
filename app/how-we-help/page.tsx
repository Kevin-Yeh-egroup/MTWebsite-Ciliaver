import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { InnerHero } from "@/components/pages/inner-hero"
import { HowWeHelpLanding } from "@/components/how-we-help/how-we-help-landing"

export const metadata: Metadata = {
  title: "我們可以怎麼幫你｜馴錢師財商研究中心",
  description:
    "依一般民眾、社工與助人工作者、合作單位分流說明。捲動即可切換對應說明，並可進入專頁取得完整文章與申請連結。",
}

export default function HowWeHelpPage() {
  return (
    <PageShell>
      <InnerHero
        title="我們可以怎麼幫你"
        subtitle="先選擇你的身分。捲動頁面時，右側（電腦版）或上方摘要會跟著切換；需要完整條款與申請網址時，請進入各對象專頁。"
      />
      <HowWeHelpLanding />
    </PageShell>
  )
}
