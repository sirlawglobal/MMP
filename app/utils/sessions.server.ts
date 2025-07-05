// app/utils/sessions.server.ts
import { connectDB } from "./db.server";
import { Session } from "~/models/Session";
import {  Availability } from "~/models/Availability";
import { User } from "~/models/User";

// import { connectDB } from "./db.server";
// import { Session } from "~/models/Session";
// import { User } from "~/models/User";


// Define the SessionData type
// export type SessionData = {
//   id: string;
//   mentor: { id: string; name: string };
//   mentee: { id: string; name: string };
//   date: Date;
//   startTime: string;
//   endTime: string;
//   status: "upcoming" | "completed" | "cancelled";
//   feedback?: {
//     rating?: number;
//     comment?: string;
//   };
// };

export type SessionData = {
  id: string;
  mentor: {
    id: string;
    name: string;
    email: string;
  };
  mentee: {
    id: string;
    name: string;
    email: string;
  };
  date: Date;
  startTime: string;
  endTime: string;
  status: "upcoming" | "completed" | "cancelled";
  feedback?: {
    rating?: number;
    comment?: string;
  };
  agenda?: string;
};



export async function getAllSessions(
  status?: "upcoming" | "completed" | "cancelled"
): Promise<SessionData[]> {
  await connectDB();
  
  const query: any = {};
  if (status) {
    query.status = status;
  }

  const sessions = await Session.find(query)
    .populate("mentor", "name email")
    .populate("mentee", "name email")
    .sort({ date: 1, startTime: 1 });

  return sessions.map(formatSessionData);
}


function formatSessionData(session: any): SessionData {
  return {
    id: session._id.toString(),
    mentor: {
      id: session.mentor._id.toString(),
      name: session.mentor.name,
      email: session.mentor.email
    },
    mentee: {
      id: session.mentee._id.toString(),
      name: session.mentee.name,
      email: session.mentee.email
    },
    date: session.date,
    startTime: session.startTime,
    endTime: session.endTime,
    status: session.status,
    feedback: session.feedback,
    agenda: session.agenda
  };
}


// Get sessions for a specific user (mentor or mentee)
// export async function getSessionsForUser(
//   userId: string,
//   role: string,
//   status?: "upcoming" | "completed" | "cancelled"
// ): Promise<SessionData[]> {
//   await connectDB();
  
//   const query: any = {};
  
//   // Set query based on user role
//   if (role === "mentor") {
//     query.mentor = userId;
//   } else if (role === "mentee") {
//     query.mentee = userId;
//   } else {
//     throw new Error("Invalid user role");
//   }

//   // Add status filter if provided
//   if (status) {
//     query.status = status;
//   }

//   // Fetch sessions from database
//   const sessions = await Session.find(query)
//     .populate("mentor", "name")
//     .populate("mentee", "name")
//     .sort({ date: 1, startTime: 1 });

//   // Format the sessions data
//   return sessions.map(session => ({
//     id: session._id.toString(),
//     mentor: {
//       id: session.mentor._id.toString(),
//       name: session.mentor.name
//     },
//     mentee: {
//       id: session.mentee._id.toString(),
//       name: session.mentee.name
//     },
//     date: session.date,
//     startTime: session.startTime,
//     endTime: session.endTime,
//     status: session.status,
//     feedback: session.feedback
//   }));
// }

export async function getSessionsForUser(
  userId: string,
  role: string,
  status?: "upcoming" | "completed" | "cancelled"
): Promise<SessionData[]> {
  await connectDB();
  
  const query: any = {};
  
  // Set query based on user role
  if (role === "mentor") {
    query.mentor = userId;
  } else if (role === "mentee") {
    query.mentee = userId;
  } else {
    throw new Error("Invalid user role");
  }

  // Add status filter if provided
  if (status) {
    query.status = status;
  }

  // Fetch sessions from database
  const sessions = await Session.find(query)
    .populate("mentor", "name email") // Include email here
    .populate("mentee", "name email") // Include email here
    .sort({ date: 1, startTime: 1 });

  // Format the sessions data
  return sessions.map(session => ({
    id: session._id.toString(),
    mentor: {
      id: session.mentor._id.toString(),
      name: session.mentor.name,
      email: session.mentor.email // Add email here
    },
    mentee: {
      id: session.mentee._id.toString(),
      name: session.mentee.name,
      email: session.mentee.email // Add email here
    },
    date: session.date,
    startTime: session.startTime,
    endTime: session.endTime,
    status: session.status,
    feedback: session.feedback,
    agenda: session.agenda // Also include agenda if it exists in the session
  }));
}

export async function createSession({
  mentorId,
  menteeId,
  date,
  startTime,
  endTime,
  agenda,
}: {
  mentorId: string;
  menteeId: string;
  date: Date;
  startTime: string;
  endTime: string;
  agenda?: string;
}) {
  await connectDB();

  // 1. Validate users exist and have correct roles
  const [mentor, mentee] = await Promise.all([
    User.findById(mentorId),
    User.findById(menteeId),
  ]);
  
  if (!mentor || mentor.role !== "mentor" || !mentee || mentee.role !== "mentee") {
    throw new Error("Invalid mentor or mentee");
  }

  // 2. Check time validity
  if (startTime >= endTime) {
    throw new Error("End time must be after start time");
  }

  // 3. Check mentor availability
  const availability = await Availability.findOne({ userId: mentorId });
  if (!availability) {
    throw new Error("Mentor has not set availability");
  }

  const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
  const dayAvailability = availability[dayOfWeek];
  
  if (!dayAvailability?.enabled) {
    throw new Error("Mentor is not available on this day");
  }

  // 4. Check for conflicting sessions
  const conflictingSession = await Session.findOne({
    mentor: mentorId,
    date: date,
    $or: [
      {
        startTime: { $lt: endTime },
        endTime: { $gt: startTime },
      },
    ],
    status: { $ne: "cancelled" },
  });

  if (conflictingSession) {
    throw new Error("Time slot is already booked");
  }

  // 5. Create the session
  const newSession = new Session({
    mentor: mentorId,
    mentee: menteeId,
    date,
    startTime,
    endTime,
    status: "upcoming",
    agenda,
  });

  await newSession.save();
  return newSession;
}

// Add this new function to get available slots
export async function getAvailableSlots(mentorId: string, date: Date) {
  await connectDB();
  
  const availability = await Availability.findOne({ userId: mentorId });
  if (!availability) return [];

  const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
  const dayAvailability = availability[dayOfWeek];
  
  if (!dayAvailability?.enabled) return [];

  // Generate available slots (30-minute intervals)
  const slots = [];
  const [startHour, startMinute] = dayAvailability.startTime.split(':').map(Number);
  const [endHour, endMinute] = dayAvailability.endTime.split(':').map(Number);
  
  let current = new Date(date);
  current.setHours(startHour, startMinute, 0, 0);
  
  const end = new Date(date);
  end.setHours(endHour, endMinute, 0, 0);
  
  while (current < end) {
    const slotEnd = new Date(current);
    slotEnd.setMinutes(current.getMinutes() + 30);
    
    if (slotEnd <= end) {
      const isAvailable = await isSlotAvailable(mentorId, date, current, slotEnd);
      if (isAvailable) {
        slots.push({
          start: new Date(current),
          end: new Date(slotEnd),
        });
      }
    }
    
    current = slotEnd;
  }
  
  return slots;
}

async function isSlotAvailable(mentorId: string, date: Date, start: Date, end: Date) {
  const conflictingSession = await Session.findOne({
    mentor: mentorId,
    date: date,
    $or: [
      {
        startTime: { $lt: formatTime(end) },
        endTime: { $gt: formatTime(start) },
      },
    ],
    status: { $ne: "cancelled" },
  });
  
  return !conflictingSession;
}

function formatTime(date: Date) {
  return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
}