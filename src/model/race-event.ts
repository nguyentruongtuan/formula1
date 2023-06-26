import mongoose from "mongoose";

export interface RaceEvent {
  cardTitle: string
  title: string
  place: string
  startDate: Date
  endDate: Date
  status: string
  description: string
}


export const RaceEventModel = mongoose.model<RaceEvent>('RaceEvent', new mongoose.Schema({
  cardTitle: String,
  title: String,
  place: String,
  startDate: Date,
  endDate: Date,
  status: String,
  description: String,
}))