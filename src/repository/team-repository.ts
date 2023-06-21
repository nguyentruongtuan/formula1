import TYPES from "@bootstrap/types";
import { TeamGateway } from "@gateway/team-gateway";
import { Team } from "@model/team";
import { inject, injectable } from "inversify";
import { CreateTeamRequest } from "src/requests/create-team-request";


export interface TeamRepository {
  getTeams(): Promise<Team[]>
  createTeam(request: CreateTeamRequest): Promise<Team>
}

@injectable()
export class TeamRepositoryImpl implements TeamRepository {

  constructor(
    @inject(TYPES.TeamGateway) private readonly teamGateway: TeamGateway
  ) {}

  public getTeams(): Promise<Team[]> {
    return this.teamGateway.getTeams()
  }

  public async createTeam(request: CreateTeamRequest): Promise<Team> {
    return this.teamGateway.createTeam(request)
  }
}