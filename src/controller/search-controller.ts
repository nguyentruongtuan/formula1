import { inject, injectable } from "inversify";
import TYPES from "src/bootstrap/types";
import { Driver, DriverModel } from "src/model/driver";
import { Race, RaceModel } from "src/model/race";
import { RaceEvent } from "src/model/race-event";
import { RaceResult } from "src/model/race-result";
import { SearchRequest } from "src/requests/search-request";
import { SearchEntitiesUsecase } from "src/usecase/search-entities-usecase";

@injectable()
export class SearchController {

  constructor(
    @inject(TYPES.SearchEntitiesUsecase) private readonly searchEntitiesUsecase: SearchEntitiesUsecase
  ) {}

  public async search(ctx): Promise<Array<Race | Driver | RaceEvent | RaceResult>> {

    const request: SearchRequest = ctx.request.query

    return this.searchEntitiesUsecase.execute(request)
  }
}