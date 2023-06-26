import { Driver, DriverModel } from "src/model/driver";
import { Race, RaceModel } from "src/model/race";
import { RaceEvent, RaceEventModel } from "src/model/race-event";
import { RaceResult, RaceResultModel } from "src/model/race-result";
import { EntitySeachGateway } from "../entity-seach-gateway";
import { injectable } from "inversify";

@injectable()
export class EntitySearchMongooseImpl implements EntitySeachGateway {
  public async searchByKeyword(keyword: string): Promise<Array<Race | RaceEvent | RaceResult | Driver>> {

    const drivers = await DriverModel.find({ $text: {$search: keyword}}).limit(10)
    const races = await RaceModel.find({ $text: { $search: keyword } }).limit(10)
    const results = await RaceResultModel.find({ $text: { $search: keyword } }).limit(10)
    const events = await RaceEventModel.find({ $text: { $search: keyword } }).limit(10)

    return [...drivers, ...races, ...results, ...events]
  }
}