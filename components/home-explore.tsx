import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { MAIN_NAV } from "@/lib/site-nav"
import { Card, CardContent } from "@/components/ui/card"

const blurbs: Record<string, string> = {
  "/about": "使命、年表、成效與合作夥伴等官方說明入口。",
  "/how-we-help": "依身分找到適合的協助方式與申請／工具連結。",
  "/our-work": "家庭韌性、教育培力、社工支持與數位工具。",
  "/insights": "觀點文章、合作案例與活動成果。",
  "/cooperation": "企業、政府與社福單位合作窗口。",
}

export function HomeExploreSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/25 border-y border-border/40">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-foreground text-balance">
          從這裡開始認識我們
        </h2>
        <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          每個主題都有獨立頁面，含說明、圖像區塊與對應的官方文章或申請連結。
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {MAIN_NAV.map((item) => (
            <Link key={item.href} href={item.href} className="group block h-full">
              <Card className="h-full rounded-2xl border-border/50 shadow-sm transition-shadow group-hover:shadow-md">
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                    {item.label}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                    {blurbs[item.href] ?? ""}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                    進入頁面
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
