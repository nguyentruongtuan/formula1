import { inject, injectable } from "inversify";
import TYPES from "src/bootstrap/types";
import { RaceResult } from "src/model/race-result";
import { RaceResultRepository } from "src/repository/race-result-repository";

@injectable()
export class GetRaceResultUsecase {

  constructor(
    @inject(TYPES.RaceResultRepository) private readonly raceResultRepository: RaceResultRepository
  ) { }

  public async execute(id: string): Promise<RaceResult> {

    return this.raceResultRepository.getRaceResultById(id)
  }
}