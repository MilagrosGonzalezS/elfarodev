'use client'
import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary'
import { signIn } from 'next-auth/react'
import { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { z } from 'zod'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { LoginFormSchema } from '@/lib/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormField, FormLabel } from '@/components/ui/form'
import { FormItem, FormControl, FormMessage } from '@/components/ui/form'

export default function Login({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [page, setPage] = useState<any>(null)

  type Inputs = z.infer<typeof LoginFormSchema>

  useEffect(() => {
    const loadDictionary = async () => {
      const dict = await getDictionary(lang)
      setPage(dict.page)
    }
    loadDictionary()
  }, [lang])

  const form = useForm<Inputs>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      username: '',
      password: ''
    }
  })

  async function onSubmit(values: Inputs) {
    const username = values.username
    const password = values.password
    const result = await signIn('credentials', {
      username,
      password,
      redirect: false
    })

    if (result?.error) {
      toast.error('Error: Usuario o contraseña incorrectos')
    } else {
      toast.success('Inicio de sesión exitoso')
      window.location.href = '/protected/client'
    }
  }

  if (!page) {
    return <div>Loading...</div>
  }

  return (
    <>
      <section className='members-bg min-h-screen'>
        <div className='overlay flex min-h-screen w-full items-center justify-center p-10'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='flex w-full flex-col items-center justify-center gap-4 rounded-md bg-background/90 p-8 text-foreground md:w-1/3 md:p-16'
          >
            <h1 className='bold text-2xl'>{page.signin.title}</h1>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='flex w-full flex-col gap-4'
              >
                {/* Campo de nombre */}
                <div className='w-full'>
                  <FormField
                    control={form.control}
                    name='username'
                    render={({ field }) => (
                      <FormItem className='flex-1'>
                        <FormLabel>
                          <FormControl>
                            <Input
                              type='text'
                              className='border-muted-foreground'
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                </div>

                <div className='w-full'>
                  <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                      <FormItem className='flex-1'>
                        <FormControl>
                          <Input
                            className='border-muted-foreground'
                            type='password'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button type='submit' className='w-full'>
                  {page.signin.button}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </section>
    </>
  )
}
