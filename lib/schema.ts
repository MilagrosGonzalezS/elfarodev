import { z } from 'zod'

export const ContactFormSchema = z.object({
  name: z.string().min(1, { message: 'Campo obligatorio' }),
  email: z
    .string()
    .min(1, { message: 'Campo obligatorio' })
    .email('Por favor ingresá un email válido')
})

export const LoginFormSchema = z.object({
  username: z.string().min(1, { message: 'Campo obligatorio' }),
  password: z.string().min(1, { message: 'Campo obligatorio' })
})

export const AdminLoginFormSchema = z
  .object({
    username: z.string().min(1, { message: 'Campo obligatorio' }),
    password: z.string().min(1, { message: 'Campo obligatorio' })
  })
  .refine(data => data.username === 'admin' && data.password === 'paul01', {
    message: 'Usuario o contraseña incorrectos'
  })
