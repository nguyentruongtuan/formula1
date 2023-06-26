import { injectable } from "inversify";
import { Driver, DriverModel } from "src/model/driver";
import { Race, RaceModel } from "src/model/race";
import { RaceEvent } from "src/model/race-event";
import { RaceResult } from "src/model/race-result";

@injectable()
export class SearchController {

  public async search(ctx): Promise<Array<Race | Driver | RaceEvent | RaceResult>> {

    return [
      new DriverModel(),
      new RaceModel()
    ]
  }
}