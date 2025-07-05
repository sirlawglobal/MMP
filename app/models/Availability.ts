// app/models/Availability.ts
import mongoose, { Schema } from "mongoose";

const availabilitySchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true, unique: true },
  monday: { enabled: Boolean, startTime: String, endTime: String },
  tuesday: { enabled: Boolean, startTime: String, endTime: String },
  wednesday: { enabled: Boolean, startTime: String, endTime: String },
  thursday: { enabled: Boolean, startTime: String, endTime: String },
  friday: { enabled: Boolean, startTime: String, endTime: String },
  saturday: { enabled: Boolean, startTime: String, endTime: String },
  sunday: { enabled: Boolean, startTime: String, endTime: String },
  bufferBefore: { type: Number, default: 15 }, // minutes
  bufferAfter: { type: Number, default: 15 }, // minutes
});

export const Availability = mongoose.models.Availability || mongoose.model("Availability", availabilitySchema);