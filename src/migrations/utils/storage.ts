import { Callback, FileStore, FileStoreLoadCallback, MigrationSet } from "migrate";
import { getDB } from "./db";

export class DBStorage implements FileStore {

  load(cb: FileStoreLoadCallback): void {

    async function loadData() {
      const db = await getDB()
      const data = await db.collection('migrations').find().toArray()
      if (!data.length) {
        return {}
      } else {
        const store: any = data[0]
        return store

      }
    }


    loadData().then((store) => {
      return cb(null, store)
    })  
      .catch(err => cb(err.message))
    
  }

  save(set: MigrationSet, cb: Callback): void {

    async function writeData() {

      const db = await getDB()
      const result: any = await db.collection('migrations').updateMany({}, {
        $set: {
          lastRun: set.lastRun,
          migrations: set.migrations
        }
      }, { upsert: true })

      return result
    }
    
    writeData()
    .then(() => {
      return cb(null)
    })
    .catch(err => cb(err.message))

  }
}

export default DBStorage