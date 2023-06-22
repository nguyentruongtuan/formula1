import { inject, injectable } from "inversify";
import TYPES from "src/bootstrap/types";
import { Team } from "src/model/team";
import { TeamRepository } from "src/repository/team-repository";
import { UpdateTeamRequest } from "src/requests/update-team-request";

@injectable()
export class UpdateTeamUsecase {

  constructor(
    @inject(TYPES.TeamRepository) private readonly teamRepository: TeamRepository
  ) { }

  public async execute(request: UpdateTeamRequest): Promise<Team> {
    return this.teamRepository.updateTeam(request)
  }

}