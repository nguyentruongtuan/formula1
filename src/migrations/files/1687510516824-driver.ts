import { getDB } from '../utils/db'
import fs from 'fs'
import path from 'path'
import _ from 'lodash'

exports.up = function (next) {


  (async () => {

    const db = await getDB()

    const driverDir = `${__dirname}/../data/drivers/`

    const driverFiles = fs.readdirSync(driverDir)
    
    const allTeams = await db.collection('teams').find().toArray()
    for (const __file of driverFiles.filter(f => f.endsWith('.json'))) {

      const data = JSON.parse(fs.readFileSync(path.join(driverDir, __file)).toString())
      const driver = {
        name: data.name,
        biography: data.biography,
        country: '',
        podiums: undefined,
        points: undefined,
        grandsPrixEntered: undefined,
        worldChampionships: '',
        highestRaceFinish: '',
        highestGridPosition: undefined,
        dateOfBirth: '',
        placeOfBirth: '',
      }

      // const statTeam = data.stat.find(stat => stat.statKey === 'Team')

      data.stat?.forEach(stat => {
        if (_.camelCase(stat.statKey) === 'dateOfBirth') {
          const dString = stat.statValue.split('/')
          driver[_.camelCase(stat.statKey)] = new Date(dString[2], dString[1], dString[0])
        } else if (['podiums', 'points', 'grandsPrixEntered', 'highestGridPosition'].indexOf(_.camelCase(stat.statKey)) !== -1) {
          driver[_.camelCase(stat.statKey)] = Number(stat.statValue)
        } else {
          driver[_.camelCase(stat.statKey)] = String(stat.statValue)
        }
      });

      const team = allTeams.find(__team => {
        return __team.shortName === driver['team'] || __team.fullTeamName.indexOf(driver['team']) !== -1
      })

      if (team) {
        driver['team'] = team._id
      }


      await db.collection('drivers').insertOne(driver)
    }

    next()
  })()

}

exports.down = async function (next) {

  next()
}