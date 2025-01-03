'use client'
import { SessionProvider } from 'next-auth/react'

import { Toaster } from '@/components/ui/sonner'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      {children}
      <ToasterProvider />
    </SessionProvider>
  )
}

function ToasterProvider() {
  return <Toaster richColors closeButton position='top-center' />
}
