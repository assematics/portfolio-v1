import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/lib/theme-context'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Assem.me - Developer Portfolio',
  description: 'Portfolio of a developer specializing in web development, Linux administration, and cybersecurity.',
  keywords: ['web development', 'linux', 'cybersecurity', 'developer portfolio'],
  authors: [{ name: 'Assem' }],
  openGraph: {
    title: 'Assem.me - Developer Portfolio',
    description: 'Portfolio of a developer specializing in web development, Linux administration, and cybersecurity.',
    url: 'https://assem.me',
    siteName: 'Assem.me',
    type: 'website',
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