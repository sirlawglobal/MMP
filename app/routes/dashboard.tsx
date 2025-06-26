// app/routes/dashboard.tsx
import { LoaderFunction, json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { getSession } from "~/utils/session.server";
import { getUserRole, getCurrentUser } from "~/utils/auth.server";
import { Layout } from "~/components/Layout";

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request);
  const email = session.get("email");

  if (!email) return json({ role: null, user: null });

  const role = await getUserRole(email);
  const user = await getCurrentUser(email);
  return json({ role, user });
};

const getStats = (role: string) => {
  switch (role) {
    case 'admin':
      return [
        { title: 'Total Users', value: '42', link: '/admin/users', color: 'from-blue-600 to-blue-800' },
        { title: 'Active Matches', value: '18', link: '/admin/matches', color: 'from-green-600 to-green-800' },
        { title: 'Sessions This Week', value: '7', link: '/admin/sessions', color: 'from-purple-600 to-purple-800' },
      ];
    case 'mentor':
      return [
        { title: 'Upcoming Sessions', value: '3', link: '/sessions', color: 'from-blue-600 to-blue-800' },
        { title: 'Pending Requests', value: '2', link: '/requests', color: 'from-yellow-600 to-yellow-800' },
        { title: 'Average Rating', value: '4.7', link: '/sessions', color: 'from-green-600 to-green-800' },
      ];
    case 'mentee':
      return [
        { title: 'Active Mentors', value: '1', link: '/my-requests', color: 'from-blue-600 to-blue-800' },
        { title: 'Upcoming Sessions', value: '2', link: '/my-sessions', color: 'from-purple-600 to-purple-800' },
        { title: 'Pending Requests', value: '1', link: '/my-requests', color: 'from-yellow-600 to-yellow-800' },
      ];
    default:
      return [];
  }
};

const getRecentActivities = (role: string) => {
  switch (role) {
    case 'admin':
      return [
        {
          title: 'New Users',
          description: '3 new users joined this week',
          action: 'View users',
          link: '/admin/users'
        },
        {
          title: 'New Matches',
          description: '5 mentorship matches created in the last 7 days',
          action: 'View matches',
          link: '/admin/matches'
        }
      ];
    case 'mentor':
      return [
        {
          title: 'New Requests',
          description: 'You have 2 new mentorship requests',
          action: 'View requests',
          link: '/requests'
        },
        {
          title: 'Upcoming Session',
          description: 'Your next session is tomorrow at 2:00 PM with Jane Doe',
          action: 'View sessions',
          link: '/sessions'
        }
      ];
    case 'mentee':
      return [
        {
          title: 'Request Accepted',
          description: 'Your request to John Smith has been accepted!',
          action: 'Schedule a session',
          link: '/my-sessions'
        },
        {
          title: 'Feedback Needed',
          description: 'Don\'t forget to leave feedback for your last session',
          action: 'Leave feedback',
          link: '/my-sessions'
        }
      ];
    default:
      return [];
  }
};

const getQuickActions = (role: string) => {
  switch (role) {
    case 'admin':
      return [
        { title: 'Manage Users', link: '/admin/users', color: 'bg-purple-100 text-purple-700 hover:bg-purple-200' },
        { title: 'View Matches', link: '/admin/matches', color: 'bg-blue-100 text-blue-700 hover:bg-blue-200' },
        { title: 'View Sessions', link: '/admin/sessions', color: 'bg-green-100 text-green-700 hover:bg-green-200' }
      ];
    case 'mentor':
      return [
        { title: 'Update Availability', link: '/availability', color: 'bg-purple-100 text-purple-700 hover:bg-purple-200' },
        { title: 'View Requests', link: '/requests', color: 'bg-blue-100 text-blue-700 hover:bg-blue-200' },
        { title: 'View Sessions', link: '/sessions', color: 'bg-green-100 text-green-700 hover:bg-green-200' }
      ];
    case 'mentee':
      return [
        { title: 'Find Mentors', link: '/mentors', color: 'bg-purple-100 text-purple-700 hover:bg-purple-200' },
        { title: 'My Requests', link: '/my-requests', color: 'bg-blue-100 text-blue-700 hover:bg-blue-200' },
        { title: 'My Sessions', link: '/my-sessions', color: 'bg-green-100 text-green-700 hover:bg-green-200' }
      ];
    default:
      return [];
  }
};

export default function Dashboard() {
  const { role, user } = useLoaderData<typeof loader>();

  if (!role || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-red-600 text-lg">You must be logged in to view this page.</p>
      </div>
    );
  }

  const stats = getStats(role);
  const activities = getRecentActivities(role);
  const quickActions = getQuickActions(role);

  return (
    <Layout user={user} role={role}>
      <h1 className="text-2xl font-semibold mb-6 text-purple-800">Dashboard</h1>
      
      {/* Welcome message */}
      <div className="bg-white rounded-lg p-6 shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">Welcome back, {user.name || 'User'}!</h2>
        <p className="text-gray-600">
          {role === 'admin' 
            ? 'Manage users, matches, and sessions across the platform.'
            : role === 'mentor'
            ? 'Help mentees grow by sharing your knowledge and experience.'
            : 'Find the right mentor to help you achieve your goals.'}
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {stats.map((stat, index) => (
          <Link 
            key={index}
            to={stat.link}
            className={`bg-gradient-to-br ${stat.color} text-white rounded-lg p-4 hover:shadow-lg transition-all`}
          >
            <h2 className="text-sm font-semibold mb-2">{stat.title}</h2>
            <p className="text-2xl font-bold">{stat.value}</p>
          </Link>
        ))}
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white rounded-lg p-6 shadow mb-6">
        <h2 className="text-lg font-semibold mb-4 text-purple-800">Recent Activity</h2>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
              <h3 className="font-medium text-gray-800">{activity.title}</h3>
              <p className="text-gray-600 mb-2">{activity.description}</p>
              <Link 
                to={activity.link} 
                className="text-purple-600 text-sm hover:underline"
              >
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
          {quickActions.map((action, index) => (
            <Link
              key={index}
              to={action.link}
              className={`${action.color} px-4 py-2 rounded transition-colors`}
            >
              {action.title}
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}