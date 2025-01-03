import { Suspense } from 'react'
import { getUsers } from '@/lib/mongo/users'
import { User } from '@/lib/types'
import { UserTable } from './user-table'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import { authOptions } from '@/app/api/auth/_options'

async function getData(): Promise<User[]> {
  const { users, error } = await getUsers()

  if (!users || error) {
    throw new Error('Failed to fetch users')
  }

  return users
}

export default async function Admin() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/admin-login')
  }
  const users = await getData()

  return (
    <section className='min-h-screen bg-foreground pb-12 pt-44'>
      <div className='container mx-auto px-4'>
        <Card>
          <CardHeader>
            <CardTitle className='text-3xl font-bold'>
              Panel de Administración
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<div>Cargando...</div>}>
              <UserTable initialUsers={users} />
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
