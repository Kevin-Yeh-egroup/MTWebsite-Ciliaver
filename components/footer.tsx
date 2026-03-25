export function Footer() {
  return (
    <footer className="py-10 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-background flex items-center justify-center">
              <span className="text-foreground font-semibold text-sm">馴</span>
            </div>
            <span className="font-semibold">馴錢師財商研究中心</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6 text-sm">
            <a href="#" className="text-background/70 hover:text-background transition-colors">
              關於我們
            </a>
            <a href="#" className="text-background/70 hover:text-background transition-colors">
              服務項目
            </a>
            <a href="#" className="text-background/70 hover:text-background transition-colors">
              隱私權政策
            </a>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-background/20 text-center text-sm text-background/60">
          © 2026 馴錢師財商研究中心. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
