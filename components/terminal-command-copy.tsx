"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"

const COMMAND = "xattr -cr /Applications/강남키보드.app"

export function TerminalCommandCopy() {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(COMMAND)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="mt-2 flex min-h-[2.5rem] items-stretch gap-0 overflow-hidden rounded-md border bg-background font-mono text-xs text-foreground">
      <pre className="min-w-0 flex-1 whitespace-pre-wrap break-all px-3 py-2.5">
        {COMMAND}
      </pre>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="h-auto shrink-0 gap-1.5 rounded-none border-l px-3 py-2 text-muted-foreground hover:text-foreground"
        onClick={handleCopy}
        aria-label={copied ? "복사 완료" : "명령 복사"}
      >
        {copied ? (
          <>
            <Check className="h-4 w-4 shrink-0" aria-hidden />
            <span className="text-xs">완료</span>
          </>
        ) : (
          <>
            <Copy className="h-4 w-4 shrink-0" aria-hidden />
            <span className="text-xs">복사</span>
          </>
        )}
      </Button>
    </div>
  )
}
