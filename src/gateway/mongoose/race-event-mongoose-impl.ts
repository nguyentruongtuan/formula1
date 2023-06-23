import { Types } from "mongoose"
import { RaceEvent, RaceEventModel } from "src/model/race-event"
import { CreateRaceEventRequest } from "src/requests/create-race-event-request"
import { UpdateRaceEventRequest } from "src/requests/update-race-event-request"
import { RaceEventGateway } from "../race-event-gateway"

export class RaceEventMongooseImpl implements RaceEventGateway {


  public async getRaceEvents(): Promise<RaceEvent[]> {
    return RaceEventModel.find()
  }

  public async createRaceEvent(request: CreateRaceEventRequest): Promise<RaceEvent> {
    const race = new RaceEventModel(request)
    return race.save()
  }
  
  public async deleteRaceEvent(id: string): Promise<void> {
    await RaceEventModel.deleteOne({_id: new Types.ObjectId(id)})
  }
  
  public async getRaceEventById(id: string): Promise<RaceEvent> {
    return RaceEventModel.findById(new Types.ObjectId(id))
  }
  
  public async updateRaceEvent(request: UpdateRaceEventRequest): Promise<RaceEvent> {
    await RaceEventModel.updateOne({_id: new Types.ObjectId(request.id)}, request.data)

    return this.getRaceEventById(request.id)
  }
}