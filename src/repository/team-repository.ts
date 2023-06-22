import TYPES from "@bootstrap/types";
import { TeamGateway } from "@gateway/team-gateway";
import { Team } from "@model/team";
import { inject, injectable } from "inversify";
import { Types } from "mongoose";
import { CreateTeamRequest } from "src/requests/create-team-request";
import { UpdateTeamRequest } from "src/requests/update-team-request";


export interface TeamRepository {
  getTeams(): Promise<Team[]>
  getTeamById(id: string): Promise<Team>
  createTeam(request: CreateTeamRequest): Promise<Team>
  updateTeam(request: UpdateTeamRequest): Promise<Team>
  deleteTeam(id: string): Promise<void>
}

@injectable()
export class TeamRepositoryImpl implements TeamRepository {

  constructor(
    @inject(TYPES.TeamGateway) private readonly teamGateway: TeamGateway
  ) {}

  public getTeams(): Promise<Team[]> {
    return this.teamGateway.getTeams()
  }

  public async getTeamById(id: string): Promise<Team> {
    return this.teamGateway.getTeamById(id)    
  }

  public async createTeam(request: CreateTeamRequest): Promise<Team> {
    return this.teamGateway.createTeam(request)
  }

  public async deleteTeam(id: string): Promise<void> {
    await this.teamGateway.deleteTeam(id)
  }

  public async updateTeam(request: UpdateTeamRequest): Promise<Team> {
    return this.teamGateway.updateTeam(request)
  }
}