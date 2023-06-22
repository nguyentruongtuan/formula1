import { Team } from "@model/team";
import { CreateTeamRequest } from "src/requests/create-team-request";
import { UpdateTeamRequest } from "src/requests/update-team-request";

export interface TeamGateway {
  getTeams(): Promise<Team[]>
  createTeam(request: CreateTeamRequest): Promise<Team>
  deleteTeam(id: string): Promise<void>
  getTeamById(id: string): Promise<Team>
  updateTeam(request: UpdateTeamRequest): Promise<Team>
}
