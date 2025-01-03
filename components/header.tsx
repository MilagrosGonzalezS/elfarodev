'use client'

import Link from 'next/link'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger
} from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import LocaleSwitcher from './locale-switcher'

import { Menu } from 'lucide-react'
import Image from 'next/image'
import Logo from '@/public/imgs/El Faro Con Logo Texto Blanco.png'
import CustomLink from './custom-link'

export default async function Header({ lang }: { lang: Locale }) {
  const pathname = usePathname()

  const { navigation } = await getDictionary(lang)
  return (
    <header className='absolute inset-x-0 top-0 z-50 bg-transparent py-8'>
      <nav className='container flex items-start justify-between'>
        <CustomLink href='/' lang={lang}>
          <Image
            className='w-16 md:w-20'
            src={Logo}
            alt='El Faro logo'
            priority
          />
        </CustomLink>
        <ul className='mt-2 hidden items-center gap-14 text-sm font-medium sm:flex'>
          <li>
            <CustomLink
              className={`rounded-sm px-6 py-2 transition hover:bg-gray-400/30 ${pathname === '/nosotros' || pathname === '/en/nosotros' ? 'bg-gray-400/30' : ''}`}
              href='/nosotros'
              lang={lang}
            >
              {navigation.about}
            </CustomLink>
          </li>
          <li>
            <CustomLink
              className={`rounded-sm px-6 py-2 transition hover:bg-gray-400/30 ${pathname === '/cria' || pathname === '/en/cria' ? 'bg-gray-600/20' : ''}`}
              href='/cria'
              lang={lang}
            >
              {navigation.breed}
            </CustomLink>
          </li>
          <li>
            <CustomLink
              className={`rounded-sm px-6 py-2 transition hover:bg-gray-400/30 ${pathname === '/polo' || pathname === '/en/polo' ? 'bg-gray-400/30' : ''}`}
              href='/polo'
              lang={lang}
            >
              {navigation.polo}
            </CustomLink>
          </li>
          <li>
            <CustomLink
              className={`rounded-sm px-6 py-2 transition hover:bg-gray-400/30 ${pathname === '/tech' || pathname === '/en/tech' ? 'bg-gray-400/30' : ''}`}
              href='/tech'
              lang={lang}
            >
              {navigation.tech}
            </CustomLink>
          </li>
        </ul>

        <div className='flex items-center justify-between gap-6'>
          <LocaleSwitcher />
          <Link
            className='bold hidden rounded-sm bg-gray-400/20 px-6 py-2 text-sm hover:bg-gray-400/80 sm:flex'
            href='/protected/client'
          >
            Members Only
          </Link>
          <Sheet>
            <SheetTrigger className='sm:hidden'>
              <Menu className='h-6 w-6' />
            </SheetTrigger>
            <SheetContent side='right'>
              <ul className='flex flex-col gap-3 text-lg'>
                <li className='border-b-2 border-muted-foreground py-4'>
                  <SheetClose asChild>
                    <CustomLink href='/nosotros' lang={lang}>
                      {' '}
                      {navigation.about}
                    </CustomLink>
                  </SheetClose>
                </li>
                <li className='border-b-2 border-muted-foreground py-4'>
                  <SheetClose asChild>
                    <CustomLink href='/cria' lang={lang}>
                      {' '}
                      {navigation.breed}
                    </CustomLink>
                  </SheetClose>
                </li>
                <li className='border-b-2 border-muted-foreground py-4'>
                  <SheetClose asChild>
                    <CustomLink href='/polo' lang={lang}>
                      {' '}
                      {navigation.polo}
                    </CustomLink>
                  </SheetClose>
                </li>
                <li className='border-b-2 border-muted-foreground py-4'>
                  <SheetClose asChild>
                    <CustomLink href='/tech' lang={lang}>
                      {' '}
                      {navigation.tech}
                    </CustomLink>
                  </SheetClose>
                </li>
                <li className='w-full py-4'>
                  <SheetClose asChild>
                    <Link
                      className='bold block rounded-sm bg-gray-400/30 px-6 py-2 text-center'
                      href='/protected/client'
                    >
                      Members Only
                    </Link>
                  </SheetClose>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
