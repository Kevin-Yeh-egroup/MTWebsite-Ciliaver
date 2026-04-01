import Link from "next/link"
import { MAIN_NAV } from "@/lib/site-nav"

export function Footer() {
  return (
    <footer className="py-10 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center">
              <span className="text-foreground font-semibold text-sm">馴</span>
            </div>
            <span className="font-semibold">馴錢師財商研究中心</span>
          </Link>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {MAIN_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-background/70 hover:text-background transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/services" className="text-background/70 hover:text-background transition-colors">
              依狀況選服務
            </Link>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-background/20 text-center text-sm text-background/60">
          © 2026 馴錢師財商研究中心。保留所有權利。
        </div>
      </div>
    </footer>
  )
}
