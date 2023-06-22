import { inject, injectable } from "inversify";
import TYPES from "src/bootstrap/types";
import { Team } from "src/model/team";
import { TeamRepository } from "src/repository/team-repository";

@injectable()
export class GetTeamUsecase {

  constructor(
    @inject(TYPES.TeamRepository) private readonly teamRepository: TeamRepository
  ) { }

  public async execute(): Promise<Team[]> {
    return this.teamRepository.getTeams()
  }

}