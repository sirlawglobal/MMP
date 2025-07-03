import {
  require_db
} from "/build/_shared/chunk-KONDUBG3.js";
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
  Form,
  useActionData,
  useLoaderData
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
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/sessions.new.tsx
var import_node = __toESM(require_node(), 1);
var import_session = __toESM(require_session(), 1);
var import_sessions = __toESM(require_sessions(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_db = __toESM(require_db(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\sessions.new.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\sessions.new.tsx"
  );
  import.meta.hot.lastModified = "1751226703179.3623";
}
function NewSession() {
  _s();
  const {
    user,
    role,
    mentors
  } = useLoaderData();
  const actionData = useActionData();
  if (role !== "mentee") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Only mentees can schedule sessions." }, void 0, false, {
      fileName: "app/routes/sessions.new.tsx",
      lineNumber: 101,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-semibold mb-6 text-purple-800", children: "Schedule a New Session" }, void 0, false, {
      fileName: "app/routes/sessions.new.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "bg-white rounded-lg p-6 shadow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-gray-700", children: "Select Mentor" }, void 0, false, {
          fileName: "app/routes/sessions.new.tsx",
          lineNumber: 107,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "mentorId", className: "w-full p-2 border rounded", children: mentors.map((mentor) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: mentor.id, children: mentor.name }, mentor.id, false, {
          fileName: "app/routes/sessions.new.tsx",
          lineNumber: 109,
          columnNumber: 36
        }, this)) }, void 0, false, {
          fileName: "app/routes/sessions.new.tsx",
          lineNumber: 108,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/sessions.new.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-gray-700", children: "Date" }, void 0, false, {
          fileName: "app/routes/sessions.new.tsx",
          lineNumber: 113,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "date", name: "date", className: "w-full p-2 border rounded", required: true }, void 0, false, {
          fileName: "app/routes/sessions.new.tsx",
          lineNumber: 114,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/sessions.new.tsx",
        lineNumber: 112,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-gray-700", children: "Start Time" }, void 0, false, {
          fileName: "app/routes/sessions.new.tsx",
          lineNumber: 117,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "time", name: "startTime", className: "w-full p-2 border rounded", required: true }, void 0, false, {
          fileName: "app/routes/sessions.new.tsx",
          lineNumber: 118,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/sessions.new.tsx",
        lineNumber: 116,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-gray-700", children: "End Time" }, void 0, false, {
          fileName: "app/routes/sessions.new.tsx",
          lineNumber: 121,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "time", name: "endTime", className: "w-full p-2 border rounded", required: true }, void 0, false, {
          fileName: "app/routes/sessions.new.tsx",
          lineNumber: 122,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/sessions.new.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, this),
      actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-600", children: actionData.error }, void 0, false, {
        fileName: "app/routes/sessions.new.tsx",
        lineNumber: 124,
        columnNumber: 31
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700", children: "Schedule Session" }, void 0, false, {
        fileName: "app/routes/sessions.new.tsx",
        lineNumber: 125,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/sessions.new.tsx",
      lineNumber: 105,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/sessions.new.tsx",
    lineNumber: 103,
    columnNumber: 10
  }, this);
}
_s(NewSession, "PKwgARwWiGjUtcWpAz+126ow5OM=", false, function() {
  return [useLoaderData, useActionData];
});
_c = NewSession;
var _c;
$RefreshReg$(_c, "NewSession");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  NewSession as default
};
//# sourceMappingURL=/build/routes/sessions.new-OVGESBRS.js.map
