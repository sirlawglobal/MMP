// app/components/Layout.tsx
import { Link } from "@remix-run/react";
import type { User } from "~/utils/auth.server";

type UserRole = 'admin' | 'mentor' | 'mentee';

interface LayoutProps {
  children: React.ReactNode;
  user: User | null;
  role: UserRole | null;
}

export function Layout({ children, user, role }: LayoutProps) {
  // Debugging logs
  console.log('Layout props:', { user, role });

  if (!user || !role) {
    return (
      <div className="min-h-screen bg-gray-100">
        <main className="p-6">
          {children}
        </main>
      </div>
    );
  }

  // Common navigation items for all roles
  const commonNavItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Profile', path: '/profile/edit' },
    { name: 'Sessions', path: `/${role === 'mentor' ? 'sessions' : 'my-sessions'}` },
  ];

  // Role-specific navigation items
  const roleSpecificNavItems: Record<UserRole, { name: string; path: string }[]> = {
    admin: [
      { name: 'Users', path: '/admin/users' },
      { name: 'Matches', path: '/admin/matches' },
      { name: 'All Sessions', path: '/admin/sessions' },
    ],
    mentor: [
      { name: 'Availability', path: '/availability' },
      { name: 'Requests', path: '/requests' },
    ],
    mentee: [
      { name: 'Find Mentors', path: '/mentors' },
      { name: 'My Requests', path: '/my-requests' },
    ],
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar - fixed width and sticky */}
      <aside className="w-64 bg-purple-700 text-white p-4 flex-shrink-0 sticky top-0 h-screen">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-purple-700 font-bold">
            {user.name?.charAt(0) || 'U'}
          </div>
          <div>
            <span className="text-lg font-semibold">{user.name || 'User'}</span>
            <Link 
              to="/profile/edit" 
              className="text-xs text-purple-200 hover:underline block"
            >
              Edit Profile
            </Link>
          </div>
        </div>

        <nav className="flex flex-col gap-2 mb-8">
          {[...commonNavItems, ...roleSpecificNavItems[role]].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="hover:bg-purple-600 px-3 py-2 rounded transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="mt-auto">
          <Link
            to="/logout"
            className="block hover:bg-red-600 px-3 py-2 rounded text-red-200 font-semibold transition-colors"
          >
            Logout
          </Link>
          <div className="text-center text-xs opacity-80 mt-2">
            Logged in as: <span className="capitalize">{role}</span>
          </div>
        </div>
      </aside>

      {/* Main content area with scroll */}
      <main className="flex-1 overflow-auto p-6">
        {children}
      </main>
    </div>
  );
}