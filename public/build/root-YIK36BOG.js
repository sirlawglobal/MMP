import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useMatches
} from "/build/_shared/chunk-UR3BQTMW.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  createHotContext
} from "/build/_shared/chunk-65SXMPWJ.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:./utils/session.server
var require_session = __commonJS({
  "empty-module:./utils/session.server"(exports, module) {
    module.exports = {};
  }
});

// empty-module:./utils/auth.server
var require_auth = __commonJS({
  "empty-module:./utils/auth.server"(exports, module) {
    module.exports = {};
  }
});

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-QVZIQC35.css";

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
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Layout.tsx"
  );
  import.meta.hot.lastModified = "1751514380502.6338";
}
function Layout({
  children,
  user,
  role
}) {
  _s();
  const matches = useMatches();
  const currentPath = matches[matches.length - 1]?.pathname;
  const isAuthenticated = !!user && !!role;
  if (!isAuthenticated) {
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
  const commonNavItems = [
    {
      name: "Dashboard",
      path: "/dashboard"
    },
    {
      name: "Profile",
      path: "/profile/edit"
    },
    {
      name: "Sessions",
      path: `/${role === "mentor" ? "sessions" : role === "admin" ? "admin_sessions" : "my-sessions"}`
    }
    // Updated for admin
  ];
  const roleSpecificNavItems = {
    admin: [{
      name: "Users",
      path: "/admin/users"
    }, {
      name: "Matches",
      path: "/admin/matches"
    }, {
      name: "All Sessions",
      path: "admin_sessions"
    }],
    mentor: [
      {
        name: "Availability",
        path: "/availability"
      },
      // { name: "Requests", path: "/requests" },
      {
        name: "Requests",
        path: "/requests/received"
      }
    ],
    mentee: [
      {
        name: "Find Mentors",
        path: "/mentors"
      },
      // { name: "My Requests", path: "/my-requests" },
      {
        name: "My Requests",
        path: "/requests/sent"
      }
    ]
  };
  const allNavItems = [...commonNavItems, ...roleSpecificNavItems[role]];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex min-h-screen bg-gray-100", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", { className: "w-64 bg-purple-700 text-white p-4 flex-shrink-0 sticky top-0 h-screen", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center space-x-3 mb-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10 h-10 bg-white rounded-full flex items-center justify-center text-purple-700 font-bold", children: user.name?.charAt(0).toUpperCase() || "U" }, void 0, false, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "flex flex-col gap-2 mb-6", children: allNavItems.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.path, className: `px-3 py-2 rounded transition-colors ${currentPath === item.path ? "bg-purple-800 font-semibold" : "hover:bg-purple-600"}`, children: item.name }, item.name, false, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 96,
        columnNumber: 36
      }, this)) }, void 0, false, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      role === "admin" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/register", className: "block hover:bg-green-600 px-3 py-2 rounded text-green-200 font-semibold transition-colors", children: "+ Add User" }, void 0, false, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 102,
        columnNumber: 30
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/logout", className: "block hover:bg-red-600 px-3 py-2 rounded text-red-200 font-semibold transition-colors", children: "Logout" }, void 0, false, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 107,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center text-xs opacity-80 mt-2", children: [
          "Logged in as: ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "capitalize", children: role }, void 0, false, {
            fileName: "app/components/Layout.tsx",
            lineNumber: 111,
            columnNumber: 27
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Layout.tsx",
          lineNumber: 110,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Layout.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex-1 overflow-auto p-6", children }, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 117,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 80,
    columnNumber: 10
  }, this);
}
_s(Layout, "9HQn1rkLPttBP+QSK6GDQicXTV4=", false, function() {
  return [useMatches];
});
_c = Layout;
var _c;
$RefreshReg$(_c, "Layout");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
var import_session = __toESM(require_session(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\root.tsx"
  );
}
var links = () => [
  {
    rel: "stylesheet",
    href: tailwind_default
  }
  // optionally add fonts here
];
function App() {
  _s2();
  const {
    user,
    role
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Layout, { user, role, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 55,
    columnNumber: 10
  }, this);
}
_s2(App, "/DQdyrQiITmKMjSsCZ/cQPlemoM=", false, function() {
  return [useLoaderData];
});
_c2 = App;
var _c2;
$RefreshReg$(_c2, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  App as default,
  links
};
//# sourceMappingURL=/build/root-YIK36BOG.js.map
