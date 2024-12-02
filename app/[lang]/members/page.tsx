'use client'
import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'

export default async function Members({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { page } = await getDictionary(lang)
  return (
    <>
      <section className='members-bg min-h-screen'>
        <div className='overlay flex min-h-screen w-full items-center justify-center p-10'>
          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='flex w-full flex-col items-center justify-center gap-4 rounded-md bg-background/90 p-8 text-foreground md:w-1/3 md:p-16'
          >
            <h1 className='bold text-2xl'>{page.signin.title}</h1>
            <div className='w-full'>
              <label className='self-start'>{page.signin.name}</label>
              <input className='w-full rounded-sm border border-gray-400 px-2 py-1' />
            </div>
            <div className='w-full'>
              <label className='self-start'>{page.signin.password}</label>
              <input
                type='password'
                className='w-full rounded-sm border border-gray-400 px-2 py-1'
              />
            </div>

            <Button className='w-full'>{page.signin.button}</Button>
          </motion.form>
        </div>
      </section>
    </>
  )
}
