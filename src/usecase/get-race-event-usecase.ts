import { inject, injectable } from "inversify";
import TYPES from "src/bootstrap/types";
import { RaceEvent } from "src/model/race-event";
import { RaceEventRepository } from "src/repository/race-event-repository";

@injectable()
export class GetRaceEventUsecase {

  constructor (
    @inject(TYPES.RaceEventRepository) private readonly raceEventRepository: RaceEventRepository
  ) {}

  public async execute(id: string): Promise<RaceEvent> {

    return this.raceEventRepository.getRaceEventById(id)
  }
}