import fs from 'fs'
import { getDB } from '../utils/db'

exports.up = async function () {

  const db = await getDB()

  const teams = JSON.parse(fs.readFileSync(`${__dirname}/../data/teams/teams.json`).toString())

  const teamData = teams.map(item => ({
    fullTeamName: item['Full Team Name'],
    base: item['Base'],
    teamChief: item['Team Chief'],
    technicalChief: item['Technical Chief'],
    chassis: item['Chassis'],
    powerUnit: item['Power Unit'],
    firstTeamEntry: item['First Team Entry'],
    worldChampionships: item['World Championships'],
    highestRaceFinish: item['Highest Race Finish'],
    polePositions: item['Pole Positions'],
    fastestLaps: item['Fastest Laps'],
    shortName: item['shortName'],
  }))

  await db.collection('teams').insertMany(teamData)

}

exports.down = async function (next) {
}