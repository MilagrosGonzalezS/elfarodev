import { MongoClient } from 'mongodb'

const URI = process.env.MONGO_URI
const options = {}

if (!URI) throw new Error('Please add your Mongo URI to .env.local')

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

let client: MongoClient
let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV !== 'production') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(URI, options)
    global._mongoClientPromise = client.connect()
    console.log('conectado a la base')
  }
  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(URI, options)
  clientPromise = client.connect()
  console.log('conectado a la base')
}

export default clientPromise
