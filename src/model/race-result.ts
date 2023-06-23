import mongoose from "mongoose";

export interface RaceResult {
  title: string
  pos: number
  no: string
  driver: string
  car: string
  lap: number
  timeRetired: number
}

export const RaceResultModel = mongoose.model<RaceResult>('RaceResult', new mongoose.Schema({
  title: String,
  pos: Number,
  no: String,
  driver: String,
  car: String,
  lap: Number,
  timeRetired: Number
}))