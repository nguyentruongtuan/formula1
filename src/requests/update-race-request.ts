import { Race } from "src/model/race"

export class UpdateRaceRequest {
  id: string
  data: Partial<Race>
}