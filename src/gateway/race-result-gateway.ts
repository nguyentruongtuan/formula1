import { RaceResult } from "src/model/race-result"
import { CreateRaceResultRequest } from "src/requests/create-race-result-request"
import { UpdateRaceResultRequest } from "src/requests/update-race-result-request"

export interface RaceResultGateway {
  getRaceResults(): Promise<RaceResult[]>
  createRaceResult(request: CreateRaceResultRequest): Promise<RaceResult>
  deleteRaceResult(id: string): Promise<void>
  getRaceResultById(id: string): Promise<RaceResult>
  updateRaceResult(request: UpdateRaceResultRequest): Promise<RaceResult>
}
