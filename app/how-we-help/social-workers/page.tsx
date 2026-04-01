import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { InnerHero } from "@/components/pages/inner-hero"
import { BackLink } from "@/components/pages/back-link"
import { ResourceList } from "@/components/pages/resource-list"
import { familyFinHealthLinks, mtLinks } from "@/lib/external-links"
import Image from "next/image"

export const metadata: Metadata = {
  title: "社工與助人工作者｜我們可以怎麼幫你｜馴錢師財商研究中心",
  description: "財務社工專區、檢測工具與經濟弱勢免費諮詢資訊，支援實務評估與轉介。",
}

const resources = [
  {
    title: "馴錢師官網｜財務社工專區",
    description: "課程、資源與實務討論之官方入口。",
    href: mtLinks.socialWorkerZone,
  },
  {
    title: "好理家在｜家庭財務韌性檢測",
    description: "可與案主討論前後使用的數位檢測工具。",
    href: familyFinHealthLinks.financialResilience,
  },
  {
    title: "馴錢師官網｜經濟弱勢對象｜免費財務／創業諮詢申請",
    description: "轉介或資訊提供時可搭配之官方申請說明。",
    href: mtLinks.freeConsultation,
  },
]

export default function HowWeHelpSocialPage() {
  return (
    <PageShell>
      <div className="container mx-auto px-4 pt-8 max-w-3xl">
        <BackLink href="/how-we-help">回到我們可以怎麼幫你</BackLink>
      </div>
      <InnerHero
        title="社工與助人工作者"
        subtitle="我們整理專區、工具與轉介文章連結，協助你在經濟不安全議題上更有後盾。"
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
            可替換為培力課程或團督情境配圖
          </div>
        </div>
        <ResourceList items={resources} />
      </div>
    </PageShell>
  )
}
