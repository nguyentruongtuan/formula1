import { inject, injectable } from "inversify";
import TYPES from "src/bootstrap/types";
import { SearchRepository } from "src/repository/search-repository";
import { SearchRequest } from "src/requests/search-request";
import { SearchResponse } from "src/responses/search-response";

@injectable()
export class SearchEntitiesUsecase {

  constructor(
    @inject(TYPES.SearchRepository) private readonly searchRepository: SearchRepository
  ) {}

  public async execute(request: SearchRequest): Promise<SearchResponse> {

    return this.searchRepository.search(request)
  }
}