'use client'

import Link from 'next/link'

import { ThemeToggle } from '@/components/theme-toggle'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger
} from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'

import { Menu } from 'lucide-react'
import Image from 'next/image'
import Logo from '@/public/imgs/El Faro Con Logo Texto Blanco.png'

export default function Header() {
  const pathname = usePathname()
  return (
    <header className='absolute inset-x-0 top-0 z-50 bg-transparent py-8'>
      <nav className='container flex items-start justify-between'>
        <Link href='/'>
          <Image
            className='w-16 md:w-20'
            src={Logo}
            alt='El Faro logo'
            priority
          />
        </Link>
        <ul className='mt-2 hidden items-center gap-14 text-sm font-medium sm:flex'>
          <li>
            <Link
              className={`rounded-sm px-6 py-2 transition hover:bg-gray-400/30 ${pathname === '/nosotros' ? 'bg-gray-400/30' : ''}`}
              href='/nosotros'
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              className={`rounded-sm px-6 py-2 transition hover:bg-gray-400/30 ${pathname === '/cria' ? 'bg-gray-600/20' : ''}`}
              href='/cria'
            >
              Cría
            </Link>
          </li>
          <li>
            <Link
              className={`rounded-sm px-6 py-2 transition hover:bg-gray-400/30 ${pathname === '/polo' ? 'bg-gray-400/30' : ''}`}
              href='/polo'
            >
              Polo
            </Link>
          </li>
          <li>
            <Link
              className={`rounded-sm px-6 py-2 transition hover:bg-gray-400/30 ${pathname === '/tech' ? 'bg-gray-400/30' : ''}`}
              href='/tech'
            >
              Tecnología
            </Link>
          </li>
        </ul>

        <div className='flex items-center justify-between gap-6'>
          <Link
            className='bold hidden rounded-sm bg-gray-400/30 px-6 py-2 text-sm hover:bg-gray-400/70 sm:flex'
            href='/members'
          >
            Members Only
          </Link>
          {/* <ThemeToggle /> */}
          <Sheet>
            <SheetTrigger className='sm:hidden'>
              <Menu className='h-6 w-6' />
            </SheetTrigger>
            <SheetContent side='right'>
              <ul className='flex flex-col gap-3 text-lg'>
                <li className='border-b-2 border-muted-foreground py-4'>
                  <SheetClose asChild>
                    <Link href='/nosotros'>Nosotros</Link>
                  </SheetClose>
                </li>
                <li className='border-b-2 border-muted-foreground py-4'>
                  <SheetClose asChild>
                    <Link href='/cria'>Cría</Link>
                  </SheetClose>
                </li>
                <li className='border-b-2 border-muted-foreground py-4'>
                  <SheetClose asChild>
                    <Link href='/polo'>Polo</Link>
                  </SheetClose>
                </li>
                <li className='border-b-2 border-muted-foreground py-4'>
                  <SheetClose asChild>
                    <Link href='/tech'>Tecnología</Link>
                  </SheetClose>
                </li>
                <li className='border-b-2 border-muted-foreground py-4'>
                  <SheetClose asChild>
                    <Link href='/tech'>Tecnología</Link>
                  </SheetClose>
                </li>
                <li className='w-full py-4'>
                  <SheetClose asChild>
                    <Link
                      className='bold block rounded-sm bg-gray-400/30 px-6 py-2 text-center'
                      href='/members'
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
