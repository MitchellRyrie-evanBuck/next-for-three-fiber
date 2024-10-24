import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'
import '@/styles/globals.scss'
import '@/styles/index.css'
import '@/styles/main.scss'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Header from '@/components/layout/header/header'
import Footer from '@/components/layout/footer/footer'
import Layout from '@/components/layout'
import { useEffect } from 'react'
import AOS from 'aos'

import 'aos/dist/aos.css'
import '@radix-ui/themes/styles.css'

import { Theme } from '@radix-ui/themes'
import { Inter as FontSans } from 'next/font/google'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/themeProvider'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export default function App({ Component, pageProps, ...result }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    AOS.init()
  }, [])

  function setLinksPositions() {
    // biome-ignore lint/complexity/noForEach: <explanation>
    document.querySelectorAll('div').forEach((a) => {
      const bounding = a.getBoundingClientRect()

      a.style.setProperty('--positionX', `${bounding.x}px`)
      a.style.setProperty('--positionY', `${bounding.y}px`)
    })
  }

  useEffect(() => {
    ;(document as any)
      .querySelector('body')
      .addEventListener('mousemove', (e: any) => {
        e.currentTarget.style.setProperty('--x', `${e.clientX}px`)
        e.currentTarget.style.setProperty('--y', `${e.clientY}px`)
      })

    window.addEventListener('load', setLinksPositions)
    window.addEventListener('resize', setLinksPositions)
    return () => {
      window.removeEventListener('load', setLinksPositions)
      window.removeEventListener('resize', setLinksPositions)
    }
  })

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Theme>
        <div
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            fontSans.variable
          )}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </Theme>
    </ThemeProvider>
  )
}
