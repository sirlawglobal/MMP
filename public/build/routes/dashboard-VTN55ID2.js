import {
  require_session
} from "/build/_shared/chunk-V22J52NZ.js";
import {
  require_auth,
  require_node
} from "/build/_shared/chunk-AOWKTJXZ.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-UR3BQTMW.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  createHotContext
} from "/build/_shared/chunk-65SXMPWJ.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/dashboard.tsx
var import_node = __toESM(require_node(), 1);
var import_session = __toESM(require_session(), 1);
var import_auth = __toESM(require_auth(), 1);

// app/components/Layout.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Layout.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Layout.tsx"
  );
  import.meta.hot.lastModified = "1750965226990.714";
}
function Layout({
  children,
  user,
  role
}) {
  console.log("Layout props:", {
    user,
    role
  });
  if (!user || !role) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "p-6", children }, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 34,
      columnNumber: 12
    }, this);
  }
  const commonNavItems = [{
    name: "Dashboard",
    path: "/dashboard"
  }, {
    name: "Profile",
    path: "/profile/edit"
  }, {
    name: "Sessions",
    path: `/${role === "mentor" ? "sessions" : "my-sessions"}`
  }];
  const roleSpecificNavItems = {
    admin: [{
      name: "Users",
      path: "/admin/users"
    }, {
      name: "Matches",
      path: "/admin/matches"
    }, {
      name: "All Sessions",
      path: "/admin/sessions"
    }],
    mentor: [{
      name: "Availability",
      path: "/availability"
    }, {
      name: "Requests",
      path: "/requests"
    }],
    mentee: [{
      name: "Find Mentors",
      path: "/mentors"
    }, {
      name: "My Requests",
      path: "/my-requests"
    }]
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex min-h-screen bg-gray-100", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", { className: "w-64 bg-purple-700 text-white p-4 flex-shrink-0 sticky top-0 h-screen", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-3 mb-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10 h-10 bg-white rounded-full flex items-center justify-center text-purple-700 font-bold", children: user.name?.charAt(0) || "U" }, void 0, false, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 84,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-lg font-semibold", children: user.name || "User" }, void 0, false, {
            fileName: "app/components/Layout.tsx",
            lineNumber: 88,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/profile/edit", className: "text-xs text-purple-200 hover:underline block", children: "Edit Profile" }, void 0, false, {
            fileName: "app/components/Layout.tsx",
            lineNumber: 89,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 87,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "flex flex-col gap-2 mb-8", children: [...commonNavItems, ...roleSpecificNavItems[role]].map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.path, className: "hover:bg-purple-600 px-3 py-2 rounded transition-colors", children: item.name }, item.name, false, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 96,
        columnNumber: 75
      }, this)) }, void 0, false, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/logout", className: "block hover:bg-red-600 px-3 py-2 rounded text-red-200 font-semibold transition-colors", children: "Logout" }, void 0, false, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 102,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center text-xs opacity-80 mt-2", children: [
          "Logged in as: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "capitalize", children: role }, void 0, false, {
            fileName: "app/components/Layout.tsx",
            lineNumber: 106,
            columnNumber: 27
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 105,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 101,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex-1 overflow-auto p-6", children }, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 112,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 80,
    columnNumber: 10
  }, this);
}
_c = Layout;
var _c;
$RefreshReg$(_c, "Layout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/dashboard.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\dashboard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\dashboard.tsx"
  );
  import.meta.hot.lastModified = "1750965227006.3364";
}
var getStats = (role) => {
  switch (role) {
    case "admin":
      return [{
        title: "Total Users",
        value: "42",
        link: "/admin/users",
        color: "from-blue-600 to-blue-800"
      }, {
        title: "Active Matches",
        value: "18",
        link: "/admin/matches",
        color: "from-green-600 to-green-800"
      }, {
        title: "Sessions This Week",
        value: "7",
        link: "/admin/sessions",
        color: "from-purple-600 to-purple-800"
      }];
    case "mentor":
      return [{
        title: "Upcoming Sessions",
        value: "3",
        link: "/sessions",
        color: "from-blue-600 to-blue-800"
      }, {
        title: "Pending Requests",
        value: "2",
        link: "/requests",
        color: "from-yellow-600 to-yellow-800"
      }, {
        title: "Average Rating",
        value: "4.7",
        link: "/sessions",
        color: "from-green-600 to-green-800"
      }];
    case "mentee":
      return [{
        title: "Active Mentors",
        value: "1",
        link: "/my-requests",
        color: "from-blue-600 to-blue-800"
      }, {
        title: "Upcoming Sessions",
        value: "2",
        link: "/my-sessions",
        color: "from-purple-600 to-purple-800"
      }, {
        title: "Pending Requests",
        value: "1",
        link: "/my-requests",
        color: "from-yellow-600 to-yellow-800"
      }];
    default:
      return [];
  }
};
var getRecentActivities = (role) => {
  switch (role) {
    case "admin":
      return [{
        title: "New Users",
        description: "3 new users joined this week",
        action: "View users",
        link: "/admin/users"
      }, {
        title: "New Matches",
        description: "5 mentorship matches created in the last 7 days",
        action: "View matches",
        link: "/admin/matches"
      }];
    case "mentor":
      return [{
        title: "New Requests",
        description: "You have 2 new mentorship requests",
        action: "View requests",
        link: "/requests"
      }, {
        title: "Upcoming Session",
        description: "Your next session is tomorrow at 2:00 PM with Jane Doe",
        action: "View sessions",
        link: "/sessions"
      }];
    case "mentee":
      return [{
        title: "Request Accepted",
        description: "Your request to John Smith has been accepted!",
        action: "Schedule a session",
        link: "/my-sessions"
      }, {
        title: "Feedback Needed",
        description: "Don't forget to leave feedback for your last session",
        action: "Leave feedback",
        link: "/my-sessions"
      }];
    default:
      return [];
  }
};
var getQuickActions = (role) => {
  switch (role) {
    case "admin":
      return [{
        title: "Manage Users",
        link: "/admin/users",
        color: "bg-purple-100 text-purple-700 hover:bg-purple-200"
      }, {
        title: "View Matches",
        link: "/admin/matches",
        color: "bg-blue-100 text-blue-700 hover:bg-blue-200"
      }, {
        title: "View Sessions",
        link: "/admin/sessions",
        color: "bg-green-100 text-green-700 hover:bg-green-200"
      }];
    case "mentor":
      return [{
        title: "Update Availability",
        link: "/availability",
        color: "bg-purple-100 text-purple-700 hover:bg-purple-200"
      }, {
        title: "View Requests",
        link: "/requests",
        color: "bg-blue-100 text-blue-700 hover:bg-blue-200"
      }, {
        title: "View Sessions",
        link: "/sessions",
        color: "bg-green-100 text-green-700 hover:bg-green-200"
      }];
    case "mentee":
      return [{
        title: "Find Mentors",
        link: "/mentors",
        color: "bg-purple-100 text-purple-700 hover:bg-purple-200"
      }, {
        title: "My Requests",
        link: "/my-requests",
        color: "bg-blue-100 text-blue-700 hover:bg-blue-200"
      }, {
        title: "My Sessions",
        link: "/my-sessions",
        color: "bg-green-100 text-green-700 hover:bg-green-200"
      }];
    default:
      return [];
  }
};
function Dashboard() {
  _s();
  const {
    role,
    user
  } = useLoaderData();
  if (!role || !user) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "min-h-screen flex items-center justify-center bg-gray-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-red-600 text-lg", children: "You must be logged in to view this page." }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 199,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 198,
      columnNumber: 12
    }, this);
  }
  const stats = getStats(role);
  const activities = getRecentActivities(role);
  const quickActions = getQuickActions(role);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Layout, { user, role, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-2xl font-semibold mb-6 text-purple-800", children: "Dashboard" }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 206,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white rounded-lg p-6 shadow mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-xl font-semibold mb-2", children: [
        "Welcome back, ",
        user.name || "User",
        "!"
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 210,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-gray-600", children: role === "admin" ? "Manage users, matches, and sessions across the platform." : role === "mentor" ? "Help mentees grow by sharing your knowledge and experience." : "Find the right mentor to help you achieve your goals." }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 211,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 209,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-6", children: stats.map((stat, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: stat.link, className: `bg-gradient-to-br ${stat.color} text-white rounded-lg p-4 hover:shadow-lg transition-all`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-sm font-semibold mb-2", children: stat.title }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 219,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-2xl font-bold", children: stat.value }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 220,
        columnNumber: 13
      }, this)
    ] }, index, true, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 218,
      columnNumber: 37
    }, this)) }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 217,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white rounded-lg p-6 shadow mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-lg font-semibold mb-4 text-purple-800", children: "Recent Activity" }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 226,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-4", children: activities.map((activity, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "border-b border-gray-100 pb-4 last:border-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "font-medium text-gray-800", children: activity.title }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 229,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-gray-600 mb-2", children: activity.description }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 230,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: activity.link, className: "text-purple-600 text-sm hover:underline", children: [
          activity.action,
          " \u2192"
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 231,
          columnNumber: 15
        }, this)
      ] }, index, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 228,
        columnNumber: 48
      }, this)) }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 227,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 225,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "bg-white rounded-lg p-6 shadow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-lg font-semibold mb-4 text-purple-800", children: "Quick Actions" }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 240,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-wrap gap-4", children: quickActions.map((action, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: action.link, className: `${action.color} px-4 py-2 rounded transition-colors`, children: action.title }, index, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 242,
        columnNumber: 48
      }, this)) }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 241,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 239,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 205,
    columnNumber: 10
  }, this);
}
_s(Dashboard, "KodiYXTcVa/RpqGXm60b6ctr/qA=", false, function() {
  return [useLoaderData];
});
_c2 = Dashboard;
var _c2;
$RefreshReg$(_c2, "Dashboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Dashboard as default
};
//# sourceMappingURL=/build/routes/dashboard-VTN55ID2.js.map
