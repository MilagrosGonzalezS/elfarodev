'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'
import { DialogClose } from '@/components/ui/dialog'

interface FormData {
  username: string
  password: string
}

export default function CreateUserForm() {
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(null)

    const form = event.currentTarget
    const formData = new FormData(form)
    const username = formData.get('username') as string
    const password = formData.get('password') as string
    const id = formData.get('id') as string

    if (!username || !password || !id) {
      setError('El id, nombre de usuario y contraseña son obligatorios')
      return
    }

    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password, id })
      })

      if (!response.ok) {
        throw new Error('Error al crear el usuario')
      }

      toast.success('Usuario creado exitosamente.')
      form.reset()
    } catch (error) {
      toast.error('Error al crear el usuario')
    }
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <Input
        className='text-foreground'
        type='text'
        name='id'
        placeholder='ID de usuario'
        required
      />
      <Input
        className='text-foreground'
        type='text'
        name='username'
        placeholder='Nombre de usuario'
        required
      />
      <Input
        className='text-foreground'
        type='password'
        name='password'
        placeholder='Contraseña'
        required
      />
      {error && <p className='text-sm text-red-500'>{error}</p>}
      <div className='flex justify-end space-x-2'>
        <DialogClose asChild>
          <Button variant='outline'>Cancelar</Button>
        </DialogClose>
        <DialogClose>
          <Button type='submit'>Crear</Button>
        </DialogClose>
      </div>
    </form>
  )
}
