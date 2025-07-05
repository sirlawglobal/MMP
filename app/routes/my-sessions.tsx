//route/my-session.tsx

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

  if (role !== "mentee") {
    return redirect("/dashboard"); // Only mentees should access /my-sessions
  }

  const sessions = await getSessionsForUser(user.id, role);

  return json<LoaderData>({ user, role, sessions });
};

export default function MySessions() {
  const { user, role, sessions } = useLoaderData<LoaderData>();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const needsFeedback = (session: SessionData) => {
    return (
      role === "mentee" &&
      session.status === "completed" &&
      (!session.feedback || !session.feedback.rating)
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6 text-purple-800">My Sessions</h1>
      <div className="bg-white rounded-lg p-6 shadow">
        {sessions.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-600 mb-4">No sessions scheduled yet.</p>
            <Link
              to="/mentors"
              className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
            >
              Find a Mentor
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {sessions.map((session) => (
              <div key={session.id} className="border-b border-gray-100 pb-4 last:border-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-800">With {session.mentor.name}</h3>
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
                    {needsFeedback(session) && (
                      <Link
                        to={`/sessions/${session.id}/feedback`}
                        className="text-purple-600 text-sm hover:underline"
                      >
                        Feedback
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