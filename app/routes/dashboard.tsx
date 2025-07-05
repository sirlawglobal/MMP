
// app/routes/dashboard.ts
import { LoaderFunction, json, redirect } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { getSession } from "~/utils/session.server"; // User session management
import { getSessionsForUser } from "~/utils/sessions.server"; // Session data management
import { getUserRole, getCurrentUser } from "~/utils/auth.server";
import type { User } from "~/utils/auth.server";
import type { SessionData } from "~/utils/sessions.server";

// Type definitions
type StatCard = {
  title: string;
  value: string;
  link: string;
  color: string;
};

type Activity = {
  title: string;
  description: string;
  action: string;
  link: string;
};

type QuickAction = {
  title: string;
  link: string;
  color: string;
};

type SessionStatus = "upcoming" | "completed" | "cancelled";

type DashboardData = {
  role: string;
  user: User;
  upcomingSessions: SessionData[];
};

// Utility functions
const getStats = (role: string): StatCard[] => {
  switch (role) {
    case "admin":
      return [
        { title: "Total Users", value: "42", link: "/admin/users", color: "from-blue-600 to-blue-800" },
        { title: "Active Matches", value: "18", link: "/admin/matches", color: "from-green-600 to-green-800" },
        { title: "Sessions This Week", value: "7", link: "/admin/sessions", color: "from-purple-600 to-purple-800" },
      ];
    case "mentor":
      return [
        { title: "Upcoming Sessions", value: "3", link: "/sessions", color: "from-blue-600 to-blue-800" },
        { title: "Pending Requests", value: "2", link: "/requests", color: "from-yellow-600 to-yellow-800" },
        { title: "Average Rating", value: "4.7", link: "/sessions", color: "from-green-600 to-green-800" },
      ];
    case "mentee":
      return [
        { title: "Active Mentors", value: "1", link: "/my-requests", color: "from-blue-600 to-blue-800" },
        { title: "Upcoming Sessions", value: "2", link: "/my-sessions", color: "from-purple-600 to-purple-800" },
        { title: "Pending Requests", value: "1", link: "/my-requests", color: "from-yellow-600 to-yellow-800" },
      ];
    default:
      return [];
  }
};

const getRecentActivities = (role: string): Activity[] => {
  switch (role) {
    case "admin":
      return [
        { title: "New Users", description: "3 new users joined this week", action: "View users", link: "/admin/users" },
        { title: "New Matches", description: "5 mentorship matches created recently", action: "View matches", link: "/admin/matches" },
      ];
    case "mentor":
      return [
        { title: "New Requests", description: "You have 2 new mentorship requests", action: "View requests", link: "/requests" },
        { title: "Upcoming Session", description: "Next session: tomorrow at 2PM with Jane", action: "View sessions", link: "/sessions" },
      ];
    case "mentee":
      return [
        { title: "Request Accepted", description: "John Smith accepted your request", action: "Schedule a session", link: "/my-sessions" },
        { title: "Feedback Needed", description: "Leave feedback for your last session", action: "Leave feedback", link: "/my-sessions" },
      ];
    default:
      return [];
  }
};

const getQuickActions = (role: string): QuickAction[] => {
  switch (role) {
    case "admin":
      return [
        { title: "Manage Users", link: "/admin/users", color: "bg-purple-100 text-purple-700 hover:bg-purple-200" },
        { title: "View Matches", link: "/admin/matches", color: "bg-blue-100 text-blue-700 hover:bg-blue-200" },
        { title: "View Sessions", link: "/admin/sessions", color: "bg-green-100 text-green-700 hover:bg-green-200" },
      ];
    case "mentor":
      return [
        { title: "Update Availability", link: "/availability", color: "bg-purple-100 text-purple-700 hover:bg-purple-200" },
        { title: "View Requests", link: "/requests", color: "bg-blue-100 text-blue-700 hover:bg-blue-200" },
        { title: "View Sessions", link: "/sessions", color: "bg-green-100 text-green-700 hover:bg-green-200" },
      ];
    case "mentee":
      return [
        { title: "Find Mentors", link: "/mentors", color: "bg-purple-100 text-purple-700 hover:bg-purple-200" },
        { title: "My Requests", link: "/my-requests", color: "bg-blue-100 text-blue-700 hover:bg-blue-200" },
        { title: "My Sessions", link: "/my-sessions", color: "bg-green-100 text-green-700 hover:bg-green-200" },
      ];
    default:
      return [];
  }
};

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request);
  const email = session.get("email");
  // const userful = session.get("user");
  // console.log('userful',userful)

  if (!email) return redirect("/login");

  const role = await getUserRole(email);
  const user = await getCurrentUser(email);
  if (!user) return redirect("/login");

  // Fetch sessions based on user role, excluding cancelled, limited to 5
  const upcomingSessions = await getSessionsForUser(user.id, role, "upcoming");

  return json<DashboardData>({ role, user, upcomingSessions: upcomingSessions.slice(0, 5) });
};

export default function Dashboard() {
  const { role, user, upcomingSessions } = useLoaderData<DashboardData>();

  const stats = getStats(role);
  const activities = getRecentActivities(role);
  const quickActions = getQuickActions(role);

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
      <h1 className="text-2xl font-semibold mb-6 text-purple-800">Dashboard</h1>

      {/* Welcome */}
      <div className="bg-white rounded-lg p-6 shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">Welcome back, {user.name || "User"}!</h2>
        <p className="text-gray-600">
          {role === "admin"
            ? "Manage users, matches, and sessions."
            : role === "mentor"
            ? "Help mentees by sharing your knowledge."
            : "Find mentors and grow your skills."}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {stats.map((stat, idx) => (
          <Link
            key={idx}
            to={stat.link}
            className={`bg-gradient-to-br ${stat.color} text-white rounded-lg p-4 hover:shadow-lg transition-all`}
          >
            <h3 className="text-sm font-semibold mb-1">{stat.title}</h3>
            <p className="text-2xl font-bold">{stat.value}</p>
          </Link>
        ))}
      </div>

      {/* Upcoming Sessions */}
      <div className="bg-white rounded-lg p-6 shadow mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-purple-800">Your Sessions</h2>
          <Link
            to={role === "mentor" ? "/sessions" : role === "admin" ? "/admin/sessions" : "/my-sessions"}
            className="text-sm text-purple-600 hover:underline"
          >
            View all
          </Link>
        </div>

        {upcomingSessions.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-600 mb-4">No sessions scheduled yet.</p>
            {role === "mentee" && (
              <Link
                to="/mentors"
                className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
              >
                Find a Mentor
              </Link>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {upcomingSessions.map((session) => (
              <div key={session.id} className="border-b border-gray-100 pb-4 last:border-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-800">
                      {role === "mentor" ? `With ${session.mentee.name}` : `With ${session.mentor.name}`}
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

      {/* Recent Activities */}
      <div className="bg-white rounded-lg p-6 shadow mb-6">
        <h2 className="text-lg font-semibold mb-4 text-purple-800">Recent Activity</h2>
        <div className="space-y-4">
          {activities.map((activity, idx) => (
            <div key={idx} className="border-b border-gray-100 pb-4 last:border-0">
              <h3 className="font-medium text-gray-800">{activity.title}</h3>
              <p className="text-gray-600 mb-2">{activity.description}</p>
              <Link to={activity.link} className="text-purple-600 text-sm hover:underline">
                {activity.action} →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg p-6 shadow">
        <h2 className="text-lg font-semibold mb-4 text-purple-800">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          {quickActions.map((action, idx) => (
            <Link
              key={idx}
              to={action.link}
              className={`${action.color} px-4 py-2 rounded transition-colors`}
            >
              {action.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}