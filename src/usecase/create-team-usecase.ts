import { inject, injectable } from "inversify";
import TYPES from "src/bootstrap/types";
import { Team } from "src/model/team";
import { TeamRepository } from "src/repository/team-repository";
import { CreateTeamRequest } from "src/requests/create-team-request";

@injectable()
export class CreateTeamUsecase {

  constructor(
    @inject(TYPES.TeamRepository) private readonly teamRepository: TeamRepository
  ) { }

  public async execute(request: CreateTeamRequest): Promise<Team> {
    return this.teamRepository.createTeam(request)
  }

}