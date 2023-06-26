import { Driver } from "src/model/driver";
import { Race } from "src/model/race";
import { RaceEvent } from "src/model/race-event";
import { RaceResult } from "src/model/race-result";

export interface EntitySeachGateway {
  searchByKeyword(keyword: string) : Promise<Array<Race | RaceEvent | RaceResult | Driver >>
}