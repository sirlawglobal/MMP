import {
  require_db
} from "/build/_shared/chunk-KONDUBG3.js";
import {
  require_auth
} from "/build/_shared/chunk-JSCKBFOW.js";
import {
  require_node,
  require_session
} from "/build/_shared/chunk-XU4A42D2.js";
import {
  Form
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

// app/routes/sessions.$sessionId.cancel.tsx
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
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\sessions.$sessionId.cancel.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\sessions.$sessionId.cancel.tsx"
  );
  import.meta.hot.lastModified = "1751226562576.0603";
}
function CancelSession() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-semibold mb-6 text-purple-800", children: "Cancel Session" }, void 0, false, {
      fileName: "app/routes/sessions.$sessionId.cancel.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg p-6 shadow", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mb-4", children: "Are you sure you want to cancel this session?" }, void 0, false, {
        fileName: "app/routes/sessions.$sessionId.cancel.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700", children: "Confirm Cancel" }, void 0, false, {
        fileName: "app/routes/sessions.$sessionId.cancel.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/sessions.$sessionId.cancel.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/sessions.$sessionId.cancel.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/sessions.$sessionId.cancel.tsx",
    lineNumber: 56,
    columnNumber: 10
  }, this);
}
_c = CancelSession;
var _c;
$RefreshReg$(_c, "CancelSession");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  CancelSession as default
};
//# sourceMappingURL=/build/routes/sessions.$sessionId.cancel-X5NLRKP6.js.map
