import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Eye, Target, Footprints } from "lucide-react"

const benefits = [
  {
    icon: Eye,
    title: "看見現在的位置",
    description: "知道自己目前是穩定、吃力或有風險",
  },
  {
    icon: Target,
    title: "找出問題在哪",
    description: "收入、支出或債務的影響",
  },
  {
    icon: Footprints,
    title: "知道可以怎麼開始",
    description: "不用一次改很多，先做一小步",
  },
]

export function ResultPreviewSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-foreground mb-10">
          做完快篩，你會看到什麼？
        </h2>

        {/* Result Card Preview */}
        <div className="max-w-md mx-auto mb-12">
          <Card className="rounded-2xl shadow-lg border-border/50 overflow-hidden">
            <div className="bg-primary/10 px-6 py-4 border-b border-border/50">
              <h3 className="text-lg font-medium text-foreground">你的目前狀況</h3>
            </div>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">狀態：</span>
                  <span className="font-medium text-amber-600">偏吃力</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">主要壓力：</span>
                  <span className="font-medium text-foreground">支出與現金流</span>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed py-2 border-t border-border/50">
                你的生活還撐得住，但壓力正在慢慢累積
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="secondary" className="rounded-full">支出</Badge>
                <Badge variant="secondary" className="rounded-full">現金流</Badge>
                <Badge variant="secondary" className="rounded-full">下一步建議</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            免費家庭財務快篩
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
