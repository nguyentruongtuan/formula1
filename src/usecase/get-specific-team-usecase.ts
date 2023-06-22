import { inject, injectable } from "inversify";
import { Types } from "mongoose";
import TYPES from "src/bootstrap/types";
import { Team } from "src/model/team";
import { TeamRepository } from "src/repository/team-repository";

@injectable()
export class GetSpecificTeamUsecase {

  constructor(
    @inject(TYPES.TeamRepository) private readonly teamRepository: TeamRepository
  ) { }

  public async execute(id: Types.ObjectId): Promise<Team> {
    return this.teamRepository.getTeamById(id)
  }

}