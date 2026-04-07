import { Apple, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DownloadPage() {
  const commonIssues = [
    "소리가 안 나면: 컴퓨터 볼륨/무음 상태와 출력 장치(스피커, 이어폰)가 맞는지 먼저 확인해 주세요.",
    "설정했는데도 랜덤 소리가 거의 안 들리면: 기능 사용이 켜져 있는지, 전체 재생 확률과 소리별 재생 비율 값이 너무 낮지 않은지 확인해 주세요.",
    "앱이 멈춘 것 같으면: 앱을 완전히 종료한 뒤 다시 실행해 주세요.",
    "이어폰/스피커를 바꾼 뒤 소리가 안 나면: 장치 연결 후 앱을 다시 실행해 주세요.",
    "그래도 해결이 안 되면: 소리 폴더에 사운드 파일이 정상적으로 들어있는지 확인해 주세요.",
  ]

  const windowsIssues = [
    "실행이 막히면: 윈도우 보안 또는 백신에서 앱이 차단되었는지 확인하고 허용해 주세요.",
    "알 수 없는 게시자 경고가 뜨면: 추가 정보 → 실행을 눌러 진행해 주세요.",
    "특정 프로그램에서만 반응이 없으면: 해당 프로그램이 관리자 권한으로 실행 중인지 확인하고, 필요하면 앱도 관리자 권한으로 실행해 주세요.",
    "소리 장치를 바꾼 뒤 문제가 생기면: 기본 출력 장치를 다시 확인하고 앱을 재실행해 주세요.",
  ]

  const macIssues = [
    "앱이 손상되었다고 나오면: 파일 문제라기보다 보안 설정 때문에 막힌 경우가 많습니다. 우클릭 → 열기로 실행해 주세요.",
    "첫 실행이 안 되면: 파인더에서 앱을 우클릭한 뒤 열기를 한 번 진행해 주세요.",
    "키 입력 감지가 안 되면: 시스템 설정에서 입력 모니터링과 손쉬운 사용 권한을 허용해 주세요.",
    "재설치 후 갑자기 안 되면: 권한이 다시 필요할 수 있으니 권한을 껐다 켜고 앱을 재실행해 주세요.",
    "앱 목록에 아이콘이 안 보이면: 설치 후 반영까지 시간이 걸릴 수 있으니 잠시 기다리거나 로그아웃 후 다시 로그인해 주세요.",
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
