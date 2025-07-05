// app/utils/requests.server.ts
import { connectDB } from "./db.server";
import { Request } from "~/models/Request";
import { User } from "~/models/User";

export async function createRequest({ menteeId, mentorId, message }: {
  menteeId: string;
  mentorId: string;
  message: string;
}) {
  await connectDB();
  
  // Check if request already exists
  const existingRequest = await Request.findOne({ menteeId, mentorId, status: 'PENDING' });
  if (existingRequest) {
    throw new Error('You already have a pending request with this mentor');
  }

  return Request.create({
    menteeId,
    mentorId,
    message
  });
}

export async function getSentRequests(menteeId: string) {
  await connectDB();
  const requests = await Request.find({ menteeId })
    .populate('mentorId', 'name email bio skills')
    .sort({ createdAt: -1 })
    .lean();

  return requests.map((req) => ({
    ...req,
    mentor: req.mentorId, // alias it for frontend clarity
  }));
}



// export async function getSentRequests(menteeId: string) {
//   await connectDB();
//   return Request.find({ menteeId })
//     .populate('mentorId', 'name email bio skills')
//     .sort({ createdAt: -1 })
//     .lean();
// }

export async function getReceivedRequests(mentorId: string) {
  await connectDB();
 return (await Request.find({ mentorId, status: 'PENDING' })
  .populate('menteeId', 'name email bio goals')
  .sort({ createdAt: -1 })
  .lean()).map((r) => ({
    ...r,
    mentee: r.menteeId,
  }));

}

export async function updateRequestStatus(
  requestId: string,
  status: 'ACCEPTED' | 'REJECTED',
  mentorId: string
) {
  await connectDB();
  
  const request = await Request.findOneAndUpdate(
    { _id: requestId, mentorId },
    { status },
    { new: true }
  );

  if (!request) {
    throw new Error('Request not found or you are not the mentor');
  }

  return request;
}

export async function getRequestById(requestId: string) {
  await connectDB();
  return Request.findById(requestId)
    .populate('mentor', 'name email')
    .populate('mentee', 'name email')
    .lean();
}