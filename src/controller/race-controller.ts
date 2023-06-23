import { inject, injectable } from "inversify";
import TYPES from "src/bootstrap/types";
import { Race } from "src/model/race";
import { GetRaceUsecase } from "src/usecase/get-race-usecase";
import { GetRacesUsecase } from "src/usecase/get-races-usecase";

@injectable()
export class RaceController {

  constructor(
    @inject(TYPES.GetRacesUsecase) private readonly getRacesUsecase: GetRacesUsecase,
    @inject(TYPES.GetRaceUsecase) private readonly getRaceUsecase: GetRaceUsecase,
  ) {}

  public async getRaces(): Promise<Race[]> {
    return this.getRacesUsecase.execute()
  }

  public async getRace(ctx): Promise<Race> {
    return this.getRaceUsecase.execute(ctx.params.id)
  }

  public async createRace(ctx): Promise<Race> {
    return null
  }

  public async deleteRace(ctx): Promise<void> {
  }

  public async updateRace(ctx): Promise<Race> {
    return null
  }
}