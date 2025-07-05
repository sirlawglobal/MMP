// app/utils/sessions.server.tsx

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
  const mentor = await User.findById(mentorId);
  const mentee = await User.findById(menteeId);
  if (!mentor || mentor.role !== "mentor" || !mentee || mentee.role !== "mentee") {
    return null;
  }
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

export async function getAllSessions(status?: string): Promise<SessionData[]> {
  await connectDB();
  const query: any = {};
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




//route/session.tsx

import { LoaderFunction, json, redirect } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { getSession } from "~/utils/session.server"; // User session management
import { getSessionsForUser } from "~/utils/sessions.server"; // Session data management
import { getUserRole, getCurrentUser } from "~/utils/auth.server";
import type { User } from "~/utils/auth.server";
import type { SessionData } from "~/utils/sessions.server";

type LoaderData = {
  user: User;
  role: string;
  sessions: SessionData[];
};

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request);
  const email = session.get("email");
  if (!email) return redirect("/login");

  const user = await getCurrentUser(email);
  const role = await getUserRole(email);
  if (!user) return redirect("/login");

  if (role !== "mentor") {
    return redirect("/dashboard"); // Only mentors should access /sessions
  }

  const sessions = await getSessionsForUser(user.id, role);

  return json<LoaderData>({ user, role, sessions });
};

export default function Sessions() {
  const { user, role, sessions } = useLoaderData<LoaderData>();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6 text-purple-800">Your Sessions</h1>
      <div className="bg-white rounded-lg p-6 shadow">
        {sessions.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-600">No sessions scheduled yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {sessions.map((session) => (
              <div key={session.id} className="border-b border-gray-100 pb-4 last:border-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-800">With {session.mentee.name}</h3>
                    <p className="text-gray-600">
                      {formatDate(session.date.toString())}, {session.startTime}-{session.endTime}
                    </p>
                    <span
                      className={`inline-block mt-1 px-2 py-1 text-xs rounded ${
                        session.status === "upcoming"
                          ? "bg-blue-100 text-blue-800"
                          : session.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    {session.status === "upcoming" && (
                      <Link
                        to={`/sessions/${session.id}/cancel`}
                        className="text-red-600 text-sm hover:underline"
                      >
                        Cancel
                      </Link>
                    )}
                    <Link
                      to={`/sessions/${session.id}`}
                      className="text-blue-600 text-sm hover:underline"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


// File: app/routes/sessions.new.tsx
import { Form, useLoaderData, useActionData } from "@remix-run/react";
import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { getSession } from "~/utils/session.server"; // User session management
import { createSession } from "~/utils/sessions.server"; // Session data management
import { getCurrentUser, getUserRole } from "~/utils/auth.server";
import { connectDB } from "~/utils/db.server";
import { User } from "~/models/User";

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request);
  const email = session.get("email");
  if (!email) return redirect("/login");

  await connectDB();
  const user = await getCurrentUser(email);
  const role = await getUserRole(email);
  if (!user) return redirect("/login");

  const mentors = role === "mentee" ? await User.find({ role: "mentor" }, "name id") : [];

  return json({ user, role, mentors });
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const mentorId = formData.get("mentorId") as string;
  const date = formData.get("date") as string;
  const startTime = formData.get("startTime") as string;
  const endTime = formData.get("endTime") as string;

  if (!mentorId || !date || !startTime || !endTime) {
    return json({ error: "All fields are required" }, { status: 400 });
  }

  const session = await getSession(request);
  const email = session.get("email");
  const user = await getCurrentUser(email);
  if (!user) return redirect("/login");

  try {
    const newSession = await createSession({
      mentorId,
      menteeId: user.id,
      date: new Date(date),
      startTime,
      endTime,
    });

    if (!newSession) {
      return json({ error: "Invalid mentor or scheduling conflict" }, { status: 400 });
    }

    return redirect(user.role === "mentor" ? "/sessions" : "/my-sessions");
  } catch (error: any) {
    return json({ error: error.message }, { status: 400 });
  }
};

export default function NewSession() {
  const { user, role, mentors } = useLoaderData<typeof loader>();
  const actionData = useActionData<{ error?: string }>();

  if (role !== "mentee") {
    return <div>Only mentees can schedule sessions.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6 text-purple-800">Schedule a New Session</h1>
      <Form method="post" className="bg-white rounded-lg p-6 shadow">
        <div className="mb-4">
          <label className="block text-gray-700">Select Mentor</label>
          <select name="mentorId" className="w-full p-2 border rounded">
            {mentors.map((mentor: any) => (
              <option key={mentor.id} value={mentor.id}>{mentor.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Date</label>
          <input type="date" name="date" className="w-full p-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Start Time</label>
          <input type="time" name="startTime" className="w-full p-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">End Time</label>
          <input type="time" name="endTime" className="w-full p-2 border rounded" required />
        </div>
        {actionData?.error && <p className="text-red-600">{actionData.error}</p>}
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Schedule Session
        </button>
      </Form>
    </div>
  );
}


//route/session.$sessionId.tsx

import { LoaderFunction, json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getSession } from "~/utils/session.server"; // User session management
import { getCurrentUser } from "~/utils/auth.server";
import { connectDB } from "~/utils/db.server";
import { Session } from "~/models/Session";

type LoaderData = {
  session: {
    id: string;
    mentor: { id: string; name: string };
    mentee: { id: string; name: string };
    date: Date;
    startTime: string;
    endTime: string;
    status: string;
    feedback?: { rating?: number; comment?: string };
  };
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const session = await getSession(request);
  const email = session.get("email");
  if (!email) return redirect("/login");

  const user = await getCurrentUser(email);
  if (!user) return redirect("/login");

  await connectDB();
  const sessionData = await Session.findById(params.sessionId)
    .populate("mentor", "name")
    .populate("mentee", "name");

  if (!sessionData) {
    throw new Response("Session not found", { status: 404 });
  }

  // Ensure user is mentor, mentee, or admin
  if (
    sessionData.mentor._id.toString() !== user.id &&
    sessionData.mentee._id.toString() !== user.id &&
    user.role !== "admin"
  ) {
    throw new Response("Unauthorized", { status: 403 });
  }

  return json<LoaderData>({
    session: {
      id: sessionData._id.toString(),
      mentor: { id: sessionData.mentor._id.toString(), name: sessionData.mentor.name },
      mentee: { id: sessionData.mentee._id.toString(), name: sessionData.mentee.name },
      date: sessionData.date,
      startTime: sessionData.startTime,
      endTime: sessionData.endTime,
      status: sessionData.status,
      feedback: sessionData.feedback,
    },
  });
};

export default function SessionDetails() {
  const { session } = useLoaderData<LoaderData>();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6 text-purple-800">Session Details</h1>
      <div className="bg-white rounded-lg p-6 shadow">
        <h2 className="text-lg font-medium mb-4">
          Session with {session.mentor.name} and {session.mentee.name}
        </h2>
        <p className="text-gray-600">Date: {formatDate(session.date.toString())}</p>
        <p className="text-gray-600">Time: {session.startTime} - {session.endTime}</p>
        <p className="text-gray-600">
          Status: {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
        </p>
        {session.feedback && (
          <div className="mt-4">
            <p className="text-gray-600">Feedback Rating: {session.feedback.rating || "N/A"}</p>
            <p className="text-gray-600">Feedback Comment: {session.feedback.comment || "N/A"}</p>
          </div>
        )}
      </div>
    </div>
  );
}


//route/session.$sessionId.feeback.tsx

import { ActionFunction, LoaderFunction, json, redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { getSession } from "~/utils/session.server"; // User session management
import { getCurrentUser, getUserRole } from "~/utils/auth.server";
import { connectDB } from "~/utils/db.server";
import { Session } from "~/models/Session";

type LoaderData = {
  sessionId: string;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const session = await getSession(request);
  const email = session.get("email");
  if (!email) return redirect("/login");

  const user = await getCurrentUser(email);
  const role = await getUserRole(email);
  if (!user) return redirect("/login");

  if (role !== "mentee") {
    return redirect("/dashboard"); // Only mentees can submit feedback
  }

  if (!params.sessionId) {
    throw new Response("Session ID is required", { status: 404 });
  }

  await connectDB();
  const sessionData = await Session.findById(params.sessionId);
  if (!sessionData || sessionData.mentee.toString() !== user.id) {
    throw new Response("Session not found or unauthorized", { status: 404 });
  }

  return json<LoaderData>({ sessionId: params.sessionId });
};

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();
  const rating = parseInt(formData.get("rating") as string);
  const comment = formData.get("comment") as string;

  if (!rating || rating < 1 || rating > 5) {
    return json({ error: "Rating must be between 1 and 5" }, { status: 400 });
  }

  const session = await getSession(request);
  const email = session.get("email");
  const user = await getCurrentUser(email);
  if (!user) return redirect("/login");

  if (!params.sessionId) {
    throw new Response("Session ID is required", { status: 404 });
  }

  await connectDB();
  const sessionData = await Session.findById(params.sessionId);
  if (!sessionData || sessionData.mentee.toString() !== user.id) {
    throw new Response("Session not found or unauthorized", { status: 404 });
  }

  await Session.findByIdAndUpdate(params.sessionId, {
    feedback: { rating, comment },
  });

  return redirect("/my-sessions");
};

export default function SessionFeedback() {
  const { sessionId } = useLoaderData<LoaderData>();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6 text-purple-800">Submit Feedback</h1>
      <div className="bg-white rounded-lg p-6 shadow">
        <Form method="post" className="space-y-4">
          <div>
            <label className="block text-gray-700">Rating (1-5)</label>
            <input
              type="number"
              name="rating"
              min="1"
              max="5"
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Comment</label>
            <textarea
              name="comment"
              className="w-full p-2 border rounded"
              rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            Submit Feedback
          </button>
        </Form>
      </div>
    </div>
  );
}



//route/session.$sessionId.cancel.tsx
import { ActionFunction, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { getSession } from "~/utils/session.server"; // User session management
import { getCurrentUser } from "~/utils/auth.server";
import { connectDB } from "~/utils/db.server";
import { Session } from "~/models/Session";

export const action: ActionFunction = async ({ request, params }) => {
  const session = await getSession(request);
  const email = session.get("email");
  if (!email) return redirect("/login");

  const user = await getCurrentUser(email);
  if (!user) return redirect("/login");

  await connectDB();
  const sessionData = await Session.findById(params.sessionId);
  if (!sessionData) {
    throw new Response("Session not found", { status: 404 });
  }

  // Only allow mentor or mentee to cancel
  if (
    sessionData.mentor.toString() !== user.id &&
    sessionData.mentee.toString() !== user.id
  ) {
    throw new Response("Unauthorized", { status: 403 });
  }

  await Session.findByIdAndUpdate(params.sessionId, { status: "cancelled" });

  return redirect(user.role === "mentor" ? "/sessions" : "/my-sessions");
};

export default function CancelSession() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6 text-purple-800">Cancel Session</h1>
      <div className="bg-white rounded-lg p-6 shadow">
        <p className="text-gray-600 mb-4">Are you sure you want to cancel this session?</p>
        <Form method="post">
          <button
            type="submit"
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Confirm Cancel
          </button>
        </Form>
      </div>
    </div>
  );
}