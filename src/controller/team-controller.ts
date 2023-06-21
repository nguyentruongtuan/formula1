import TYPES from '@bootstrap/types';
import { Team } from "@model/team";
import { TeamRepository } from "@repository/team-repository";
import { inject, injectable } from "inversify";
import { CreateTeamRequest } from "src/requests/create-team-request";


export interface TeamController {
  getTeams(): Promise<Team[]>
  createTeam(request: CreateTeamRequest): Promise<Team>
}

@injectable()
export class TeamControllerImpl implements TeamController {

  constructor(
    @inject(TYPES.TeamRepository) private readonly teamRepository: TeamRepository
  ) {}

  public async getTeams(): Promise<Team[]> {
    return this.teamRepository.getTeams()
  }

  public async createTeam(request: CreateTeamRequest): Promise<Team> {
    return this.teamRepository.createTeam(request)
  }
}