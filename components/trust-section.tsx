import { Users, Presentation, GraduationCap } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "5000+",
    label: "家庭",
  },
  {
    icon: Presentation,
    value: "800+",
    label: "場講座",
  },
  {
    icon: GraduationCap,
    value: "1200+",
    label: "專業人員培訓",
  },
]

const partners = [
  "衛生福利部",
  "台北市政府",
  "新北市政府",
  "DBS 星展銀行",
]

export function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-foreground mb-12">
          我們陪伴過許多家庭走過這段路
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-14">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-semibold text-foreground">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Partner Logos (as text for now) */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 opacity-60">
          {partners.map((partner, index) => (
            <span 
              key={index} 
              className="text-sm md:text-base text-muted-foreground font-medium"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
