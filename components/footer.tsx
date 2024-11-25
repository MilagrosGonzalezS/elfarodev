'use client'

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
import { Input } from './ui/input'
import { z } from 'zod'
import { toast } from 'sonner'
import { motion } from 'motion/react'
import { useForm } from 'react-hook-form'
import { ContactFormSchema } from '@/lib/schema'
import { contactFormAction } from '@/lib/actions'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from './ui/button'
import { Form, FormField } from './ui/form'
import { FormItem, FormControl, FormMessage } from './ui/form'

type Inputs = z.infer<typeof ContactFormSchema>

export default function Footer() {
  const form = useForm<Inputs>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: ''
    }
  })

  async function onSubmit(values: Inputs) {
    const result = await contactFormAction(values)

    if (result?.error) {
      toast.error('Ocurrió un error. Por favor intentá denuevo.')
      return
    }

    toast.success(`¡Gracias por tu interés! Nos pondremos en contacto con vos.`)
    form.reset()
  }

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
            href=''
            className='flex h-8 w-8 items-center justify-center rounded-full bg-white p-2'
          >
            <FontAwesomeIcon
              icon={faInstagram}
              color='#292929'
              className='w-4'
            />
          </Link>
          <Link
            href=''
            className='flex h-8 w-8 items-center justify-center rounded-full bg-white p-2'
          >
            <FontAwesomeIcon
              icon={faFacebook}
              color='#292929'
              className='w-4'
            />
          </Link>
          <Link
            href=''
            className='flex h-8 w-8 items-center justify-center rounded-full bg-white p-2'
          >
            <FontAwesomeIcon icon={faYoutube} color='#292929' className='w-4' />
          </Link>
        </div>
        <div className='hidden h-16 w-[1px] bg-background md:block'></div>
        <div>
          <h5 className='mb-4 text-3xl font-bold text-accent'>
            Contactanos para más info
          </h5>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='flex flex-col gap-4 md:flex-row'
            >
              {/* Campo de nombre */}
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem className='flex-1'>
                    <FormControl>
                      <Input placeholder='Nombre' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Campo de email */}
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem className='flex-1'>
                    <FormControl>
                      <Input placeholder='Email' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Botón de envío */}
              <Button className='w-full' type='submit' variant='accent'>
                {form.formState.isSubmitting ? (
                  <>
                    {/* <Spinner /> */}
                    <span className='ml-2'>Enviando...</span>
                  </>
                ) : (
                  'Enviar'
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <div className='container flex items-center justify-center gap-x-3 gap-y-1 py-4 text-center text-sm text-muted-foreground'>
        <p>El Faro Polo - Ruta 11, km 365, General Lavalle, Buenos Aires</p>
      </div>
    </footer>
  )
}
