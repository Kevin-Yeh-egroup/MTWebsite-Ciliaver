"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-semibold text-sm">馴</span>
            </div>
            <span className="font-semibold text-foreground hidden sm:block">馴錢師財商研究中心</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              關於我們
            </a>
            <a href="#stories" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              故事
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              聯絡
            </a>
            <Button size="sm" className="rounded-full">
              免費快篩
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "關閉選單" : "開啟選單"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-3">
              <a 
                href="#about" 
                className="px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                關於我們
              </a>
              <a 
                href="#stories" 
                className="px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                故事
              </a>
              <a 
                href="#contact" 
                className="px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                聯絡
              </a>
              <div className="px-4 pt-2">
                <Button className="w-full rounded-full">
                  免費快篩
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
