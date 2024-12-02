'use client'
import { motion } from 'motion/react'
import Image from 'next/image'
import cria1 from '@/public/imgs/cria1.webp'
import cria2 from '@/public/imgs/cria2.webp'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

export default async function Cria({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)
  return (
    <>
      <section className='cria-bg min-h-screen'>
        <div className='overlay flex min-h-screen w-full items-center justify-center p-10'>
          <motion.h1
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='text-center text-6xl font-bold md:text-8xl'
          >
            {page.breed.title}
          </motion.h1>
        </div>
      </section>

      <section className='bg-primary py-24'>
        <div className='container flex items-center justify-center text-center md:w-2/3'>
          <motion.p
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='bold text-lg md:text-xl'
          >
            {page.breed.subtitle[1]}
            <span className='text-accent'>{page.breed.subtitle[2]}</span>
            {page.breed.subtitle[3]}
          </motion.p>
        </div>
      </section>

      <section className='py-24'>
        <div className='container'>
          <div className='mb-12 flex flex-col items-center gap-12 md:flex-row'>
            <motion.div
              initial={{ translateX: -50, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className='flex-1'
            >
              <Image src={cria1} alt='ganado vacuno' />
            </motion.div>
            <motion.div
              initial={{ translateX: -50, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className='flex-1 md:px-16'
            >
              <p className='text-xl text-foreground md:text-2xl'>
                {page.breed.parag1}
              </p>
            </motion.div>
          </div>
          <div className='flex flex-col-reverse items-center gap-12 md:flex-row'>
            <motion.div
              initial={{ translateX: 50, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className='flex-1 md:px-16'
            >
              <p className='text-xl text-foreground md:text-2xl'>
                {page.breed.parag2}
              </p>
            </motion.div>
            <motion.div
              initial={{ translateX: 50, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className='flex-1'
            >
              <Image src={cria2} alt='ganado vacuno' />
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className='manada-bg flex min-h-screen items-end justify-center'
      >
        <div className='overlay flex justify-center p-8 md:px-16 md:py-12'>
          <motion.p
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='bold text-center text-xl md:w-4/5 md:text-2xl'
          >
            {page.breed.parag3[1]}{' '}
            <span className='text-accent'>{page.breed.parag3[2]}</span>{' '}
            {page.breed.parag3[3]}{' '}
            <span className='text-accent'>{page.breed.parag3[4]}</span>
          </motion.p>
        </div>
      </motion.section>

      <section className='bg-secondary py-24'>
        <div className='container flex justify-center'>
          <motion.p
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='light text-center text-2xl italic md:w-2/3 md:text-4xl'
          >
            {page.breed.proud[1]}
            <span className='bold'>{page.breed.proud[2]}</span>
          </motion.p>
        </div>
      </section>
    </>
  )
}
