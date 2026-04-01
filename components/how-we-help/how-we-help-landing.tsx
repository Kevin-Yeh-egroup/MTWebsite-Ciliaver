"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { familyFinHealthLinks, mtLinks } from "@/lib/external-links"

const IMG = "/section-illustration-mt.svg"

export type AudienceId = "public" | "social" | "partner"

const audiences: {
  id: AudienceId
  sectionId: string
  title: string
  shortLabel: string
  summary: string
  body: string
  detailHref: string
  quickLinks: { label: string; href: string }[]
}[] = [
  {
    id: "public",
    sectionId: "audience-public",
    title: "一般民眾",
    shortLabel: "一般民眾",
    summary: "想先看懂自己的財務狀況，或需要一對一／方案協助，從這裡開始。",
    body: "你可以先用好理家在的家庭財務韌性檢測了解現況，再依需要選擇付費諮詢或經濟弱勢對象的免費諮詢管道。完整說明與官方申請連結都在專頁裡。",
    detailHref: "/how-we-help/general",
    quickLinks: [
      { label: "家庭財務韌性檢測（好理家在）", href: familyFinHealthLinks.financialResilience },
      { label: "付費財務諮詢說明", href: mtLinks.paidConsultation },
      { label: "經濟弱勢免費諮詢申請", href: mtLinks.freeConsultation },
    ],
  },
  {
    id: "social",
    sectionId: "audience-social",
    title: "社工與助人工作者",
    shortLabel: "社工與助人工作者",
    summary: "需要工具、培力與可轉介的資源，協助家庭面對經濟壓力。",
    body: "我們提供財務社工專區、AI 與檢測工具銜接好理家在，以及與經濟弱勢相關的免費諮詢資訊，方便你在實務中搭配使用。",
    detailHref: "/how-we-help/social-workers",
    quickLinks: [
      { label: "財務社工專區", href: mtLinks.socialWorkerZone },
      { label: "家庭財務韌性檢測", href: familyFinHealthLinks.financialResilience },
      { label: "經濟弱勢免費諮詢申請", href: mtLinks.freeConsultation },
    ],
  },
  {
    id: "partner",
    sectionId: "audience-partner",
    title: "合作單位",
    shortLabel: "合作單位",
    summary: "學校、社福、企業與政府單位，導入課程、講座、團體與教練合作。",
    body: "可依組織需求選擇培訓合作、主題講座、財務團體、教練計畫或兒少體驗活動等方案；詳細條件與文章說明請見專頁連結。",
    detailHref: "/how-we-help/partners",
    quickLinks: [
      { label: "財務知能與經濟評估訓練合作", href: mtLinks.trainingCollaboration },
      { label: "財務主題講座與課程", href: mtLinks.topicSeminars },
      { label: "合作洽詢（馴錢師官網）", href: mtLinks.contact },
    ],
  },
]

export function HowWeHelpLanding() {
  const [active, setActive] = useState<AudienceId>("public")
  const sectionRefs = useRef<Record<AudienceId, HTMLElement | null>>({
    public: null,
    social: null,
    partner: null,
  })

  useEffect(() => {
    const els = audiences
      .map((a) => sectionRefs.current[a.id])
      .filter(Boolean) as HTMLElement[]
    if (els.length === 0) return

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target) {
          const id = visible.target.getAttribute("data-audience") as AudienceId | null
          if (id) setActive(id)
        }
      },
      { root: null, rootMargin: "-42% 0px -42% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const scrollTo = useCallback((id: AudienceId) => {
    const el = sectionRefs.current[id]
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }, [])

  const current = audiences.find((a) => a.id === active) ?? audiences[0]

  return (
    <div className="container mx-auto px-4 py-10 md:py-14">
      <div className="lg:grid lg:grid-cols-12 lg:gap-10 lg:items-start">
        <div className="lg:col-span-7 space-y-4 lg:hidden mb-8">
          <p className="text-sm font-medium text-muted-foreground">對象分流</p>
          <div className="flex flex-wrap gap-2">
            {audiences.map((a) => (
              <Button
                key={a.id}
                type="button"
                variant={active === a.id ? "default" : "outline"}
                size="sm"
                className="rounded-full"
                onClick={() => scrollTo(a.id)}
              >
                {a.shortLabel}
              </Button>
            ))}
          </div>
          <div className="rounded-2xl border border-border/60 bg-card p-4 shadow-sm">
            <p className="font-medium text-foreground">{current.title}</p>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{current.summary}</p>
            <Button className="mt-4 w-full rounded-full" size="sm" asChild>
              <Link href={current.detailHref}>
                前往完整說明與連結
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-20 md:space-y-28">
          {audiences.map((a) => (
            <section
              key={a.id}
              id={a.sectionId}
              data-audience={a.id}
              ref={(node) => {
                sectionRefs.current[a.id] = node
              }}
              className="scroll-mt-28"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border/50 bg-muted shadow-sm">
                <Image
                  src={IMG}
                  alt={`${a.title}主題示意圖（可替換為實際照片）`}
                  fill
                  className="object-cover opacity-90"
                  sizes="(max-width:1024px) 100vw, 58vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h2 className="text-2xl md:text-3xl font-semibold text-foreground">{a.title}</h2>
                  <p className="mt-2 max-w-xl text-sm md:text-base text-muted-foreground leading-relaxed">{a.summary}</p>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <p className="text-foreground leading-relaxed">{a.body}</p>
                <ul className="space-y-2">
                  {a.quickLinks.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                      >
                        {l.label}
                        <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                      </a>
                    </li>
                  ))}
                </ul>
                <Button className="rounded-full" asChild>
                  <Link href={a.detailHref}>
                    開啟{a.title}專頁
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </section>
          ))}
        </div>

        <aside className="hidden lg:block lg:col-span-5 lg:sticky lg:top-24 self-start">
          <p className="text-sm font-medium text-muted-foreground">目前瀏覽</p>
          <div className="mt-3 space-y-2">
            {audiences.map((a) => (
              <button
                key={a.id}
                type="button"
                onClick={() => scrollTo(a.id)}
                className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition-colors ${
                  active === a.id
                    ? "border-primary bg-primary/5 font-medium text-foreground"
                    : "border-border/60 text-muted-foreground hover:bg-muted/50"
                }`}
              >
                {a.shortLabel}
              </button>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-border/60 bg-card p-5 shadow-sm">
            <h3 className="font-semibold text-foreground">{current.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{current.summary}</p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{current.body}</p>
            <Button className="mt-5 w-full rounded-full" asChild>
              <Link href={current.detailHref}>
                完整說明與文章連結
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </aside>
      </div>
    </div>
  )
}
