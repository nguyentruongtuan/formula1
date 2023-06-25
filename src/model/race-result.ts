import mongoose, { Types } from "mongoose";

export interface RaceResult {
  title: string
  pos: number
  no: string
  driver: string
  event: string
  car: string
  lap: number
  timeRetired: number
  pts: number
}

export const RaceResultModel = mongoose.model<RaceResult>('RaceResult', new mongoose.Schema({
  title: String,
  pos: Number,
  no: String,
  driver: Types.ObjectId,
  event: Types.ObjectId,
  car: String,
  lap: Number,
  timeRetired: Number,
  pts: Number
}))