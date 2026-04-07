import { Apple, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DownloadPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="text-center space-y-12">
        {/* 제목 */}
        <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
          강남키보드 다운로드
        </h1>

        {/* 다운로드 버튼 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="gap-2 min-w-[180px]">
            <a href="#" download>
              <Apple className="w-5 h-5" />
              Mac 다운로드
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="gap-2 min-w-[180px]">
            <a href="#" download>
              <Monitor className="w-5 h-5" />
              Windows 다운로드
            </a>
          </Button>
        </div>

        {/* 만든 사람 */}
        <p className="text-muted-foreground text-sm">
          Made by{" "}
          <a
            href="https://instagram.com/your_username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:underline font-medium"
          >
            p_rjsals
          </a>
        </p>
      </div>
    </main>
  )
}
