import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { familyFinHealthLinks } from "@/lib/external-links"

export function FinalCtaSection() {
  return (
    <section className="py-20 md:py-28 bg-primary/5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-relaxed text-balance max-w-xl mx-auto">
          你不用一次變得很好
          <br />
          先看懂現在，就已經是開始
        </h2>

        <div className="mt-10 flex flex-col items-center gap-4">
          <Button
            size="lg"
            className="text-lg md:text-xl px-10 py-7 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            asChild
          >
            <a href={familyFinHealthLinks.financialResilience} target="_blank" rel="noopener noreferrer">
              免費家庭財務快篩
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Link
            href="/cooperation"
            className="text-sm font-medium text-muted-foreground hover:text-foreground underline-offset-4 hover:underline"
          >
            企業與單位合作洽詢
          </Link>
        </div>
      </div>
    </section>
  )
}
