import mongoose, { Types } from "mongoose";

export interface Race {
  startDate: Date
  endDate: Date
  status: string
  raceEvent: string
}

export const RaceModel = mongoose.model<Race>('Race', new mongoose.Schema({
  startDate: Date,
  endDate: Date,
  status: String,
  raceEvent: Types.ObjectId,
}))