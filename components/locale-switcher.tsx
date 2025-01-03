'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { i18n } from '@/i18n.config'
import { setCookie } from 'cookies-next'

export default function LocaleSwitcher() {
  const pathName = usePathname()
  const router = useRouter()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return `/${locale}`

    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  const handleLocaleChange = (locale: string) => {
    // Set the NEXT_LOCALE cookie
    setCookie('NEXT_LOCALE', locale, { maxAge: 60 * 60 * 24 * 30 }) // 30 days

    // Navigate to the new locale
    router.push(redirectedPathName(locale))
  }

  return (
    <ul className='flex gap-x-2'>
      {i18n.locales.map(locale => {
        const isActive = pathName.startsWith(`/${locale}`)
        return (
          <li key={locale}>
            <button
              onClick={() => handleLocaleChange(locale)}
              className={`rounded-md px-3 py-2 text-white ${isActive ? 'bg-gray-400/80' : 'bg-gray-400/20'} hover:bg-gray-400/80`}
            >
              {locale}
            </button>
          </li>
        )
      })}
    </ul>
  )
}
