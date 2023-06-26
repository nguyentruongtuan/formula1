import { injectable } from "inversify";
import { Driver, DriverModel } from "src/model/driver";
import { RaceEvent, RaceEventModel } from "src/model/race-event";
import { RaceResult, RaceResultModel } from "src/model/race-result";
import { Team, TeamModel } from "src/model/team";
import { EntitySeachGateway } from "../entity-seach-gateway";
import { SearchResponse } from "src/responses/search-response";

@injectable()
export class EntitySearchMongooseImpl implements EntitySeachGateway {
  public async searchByKeyword(keyword: string): Promise<SearchResponse> {

    const drivers = await DriverModel.find({ $text: {$search: keyword}}).limit(10)
    const teams = await TeamModel.find({ $text: { $search: keyword } }).limit(10)
    const results = await RaceResultModel.find({ $text: { $search: keyword } }).limit(10)
    const events = await RaceEventModel.find({ $text: { $search: keyword } }).limit(10)

    return { drivers, teams, results, events}
  }
}