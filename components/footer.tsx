import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/imgs/El Faro Con Logo Texto Blanco.png'
import { EnvelopeClosedIcon } from '@radix-ui/react-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faFacebook,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import ContactForm from './contact-form'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

export default async function Footer({ lang }: { lang: Locale }) {
  const { footer } = await getDictionary(lang)

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
          <Link
            href='https://www.instagram.com/elfaropolo/'
            target='_blank'
            rel={'noopener noreferrer'}
            className='flex h-8 w-8 items-center justify-center rounded-full bg-white p-2'
          >
            <FontAwesomeIcon
              icon={faInstagram}
              color='#292929'
              className='w-4'
            />
          </Link>
          <Link
            href='https://www.facebook.com/elfaropolo'
            target='_blank'
            rel={'noopener noreferrer'}
            className='flex h-8 w-8 items-center justify-center rounded-full bg-white p-2'
          >
            <FontAwesomeIcon
              icon={faFacebook}
              color='#292929'
              className='w-4'
            />
          </Link>
          <Link
            href='https://www.youtube.com/channel/UCnzek2stB0nJQVWcky6p1fQ'
            target='_blank'
            rel={'noopener noreferrer'}
            className='flex h-8 w-8 items-center justify-center rounded-full bg-white p-2'
          >
            <FontAwesomeIcon icon={faYoutube} color='#292929' className='w-4' />
          </Link>
        </div>
        <div className='hidden h-16 w-[1px] bg-background md:block'></div>
        <div>
          <h5 className='mb-4 text-3xl font-bold text-accent'>
            {footer.contact}
          </h5>
          <ContactForm
            name={footer.name}
            email={footer.email}
            sending={footer.sending}
            button={footer.button}
            success={footer.success}
            error={footer.error}
          ></ContactForm>
        </div>
      </div>
      <div className='container flex items-center justify-center gap-x-3 gap-y-1 py-4 text-center text-sm text-muted-foreground'>
        <p>El Faro Polo - Ruta 11, km 365, General Lavalle, Buenos Aires</p>
      </div>
    </footer>
  )
}
