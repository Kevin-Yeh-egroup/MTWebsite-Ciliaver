import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { familyFinHealthLinks } from "@/lib/external-links"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-mt-inspired.svg"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/55 to-background/95" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <p className="text-sm md:text-base font-medium tracking-wide text-primary/90">
          馴錢師財商研究中心 · 二十年社會工作實踐
        </p>
        <blockquote className="mt-5 text-xl md:text-2xl lg:text-3xl font-medium text-foreground/95 leading-snug text-balance max-w-3xl mx-auto border-l-4 border-primary/50 pl-5 md:pl-6 text-left md:text-center md:border-l-0 md:pl-0 md:max-w-4xl">
          <p className="md:max-w-3xl md:mx-auto">
            財務健康不是特權，
            <br className="hidden sm:block" />
            是每個家庭應得的尊嚴
          </p>
        </blockquote>
        <h1 className="mt-8 text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight text-balance max-w-3xl mx-auto">
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
            asChild
          >
            <a href={familyFinHealthLinks.financialResilience} target="_blank" rel="noopener noreferrer">
              免費家庭財務快篩
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <p className="text-sm text-muted-foreground">
            只需 1 分鐘｜不用準備資料｜可以先自己看看
          </p>
        </div>
      </div>
    </section>
  )
}
