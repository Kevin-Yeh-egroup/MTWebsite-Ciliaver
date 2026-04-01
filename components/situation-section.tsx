"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, PiggyBank, Receipt, AlertTriangle, UserRound, HeartHandshake, Building2 } from "lucide-react"
import { useRef } from "react"
import Link from "next/link"

const audiences = [
  {
    icon: UserRound,
    title: "一般民眾",
    description: "想整理收支、減輕壓力，從看懂自己的狀況開始。",
    href: "/services",
    external: false,
    cta: "查看服務說明",
  },
  {
    icon: HeartHandshake,
    title: "社工與助人工作者",
    description: "需要工具、培力與資源，更好陪伴家庭面對經濟議題。",
    href: "https://www.moneytrainer.com.tw/zh-TW/social-worker-zone",
    external: true,
    cta: "前往財務社工專區",
  },
  {
    icon: Building2,
    title: "合作單位",
    description: "引進課程、方案或檢測工具，擴大財務韌性的影響力。",
    href: "https://www.moneytrainer.com.tw/zh-TW/contact",
    external: true,
    cta: "合作洽詢",
  },
] as const

const situations = [
  {
    icon: PiggyBank,
    title: "想存錢，但總是存不起來",
    description: "每個月都很緊，但也不知道問題在哪",
    note: "常見於：剛開始工作、收入不穩",
  },
  {
    icon: Receipt,
    title: "開銷越來越多，開始有壓力",
    description: "家庭、生活支出慢慢累積",
    note: "常見於：有家庭或固定支出",
  },
  {
    icon: AlertTriangle,
    title: "已經有壓力，不知道怎麼辦",
    description: "負債或支出影響到生活與情緒",
    note: "常見於：目前壓力較大的人",
  },
]

export function SituationSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section id="how-we-help" className="scroll-mt-24 py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-foreground text-balance">
          我們可以怎麼幫你
        </h2>
        <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
          先依你的身分找到入口，再往下選擇適合的協助方式。
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {audiences.map((aud) => (
            <Card
              key={aud.title}
              className="rounded-2xl border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <CardHeader className="pb-2">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <aud.icon className="w-5 h-5 text-primary" aria-hidden />
                </div>
                <CardTitle className="text-lg font-medium text-card-foreground">{aud.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 pt-0 gap-4">
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{aud.description}</p>
                {aud.external ? (
                  <Button variant="secondary" size="sm" className="rounded-full w-full sm:w-auto" asChild>
                    <a href={aud.href} target="_blank" rel="noopener noreferrer">
                      {aud.cta}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                ) : (
                  <Button variant="secondary" size="sm" className="rounded-full w-full sm:w-auto" asChild>
                    <Link href={aud.href}>
                      {aud.cta}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <h3
          id="general-public"
          className="text-xl md:text-2xl font-semibold text-center text-foreground mt-16 md:mt-20 mb-8 scroll-mt-24"
        >
          一般民眾｜你現在的狀況，可能是這樣
        </h3>

        {/* Mobile horizontal scroll */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:overflow-visible md:pb-0 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {situations.map((situation, index) => (
            <Card 
              key={index}
              className="flex-shrink-0 w-[85vw] md:w-auto snap-center rounded-2xl border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300 bg-card"
            >
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <situation.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg font-medium text-card-foreground">
                  {situation.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  {situation.description}
                </p>
                <p className="text-sm text-muted-foreground/70">
                  {situation.note}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full group"
          >
            開始 1 分鐘財務檢測
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
