import type { Metadata } from 'next'
import { Geist, Geist_Mono, Poppins, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Girls Mastery - Crea tu Avatar Digital y Monetízalo',
  description:
    'Programa completo de curso, comunidad y mentoría para crear avatares digitales con IA y ganar dinero sin exponerte. $19/mes.',
  keywords:
    'avatar digital, IA, monetización, curso online, comunidad, mujeres emprendedoras',
  openGraph: {
    title: 'AI Girls Mastery - Crea tu Avatar Digital',
    description: 'Gana dinero sin exponerte con avatares digitales. Únete a la comunidad.',
    type: 'website',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${poppins.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
