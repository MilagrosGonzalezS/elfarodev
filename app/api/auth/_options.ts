import { DefaultSession, NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { getUsers } from '@/lib/mongo/users'
import bcrypt from 'bcrypt'

type User = {
  id: string
  username: string
  password: string
}

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string
      username: string
    } & DefaultSession['user']
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials) return null

        const { username, password } = credentials

        const response = await getUsers()
        const users = Array.isArray(response.users) ? response.users : []

        const user = users.find(u => u.username === username)
        if (user && (await bcrypt.compare(password, user.password))) {
          return { id: user.id, username: user.username }
        }
        return null
      }
    })
  ],
  pages: {
    signIn: '/login'
  },
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        // token.username = user.username
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        // session.user.username = token.username as string
      }
      return session
    }
  }
}
