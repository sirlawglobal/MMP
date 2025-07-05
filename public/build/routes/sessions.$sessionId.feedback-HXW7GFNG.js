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
  Form,
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

// app/routes/sessions.$sessionId.feedback.tsx
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
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\sessions.$sessionId.feedback.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\sessions.$sessionId.feedback.tsx"
  );
  import.meta.hot.lastModified = "1751732038760.3733";
}
function SessionFeedback() {
  _s();
  const {
    sessionId
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-semibold mb-6 text-purple-800", children: "Submit Feedback" }, void 0, false, {
      fileName: "app/routes/sessions.$sessionId.feedback.tsx",
      lineNumber: 103,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg p-6 shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-gray-700", children: "Rating (1-5)" }, void 0, false, {
          fileName: "app/routes/sessions.$sessionId.feedback.tsx",
          lineNumber: 107,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", name: "rating", min: "1", max: "5", required: true, className: "w-full p-2 border rounded" }, void 0, false, {
          fileName: "app/routes/sessions.$sessionId.feedback.tsx",
          lineNumber: 108,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/sessions.$sessionId.feedback.tsx",
        lineNumber: 106,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-gray-700", children: "Comment" }, void 0, false, {
          fileName: "app/routes/sessions.$sessionId.feedback.tsx",
          lineNumber: 111,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { name: "comment", className: "w-full p-2 border rounded", rows: 4 }, void 0, false, {
          fileName: "app/routes/sessions.$sessionId.feedback.tsx",
          lineNumber: 112,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/sessions.$sessionId.feedback.tsx",
        lineNumber: 110,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700", children: "Submit Feedback" }, void 0, false, {
        fileName: "app/routes/sessions.$sessionId.feedback.tsx",
        lineNumber: 114,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/sessions.$sessionId.feedback.tsx",
      lineNumber: 105,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/sessions.$sessionId.feedback.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/sessions.$sessionId.feedback.tsx",
    lineNumber: 102,
    columnNumber: 10
  }, this);
}
_s(SessionFeedback, "NRQ6xFJ7C6n66SCpZG+1mQ9XJIc=", false, function() {
  return [useLoaderData];
});
_c = SessionFeedback;
var _c;
$RefreshReg$(_c, "SessionFeedback");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SessionFeedback as default
};
//# sourceMappingURL=/build/routes/sessions.$sessionId.feedback-HXW7GFNG.js.map
