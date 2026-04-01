import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { InnerHero } from "@/components/pages/inner-hero"
import { ContentBlock } from "@/components/pages/content-block"
import { familyFinHealthLinks, mtLinks } from "@/lib/external-links"

export const metadata: Metadata = {
  title: "觀點與成果｜馴錢師財商研究中心",
  description: "精選觀點、合作案例與活動成果。連結至好理家在知識庫、馴錢師專案頁與精選活動。",
}

export default function InsightsPage() {
  return (
    <PageShell>
      <InnerHero
        title="觀點與成果"
        subtitle="第二層分為觀點內容、合作案例與成果整理；圖像區可日後替換為實際配圖或活動照片。"
      />
      <div className="container mx-auto px-4 py-12 md:py-16 space-y-10 max-w-4xl">
        <ContentBlock
          title="精選觀點"
          description="媒體訪談、專欄與知識庫文章，協助你用不同角度理解家庭財務與情緒壓力。"
          imageAlt="精選觀點"
          links={[
            { label: "好理家在｜知識庫（更多觀點文章）", href: familyFinHealthLinks.knowledgeBase, external: true },
          ]}
          primaryAction={{ label: "瀏覽知識庫", href: familyFinHealthLinks.knowledgeBase, external: true }}
        />
        <ContentBlock
          title="合作案例"
          description="與企業、政府合作推動的專案實例，例如信扶相關合作頁面。"
          imageAlt="合作案例"
          links={[{ label: "馴錢師官網｜信扶專案案例", href: mtLinks.ctbcCase, external: true }]}
          primaryAction={{ label: "查看案例頁", href: mtLinks.ctbcCase, external: true }}
        />
        <ContentBlock
          title="成果整理"
          description="精選活動與公開成果，連結至好理家在活動頁；網站上亦可擇要展示重點場次。"
          imageAlt="成果整理"
          links={[{ label: "好理家在｜精選活動", href: familyFinHealthLinks.events, external: true }]}
          primaryAction={{ label: "更多活動與成果", href: familyFinHealthLinks.events, external: true }}
        />
      </div>
    </PageShell>
  )
}
