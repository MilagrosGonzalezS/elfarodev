'use client'
import { motion } from 'motion/react'
import Image from 'next/image'
import polo1 from '@/public/imgs/polo1.webp'
import polo2 from '@/public/imgs/polo2.webp'
import polo3 from '@/public/imgs/polo3.webp'
import palos from '@/public/imgs/palos.webp'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

export default async function Polo({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)
  return (
    <>
      <section className='polo-bg min-h-screen'>
        <div className='overlay flex min-h-screen w-full items-center justify-center p-10'>
          <motion.h1
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='text-center text-6xl font-bold md:text-8xl'
          >
            {page.polo.title}
          </motion.h1>
        </div>
      </section>

      <section className='bg-secondary py-24'>
        <div className='container flex items-center justify-center text-center md:w-2/3'>
          <motion.p
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='bold text-lg md:text-xl'
          >
            {page.polo.subtitle[1]}
            <span className='text-accent'> {page.polo.subtitle[2]} </span>{' '}
            {page.polo.subtitle[3]}
          </motion.p>
        </div>
      </section>

      <section className='py-24'>
        <div className='container flex flex-col items-center gap-12'>
          <div className='flex gap-2 md:gap-12'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className='flex-1'
            >
              <Image src={polo1} alt='Jugadores de polo sobre el caballo' />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className='flex-1'
            >
              <Image src={polo2} alt='Jugadores de polo sobre el caballo' />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className='flex-1'
            >
              <Image src={polo3} alt='Jugadores de polo sobre el caballo' />
            </motion.div>
          </div>
          <div className='flex flex-col items-center'>
            <motion.h2
              initial={{ translateY: 20, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className='bold my-8 text-center text-2xl italic text-foreground md:w-2/3 md:text-4xl'
            >
              {page.polo.subtitle2}
            </motion.h2>
            <motion.p
              initial={{ translateY: 20, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className='text-center text-xl text-foreground md:w-2/3'
            >
              {page.polo.parag1}
            </motion.p>
          </div>
        </div>
      </section>

      <section className='flex flex-col md:flex-row'>
        <div className='flex-1'>
          <Image
            className='object-contain object-center'
            src={palos}
            alt='Cancha de polo'
          />
        </div>
        <div className='bold flex flex-1 flex-col items-center justify-center gap-8 bg-primary px-8 py-8 text-xl md:px-12 md:text-2xl'>
          <motion.p
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {page.polo.parag2}
          </motion.p>
          <motion.p
            initial={{ translateY: 20, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {page.polo.parag3}
          </motion.p>
        </div>
      </section>
    </>
  )
}
