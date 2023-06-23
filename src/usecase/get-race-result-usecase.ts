import { injectable } from "inversify";
import { RaceResult } from "src/model/race-result";

@injectable()
export class GetRaceResultUsecase {

  public async execute(id: string): Promise<RaceResult> {

    return null
  }
}