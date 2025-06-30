import {
  require_sessions
} from "/build/_shared/chunk-BASD6ALX.js";
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
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/sessions.tsx
var import_node = __toESM(require_node(), 1);
var import_session = __toESM(require_session(), 1);
var import_sessions = __toESM(require_sessions(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\sessions.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\sessions.tsx"
  );
  import.meta.hot.lastModified = "1751226060995.4153";
}
function Sessions() {
  _s();
  const {
    user,
    role,
    sessions
  } = useLoaderData();
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric"
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-semibold mb-6 text-purple-800", children: "Your Sessions" }, void 0, false, {
      fileName: "app/routes/sessions.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg p-6 shadow", children: sessions.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "No sessions scheduled yet." }, void 0, false, {
      fileName: "app/routes/sessions.tsx",
      lineNumber: 65,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/sessions.tsx",
      lineNumber: 64,
      columnNumber: 34
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: sessions.map((session) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b border-gray-100 pb-4 last:border-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-start", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-medium text-gray-800", children: [
          "With ",
          session.mentee.name
        ] }, void 0, true, {
          fileName: "app/routes/sessions.tsx",
          lineNumber: 70,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: [
          formatDate(session.date.toString()),
          ", ",
          session.startTime,
          "-",
          session.endTime
        ] }, void 0, true, {
          fileName: "app/routes/sessions.tsx",
          lineNumber: 71,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `inline-block mt-1 px-2 py-1 text-xs rounded ${session.status === "upcoming" ? "bg-blue-100 text-blue-800" : session.status === "completed" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`, children: session.status.charAt(0).toUpperCase() + session.status.slice(1) }, void 0, false, {
          fileName: "app/routes/sessions.tsx",
          lineNumber: 74,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/sessions.tsx",
        lineNumber: 69,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex space-x-2", children: [
        session.status === "upcoming" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/sessions/${session.id}/cancel`, className: "text-red-600 text-sm hover:underline", children: "Cancel" }, void 0, false, {
          fileName: "app/routes/sessions.tsx",
          lineNumber: 79,
          columnNumber: 55
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/sessions/${session.id}`, className: "text-blue-600 text-sm hover:underline", children: "Details" }, void 0, false, {
          fileName: "app/routes/sessions.tsx",
          lineNumber: 82,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/sessions.tsx",
        lineNumber: 78,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/sessions.tsx",
      lineNumber: 68,
      columnNumber: 17
    }, this) }, session.id, false, {
      fileName: "app/routes/sessions.tsx",
      lineNumber: 67,
      columnNumber: 38
    }, this)) }, void 0, false, {
      fileName: "app/routes/sessions.tsx",
      lineNumber: 66,
      columnNumber: 20
    }, this) }, void 0, false, {
      fileName: "app/routes/sessions.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/sessions.tsx",
    lineNumber: 61,
    columnNumber: 10
  }, this);
}
_s(Sessions, "8sddV0WsxSOR4tEP47YL6QbD0EE=", false, function() {
  return [useLoaderData];
});
_c = Sessions;
var _c;
$RefreshReg$(_c, "Sessions");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Sessions as default
};
//# sourceMappingURL=/build/routes/sessions-VDJH7HUP.js.map
