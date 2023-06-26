import { inject, injectable } from "inversify";
import TYPES from "src/bootstrap/types";
import { SearchRequest } from "src/requests/search-request";
import { SearchResponse } from "src/responses/search-response";
import { SearchEntitiesUsecase } from "src/usecase/search-entities-usecase";

@injectable()
export class SearchController {

  constructor(
    @inject(TYPES.SearchEntitiesUsecase) private readonly searchEntitiesUsecase: SearchEntitiesUsecase
  ) {}

  public async search(ctx): Promise<SearchResponse> {

    const request: SearchRequest = ctx.request.query

    return this.searchEntitiesUsecase.execute(request)
  }
}