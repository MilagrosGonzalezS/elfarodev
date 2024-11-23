'use client'

import MalletsLogo from '@/public/imgs/mallets.webp'
import OakmontLogo from '@/public/imgs/oakmont.webp'
import NetzchLogo from '@/public/imgs/netzch.webp'
import AconcaguaLogo from '@/public/imgs/aconcagua.webp'
import Image from 'next/image'
import { motion } from 'motion/react'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className='home-bg min-h-screen w-full'>
        <div className='overlay flex min-h-screen w-full items-end justify-start p-5 md:p-10'>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='text-5xl font-bold md:w-1/2 md:text-6xl'
          >
            Una nueva temporada de verano comienza
          </motion.h1>
        </div>
      </section>

      <section className='py-24'>
        <div className='container flex flex-col items-center justify-center'>
          <motion.h2
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='bold mb-12 w-full text-center text-2xl text-foreground md:w-4/5'
          >
            El Faro Polo está ubicado en Gral. Lavalle, a 3 minutos de la playa,
            muy cerca de Costa Esmeralda, Pinamar y Cariló, y a 4 horas de la
            ciudad de Buenos Aires.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className='w-full md:w-4/5'
          >
            <AspectRatio ratio={16 / 9} className='bg-muted'>
              <iframe
                className='h-full w-full'
                src='https://www.youtube.com/embed/jj6Yzpwko4M?si=cMuLh_-6LJGcr-3m'
                title='El Faro desde arriba'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                referrerPolicy='strict-origin-when-cross-origin'
                allowFullScreen
              ></iframe>
            </AspectRatio>
          </motion.div>
        </div>
      </section>

      <section className='bg-primary py-24'>
        <div className='container flex flex-col items-start justify-center gap-12 md:flex-row md:items-center md:gap-0'>
          <motion.h3
            initial={{ translateX: -20, opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='text-4xl md:w-1/2 md:text-5xl'
          >
            <span className='text-accent'>Club Oficial</span> de la Asociación
            Argentina de Polo (AAP)
          </motion.h3>
          <div className='md:w-1/2'>
            <motion.p
              initial={{ translateX: 20, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className='text-2xl md:text-right md:text-3xl'
            >
              2 canchas de polo oficiales
            </motion.p>
            <motion.p
              initial={{ translateX: 20, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
              className='text-2xl md:text-right md:text-3xl'
            >
              Lugar para +200 caballos
            </motion.p>
          </div>
        </div>
      </section>

      <section className='ecofriendly-bg min-h-[40vh] w-full md:min-h-[80vh]'>
        <div className='overlay flex min-h-[40vh] w-full items-center justify-center p-5 md:min-h-[80vh] md:p-10'>
          <motion.h3
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className='light text-center text-2xl italic md:w-2/3 md:text-4xl'
          >
            Somos el primer campo deportivo{' '}
            <span className='text-accent'>eco friendly</span> con riego por
            energía renovable
          </motion.h3>
        </div>
      </section>

      <section className='py-24'>
        <div className='container flex flex-col items-center justify-evenly gap-12 md:flex-row md:gap-0'>
          <motion.div
            initial={{ translateX: 20, opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='w-28'
          >
            <Image src={MalletsLogo} alt='Mallets Logo' />
          </motion.div>
          <motion.div
            initial={{ translateX: 20, opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className='w-44'
          >
            <Image src={OakmontLogo} alt='Oakmont Logo' />
          </motion.div>
          <motion.div
            initial={{ translateX: 20, opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className='w-44'
          >
            <Link
              href='https://www.netzsch.com/en'
              target='_blank'
              rel={'noreferrer noopener'}
            >
              <Image src={NetzchLogo} alt='Netzch Logo' />
            </Link>
          </motion.div>
          <motion.div
            initial={{ translateX: 20, opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className='w-44'
          >
            <Link
              href='https://aconcaguagin.com/'
              target='_blank'
              rel={'noreferrer noopener'}
            >
              <Image src={AconcaguaLogo} alt='Aconcagua Logo' />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
