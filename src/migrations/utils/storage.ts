import { Callback, FileStore, FileStoreLoadCallback, Migration, MigrationSet } from "migrate";
import { getDB } from "./db";

export class DBStorage implements FileStore {

  load(cb: FileStoreLoadCallback): void {
    (async () => {
      try {
        const db = await getDB()
        const data = await db.collection('migrations').find().toArray()
        if (!data.length) {
          cb(null, {} as any)
        } else {
          const store: any = data[0]
          cb(null, store)
        }
      } catch (error) {
        console.log(error.message)
        cb(error)
      }

    })()
    
  }

  save(set: MigrationSet, cb: Callback): void {
    (async () => {
      try {

        const db = await getDB()
        const result: any = await db.collection('migrations').updateMany({}, {
          $set: {
            lastRun: set.lastRun,
            migrations: set.migrations
          }
        }, { upsert : true})

        cb(result) 
      } catch (error) {
        console.log(error.message)
        cb(error)
      }
    })()
  }
}

export default DBStorage