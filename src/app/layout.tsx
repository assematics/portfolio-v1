import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/lib/theme-context'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Assem Sobhy - Developer & Security Engineer',
  description: 'Portfolio of Assem Sobhy - Developer specializing in web development, Linux administration, and cybersecurity.',
  keywords: ['web development', 'linux', 'cybersecurity', 'developer portfolio', 'assem sobhy'],
  authors: [{ name: 'Assem Sobhy' }],
  creator: 'Assem Sobhy',
  publisher: 'Assem Sobhy',
  metadataBase: new URL('https://assem-me.vercel.app'),
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Assem Sobhy - Developer & Security Engineer',
    description: 'Portfolio of Assem Sobhy - Developer specializing in web development, Linux administration, and cybersecurity.',
    url: 'https://assem-me.vercel.app',
    siteName: 'Assem Sobhy Portfolio',
    type: 'website',
    images: [
      {
        url: '/profile.jpg',
        width: 800,
        height: 800,
        alt: 'Assem Sobhy - Developer & Security Engineer',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}