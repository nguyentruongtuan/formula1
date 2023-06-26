import { getDB } from '../utils/db'

exports.up = async function (next) {

  const db = await getDB()
  await db.collection('drivers').createIndex({ 
    name: 'text', 
    country: 'text', 
    worldChampionships: 'text', 
    placeOfBirth : 'text'
  })
  await db.collection('teams').createIndex({ 
    fullTeamName: 'text',
    base: 'text',
    teamChief: 'text',
    technicalChief: 'text',
    chassis: 'text',
    powerUnit: 'text',
  })
  await db.collection('raceevents').createIndex({ 
    cardTitle: 'text',
    title: 'text',
    place: 'text',
    status: 'text'
  })
  await db.collection('raceresults').createIndex({ 
    car: 'text'
  })
  
}

exports.down = async function (next) {

  next()
}