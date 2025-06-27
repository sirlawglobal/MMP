// app/models/User.ts
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String }, // You can add bcrypt hashing later
  role: { type: String, enum: ["admin", "mentor", "mentee"], required: true },
  name: String,
  bio: String,
  skills: [String],
  goals: [String],
}, { timestamps: true });

export const User = mongoose.models.User || mongoose.model("User", userSchema);
