import { injectable } from "inversify";
import { RaceEvent } from "src/model/race-event";

@injectable()
export class GetRaceEventUsecase {

  public async execute(id: string): Promise<RaceEvent> {

    return null
  }
}