import { injectable } from "inversify";
import { RaceResult } from "src/model/race-result";

@injectable()
export class GetRaceResultsUsecase {

  public async execute(): Promise<RaceResult[]> {

    return []
  }
}