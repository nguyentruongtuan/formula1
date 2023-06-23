import { injectable } from "inversify";
import { RaceEvent } from "src/model/race-event";

@injectable()
export class GetRaceEventsUsecase {

  public async execute(): Promise<RaceEvent[]> {

    return []
  }
}