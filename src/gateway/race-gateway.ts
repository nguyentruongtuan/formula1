import { Race } from "@model/race";
import { CreateRaceRequest } from "src/requests/create-race-request";
import { UpdateRaceRequest } from "src/requests/update-race-request";

export interface RaceGateway {
  getRaces(): Promise<Race[]>
  createRace(request: CreateRaceRequest): Promise<Race>
  deleteRace(id: string): Promise<void>
  getRaceById(id: string): Promise<Race>
  updateRace(request: UpdateRaceRequest): Promise<Race>
}
