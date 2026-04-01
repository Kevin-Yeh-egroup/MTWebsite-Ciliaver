import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { InnerHero } from "@/components/pages/inner-hero"
import { BackLink } from "@/components/pages/back-link"
import { ResourceList } from "@/components/pages/resource-list"
import { mtLinks } from "@/lib/external-links"
import Image from "next/image"

export const metadata: Metadata = {
  title: "合作單位｜我們可以怎麼幫你｜馴錢師財商研究中心",
  description:
    "財務知能訓練、講座課程、團體、教練計畫與兒少體驗等方案說明連結，以及正式洽詢入口。",
}

const resources = [
  {
    title: "馴錢師官網｜財務知能課程或經濟評估專業訓練合作",
    description: "適合需要系統性培訓的單位與團隊。",
    href: mtLinks.trainingCollaboration,
  },
  {
    title: "馴錢師官網｜財務主題講座與課程",
    description: "單次或系列講座／課程之合作說明。",
    href: mtLinks.topicSeminars,
  },
  {
    title: "馴錢師官網｜財務團體",
    description: "團體形式之財務支持方案。",
    href: mtLinks.supportGroups,
  },
  {
    title: "馴錢師官網｜財務教練合作計畫",
    description: "教練模式導入與長期合作架構。",
    href: mtLinks.coachingProgram,
  },
  {
    title: "馴錢師官網｜兒少模擬生活體驗活動",
    description: "兒少理財／生活體驗類活動方案。",
    href: mtLinks.youthProgram,
  },
  {
    title: "馴錢師官網｜合作洽詢／聯絡",
    description: "提出需求、時程與預算討論之正式窗口。",
    href: mtLinks.contact,
  },
]

export default function HowWeHelpPartnersPage() {
  return (
    <PageShell>
      <div className="container mx-auto px-4 pt-8 max-w-3xl">
        <BackLink href="/how-we-help">回到我們可以怎麼幫你</BackLink>
      </div>
      <InnerHero
        title="合作單位"
        subtitle="以下為常見合作型態之官方文章連結；實際場次、報價與客製內容請透過洽詢頁與我們討論。"
      />
      <div className="container mx-auto px-4 pb-16 max-w-3xl space-y-10">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border/50 bg-muted">
          <Image
            src="/section-illustration-mt.svg"
            alt=""
            fill
            className="object-cover opacity-80"
            sizes="(max-width:768px) 100vw, 42rem"
          />
          <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground bg-background/40">
            可替換為講座或方案合作現場配圖
          </div>
        </div>
        <ResourceList items={resources} />
      </div>
    </PageShell>
  )
}
