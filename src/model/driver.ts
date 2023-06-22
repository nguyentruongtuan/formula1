import mongoose, { Types } from "mongoose"

export interface Driver {
  name: string
  biography: string
  team: Types.ObjectId
  country: string
  podiums: number
  points: number
  grandsPrixEntered: number
  worldChampionships: string
  highestRaceFinish: string
  highestGridPosition: string
  dateOfBirth: string
  placeOfBirth: string
}

export const DriverModel = mongoose.model<Driver>('Driver', new mongoose.Schema({
  name: String,
  biography: String,
  team: Types.ObjectId,
  country: String,
  podiums: Number,
  points: Number,
  grandsPrixEntered: Number,
  worldChampionships: String,
  highestRaceFinish: String,
  highestGridPosition: String,
  dateOfBirth: String,
  placeOfBirth: String,
}))