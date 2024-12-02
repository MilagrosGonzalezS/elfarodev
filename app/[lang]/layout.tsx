import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Locale, i18n } from '@/i18n.config'
import { Inter, Playfair_Display } from 'next/font/google'
import { cn } from '@/lib/utils'

import Providers from '@/components/providers'
import Header from '@/components/header'
import Footer from '@/components/footer'

import './globals.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: 'El Faro Polo',
  description:
    'Somos sinónimo de pasión, innovación, trabajo en equipo y cuidado del medio ambiente.'
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang} className='scroll-smooth' suppressHydrationWarning>
      <body
        className={cn(
          'flex min-h-screen flex-col',
          geistSans.variable,
          geistMono.variable,
          inter.variable,
          playfair.variable
        )}
      >
        <Providers>
          <Header lang={params.lang} />
          <main className='grow'>{children}</main>
          <Link href='https://wa.me/+5491122726388'>
            <div className='fixed bottom-6 right-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary transition hover:scale-110'>
              <FontAwesomeIcon icon={faWhatsapp} className='h-8 w-8' />
            </div>
          </Link>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
