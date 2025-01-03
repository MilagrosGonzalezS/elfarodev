import { ObjectId } from 'mongodb'

export interface User {
  id: string
  username: string
  password: string
  createdAt: Date
  updatedAt: Date
}
