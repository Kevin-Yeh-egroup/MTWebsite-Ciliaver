type InnerHeroProps = {
  title: string
  subtitle?: string
  className?: string
}

export function InnerHero({ title, subtitle, className }: InnerHeroProps) {
  return (
    <div className={`border-b border-border/60 bg-muted/30 ${className ?? ""}`}>
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground text-balance">{title}</h1>
        {subtitle ? (
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-pretty">{subtitle}</p>
        ) : null}
      </div>
    </div>
  )
}
