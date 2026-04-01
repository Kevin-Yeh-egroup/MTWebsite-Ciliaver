import { ExternalLink } from "lucide-react"

export type ResourceItem = {
  title: string
  description?: string
  href: string
}

export function ResourceList({ items }: { items: ResourceItem[] }) {
  return (
    <ul className="space-y-5">
      {items.map((item) => (
        <li
          key={item.href + item.title}
          className="rounded-2xl border border-border/50 bg-card px-5 py-4 shadow-sm"
        >
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-primary hover:underline"
          >
            {item.title}
            <ExternalLink className="h-4 w-4 shrink-0 opacity-70" />
          </a>
          {item.description ? (
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
          ) : null}
        </li>
      ))}
    </ul>
  )
}
