"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { MAIN_NAV } from "@/lib/site-nav"
import { familyFinHealthLinks } from "@/lib/external-links"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-semibold text-sm">馴</span>
            </div>
            <span className="font-semibold text-foreground hidden sm:block">馴錢師財商研究中心</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-4 xl:gap-5 flex-wrap justify-end max-w-3xl">
            {MAIN_NAV.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm whitespace-nowrap transition-colors ${
                    active ? "text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
            <Button size="sm" className="rounded-full shrink-0" asChild>
              <a href={familyFinHealthLinks.financialResilience} target="_blank" rel="noopener noreferrer">
                免費快篩
              </a>
            </Button>
          </nav>

          <button
            className="lg:hidden p-2 text-foreground"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "關閉選單" : "開啟選單"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen ? (
          <div className="lg:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-3">
              {MAIN_NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button className="w-full rounded-full" asChild>
                  <a href={familyFinHealthLinks.financialResilience} target="_blank" rel="noopener noreferrer">
                    免費快篩
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  )
}
