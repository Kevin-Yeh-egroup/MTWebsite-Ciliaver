import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { InnerHero } from "@/components/pages/inner-hero"
import { ContentBlock } from "@/components/pages/content-block"
import { familyFinHealthLinks, mtLinks } from "@/lib/external-links"

export const metadata: Metadata = {
  title: "我們在做的事｜馴錢師財商研究中心",
  description:
    "家庭財務韌性、財務教育培力、社工實務支援與數位工具。每個主題附說明、圖像與延伸連結。",
}

export default function OurWorkPage() {
  return (
    <PageShell>
      <InnerHero
        title="我們在做的事"
        subtitle="四大工作主軸，點進連結可至官方文章、工具或專區了解細節。"
      />
      <div className="container mx-auto px-4 py-12 md:py-16 space-y-10 max-w-4xl">
        <ContentBlock
          title="家庭財務韌性推動"
          description="從生活整體出發，協助家庭釐清收支與壓力來源，找到做得到的調整節奏，並串連資源讓改變延續。"
          imageAlt="家庭財務韌性推動"
          links={[
            { label: "好理家在｜家庭財務韌性檢測", href: familyFinHealthLinks.financialResilience, external: true },
            { label: "馴錢師官網｜服務成效", href: mtLinks.impact, external: true },
          ]}
          primaryAction={{ label: "使用韌性檢測", href: familyFinHealthLinks.financialResilience, external: true }}
        />
        <ContentBlock
          title="財務教育與培力"
          description="以實務案例與工具為核心，協助社工與單位更有方法地面對家庭經濟議題，讓學習能對應現場情境。"
          imageAlt="財務教育與培力"
          links={[
            { label: "馴錢師官網｜財務知能與訓練合作說明", href: mtLinks.trainingCollaboration, external: true },
            { label: "馴錢師官網｜主題講座與課程", href: mtLinks.topicSeminars, external: true },
          ]}
          primaryAction={{ label: "了解課程與合作", href: mtLinks.trainingCollaboration, external: true }}
        />
        <ContentBlock
          title="社工實務支援"
          description="提供可快速掌握經濟處遇的評估與討論架構，並在複雜個案中搭配諮詢與資源轉介。"
          imageAlt="社工實務支援"
          links={[
            { label: "馴錢師官網｜財務社工專區", href: mtLinks.socialWorkerZone, external: true },
            { label: "好理家在｜檢測與工具", href: familyFinHealthLinks.financialResilience, external: true },
          ]}
          primaryAction={{ label: "進入財務社工專區", href: mtLinks.socialWorkerZone, external: true }}
        />
        <ContentBlock
          title="AI 工具與平台"
          description="透過好理家在等平台，讓家庭與助人工作者更快理解財務狀況，並找到可行的下一步。"
          imageAlt="AI 工具與平台"
          links={[
            { label: "好理家在｜知識庫", href: familyFinHealthLinks.knowledgeBase, external: true },
            { label: "好理家在｜財務韌性檢測", href: familyFinHealthLinks.financialResilience, external: true },
          ]}
          primaryAction={{ label: "前往好理家在", href: familyFinHealthLinks.financialResilience, external: true }}
        />
      </div>
    </PageShell>
  )
}
