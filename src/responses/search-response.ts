import { Driver } from "src/model/driver";
import { RaceEvent } from "src/model/race-event";
import { RaceResult } from "src/model/race-result";
import { Team } from "src/model/team";

export class SearchResponse {
  teams: Team[]
  drivers: Driver[]
  events: RaceEvent[]
  results: RaceResult[]
}