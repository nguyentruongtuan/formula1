import { getDB } from '../utils/db'
import fs from 'fs'
import path from 'path'

exports.up = async function (next) {

  const db = await getDB()

  const eventDir = `${__dirname}/../data/events/`

  const eventFiles = fs.readdirSync(eventDir)

  for (const eventFile of eventFiles.filter(f => f.endsWith('.json'))) {

    const events = JSON.parse(fs.readFileSync(path.join(eventDir, eventFile)).toString())

    for (const e of events) {
      if (e.detail && e.detail.races && e.detail.races) {
        const raceEvent = await db.collection('raceevents').findOne({
          title: e.eventTitle,
          cardTitle: e.cardTitle,
          place: e.eventPlace
        })

        for (const race of e.detail.races) {
          if (race.result && race.result.results && race.result.results.length) {

            for (const r of race.result.results) {
              const [n1, n2] = r.Driver.split('\n')
              const driverName = [n1, n2].join(' ')

              const driver = await db.collection('drivers').findOne({
                name: driverName
              })

              if (driver) {
                await db.collection('raceresults').insertOne({
                  event: raceEvent._id,
                  driver: driver._id,
                  pos: r.Pos,
                  no: r.No,
                  pts: r.PTS,
                  car: r.Car,
                  lap: r.Laps,
                  timeRetired: r['Time/Retired'],
                })
              }

            }
          }
        }
      }
    }
  }
}

exports.down = async function (next) {

  next()
}