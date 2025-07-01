import { LoaderFunction, json, redirect } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { getSession } from "~/utils/session.server";
import { getUserRole, getCurrentUser } from "~/utils/auth.server";
import { getAllSessions } from "~/utils/sessions.server";
import type { User } from "~/utils/auth.server";
import type { SessionData } from "~/utils/sessions.server";

type LoaderData = {
  user: User;
  role: string;
  sessions: SessionData[];
  error?: string;
};

export const loader: LoaderFunction = async ({ request }) => {
  console.log("Loading /admin/sessions");
  const session = await getSession(request);
  const email = session.get("email");
  console.log("Email from session:", email);
  if (!email) {
    console.log("No email, redirecting to /login");
    return redirect("/login");
  }

  const user = await getCurrentUser(email);
  const role = await getUserRole(email);
  console.log("User:", user, "Role:", role);
  if (!user) {
    console.log("No user, redirecting to /login");
    return redirect("/login");
  }

  if (role !== "admin") {
    console.log(`Role is ${role}, redirecting to /dashboard`);
    return redirect("/dashboard");
  }

  try {
    const sessions = await getAllSessions();
    console.log("Sessions fetched:", sessions.length);
    return json<LoaderData>({ user, role, sessions });
  } catch (error) {
    console.error("Error fetching sessions:", error);
    return json<LoaderData>({ user, role, sessions: [], error: "Failed to load sessions" }, { status: 500 });
  }
};

export default function AdminSessions() {
  const { user, role, sessions, error } = useLoaderData<LoaderData>();

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
      <h1 className="text-2xl font-semibold mb-6 text-purple-800">All Sessions</h1>
      <div className="bg-white rounded-lg p-6 shadow">
        {error ? (
          <p className="text-red-600">{error}</p>
        ) : sessions.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-600">No sessions scheduled yet.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {sessions.map((session) => (
              <div key={session.id} className="border-b border-gray-100 pb-4 last:border-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-800">
                      {session.mentor.name} with {session.mentee.name}
                    </h3>
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