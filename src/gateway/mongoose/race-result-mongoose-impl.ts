import { Types } from "mongoose"
import { RaceResult, RaceResultModel } from "src/model/race-result"
import { CreateRaceResultRequest } from "src/requests/create-race-result-request"
import { UpdateRaceResultRequest } from "src/requests/update-race-result-request"
import { RaceResultGateway } from "../race-result-gateway"

export class RaceResultMongooseImpl implements RaceResultGateway {


  public async getRaceResults(): Promise<RaceResult[]> {
    return RaceResultModel.find()
  }

  public async createRaceResult(request: CreateRaceResultRequest): Promise<RaceResult> {
    const race = new RaceResultModel(request)
    return race.save()
  }
  
  public async deleteRaceResult(id: string): Promise<void> {
    await RaceResultModel.deleteOne({_id: new Types.ObjectId(id)})
  }
  
  public async getRaceResultById(id: string): Promise<RaceResult> {
    return RaceResultModel.findById(new Types.ObjectId(id))
  }
  
  public async updateRaceResult(request: UpdateRaceResultRequest): Promise<RaceResult> {
    await RaceResultModel.updateOne({_id: new Types.ObjectId(request.id)}, request.data)

    return this.getRaceResultById(request.id)
  }
}