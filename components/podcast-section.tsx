"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, ArrowRight } from "lucide-react"

const episodes = [
  {
    number: "EP1",
    title: "當另一半是月光族，我們怎麼溝通？",
    duration: "18 分鐘",
  },
  {
    number: "EP2",
    title: "三寶媽的財務逆轉：從負債到穩定",
    duration: "22 分鐘",
  },
]

export function PodcastSection() {
  return (
    <section id="insights" className="scroll-mt-24 py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-foreground text-balance">
          觀點與成果
        </h2>
        <p className="mt-3 text-center text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          聽聽別人的經驗與做法，你並不孤單。
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {episodes.map((episode, index) => (
            <Card 
              key={index}
              className="rounded-2xl border-border/50 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <button 
                    className="flex-shrink-0 w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-md group-hover:scale-105 transition-transform"
                    aria-label={`播放 ${episode.title}`}
                  >
                    <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                  </button>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-medium text-primary">{episode.number}</span>
                    <h3 className="text-lg font-medium text-card-foreground mt-1 leading-snug">
                      {episode.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      {episode.duration}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full group"
          >
            聽更多內容
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
