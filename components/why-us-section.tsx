import { Card, CardContent } from "@/components/ui/card"
import { ShieldCheck, Compass, Award } from "lucide-react"

const features = [
  {
    icon: ShieldCheck,
    title: "不賣產品",
    description: "不推銷保險或投資，只提供中立建議",
  },
  {
    icon: Compass,
    title: "心理導航",
    description: "解決「知道卻做不到」的問題",
  },
  {
    icon: Award,
    title: "專業深耕",
    description: "長期投入社福與家庭財務議題",
  },
]

export function WhyUsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-foreground mb-10">
          為什麼選擇馴錢師？
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="rounded-2xl border-border/50 shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
            >
              <CardContent className="pt-8 pb-6 px-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium text-card-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
