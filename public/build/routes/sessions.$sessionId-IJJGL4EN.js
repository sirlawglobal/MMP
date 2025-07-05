import {
  require_auth
} from "/build/_shared/chunk-JSCKBFOW.js";
import {
  require_db
} from "/build/_shared/chunk-KONDUBG3.js";
import {
  require_node,
  require_session
} from "/build/_shared/chunk-XU4A42D2.js";
import {
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

// app/routes/sessions.$sessionId.tsx
var import_node = __toESM(require_node(), 1);
var import_session = __toESM(require_session(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_db = __toESM(require_db(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\sessions.$sessionId.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\sessions.$sessionId.tsx"
  );
  import.meta.hot.lastModified = "1751732042916.2654";
}
function SessionDetails() {
  _s();
  const {
    session
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-semibold mb-6 text-purple-800", children: "Session Details" }, void 0, false, {
      fileName: "app/routes/sessions.$sessionId.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg p-6 shadow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-medium mb-4", children: [
        "Session with ",
        session.mentor.name,
        " and ",
        session.mentee.name
      ] }, void 0, true, {
        fileName: "app/routes/sessions.$sessionId.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: [
        "Date: ",
        formatDate(session.date.toString())
      ] }, void 0, true, {
        fileName: "app/routes/sessions.$sessionId.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: [
        "Time: ",
        session.startTime,
        " - ",
        session.endTime
      ] }, void 0, true, {
        fileName: "app/routes/sessions.$sessionId.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: [
        "Status: ",
        session.status.charAt(0).toUpperCase() + session.status.slice(1)
      ] }, void 0, true, {
        fileName: "app/routes/sessions.$sessionId.tsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      session.feedback && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: [
          "Feedback Rating: ",
          session.feedback.rating || "N/A"
        ] }, void 0, true, {
          fileName: "app/routes/sessions.$sessionId.tsx",
          lineNumber: 97,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: [
          "Feedback Comment: ",
          session.feedback.comment || "N/A"
        ] }, void 0, true, {
          fileName: "app/routes/sessions.$sessionId.tsx",
          lineNumber: 98,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/sessions.$sessionId.tsx",
        lineNumber: 96,
        columnNumber: 30
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/sessions.$sessionId.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/sessions.$sessionId.tsx",
    lineNumber: 85,
    columnNumber: 10
  }, this);
}
_s(SessionDetails, "EOfQd6wf1EWnvALdPsGqAqhihYQ=", false, function() {
  return [useLoaderData];
});
_c = SessionDetails;
var _c;
$RefreshReg$(_c, "SessionDetails");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SessionDetails as default
};
//# sourceMappingURL=/build/routes/sessions.$sessionId-IJJGL4EN.js.map
