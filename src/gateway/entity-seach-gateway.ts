import { SearchResponse } from "src/responses/search-response";

export interface EntitySeachGateway {
  searchByKeyword(keyword: string): Promise<SearchResponse>
}