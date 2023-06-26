import { injectable } from "inversify"
import { Team, TeamModel } from "src/model/team"
import { CreateTeamRequest } from "src/requests/create-team-request"
import { UpdateTeamRequest } from "src/requests/update-team-request"
import { TeamGateway } from "../team-gateway"
import { Types } from "mongoose"

@injectable()
export class TeamMongooseImpl implements TeamGateway {

  public async getTeams(): Promise<Team[]> {
    const teams = TeamModel.find().limit(10)
    return teams
  }

  public async createTeam(request: CreateTeamRequest): Promise<Team> {

    const team = new TeamModel(request)
    await team.save()
    return team
  }

  public async deleteTeam(id: string): Promise<void> {
    await TeamModel.deleteOne({ _id: id })
  }

  public async getTeamById(id: string): Promise<Team> {
    return TeamModel.findById(new Types.ObjectId(id))
  }

  public async updateTeam(request: UpdateTeamRequest): Promise<Team> {

    const { id, ...updateData } = request

    await TeamModel.updateOne({ _id: new Types.ObjectId(id) }, {
      ...updateData
    })
    return this.getTeamById(request.id)
  }
}