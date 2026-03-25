import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ServicesFinalCta() {
  return (
    <section className="px-4 py-20 md:py-24">
      <div className="mx-auto max-w-xl text-center">
        <div className="rounded-3xl bg-card p-8 shadow-sm md:p-12">
          <Button 
            size="lg" 
            className="w-full rounded-2xl px-10 py-8 text-xl font-semibold shadow-md sm:w-auto" 
            asChild
          >
            <Link href="/screening">
              先看看我的狀況（免費快篩）
            </Link>
          </Button>
          
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
            只需要 1 分鐘｜不用準備資料｜可以先自己看看
          </p>
        </div>
      </div>
    </section>
  )
}
