import { inject, injectable } from "inversify"
import TYPES from "src/bootstrap/types"
import { RaceEventGateway } from "src/gateway/race-event-gateway"
import { RaceEvent } from "src/model/race-event"
import { CreateRaceEventRequest } from "src/requests/create-race-event-request"
import { UpdateRaceEventRequest } from "src/requests/update-race-event-request"

export interface RaceEventRepository {
  getRaceEvents(): Promise<RaceEvent[]>
  getRaceEventById(id: string): Promise<RaceEvent>
  createRaceEvent(request: CreateRaceEventRequest): Promise<RaceEvent>
  updateRaceEvent(request: UpdateRaceEventRequest): Promise<RaceEvent>
  deleteRaceEvent(id: string): Promise<void>
}

@injectable()
export class RaceEventRepositoryImpl implements RaceEventRepository {

  constructor(
    @inject(TYPES.RaceEventGateway) private readonly raceEventGateway: RaceEventGateway
  ) {}

  public async getRaceEvents(): Promise<RaceEvent[]> {
    return this.raceEventGateway.getRaceEvents()
  }

  public async getRaceEventById(id: string): Promise<RaceEvent> {
    return this.raceEventGateway.getRaceEventById(id)
  }

  public async createRaceEvent(request: CreateRaceEventRequest): Promise<RaceEvent> {
    return this.raceEventGateway.createRaceEvent(request)
  }

  public async updateRaceEvent(request: UpdateRaceEventRequest): Promise<RaceEvent> {
    return this.raceEventGateway.updateRaceEvent(request)
  }

  public async deleteRaceEvent(id: string): Promise<void> {
    return this.raceEventGateway.deleteRaceEvent(id)
  }
}