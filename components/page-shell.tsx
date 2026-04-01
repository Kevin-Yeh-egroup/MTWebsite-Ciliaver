import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="pt-16 min-h-[50vh]">{children}</main>
      <Footer />
    </>
  )
}
