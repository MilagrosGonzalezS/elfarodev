'use client'
import { useEffect, useState } from 'react'
import { Input } from './ui/input'
import { z } from 'zod'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { ContactFormSchema } from '@/lib/schema'
import { contactFormAction } from '@/lib/actions'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from './ui/button'
import { Form, FormField } from './ui/form'
import { FormItem, FormControl, FormMessage } from './ui/form'
import { StringDecoder } from 'string_decoder'

type Inputs = z.infer<typeof ContactFormSchema>

type FormProps = {
  name: string
  email: string
  button: string
  sending: string
  success: string
  error: string
}

export default function ContactForm({
  name,
  email,
  button,
  sending,
  success,
  error
}: FormProps) {
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    setSuccessMessage(success)
    setErrorMessage(error)
  }, [])

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
      toast.error(error)
      return
    }

    toast.success(success)
    form.reset()
  }

  return (
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
                <Input placeholder={name} {...field} />
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
                <Input placeholder={email} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Botón de envío */}
        <Button type='submit' variant='accent'>
          {form.formState.isSubmitting ? (
            <>
              {/* <Spinner /> */}
              <span className='ml-2'>{sending}</span>
            </>
          ) : (
            <>{button}</>
          )}
        </Button>
      </form>
    </Form>
  )
}
