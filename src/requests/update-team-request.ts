import { Types } from "mongoose"

export class UpdateTeamRequest {
  id: string
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