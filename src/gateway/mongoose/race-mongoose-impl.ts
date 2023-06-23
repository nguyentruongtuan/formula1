import { Race, RaceModel } from "src/model/race";
import { CreateRaceRequest } from "src/requests/create-race-request";
import { UpdateRaceRequest } from "src/requests/update-race-request";
import { RaceGateway } from "../race-gateway";
import { Types } from "mongoose";

export class RaceMongooseImpl implements RaceGateway {


  public async getRaces(): Promise<Race[]> {
    return RaceModel.find()
  }

  public async createRace(request: CreateRaceRequest): Promise<Race> {
    const race = new RaceModel(request)
    return race.save()
  }
  
  public async deleteRace(id: string): Promise<void> {
    await RaceModel.deleteOne({_id: new Types.ObjectId(id)})
  }
  
  public async getRaceById(id: string): Promise<Race> {
    return RaceModel.findById(new Types.ObjectId(id))
  }
  
  public async updateRace(request: UpdateRaceRequest): Promise<Race> {
    await RaceModel.updateOne({_id: new Types.ObjectId(request.id)}, request.data)

    return this.getRaceById(request.id)
  }
}