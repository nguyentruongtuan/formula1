import { inject, injectable } from "inversify";
import { Types } from "mongoose";
import TYPES from "src/bootstrap/types";
import { ValidationError } from "src/errors/validation-error";
import { TeamRepository } from "src/repository/team-repository";

@injectable()
export class DeleteTeamUseCase {

  constructor(
    @inject(TYPES.TeamRepository) private readonly teamRepository: TeamRepository
  ) {}

  public async execute(id: Types.ObjectId) : Promise<void> {
    const team = await this.teamRepository.getTeamById(id)
    if (!team) {
      throw new ValidationError('Invalid team id')
    }
    await this.teamRepository.deleteTeam(id)
  }

}