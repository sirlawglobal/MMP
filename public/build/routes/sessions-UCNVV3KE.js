import {
  require_sessions
} from "/build/_shared/chunk-BASD6ALX.js";
import {
  require_auth
} from "/build/_shared/chunk-JSCKBFOW.js";
import {
  require_node,
  require_session
} from "/build/_shared/chunk-XU4A42D2.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-VXYCMNCZ.js";
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
  import.meta.hot.lastModified = "1751734375070.5046";
}
function SessionsPage() {
  _s();
  const {
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-semibold mb-6", children: "Your Sessions" }, void 0, false, {
      fileName: "app/routes/sessions.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    sessions.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg p-6 shadow text-center py-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "No upcoming sessions scheduled." }, void 0, false, {
      fileName: "app/routes/sessions.tsx",
      lineNumber: 59,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/sessions.tsx",
      lineNumber: 58,
      columnNumber: 32
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg p-6 shadow", children: sessions.map((session) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b border-gray-100 py-4 last:border-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-start", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-medium", children: [
          "With ",
          session.mentor.name,
          " (Mentor)"
        ] }, void 0, true, {
          fileName: "app/routes/sessions.tsx",
          lineNumber: 64,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: [
          formatDate(session.date.toString()),
          ", ",
          session.startTime,
          "-",
          session.endTime
        ] }, void 0, true, {
          fileName: "app/routes/sessions.tsx",
          lineNumber: 67,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/sessions.tsx",
        lineNumber: 63,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/sessions/${session.id}`, className: "text-blue-600 hover:underline", children: "Details" }, void 0, false, {
          fileName: "app/routes/sessions.tsx",
          lineNumber: 72,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/sessions/${session.id}/cancel`, className: "text-red-600 hover:underline", children: "Cancel" }, void 0, false, {
          fileName: "app/routes/sessions.tsx",
          lineNumber: 75,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/sessions.tsx",
        lineNumber: 71,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/sessions.tsx",
      lineNumber: 62,
      columnNumber: 15
    }, this) }, session.id, false, {
      fileName: "app/routes/sessions.tsx",
      lineNumber: 61,
      columnNumber: 36
    }, this)) }, void 0, false, {
      fileName: "app/routes/sessions.tsx",
      lineNumber: 60,
      columnNumber: 18
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/sessions.tsx",
    lineNumber: 55,
    columnNumber: 10
  }, this);
}
_s(SessionsPage, "SAsSlLElM08PXSB8XjDlMx5GjTU=", false, function() {
  return [useLoaderData];
});
_c = SessionsPage;
var _c;
$RefreshReg$(_c, "SessionsPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SessionsPage as default
};
//# sourceMappingURL=/build/routes/sessions-UCNVV3KE.js.map
