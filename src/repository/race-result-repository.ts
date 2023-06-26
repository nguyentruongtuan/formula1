import TYPES from "@bootstrap/types";
import { inject, injectable } from "inversify";
import { RaceResultGateway } from "src/gateway/race-result-gateway";
import { RaceResult } from "src/model/race-result";
import { CreateRaceResultRequest } from "src/requests/create-race-result-request";
import { UpdateRaceResultRequest } from "src/requests/update-race-result-request";


export interface RaceResultRepository {
  getRaceResults(): Promise<RaceResult[]>
  getRaceResultById(id: string): Promise<RaceResult>
  createRaceResult(request: CreateRaceResultRequest): Promise<RaceResult>
  updateRaceResult(request: UpdateRaceResultRequest): Promise<RaceResult>
  deleteRaceResult(id: string): Promise<void>
}

@injectable()
export class RaceResultRepositoryImpl implements RaceResultRepository {

  constructor(
    @inject(TYPES.RaceResultGateway) private readonly raceResultGateway: RaceResultGateway
  ) {}

  public getRaceResults(): Promise<RaceResult[]> {
    return this.raceResultGateway.getRaceResults()
  }

  public async getRaceResultById(id: string): Promise<RaceResult> {
    return this.raceResultGateway.getRaceResultById(id)    
  }

  public async createRaceResult(request: CreateRaceResultRequest): Promise<RaceResult> {
    return this.raceResultGateway.createRaceResult(request)
  }

  public async deleteRaceResult(id: string): Promise<void> {
    await this.raceResultGateway.deleteRaceResult(id)
  }

  public async updateRaceResult(request: UpdateRaceResultRequest): Promise<RaceResult> {
    return this.raceResultGateway.updateRaceResult(request)
  }
}