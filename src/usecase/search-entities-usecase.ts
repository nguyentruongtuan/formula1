import { inject, injectable } from "inversify";
import TYPES from "src/bootstrap/types";
import { Driver } from "src/model/driver";
import { Race } from "src/model/race";
import { RaceEvent } from "src/model/race-event";
import { RaceResult } from "src/model/race-result";
import { SearchRepository } from "src/repository/search-repository";
import { SearchRequest } from "src/requests/search-request";

@injectable()
export class SearchEntitiesUsecase {

  constructor(
    @inject(TYPES.SearchRepository) private readonly searchRepository: SearchRepository
  ) {}
  public async execute(request: SearchRequest): Promise<Array<Race | RaceEvent | RaceResult | Driver>> {

    return this.searchRepository.search(request)
  }
}