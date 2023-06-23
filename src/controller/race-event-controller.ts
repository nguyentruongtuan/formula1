import { inject, injectable } from "inversify";
import TYPES from "src/bootstrap/types";
import { RaceEvent } from "src/model/race-event";
import { GetRaceEventUsecase } from "src/usecase/get-race-event-usecase";
import { GetRaceEventsUsecase } from "src/usecase/get-race-events-usecase";

@injectable()
export class RaceEventController { 

  constructor (
    @inject(TYPES.GetRaceEventsUsecase) private readonly getRaceEventsUsecase: GetRaceEventsUsecase,
    @inject(TYPES.GetRaceEventUsecase) private readonly getRaceEventUsecase: GetRaceEventUsecase,
  ) {}


  public async getRaceEvents(): Promise<RaceEvent[]> {
    return this.getRaceEventsUsecase.execute()
  }

  public async getRaceEvent(ctx): Promise<RaceEvent> {
    return this.getRaceEventUsecase.execute(ctx.params.id)
  }

  public async createRaceEvent(ctx): Promise<RaceEvent> {
    return null
  }

  public async deleteRaceEvent(ctx): Promise<void> {
    return null
  }

  public async updateRaceEvent(ctx): Promise<RaceEvent> {
    return null
  }
}