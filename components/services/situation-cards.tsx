import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Wallet, Home, TrendingDown, AlertTriangle } from "lucide-react"
import Link from "next/link"

const situations = [
  {
    emoji: "💸",
    title: "想存錢，但總是存不起來",
    yourSituation: [
      "每個月都有花錢，但不知道去哪",
      "想改變，但很難持續",
    ],
    howWeHelp: [
      "建立基本金錢習慣",
      "看清楚錢的流向",
      "找到可以開始的一小步",
    ],
    primaryCta: { label: "先看看我的狀況", href: "/screening" },
    secondaryCta: { label: "了解個人成長課程", href: "/courses" },
    color: "bg-emerald-50 border-emerald-100",
  },
  {
    emoji: "🧾",
    title: "開銷越來越多，開始有點撐",
    yourSituation: [
      "家庭支出持續增加",
      "收入與支出開始失衡",
      "常因為錢有壓力",
    ],
    howWeHelp: [
      "整理家庭收支",
      "找出可以調整的空間",
      "建立更穩定的節奏",
    ],
    primaryCta: { label: "先整理我的狀況", href: "/screening" },
    secondaryCta: { label: "預約家庭財務顧問", href: "/consulting" },
    color: "bg-amber-50 border-amber-100",
  },
  {
    emoji: "📉",
    title: "收入或生活正在變動",
    yourSituation: [
      "收入不穩或下降",
      "正在轉職或準備退休",
      "開始擔心未來",
    ],
    howWeHelp: [
      "預估未來收支",
      "調整生活配置",
      "建立安全邊界",
    ],
    primaryCta: { label: "幫我看看接下來", href: "/screening" },
    secondaryCta: { label: "了解規劃服務", href: "/planning" },
    color: "bg-sky-50 border-sky-100",
  },
  {
    emoji: "🚨",
    title: "已經有壓力，不知道怎麼辦",
    yourSituation: [
      "有負債或現金流問題",
      "已影響生活或情緒",
      "不知道從哪開始",
    ],
    howWeHelp: [
      "一起釐清目前狀況",
      "找到優先順序",
      "提供可行的下一步",
    ],
    primaryCta: { label: "和專人聊聊", href: "/contact" },
    secondaryCta: { label: "了解信扶專案", href: "/xinfu" },
    color: "bg-rose-50 border-rose-100",
    highlighted: true,
  },
]

export function SituationCards() {
  return (
    <section className="px-4 py-16 md:py-20 bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-2xl font-bold text-foreground md:text-3xl text-balance">
          你現在的狀況，可能是這樣
        </h2>
        
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {situations.map((situation, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden rounded-3xl border-2 shadow-sm transition-shadow hover:shadow-md ${situation.color} ${
                situation.highlighted ? "ring-2 ring-rose-200 ring-offset-2 ring-offset-background" : ""
              }`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start gap-4">
                  <div className={`shrink-0 rounded-2xl bg-card p-3 shadow-sm ${situation.iconColor}`}>
                    <situation.icon className="h-7 w-7" />
                  </div>
                  <h3 className="pt-1 text-xl font-bold leading-tight text-foreground">
                    {situation.title}
                  </h3>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-5">
                <div className="rounded-2xl bg-card/60 p-4">
                  <p className="mb-3 text-sm font-semibold text-muted-foreground">
                    你可能的狀況：
                  </p>
                  <ul className="space-y-2">
                    {situation.yourSituation.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/50" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="rounded-2xl bg-primary/5 p-4">
                  <p className="mb-3 text-sm font-semibold text-primary">
                    我們可以這樣幫你：
                  </p>
                  <ul className="space-y-2">
                    {situation.howWeHelp.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              
              <CardFooter className="flex flex-col gap-3 pt-4">
                <Button className="w-full rounded-xl py-5 text-base" asChild>
                  <Link href={situation.primaryCta.href}>
                    {situation.primaryCta.label}
                  </Link>
                </Button>
                <Button variant="outline" className="w-full rounded-xl bg-card/80 py-5 text-base" asChild>
                  <Link href={situation.secondaryCta.href}>
                    {situation.secondaryCta.label}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
