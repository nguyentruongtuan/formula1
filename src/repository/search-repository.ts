import { inject, injectable } from "inversify";
import TYPES from "src/bootstrap/types";
import { EntitySeachGateway } from "src/gateway/entity-seach-gateway";
import { Driver } from "src/model/driver";
import { RaceEvent } from "src/model/race-event";
import { RaceResult } from "src/model/race-result";
import { Team } from "src/model/team";
import { SearchRequest } from "src/requests/search-request";
import { SearchResponse } from "src/responses/search-response";

export interface SearchRepository {
  search(request: SearchRequest): Promise<SearchResponse>
}

@injectable()
export class SearchRepositoryImpl implements SearchRepository {

  constructor(
    @inject(TYPES.EntitySeachGateway) private readonly entitySeachGateway: EntitySeachGateway
  ) { }

  public async search(request: SearchRequest): Promise<SearchResponse> {

    return this.entitySeachGateway.searchByKeyword(request.keyword)
  }
}