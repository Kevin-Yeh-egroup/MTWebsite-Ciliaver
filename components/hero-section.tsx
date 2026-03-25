import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-consultation.jpg"
          alt="專業顧問陪伴討論財務"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight text-balance max-w-3xl mx-auto">
          理財也理心：解開金錢的結，
          <br className="hidden md:block" />
          找回生活的掌控權
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed text-balance">
          我們不賣產品，只陪你一起看懂現在的狀況
          <br />
          從壓力、關係到金錢，慢慢理出一條路
        </p>

        <div className="mt-10 flex flex-col items-center gap-3">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            免費家庭財務快篩
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-sm text-muted-foreground">
            只需 1 分鐘｜不用準備資料｜可以先自己看看
          </p>
        </div>
      </div>
    </section>
  )
}
