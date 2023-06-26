import { inject, injectable } from "inversify";
import TYPES from "src/bootstrap/types";
import { RaceResult } from "src/model/race-result";
import { GetRaceResultUsecase } from "src/usecase/get-race-result-usecase";
import { GetRaceResultsUsecase } from "src/usecase/get-race-results-usecase";

@injectable()
export class RaceResultController { 

  constructor(
    @inject(TYPES.GetRaceResultsUsecase) private readonly getRaceResultsUsecase: GetRaceResultsUsecase,
    @inject(TYPES.GetRaceResultUsecase) private readonly getRaceResultUsecase: GetRaceResultUsecase
  ) {

  }

  public async getRaceResults(): Promise<RaceResult[]> {
    return this.getRaceResultsUsecase.execute()
  }

  public async getRaceResult(ctx): Promise<RaceResult> {
    return this.getRaceResultUsecase.execute(ctx.params.id)
  }

  public async createRaceResult(ctx): Promise<RaceResult> {
    return null
  }

  public async deleteRaceResult(ctx): Promise<void> {
    return null
  }

  public async updateRaceResult(ctx): Promise<RaceResult> {
    return null
  }
}