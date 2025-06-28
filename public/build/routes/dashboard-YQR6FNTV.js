import {
  require_auth,
  require_node,
  require_session
} from "/build/_shared/chunk-LMQZW5TR.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-NGNCTJQR.js";
import {
  createHotContext
} from "/build/_shared/chunk-65SXMPWJ.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-U4FRFQSK.js";
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
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
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
  import.meta.hot.lastModified = "1750987804608.0403";
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
        description: "5 mentorship matches created recently",
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
        description: "Next session: tomorrow at 2PM with Jane",
        action: "View sessions",
        link: "/sessions"
      }];
    case "mentee":
      return [{
        title: "Request Accepted",
        description: "John Smith accepted your request",
        action: "Schedule a session",
        link: "/my-sessions"
      }, {
        title: "Feedback Needed",
        description: "Leave feedback for your last session",
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
  const stats = getStats(role);
  const activities = getRecentActivities(role);
  const quickActions = getQuickActions(role);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-semibold mb-6 text-purple-800", children: "Dashboard" }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 197,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg p-6 shadow mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold mb-2", children: [
        "Welcome back, ",
        user.name || "User",
        "!"
      ] }, void 0, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 201,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: role === "admin" ? "Manage users, matches, and sessions." : role === "mentor" ? "Help mentees by sharing your knowledge." : "Find mentors and grow your skills." }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 202,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 200,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-6", children: stats.map((stat, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: stat.link, className: `bg-gradient-to-br ${stat.color} text-white rounded-lg p-4 hover:shadow-lg transition-all`, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-sm font-semibold mb-1", children: stat.title }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 210,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-2xl font-bold", children: stat.value }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 211,
        columnNumber: 13
      }, this)
    ] }, idx, true, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 209,
      columnNumber: 35
    }, this)) }, void 0, false, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 208,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg p-6 shadow mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-semibold mb-4 text-purple-800", children: "Recent Activity" }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 217,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: activities.map((activity, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b border-gray-100 pb-4 last:border-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-medium text-gray-800", children: activity.title }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 220,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mb-2", children: activity.description }, void 0, false, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 221,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: activity.link, className: "text-purple-600 text-sm hover:underline", children: [
          activity.action,
          " \u2192"
        ] }, void 0, true, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 222,
          columnNumber: 15
        }, this)
      ] }, idx, true, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 219,
        columnNumber: 46
      }, this)) }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 218,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 216,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg p-6 shadow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-semibold mb-4 text-purple-800", children: "Quick Actions" }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 231,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-4", children: quickActions.map((action, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: action.link, className: `${action.color} px-4 py-2 rounded transition-colors`, children: action.title }, idx, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 233,
        columnNumber: 46
      }, this)) }, void 0, false, {
        fileName: "app/routes/dashboard.tsx",
        lineNumber: 232,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 230,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 196,
    columnNumber: 10
  }, this);
}
_s(Dashboard, "KodiYXTcVa/RpqGXm60b6ctr/qA=", false, function() {
  return [useLoaderData];
});
_c = Dashboard;
var _c;
$RefreshReg$(_c, "Dashboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Dashboard as default
};
//# sourceMappingURL=/build/routes/dashboard-YQR6FNTV.js.map
