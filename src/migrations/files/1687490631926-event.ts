import { getDB } from '../utils/db'
import fs from 'fs'
import path from 'path'

exports.up = async function () {
  
  const db = await getDB()

  const eventDir = `${__dirname}/../data/events/`

  const eventFiles = fs.readdirSync(eventDir)

  for (const eventFile of eventFiles.filter(f => f.endsWith('.json'))) {

    const events = JSON.parse(fs.readFileSync(path.join(eventDir, eventFile)).toString())

    for (const e of events) {
      const raceEvent = await db.collection('raceevents').insertOne({
        cardTitle: e.cardTitle,
        title: e.eventTitle,
        place: e.eventPlace,
        startDate: new Date(e.startDate),
        endDate: new Date(e.endDate),
        status: e.eventType,
        description: e.detail?.description,
      })

      if (e.detail) {
        const races = e.detail.races.map(item => ({
          startDate: new Date(item.starTime),
          endDate: new Date(item.endTime),
          status: item.status,
          raceEvent: raceEvent.insertedId.toHexString(),
        }))

        await db.collection('races').insertMany(races)
      }
    }
  }

}

exports.down = function () {

}