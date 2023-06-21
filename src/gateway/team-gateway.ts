import { Team } from "@model/team";
import { injectable } from "inversify";

export interface TeamGateway {
  getTeams(): Promise<Team[]>
}

@injectable()
export class TeamGatewayImpl implements TeamGateway {

  public async getTeams(): Promise<Team[]> {

    return [{test: 1111}]
  }
}