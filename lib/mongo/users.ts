import { MongoClient, Db, Collection, ObjectId } from 'mongodb'
import clientPromise from '@/lib/mongo/client'
import { User } from '../types'
import bcrypt from 'bcrypt'

let client: MongoClient
let db: Db
let userList: Collection<User>

async function init() {
  if (db) return
  try {
    client = await clientPromise
    db = client.db()
    userList = db.collection<User>('users')
  } catch (error) {
    throw new Error('Failed to connect to the database.')
  }
}

;(async () => {
  await init()
})()

// USERS

export const getUsers = async (): Promise<{
  users?: User[]
  error?: string
}> => {
  try {
    if (!userList) await init()
    const users = await userList
      .find({})
      .map(user => ({ ...user, id: user.id }))
      .toArray()
    return { users }
  } catch (error) {
    return { error: 'Failed to fetch users' }
  }
}

export const getUser = async (
  userId: string
): Promise<{ user?: any; error?: string }> => {
  try {
    if (!userList) await init()

    const user = await userList.findOne({ id: userId })

    if (!user) {
      return { error: 'User not found' }
    }

    return { user }
  } catch (error) {
    console.error('Failed to get user:', error)
    return { error: 'Failed to get user' }
  }
}

export const createUser = async ({
  id,
  username,
  password
}: {
  id: string
  username: string
  password: string
}): Promise<{ insertedId?: string; error?: string }> => {
  try {
    if (!userList) await init()

    const existingUser = await userList.findOne({ id })
    if (existingUser) {
      return { error: 'A user with this ID already exists' }
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const result = await userList.insertOne({
      id,
      username,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date()
    })

    return { insertedId: result.insertedId.toString() }
  } catch (error) {
    console.error('Failed to create user:', error)
    return { error: 'Failed to create user' }
  }
}

export const updateUser = async ({
  userId,
  updates
}: {
  userId: string
  updates: Partial<{ username: string; password: string }>
}): Promise<{ success: boolean; error?: string }> => {
  try {
    if (!userList) await init()

    const updateData: Partial<{
      username: string
      password: string
      updatedAt: Date
    }> = {
      ...updates,
      updatedAt: new Date()
    }

    if (updates.password) {
      updateData.password = await bcrypt.hash(updates.password, 10)
    }

    const result = await userList.updateOne(
      { id: userId },
      { $set: updateData }
    )

    if (result.matchedCount === 0) {
      return { success: false, error: 'User not found' }
    }

    return { success: true }
  } catch (error) {
    console.error('Failed to update user:', error)
    return { success: false, error: 'Failed to update user' }
  }
}

export const deleteUser = async (
  userId: string
): Promise<{ success: boolean; error?: string }> => {
  try {
    if (!userList) await init()

    const result = await userList.deleteOne({ id: userId })

    if (result.deletedCount === 0) {
      return { success: false, error: 'User not found' }
    }

    return { success: true }
  } catch (error) {
    console.error('Failed to delete user:', error)
    return { success: false, error: 'Failed to delete user' }
  }
}
