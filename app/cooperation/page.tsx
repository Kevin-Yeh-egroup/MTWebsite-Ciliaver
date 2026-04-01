import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"
import { InnerHero } from "@/components/pages/inner-hero"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { mtLinks } from "@/lib/external-links"

export const metadata: Metadata = {
  title: "合作洽詢｜馴錢師財商研究中心",
  description: "企業、政府、學校與社福單位合作窗口。請透過馴錢師官網聯絡表單與我們討論需求。",
}

export default function CooperationPage() {
  return (
    <PageShell>
      <InnerHero
        title="合作洽詢"
        subtitle="若你希望導入課程、講座、檢測工具或長期方案，歡迎由馴錢師官網聯絡頁留下需求，我們會盡快回覆。"
      />
      <div className="container mx-auto px-4 py-12 md:py-20 max-w-2xl text-center">
        <div className="relative mx-auto aspect-video max-w-lg overflow-hidden rounded-2xl border border-border/50 bg-muted">
          {/* 圖像區：可替換為合作單位合照或活動照 */}
          <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground px-6">
            此區可放合作情境示意圖
          </div>
        </div>
        <p className="mt-8 text-muted-foreground leading-relaxed text-left md:text-center">
          我們依單位規模、對象與時程，討論最合適的培力、工具導入或專案合作方式。正式窗口與表單以馴錢師官方網站為準。
        </p>
        <Button size="lg" className="mt-10 rounded-full px-10" asChild>
          <a href={mtLinks.contact} target="_blank" rel="noopener noreferrer">
            前往官方合作／聯絡頁
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </PageShell>
  )
}
