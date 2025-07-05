// models/session.tsx

import mongoose, { Schema } from "mongoose";

const sessionSchema = new Schema({
  mentor: { type: Schema.Types.ObjectId, ref: "User", required: true },
  mentee: { type: Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  status: {
    type: String,
    enum: ["upcoming", "completed", "cancelled"],
    default: "upcoming",
  },
  feedback: {
    rating: { type: Number, min: 1, max: 5 },
    comment: { type: String },
  },
}, { timestamps: true });

export const Session = mongoose.models.Session || mongoose.model("Session", sessionSchema);