import { Db, MongoClient } from "mongodb"

let db
export async function getDB(): Promise<Db> {
  const mongoURI = `mongodb://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_DATABASE}?authSource=admin`
  console.log(mongoURI)
  const client: MongoClient = await MongoClient.connect(mongoURI)
  db = client.db()
  return db
}