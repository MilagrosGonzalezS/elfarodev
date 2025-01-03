import { NextResponse } from 'next/server'
import { getUser, updateUser, deleteUser } from '@/lib/mongo/users'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { user, error } = await getUser(params.id)
    if (error) throw new Error(error)

    return NextResponse.json({ user }, { status: 200 })
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const updates = await request.json()
    const { success, error } = await updateUser({
      userId: params.id,
      updates
    })
    if (error) throw new Error(error)

    return NextResponse.json({ success }, { status: 200 })
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { success, error } = await deleteUser(params.id)
    if (error) throw new Error(error)

    return NextResponse.json({ success }, { status: 200 })
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}
