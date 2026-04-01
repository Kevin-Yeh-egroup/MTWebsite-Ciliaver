import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { InnerHero } from "@/components/pages/inner-hero"
import { ContentBlock } from "@/components/pages/content-block"
import { mtLinks } from "@/lib/external-links"

export const metadata: Metadata = {
  title: "認識馴錢師｜馴錢師財商研究中心",
  description:
    "了解馴錢師的使命、發展脈絡、服務成效與合作夥伴。各主題連結至官方網站完整說明。",
}

export default function AboutPage() {
  return (
    <PageShell>
      <InnerHero
        title="認識馴錢師"
        subtitle="以下為第二層主題，每則皆附圖文區塊與官方網站連結，方便你深入閱讀。"
      />
      <div className="container mx-auto px-4 py-12 md:py-16 space-y-10 max-w-4xl">
        <ContentBlock
          title="我們的使命"
          description="認識組織為何存在、長期想達成的改變，以及我們如何定位「理財也理心」的實踐方式。"
          imageAlt="我們的使命"
          links={[{ label: "前往馴錢師官網：使命頁", href: mtLinks.mission, external: true }]}
          primaryAction={{ label: "閱讀完整使命", href: mtLinks.mission, external: true }}
        />
        <ContentBlock
          title="大事年表"
          description="從重要里程碑看見組織如何一路累積方法、合作與服務能量。（若官網呈現調整，仍以最新頁面為準。）"
          imageAlt="大事年表"
          links={[{ label: "前往馴錢師官網：大事年表", href: mtLinks.events, external: true }]}
          primaryAction={{ label: "查看年表", href: mtLinks.events, external: true }}
        />
        <ContentBlock
          title="服務成效"
          description="以數據與故事呈現我們陪伴家庭、培力專業者的具體影響；頁面中亦常含成效故事與重點整理。"
          imageAlt="服務成效"
          links={[{ label: "前往馴錢師官網：服務成效／影響力", href: mtLinks.impact, external: true }]}
          primaryAction={{ label: "了解成效", href: mtLinks.impact, external: true }}
        />
        <ContentBlock
          title="合作夥伴"
          description="與我們並肩的政府單位、企業與社福夥伴；詳見官方網站合作與案例區塊。"
          imageAlt="合作夥伴"
          links={[{ label: "前往馴錢師官網：影響力與夥伴", href: mtLinks.impact, external: true }]}
          primaryAction={{ label: "查看夥伴與案例", href: mtLinks.impact, external: true }}
        />
      </div>
    </PageShell>
  )
}
