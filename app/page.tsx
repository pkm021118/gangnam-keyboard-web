import { Apple, Monitor } from "lucide-react"
import { TerminalCommandCopy } from "@/components/terminal-command-copy"
import { Button } from "@/components/ui/button"

export default function DownloadPage() {
  const windowsIssues: { situation: string; solution: string }[] = [
    {
      situation: "실행이 막히면",
      solution: "윈도우 보안 또는 백신에서 앱이 차단되었는지 확인하고 허용해 주세요.",
    },
    {
      situation: "알 수 없는 게시자 경고가 뜨면",
      solution: "추가 정보 → 실행을 눌러 진행해 주세요.",
    },
  ]

  const macIssues: { situation: string; solution: string }[] = [
    {
      situation: "키 입력 감지가 안 되면",
      solution:
        "시스템 설정에서 입력 모니터링과 손쉬운 사용 권한을 허용해 주세요.",
    },
  ]

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background px-6 py-10 md:px-10 md:py-14">
      <div className="text-center space-y-12">
        {/* 제목 */}
        <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
          강남키보드 다운로드
        </h1>

        {/* 다운로드 버튼 */}
        <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="gap-2 min-w-[180px]">
            <a href="/강남키보드.dmg" download>
              <Apple className="w-5 h-5" />
              Mac 다운로드
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="gap-2 min-w-[180px]">
            <a href="/강남키보드.exe" download>
              <Monitor className="w-5 h-5" />
              Windows 다운로드
            </a>
          </Button>
        </div>

        <div className="max-w-5xl mx-auto w-full space-y-4 text-left">
          {/* 프로그램 소개 */}
          <article className="rounded-lg border p-5 space-y-3 text-sm text-muted-foreground leading-relaxed">
            <h2 className="text-lg font-semibold text-foreground">
              강남키보드는 어떤 프로그램인가요?
            </h2>
            <p>
              강남키보드는 Mac과 Windows에서 쓰는 <strong className="text-foreground font-medium">데스크톱 앱</strong>입니다. 키보드 입력에 맞춰 직접 넣어 둔 사운드 파일을 재생하는 도구예요.
            </p>
            <p>
              앱 안에서 재생 타이밍이나 비율 같은 설정을 조절할 수 있고, 원하는 소리는 <strong className="text-foreground font-medium">소리 폴더</strong>에 WAV·MP3·OGG 등 지원 형식으로 넣어서 바꿀 수 있습니다.
            </p>
          </article>

          {/* OS별 문제 해결 안내 */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <article className="rounded-lg border p-5 space-y-3">
                <h3 className="text-lg font-semibold">macOS 안내</h3>
                <ol className="list-decimal pl-5 space-y-3 text-sm text-muted-foreground">
                  <li className="pl-1 space-y-2">
                    <span className="block font-medium text-foreground">
                      &quot;앱이 손상되었습니다&quot;가 뜰 때
                    </span>
                    <div className="space-y-0.5">
                      <span className="block">
                        터미널을 연 다음 아래 명령을 복사해 붙여넣고 Enter를 누릅니다.
                      </span>
                      <TerminalCommandCopy />
                    </div>
                  </li>
                  {macIssues.map((issue) => (
                    <li key={issue.situation} className="pl-1 space-y-0.5">
                      <span className="block font-medium text-foreground">
                        {issue.situation}
                      </span>
                      <span className="block">{issue.solution}</span>
                    </li>
                  ))}
                </ol>
              </article>

              <article className="rounded-lg border p-5 space-y-3">
                <h3 className="text-lg font-semibold">Windows 안내</h3>
                <ol className="list-decimal pl-5 space-y-3 text-sm text-muted-foreground">
                  {windowsIssues.map((issue) => (
                    <li key={issue.situation} className="pl-1 space-y-0.5">
                      <span className="block font-medium text-foreground">
                        {issue.situation}
                      </span>
                      <span className="block">{issue.solution}</span>
                    </li>
                  ))}
                </ol>
              </article>
            </div>
          </section>
        </div>

        {/* 만든 사람 */}
        <p className="text-muted-foreground text-sm">
          Made by{" "}
          <a
            href="https://instagram.com/p_rjsals"
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
