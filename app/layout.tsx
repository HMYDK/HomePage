import "./globals.css"
import { Metadata } from 'next'
import { userConfig } from '@/config/user'
import { ThemeProvider } from '@/components/ThemeProvider'
import { ThemeToggle } from '@/components/ThemeToggle'
import { BackToTop } from '@/components/BackToTop'
import { ErrorBoundary } from '@/components/ErrorBoundary'

export const metadata: Metadata = {
  title: {
    default: `${userConfig.name} - Personal Website`,
    template: `%s | ${userConfig.name}`,
  },
  description: userConfig.about.description[0],
  keywords: [...userConfig.about.skills, 'developer', 'portfolio', 'personal website'],
  authors: [{ name: userConfig.name }],
  creator: userConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: `${userConfig.name} - Personal Website`,
    description: userConfig.about.description[0],
    siteName: `${userConfig.name}.dev`,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${userConfig.name}'s personal website`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${userConfig.name} - Personal Website`,
    description: userConfig.about.description[0],
    creator: '@yourtwitterhandle',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/fonts/your-main-font.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider>
          <ErrorBoundary>
            <div className="relative flex min-h-screen flex-col">
              <div className="flex-1">
                {children}
                <ThemeToggle />
                <BackToTop />
              </div>
            </div>
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  )
}
