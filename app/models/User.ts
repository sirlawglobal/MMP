// // app/models/User.ts
// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//   email: { type: String, unique: true, required: true },
//   password: { type: String }, // You can add bcrypt hashing later
//   role: { type: String, enum: ["admin", "mentor", "mentee"], required: true },
//   name: String,
//   bio: String,
//   skills: [String],
//   goals: [String],
// }, { timestamps: true });

// export const User = mongoose.models.User || mongoose.model("User", userSchema);



// app/models/User.ts
import mongoose, { Document } from "mongoose";

interface IUser extends Document {
  email: string;
  password?: string;
  role: "admin" | "mentor" | "mentee";
  name?: string;
  bio?: string;
  skills?: string[];
  goals?: string[];
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema<IUser>({
  email: { type: String, unique: true, required: true },
  password: { type: String },
  role: { type: String, enum: ["admin", "mentor", "mentee"], required: true },
  name: String,
  bio: String,
  skills: [String],
  goals: [String],
}, { timestamps: true });

export const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);
export type UserDocument = mongoose.FlattenMaps<IUser> & { _id: string };