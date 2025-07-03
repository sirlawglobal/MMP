// app/utils/sessiona.server.ts

import { connectDB } from "./db.server";
import { Session } from "~/models/Session";
import { User } from "~/models/User";
import type { User as UserType } from "./auth.server";

export type SessionData = {
  id: string;
  mentor: { id: string; name: string };
  mentee: { id: string; name: string };
  date: Date;
  startTime: string;
  endTime: string;
  status: "upcoming" | "completed" | "cancelled";
  feedback?: {
    rating?: number;
    comment?: string;
  };
};

export async function createSession({
  mentorId,
  menteeId,
  date,
  startTime,
  endTime,
}: {
  mentorId: string;
  menteeId: string;
  date: Date;
  startTime: string;
  endTime: string;
}): Promise<SessionData | null> {
  await connectDB();

  // Validate mentor and mentee exist and have correct roles
  const mentor = await User.findById(mentorId);
  const mentee = await User.findById(menteeId);
  if (!mentor || mentor.role !== "mentor" || !mentee || mentee.role !== "mentee") {
    return null;
  }

  // Basic validation for time
  if (startTime >= endTime) {
    throw new Error("End time must be after start time");
  }

  const newSession = new Session({
    mentor: mentorId,
    mentee: menteeId,
    date,
    startTime,
    endTime,
    status: "upcoming",
  });

  await newSession.save();

  const populatedSession = await Session.findById(newSession._id)
    .populate("mentor", "name")
    .populate("mentee", "name");

  if (!populatedSession) return null;

  return formatSession(populatedSession);
}

export async function getSessionsForUser(
  userId: string,
  role: string,
  status?: string
): Promise<SessionData[]> {
  await connectDB();

  const query: any = {};
  if (role === "mentor") {
    query.mentor = userId;
  } else if (role === "mentee") {
    query.mentee = userId;
  }

  if (status) {
    query.status = status;
  }

  const sessions = await Session.find(query)
    .populate("mentor", "name")
    .populate("mentee", "name")
    .sort({ date: 1 });

  return sessions.map(formatSession);
}

function formatSession(session: any): SessionData {
  return {
    id: session._id.toString(),
    mentor: {
      id: session.mentor._id.toString(),
      name: session.mentor.name,
    },
    mentee: {
      id: session.mentee._id.toString(),
      name: session.mentee.name,
    },
    date: session.date,
    startTime: session.startTime,
    endTime: session.endTime,
    status: session.status,
    feedback: session.feedback,
  };
}