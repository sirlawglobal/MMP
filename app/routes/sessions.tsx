// app/routes/sessions.tsx
import { LoaderFunction, json, redirect } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { getSession } from "~/utils/session.server";
import { getSessionsForUser } from "~/utils/sessions.server";
import { getUserRole, getCurrentUser } from "~/utils/auth.server";
import type { User } from "~/utils/auth.server";
import type { SessionData } from "~/utils/sessions.server";

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request);
  const email = session.get("email");
  if (!email) return redirect("/login");

  const user = await getCurrentUser(email);
  const role = await getUserRole(email);
  if (!user) return redirect("/login");

  const sessions = await getSessionsForUser(user.id, role, "upcoming");
  return json({ sessions });
};

export default function SessionsPage() {
  const { sessions } = useLoaderData<{ sessions: SessionData[] }>();

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
      <h1 className="text-2xl font-semibold mb-6">Your Sessions</h1>
      
      {sessions.length === 0 ? (
        <div className="bg-white rounded-lg p-6 shadow text-center py-8">
          <p className="text-gray-600">No upcoming sessions scheduled.</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg p-6 shadow">
          {sessions.map((session) => (
            <div key={session.id} className="border-b border-gray-100 py-4 last:border-0">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">
                    With {session.mentor.name} (Mentor)
                  </h3>
                  <p className="text-gray-600">
                    {formatDate(session.date.toString())}, {session.startTime}-{session.endTime}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Link
                    to={`/sessions/${session.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    Details
                  </Link>
                  <Link
                    to={`/sessions/${session.id}/cancel`}
                    className="text-red-600 hover:underline"
                  >
                    Cancel
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}