import mongoose from "mongoose";

export interface Team {
  fullTeamName: string
  base: string
  teamChief: string
  technicalChief: string
  chassis: string
  powerUnit: string
  firstTeamEntry: string
  worldChampionships: number
  highestRaceFinish: string
  polePositions: number
  fastestLaps: number
  shortName: string
}

export const TeamModel = mongoose.model('Team', new mongoose.Schema<Team>({
  fullTeamName: String,
  base: String,
  teamChief: String,
  technicalChief: String,
  chassis: String,
  powerUnit: String,
  firstTeamEntry: String,
  worldChampionships: Number,
  highestRaceFinish: String,
  polePositions: Number,
  fastestLaps: Number,
  shortName: String
}))