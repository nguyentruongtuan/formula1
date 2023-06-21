import { inject, injectable } from "inversify";
import TYPES from "@bootstrap/types";
import { TeamGateway } from "@gateway/team-gateway";
import { Team } from "@model/team";


export interface TeamRepository {
  getTeams(): Promise<Team[]>
}

@injectable()
export class TeamRepositoryImpl implements TeamRepository {

  constructor(
    @inject(TYPES.TeamGateway) private readonly teamGateway: TeamGateway
  ) {}

  public getTeams(): Promise<Team[]> {
    return this.teamGateway.getTeams()
  }
}