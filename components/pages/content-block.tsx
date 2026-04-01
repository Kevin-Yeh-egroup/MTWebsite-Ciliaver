import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export type ContentBlockLink = {
  label: string
  href: string
  external?: boolean
}

export type ContentBlockProps = {
  title: string
  description: string
  imageSrc?: string
  imageAlt?: string
  links?: ContentBlockLink[]
  primaryAction?: { label: string; href: string; external?: boolean }
}

export function ContentBlock({
  title,
  description,
  imageSrc = "/section-illustration-mt.svg",
  imageAlt = "",
  links = [],
  primaryAction,
}: ContentBlockProps) {
  return (
    <Card className="overflow-hidden rounded-2xl border-border/50 shadow-sm">
      <div className="grid gap-0 md:grid-cols-5">
        <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[200px] md:col-span-2 bg-muted">
          <Image src={imageSrc} alt={imageAlt || title} fill className="object-cover" sizes="(max-width:768px) 100vw, 40vw" />
        </div>
        <div className="md:col-span-3">
          <CardHeader>
            <CardTitle className="text-xl font-semibold leading-snug">{title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">{description}</p>
            {links.length > 0 ? (
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l.href + l.label}>
                    <a
                      href={l.href}
                      target={l.external ? "_blank" : undefined}
                      rel={l.external ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                    >
                      {l.label}
                      {l.external ? <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-70" /> : null}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
            {primaryAction ? (
              <div className="pt-2">
                {primaryAction.external ? (
                  <Button className="rounded-full" asChild>
                    <a href={primaryAction.href} target="_blank" rel="noopener noreferrer">
                      {primaryAction.label}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                ) : (
                  <Button className="rounded-full" asChild>
                    <Link href={primaryAction.href}>
                      {primaryAction.label}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                )}
              </div>
            ) : null}
          </CardContent>
        </div>
      </div>
    </Card>
  )
}
