import { NextResponse } from 'next/server'
import { getUsers, createUser } from '@/lib/mongo/users'

export async function GET() {
  try {
    const { users, error } = await getUsers()
    if (error) throw new Error(error)

    return NextResponse.json({ users }, { status: 200 })
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const {
      username,
      password,
      id
    }: { username: string; password: string; id: string } = await request.json()
    const { insertedId, error } = await createUser({ username, password, id })
    if (error) throw new Error(error)

    return NextResponse.json({ insertedId }, { status: 201 })
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}
