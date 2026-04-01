import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { InnerHero } from "@/components/pages/inner-hero"
import { BackLink } from "@/components/pages/back-link"
import { ResourceList } from "@/components/pages/resource-list"
import { familyFinHealthLinks, mtLinks } from "@/lib/external-links"
import Image from "next/image"

export const metadata: Metadata = {
  title: "一般民眾｜我們可以怎麼幫你｜馴錢師財商研究中心",
  description:
    "家庭財務韌性檢測、付費財務諮詢與經濟弱勢免費諮詢等官方說明連結。",
}

const resources = [
  {
    title: "好理家在｜家庭財務韌性檢測",
    description: "先以簡短檢測了解壓力來源與現況，無需準備帳本即可開始。",
    href: familyFinHealthLinks.financialResilience,
  },
  {
    title: "馴錢師官網｜單位或個人付費財務諮詢",
    description: "一對一或單位方案之服務說明與申請方式，以官方文章為準。",
    href: mtLinks.paidConsultation,
  },
  {
    title: "馴錢師官網｜經濟弱勢對象｜免費財務／創業諮詢申請",
    description: "符合資格者之免費諮詢管道，條件與表單請見官方頁面。",
    href: mtLinks.freeConsultation,
  },
]

export default function HowWeHelpGeneralPage() {
  return (
    <PageShell>
      <div className="container mx-auto px-4 pt-8 max-w-3xl">
        <BackLink href="/how-we-help">回到我們可以怎麼幫你</BackLink>
      </div>
      <InnerHero
        title="一般民眾"
        subtitle="你可以從自我檢測開始，再依需求選擇付費諮詢或弱勢免費方案。以下連結皆指向官方說明與申請頁。"
      />
      <div className="container mx-auto px-4 pb-16 max-w-3xl space-y-10">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border/50 bg-muted">
          <Image
            src="/section-illustration-mt.svg"
            alt="一般民眾諮詢情境示意（可替換為實際照片）"
            fill
            className="object-cover opacity-80"
            sizes="(max-width:768px) 100vw, 42rem"
          />
          <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground bg-background/40 pointer-events-none">
            可替換為一般民眾諮詢情境配圖
          </div>
        </div>
        <ResourceList items={resources} />
      </div>
    </PageShell>
  )
}
