'use client'
import { motion } from 'motion/react'
import Image from 'next/image'
import tech1 from '@/public/imgs/tech1.webp'
import tech2 from '@/public/imgs/tech2.webp'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

export default async function Tech({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)
  return (
    <>
      <section className='tech-bg min-h-screen'>
        <div className='overlay flex min-h-screen w-full items-center justify-center p-10'>
          <motion.h1
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='text-center text-6xl font-bold md:text-8xl'
          >
            {page.tech.title}
          </motion.h1>
        </div>
      </section>

      <section className='bg-primary py-24'>
        <div className='container flex flex-col items-center justify-center gap-8 text-center md:w-2/3'>
          <motion.p
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='bold text-lg md:text-xl'
          >
            {page.tech.subtitle[1]}{' '}
            <span className='text-accent'>{page.tech.subtitle[2]}</span>
          </motion.p>
          <motion.p
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className='bold text-lg md:text-xl'
          >
            {page.tech.subtitle[3]}{' '}
            <span className='text-accent'>{page.tech.subtitle[4]}</span>
          </motion.p>
          <motion.p
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className='bold text-lg md:text-xl'
          >
            {page.tech.subtitle[5]}{' '}
            <span className='text-accent'>{page.tech.subtitle[6]}</span>
          </motion.p>
        </div>
      </section>

      <section className='bg-foreground py-24'>
        <div className='container flex flex-col gap-12 md:flex-row'>
          <div className='flex flex-1 flex-col items-center justify-center gap-12'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Image src={tech1} alt='paneles solares' />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image src={tech2} alt='el campo visión aérea' />
            </motion.div>
          </div>
          <div className='flex flex-1 flex-col items-center justify-center gap-12'>
            <motion.p
              initial={{ translateY: 20, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className='bold text-xl md:text-2xl'
            >
              {page.tech.parag1}
            </motion.p>
            <motion.p
              initial={{ translateY: 20, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className='bold text-xl md:text-2xl'
            >
              {page.tech.parag2}
            </motion.p>
          </div>
        </div>
      </section>

      <section className='bg-secondary py-24'>
        <div className='container flex items-center justify-center text-center md:w-2/3'>
          <motion.p
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='text-lg md:text-xl'
          >
            {page.tech.parag3[1]}{' '}
            <span className='bold text-accent'>{page.tech.parag3[2]}</span>
          </motion.p>
        </div>
      </section>
    </>
  )
}
