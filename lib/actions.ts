'use server'

import { z } from 'zod'
import { Resend } from 'resend'
import { ContactFormSchema } from '@/lib/schema'
import ContactFormEmail from '@/emails/contact-form-email'

const resend = new Resend(process.env.RESEND_API_KEY)

type ContactFormInputs = z.infer<typeof ContactFormSchema>

export async function contactFormAction(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data)

  if (result.error) {
    return { error: result.error.format() }
  }

  try {
    const { name, email } = result.data
    const { data, error } = await resend.emails.send({
      from: 'El faro <onboarding@resend.dev>',
      to: ['milagrosgonzalez.sa@gmail.com'],
      subject: 'Nuevo contacto',
      react: ContactFormEmail({ name: name, email: email })
    })

    if (!data || error) {
      throw new Error('Error al enviar el formulario')
    }

    return { success: true }
  } catch (error) {
    return { error }
  }
}
