import TYPES from '@bootstrap/types';
import { Team } from "@model/team";
import { inject, injectable } from "inversify";
import { Types } from 'mongoose';
import { CreateTeamRequest } from "src/requests/create-team-request";
import { CreateTeamUsecase } from '@usecase/create-team-usecase';
import { DeleteTeamUseCase } from '@usecase/delete-team-usecase';
import { GetTeamUsecase } from '@usecase/get-team-usecase';
import { UpdateTeamRequest } from 'src/requests/update-team-request';
import { UpdateTeamUsecase } from 'src/usecase/update-team-usecase';
import { GetSpecificTeamUsecase } from 'src/usecase/get-specific-team-usecase';

@injectable()
export class TeamController {

  constructor(
    @inject(TYPES.GetTeamUsecase) private readonly getTeamUsecase: GetTeamUsecase,
    @inject(TYPES.DeleteTeamUseCase) private readonly deleteTeamUseCase: DeleteTeamUseCase,
    @inject(TYPES.CreateTeamUsecase) private readonly createTeamUsecase: CreateTeamUsecase,
    @inject(TYPES.UpdateTeamUsecase) private readonly updateTeamUsecase: UpdateTeamUsecase,
    @inject(TYPES.GetSpecificTeamUsecase) private readonly getSpecificTeamUsecase: GetSpecificTeamUsecase,
  ) {}

  public async getTeams(): Promise<Team[]> {
    return this.getTeamUsecase.execute()
  }

  public async getTeam(ctx): Promise<Team> {
    return this.getSpecificTeamUsecase.execute(new Types.ObjectId(ctx.params.id))
  }

  public async createTeam(ctx): Promise<Team> {
    const request: CreateTeamRequest = ctx.request.body
    return this.createTeamUsecase.execute(request)
  }

  public async deleteTeam(ctx): Promise<void> {
    await this.deleteTeamUseCase.execute( new Types.ObjectId(ctx.params.id) )
  }

  public async updateTeam(ctx): Promise<void> {
    const request: UpdateTeamRequest = {id: ctx.params.id, ...ctx.request.body}
    await this.updateTeamUsecase.execute( request)
  }
}