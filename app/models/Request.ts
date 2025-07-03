// app/models/Request.ts
import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
  menteeId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  mentorId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  status: { 
    type: String, 
    enum: ['PENDING', 'ACCEPTED', 'REJECTED'], 
    default: 'PENDING' 
  },
  message: String,
}, { timestamps: true });

export const Request = mongoose.models.Request || mongoose.model("Request", requestSchema);