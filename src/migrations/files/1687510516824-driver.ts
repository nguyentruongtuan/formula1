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
        podiums: '',
        points: '',
        grandsPrixEntered: '',
        worldChampionships: '',
        highestRaceFinish: '',
        highestGridPosition: '',
        dateOfBirth: '',
        placeOfBirth: '',
      }

      // const statTeam = data.stat.find(stat => stat.statKey === 'Team')

      data.stat?.forEach(stat => {
        driver[_.camelCase(stat.statKey)] = stat.statValue
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