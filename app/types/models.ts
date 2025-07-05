// app/types/models.ts
import type { Document } from "mongoose";

export interface AvailabilityDocument extends Document {
  userId: string;
  // Add other availability fields
  [key: string]: any;
}

export interface UserDocument extends Document {
  _id: string;
  name: string;
  bio?: string;
  role: string;
  skills?: string[];
  // Add other user fields
}

export interface MentorWithAvailability extends UserDocument {
  availability: AvailabilityDocument | null;
}