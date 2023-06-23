import { injectable } from "inversify";
import { Race } from "src/model/race";

@injectable()
export class GetRaceUsecase {

  public async execute(id: string): Promise<Race> {

    return null
  }
}