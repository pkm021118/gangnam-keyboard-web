import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://gangnam-keyboard.vercel.app'),
  title: '강남키보드 다운로드',
  description: '강남에서 온 키보드를 만나보세요.',
  generator: 'Gangnam Keyboard',
  openGraph: {
    title: '강남키보드 다운로드',
    description: '강남에서 온 키보드를 만나보세요.',
    url: 'https://gangnam-keyboard.vercel.app',
    siteName: '강남키보드',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1024,
        height: 582,
        alt: '강남키보드',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: '강남키보드 다운로드',
    description: '강남에서 온 키보드를 만나보세요.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6279284659662269"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
