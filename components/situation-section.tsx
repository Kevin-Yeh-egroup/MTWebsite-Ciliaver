"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, PiggyBank, Receipt, AlertTriangle } from "lucide-react"
import { useRef } from "react"

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
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-foreground mb-10">
          你現在的狀況，可能是這樣
        </h2>

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
