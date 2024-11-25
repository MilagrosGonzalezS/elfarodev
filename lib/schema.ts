import { z } from 'zod'

export const ContactFormSchema = z.object({
  name: z.string().min(1, { message: 'Campo obligatorio' }),
  email: z
    .string()
    .min(1, { message: 'Campo obligatorio' })
    .email('Por favor ingresá un email válido')
})
