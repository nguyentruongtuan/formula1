import { RaceEvent } from "src/model/race-event"
import { CreateRaceEventRequest } from "src/requests/create-race-event-request"
import { UpdateRaceEventRequest } from "src/requests/update-race-event-request"

export interface RaceEventGateway {
  getRaceEvents(): Promise<RaceEvent[]>
  createRaceEvent(request: CreateRaceEventRequest): Promise<RaceEvent>
  deleteRaceEvent(id: string): Promise<void>
  getRaceEventById(id: string): Promise<RaceEvent>
  updateRaceEvent(request: UpdateRaceEventRequest): Promise<RaceEvent>
}
