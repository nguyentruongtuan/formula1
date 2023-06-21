import { DB } from "@bootstrap/db";
import { DB_CONFIG } from '@config/mongodb'
import mongoose from "mongoose";

export class MongoDB implements DB {

  async connect(): Promise<void> {
    const uri = `mongodb://${DB_CONFIG.DATABASE_USERNAME}:${DB_CONFIG.DATABASE_PASSWORD}@${DB_CONFIG.DATABASE_HOST}:${DB_CONFIG.DATABASE_PORT}/${DB_CONFIG.DATABASE_DATABASE}?authSource=admin`

    console.log(uri)
    await mongoose.connect(uri)
  }
}