'use client'

export const dynamic = 'force-dynamic'

import { useState } from 'react'
import { User } from '@/lib/types'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import CreateUserForm from './create-user-form'
import UpdateUserForm from './update-user-form'
import { DialogClose } from '@radix-ui/react-dialog'
import { toast } from 'sonner'

interface UserTableProps {
  initialUsers: User[]
}

export function UserTable({ initialUsers }: UserTableProps) {
  const [users, setUsers] = useState<User[]>(initialUsers)
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const usersPerPage = 10

  const filteredUsers = users.filter(user => {
    const searchLower = search.toLowerCase()
    const matchesUsername = user.username.toLowerCase().includes(searchLower)
    const matchesId = user.id.toLowerCase().includes(searchLower)

    return matchesUsername || matchesId
  })

  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser)

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage)

  const handleUserUpdated = () => {
    // Refresh the user list
    // In a real application, you might want to fetch the updated user list from the server
    // For now, we'll just update the local state
    setUsers(prevUsers => prevUsers.map(user => ({ ...user })))
  }

  const handleDelete = async (userId: string): Promise<void> => {
    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error('Error al eliminar el usuario')
      }

      toast.success('Usuario eliminado exitosamente.')
    } catch (error) {
      toast.error('Ocurrió un error al eliminar el usuario')
    }
  }

  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-between'>
        <Input
          type='text'
          placeholder='Buscar usuarios...'
          value={search}
          onChange={e => setSearch(e.target.value)}
          className='max-w-sm'
        />
        <Dialog>
          <DialogTrigger asChild>
            <Button>Crear Usuario</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Crear Nuevo Usuario</DialogTitle>
            </DialogHeader>
            <CreateUserForm />
          </DialogContent>
        </Dialog>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px]'>No.</TableHead>
            <TableHead className='w-[100px]'>ID</TableHead>
            <TableHead>Usuario</TableHead>
            <TableHead>Creado</TableHead>
            <TableHead>Actualizado</TableHead>
            <TableHead className='w-[100px]'>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentUsers.map((user, index) => (
            <TableRow key={user.id}>
              <TableCell>{indexOfFirstUser + index + 1}</TableCell>
              <TableCell>{user.id}</TableCell>
              <TableCell className='font-medium'>{user.username}</TableCell>
              <TableCell>{new Date(user.createdAt).toLocaleString()}</TableCell>
              <TableCell>{new Date(user.updatedAt).toLocaleString()}</TableCell>
              <TableCell className='flex gap-2'>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant='outline' size='sm'>
                      Editar
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Editar Usuario</DialogTitle>
                    </DialogHeader>
                    <UpdateUserForm
                      userId={user.id}
                      initialUsername={user.username}
                      onUserUpdated={handleUserUpdated}
                    />
                  </DialogContent>
                </Dialog>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant='outline' size='sm'>
                      Eliminar
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className='text-foreground'>
                        Eliminar Usuario
                      </DialogTitle>
                    </DialogHeader>
                    <p className='text-foreground'>
                      Querés eliminar a {user.username}?
                    </p>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant='outline'>Cancelar</Button>
                      </DialogClose>
                      <DialogClose asChild>
                        <Button onClick={() => handleDelete(user.id)}>
                          Eliminar
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className='flex items-center justify-between'>
        <div>
          Mostrando {indexOfFirstUser + 1}-
          {Math.min(indexOfLastUser, filteredUsers.length)} de{' '}
          {filteredUsers.length} usuarios
        </div>
        <div className='space-x-2'>
          <Button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Anterior
          </Button>
          <Button
            onClick={() =>
              setCurrentPage(prev => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Siguiente
          </Button>
        </div>
      </div>
    </div>
  )
}
