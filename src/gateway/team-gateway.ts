import { Team, TeamModel } from "@model/team";
import { injectable } from "inversify";
import { CreateTeamRequest } from "src/requests/create-team-request";

export interface TeamGateway {
  getTeams(): Promise<Team[]>
  createTeam(request: CreateTeamRequest): Promise<Team>
}

@injectable()
export class TeamGatewayImpl implements TeamGateway {

  public async getTeams(): Promise<Team[]> {
    const teams = TeamModel.find()
    return teams
  }

  public async createTeam(request: CreateTeamRequest): Promise<Team> {

    const team = new TeamModel(request)
    await team.save()
    return team
  }
}