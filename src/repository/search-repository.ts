import { inject, injectable } from "inversify";
import TYPES from "src/bootstrap/types";
import { EntitySeachGateway } from "src/gateway/entity-seach-gateway";
import { Driver } from "src/model/driver";
import { Race } from "src/model/race";
import { RaceEvent } from "src/model/race-event";
import { RaceResult } from "src/model/race-result";
import { SearchRequest } from "src/requests/search-request";

export interface SearchRepository {
  search(request: SearchRequest): Promise<Array<Race | RaceEvent | RaceResult | Driver>>
}

@injectable()
export class SearchRepositoryImpl implements SearchRepository {

  constructor(
    @inject(TYPES.EntitySeachGateway) private readonly entitySeachGateway: EntitySeachGateway
  ) { }

  public async search(request: SearchRequest): Promise<Array<Race | RaceEvent | RaceResult | Driver>> {

    return this.entitySeachGateway.searchByKeyword(request.keyword)
  }
}