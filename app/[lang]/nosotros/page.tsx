'use client'
import { motion } from 'motion/react'
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

import image1 from '@/public/imgs/nosotros.webp'
import image2 from '@/public/imgs/nosotros2.webp'
import image3 from '@/public/imgs/nosotros3.webp'
import Image from 'next/image'
import hereford from '@/public/imgs/hereford.webp'
import aap from '@/public/imgs/aap.webp'
import panels from '@/public/imgs/panels.webp'

export default async function About({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)
  return (
    <>
      <section className='about-bg min-h-screen'>
        <div className='overlay flex min-h-screen w-full items-center justify-center p-10'>
          <motion.h1
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='text-center text-6xl font-bold md:text-8xl'
          >
            {page.about.title}
          </motion.h1>
        </div>
      </section>

      <section className='bg-secondary py-24'>
        <div className='container flex flex-col items-center justify-center gap-8 text-center md:w-2/3'>
          <motion.p
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='bold text-lg md:text-xl'
          >
            {page.about.subtitle1[1]}{' '}
            <span className='text-accent'>{page.about.subtitle1[2]}</span>{' '}
            {page.about.subtitle1[3]}
          </motion.p>
          <motion.p
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className='bold text-lg md:text-xl'
          >
            {page.about.subtitle2[1]}{' '}
            <span className='text-accent'>{page.about.subtitle2[2]}</span>{' '}
            {page.about.subtitle2[3]}
          </motion.p>
        </div>
      </section>

      <section className='py-24'>
        <div className='container flex flex-col-reverse gap-12 md:flex-row'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='flex flex-1 items-center justify-center'
          >
            <Carousel
              opts={{
                align: 'start',
                loop: true
              }}
              plugins={[
                Autoplay({
                  delay: 5000
                })
              ]}
              className='w-96'
            >
              <CarouselContent>
                <CarouselItem>
                  <div className='w-full p-1'>
                    <Image
                      className='w-full object-cover'
                      src={image1}
                      alt='Camiseta de El Faro Polo de atrás'
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className='p-1'>
                    <Image
                      className='w-full object-cover'
                      src={image2}
                      alt=''
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className='p-1'>
                    <Image
                      className='w-full object-cover'
                      src={image3}
                      alt=''
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </motion.div>
          <div className='flex flex-1 flex-col items-center justify-center md:px-16'>
            <div className='mb-16 flex flex-col items-center gap-24 md:flex-row md:items-end'>
              <motion.div
                initial={{ translateY: 20, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className='w-44'
              >
                <Image src={hereford} alt='Hereford logo' />
              </motion.div>
              <motion.div
                initial={{ translateY: 20, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className='w-32'
              >
                <Image src={aap} alt='AAP logo' />
              </motion.div>
            </div>
            <motion.p
              initial={{ translateY: 20, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className='text-center text-lg text-foreground'
            >
              {page.about.carousel}
            </motion.p>
          </div>
        </div>
      </section>

      <section className='bg-primary py-24'>
        <div className='container flex flex-col justify-evenly gap-8 md:flex-row'>
          <div className='flex flex-1 flex-col'>
            <motion.span
              initial={{ translateX: -20, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className='light text-3xl'
            >
              {page.about.challenge[1]}
            </motion.span>
            <motion.h3
              initial={{ translateX: -20, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className='text-8xl'
            >
              {page.about.challenge[2]}
            </motion.h3>
          </div>
          <div className='flex-1'>
            <motion.p
              initial={{ translateX: 20, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className='text-2xl'
            >
              {page.about.challenge[3]}
            </motion.p>
          </div>
        </div>
      </section>

      <section className='field-bg min-h-screen'>
        <div className='overlay flex min-h-screen w-full items-center justify-center px-8'>
          <motion.p
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='bold text-center text-2xl md:w-2/3'
          >
            {page.about.palta[1]}{' '}
            <span className='text-accent'>{page.about.palta[2]} </span>
            {page.about.palta[3]}
          </motion.p>
        </div>
      </section>

      <section className='py-24'>
        <div className='container'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Image src={panels} alt='' />
          </motion.div>
          <div className='flex flex-col gap-8 py-12 text-xl text-foreground md:flex-row md:gap-32'>
            <motion.p
              initial={{ translateY: 20, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {page.about.panels[1]}
              <span className='bold italic'>{page.about.panels[2]}</span>
              {page.about.panels[3]}{' '}
              <span className='bold italic'>{page.about.panels[4]}</span>{' '}
              {page.about.panels[5]}
            </motion.p>
            <motion.p
              initial={{ translateY: 20, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className='bold italic'>{page.about.panels[6]}</span>{' '}
              {page.about.panels[7]}{' '}
              <span className='bold italic'>{page.about.panels[8]}</span>
            </motion.p>
          </div>
        </div>
      </section>

      <section className='nosotros-bg'>
        <div className='overlay flex w-full items-center justify-center px-8 py-24 xl:py-32'>
          <motion.h4
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='light text-center text-3xl italic md:w-2/3 md:text-4xl'
          >
            {page.about.passion}
          </motion.h4>
        </div>
      </section>
    </>
  )
}
