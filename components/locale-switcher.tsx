'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { i18n } from '@/i18n.config'

export default function LocaleSwitcher() {
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'

    const pathnameIsMissingLocale = i18n.locales.every(
      locale => !pathName.startsWith(`/${locale}/`) && pathName !== `${locale}`
    )

    if (pathnameIsMissingLocale) {
      if (locale === i18n.defaultLocale) return pathName
      return `/${locale}${pathName}`
    } else {
      if (locale === i18n.defaultLocale) {
        const segments = pathName.split('/')
        const isHome = segments.length === 2
        if (isHome) return '/'

        segments.splice(1, 1)
        return segments.join('/')
      }
      const segments = pathName.split('/')
      segments[1] = locale
      return segments.join('/')
    }
  }

  const currentLocale =
    i18n.locales.find(
      locale => pathName.startsWith(`/${locale}/`) || pathName === `/${locale}`
    ) || i18n.defaultLocale

  return (
    <ul className='flex gap-x-2'>
      {i18n.locales.map(locale => {
        const isActive = locale === currentLocale
        return (
          <li key={locale}>
            <Link
              href={redirectedPathName(locale)}
              className={`rounded-md px-3 py-2 text-white ${isActive ? 'bg-gray-400/80' : 'bg-gray-400/20'} hover:bg-gray-400/80`}
            >
              {locale}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
