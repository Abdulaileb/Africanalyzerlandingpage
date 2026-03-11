import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Afric-Analyzer | Security Intelligence Platform',
  description: 'Real-time log analysis and AI-powered threat detection for African institutions. Monitor your infrastructure and quickly respond to threats.',
  generator: 'v0.app',
  keywords: ['cybersecurity', 'log analysis', 'threat detection', 'AI security', 'Africa', 'SIEM'],
}

export const viewport: Viewport = {
  themeColor: '#03070F',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
        <Toaster
          theme="dark"
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#0D1526',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#FFFFFF',
            },
          }}
        />
        <Analytics />
      </body>
    </html>
  )
}
