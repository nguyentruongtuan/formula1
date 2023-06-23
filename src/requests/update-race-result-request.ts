import { RaceResult } from "src/model/race-result"

export class UpdateRaceResultRequest {
  id: string
  data: Partial<RaceResult>
}