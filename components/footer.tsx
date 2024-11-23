import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/imgs/El Faro Con Logo Texto Blanco.png'
import { EnvelopeClosedIcon, InstagramLogoIcon } from '@radix-ui/react-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className=''>
      <div className='flex flex-col items-center justify-between gap-16 bg-foreground p-16 md:flex-row md:gap-0'>
        <Link href='/'>
          <Image className='w-24' src={Logo} alt='Logo El Faro' />
        </Link>
        <div className='flex gap-4'>
          <Link
            href='mailto:info@elfaroarg.com'
            className='rounded-full bg-white p-2'
          >
            <EnvelopeClosedIcon color='#292929'></EnvelopeClosedIcon>
          </Link>
          <Link href='' className='rounded-full bg-white p-2'>
            <InstagramLogoIcon color='#292929'></InstagramLogoIcon>
          </Link>
          <Link href='' className='rounded-full bg-white p-2'>
            <InstagramLogoIcon color='#292929'></InstagramLogoIcon>
          </Link>
          <Link href='' className='rounded-full bg-white p-2'>
            <InstagramLogoIcon color='#292929'></InstagramLogoIcon>
          </Link>
        </div>
        <div className='hidden h-16 w-[1px] bg-background md:block'></div>
        <div>
          <h5 className='mb-4 text-3xl font-bold text-accent'>
            Contactanos para más info
          </h5>
          <form className='flex flex-col gap-4 md:flex-row'>
            <input
              placeholder='Nombre'
              className='rounded-md border border-background bg-transparent px-4 py-2'
            />
            <input
              placeholder='Email'
              className='rounded-md border border-background bg-transparent px-4 py-2'
            />
            <button className='rounded-md bg-accent px-8 py-1 text-foreground'>
              Enviar
            </button>
          </form>
        </div>
      </div>
      <div className='container flex items-center justify-center gap-x-3 gap-y-1 py-4 text-center text-sm text-muted-foreground'>
        <p>El Faro Polo - Ruta 11, km 365, General Lavalle, Buenos Aires</p>
      </div>
    </footer>
  )
}
