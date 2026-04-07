import { Apple, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DownloadPage() {
  const commonIssues = [
    "소리가 안 남: sounds 폴더에 지원 포맷(.wav, .mp3, .ogg) 파일이 없거나 손상된 경우",
    "랜덤 재생이 거의 안 들림: Global chance 또는 Sound weights 값이 낮거나 0%로 설정된 경우",
    "앱이 실행 중인데 반응 없음: 백그라운드 비정상 상태로 입력 리스너가 멈춘 경우 (앱 재실행 필요)",
    "환경 변경 후 무음: 오디오 출력 장치(스피커/이어폰) 변경 직후 오디오 엔진이 꼬이는 경우",
  ]

  const windowsIssues = [
    "보안 프로그램 차단: Defender/백신이 .exe 또는 키보드 후킹 동작을 의심해 차단",
    "SmartScreen 경고: 서명되지 않은 실행 파일 실행 시 '알 수 없는 게시자' 경고 발생",
    "관리자 권한/입력 감지 문제: 일부 관리자 권한 앱 위에서는 키 입력 감지가 제한될 수 있음",
    "오디오 장치 전환 후 소리 끊김: 기본 출력 장치가 바뀌면 재생이 멈추는 경우",
  ]

  const macIssues = [
    "앱이 손상되었습니다 경고: 실제 손상보다 Gatekeeper(서명/공증 미완료) 차단인 경우가 많음",
    "첫 실행 불가: Finder 더블클릭 대신 우클릭 → 열기가 필요한 경우",
    "입력 감지 안 됨: 입력 모니터링(Input Monitoring) / 손쉬운 사용(Accessibility) 권한 미허용",
    "재설치 후 갑자기 동작 불가: TCC 권한 DB가 꼬여 기존 허용 상태가 무효화되는 경우",
    "Launchpad 아이콘 미노출: 설치 후 Launchpad 인덱스 갱신 지연으로 보이지 않을 수 있음",
  ]

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
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

        {/* OS별 문제 해결 안내 */}
        <section className="text-left max-w-5xl mx-auto space-y-6">
          <div className="rounded-lg border p-5 space-y-3">
            <h2 className="text-xl font-semibold">공통 이슈</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              {commonIssues.map((issue) => (
                <li key={issue}>{issue}</li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <article className="rounded-lg border p-5 space-y-3">
              <h3 className="text-lg font-semibold">Windows 안내</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                {windowsIssues.map((issue) => (
                  <li key={issue}>{issue}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-lg border p-5 space-y-3">
              <h3 className="text-lg font-semibold">macOS 안내</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                {macIssues.map((issue) => (
                  <li key={issue}>{issue}</li>
                ))}
              </ul>
            </article>
          </div>

          <div className="rounded-lg border p-5 space-y-3">
            <h2 className="text-xl font-semibold">사용자 안내(권장)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              <li>설치 직후 권한 허용 후 앱 재실행을 먼저 안내해 주세요.</li>
              <li>문제 발생 시 Enabled / Global chance / Sound weights 값을 먼저 점검해 주세요.</li>
              <li>macOS 배포 시 Developer ID 서명 + 공증(Notarization) 적용을 권장합니다.</li>
              <li>Windows 배포 시 가능하면 코드 서명 인증서 적용을 권장합니다.</li>
            </ul>
          </div>
        </section>

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
