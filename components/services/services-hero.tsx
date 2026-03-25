import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ServicesHero() {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
          你不一定需要更多理財知識
          <br className="hidden sm:block" />
          <span className="sm:block">
            <span className="text-primary">你可能只是需要一個人一起看</span>
          </span>
        </h1>
        
        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          不同的狀況，我們用不同方式陪你整理
          <br />
          不用急著解決，我們先一起看清楚
        </p>
        
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" className="w-full rounded-2xl px-10 py-7 text-lg font-semibold shadow-md sm:w-auto" asChild>
            <Link href="/screening">
              先看看我的狀況（免費快篩）
            </Link>
          </Button>
          
          <Button variant="ghost" size="lg" className="text-base text-muted-foreground underline-offset-4 hover:text-foreground hover:underline" asChild>
            <Link href="/contact">
              我想直接找人聊聊
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
