import { RaceEvent } from "src/model/race-event"

export class UpdateRaceEventRequest {
  id: string 
  data: Partial<RaceEvent>
}