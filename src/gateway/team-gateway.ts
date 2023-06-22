import { Team, TeamModel } from "@model/team";
import { injectable } from "inversify";
import { Types } from "mongoose";
import { CreateTeamRequest } from "src/requests/create-team-request";
import { UpdateTeamRequest } from "src/requests/update-team-request";

export interface TeamGateway {
  getTeams(): Promise<Team[]>
  createTeam(request: CreateTeamRequest): Promise<Team>
  deleteTeam(id: Types.ObjectId): Promise<void>
  getTeamById(id: Types.ObjectId): Promise<Team>
  updateTeam(request: UpdateTeamRequest): Promise<Team>
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

  public async deleteTeam(id: Types.ObjectId): Promise<void> {
    await TeamModel.deleteOne({ _id: id })
  }

  public async getTeamById(id: Types.ObjectId): Promise<Team> {
    return TeamModel.findById(id)
  }

  public async updateTeam(request: UpdateTeamRequest): Promise<Team> {

    const { id, ...updateData } = request

    await TeamModel.updateOne({ _id: id }, {
      ...updateData
    })
    return this.getTeamById(request.id)
  }
}