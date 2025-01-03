'use client'

import React from 'react'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

const Members = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/login')
    }
  })
  return (
    <div className='flex min-h-screen items-center justify-center bg-foreground'>
      {session?.user.id}
    </div>
  )
}

export default Members
