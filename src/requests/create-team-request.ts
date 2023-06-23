import { IsNotEmpty, IsString, Length } from "class-validator"

export class CreateTeamRequest {
  @IsNotEmpty()
  @IsString()
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

  @IsNotEmpty()
  @IsString()
  @Length(3,100)
  shortName: string
}