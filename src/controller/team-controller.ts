import { inject, injectable } from "inversify";
import TYPES from '@bootstrap/types'
import { TeamRepository } from "@repository/team-repository";
import { Team } from "@model/team";


export interface TeamController {
  getTeams(): Promise<Team[]>
}

@injectable()
export class TeamControllerImpl implements TeamController {

  constructor(
    @inject(TYPES.TeamRepository) private readonly teamRepository: TeamRepository
  ) {}

  public async getTeams(): Promise<Team[]> {
    return this.teamRepository.getTeams()
  }
}