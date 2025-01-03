'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'
import { DialogClose } from '@/components/ui/dialog'

interface UpdateUserFormProps {
  userId: string
  initialUsername: string
  onUserUpdated: () => void
}

export default function UpdateUserForm({
  userId,
  initialUsername,
  onUserUpdated
}: UpdateUserFormProps) {
  const [username, setUsername] = useState(initialUsername)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setUsername(initialUsername)
  }, [initialUsername])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(null)

    if (!username) {
      setError('El nombre de usuario es obligatorio')
      return
    }

    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username })
      })

      if (!response.ok) {
        throw new Error('Error al actualizar el usuario')
      }

      toast.success('Usuario actualizado exitosamente.')
      onUserUpdated()
    } catch (error) {
      setError(
        error instanceof Error ? error.message : 'Ocurrió un error desconocido'
      )
    }
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <Input
        className='text-foreground'
        type='text'
        name='username'
        placeholder='Nombre de usuario'
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
      />
      {error && <p className='text-sm text-red-500'>{error}</p>}
      <div className='flex justify-end space-x-2'>
        <DialogClose asChild>
          <Button variant='outline'>Cancelar</Button>
        </DialogClose>
        <DialogClose asChild>
          <Button type='submit'>Actualizar</Button>
        </DialogClose>
      </div>
    </form>
  )
}
