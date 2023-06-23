import { injectable } from "inversify";
import { Race } from "src/model/race";

@injectable()
export class GetRacesUsecase {

  public async execute(): Promise<Race[]> {

    return []
  }
}