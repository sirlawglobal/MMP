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
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:~/utils/requests.server
var require_requests = __commonJS({
  "empty-module:~/utils/requests.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/requests.received.tsx
var import_node = __toESM(require_node(), 1);
var import_session = __toESM(require_session(), 1);
var import_requests = __toESM(require_requests(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\requests.received.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\requests.received.tsx"
  );
  import.meta.hot.lastModified = "1751513997228.31";
}
function ReceivedRequests() {
  _s();
  const {
    requests
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold mb-6", children: "Mentorship Requests" }, void 0, false, {
      fileName: "app/routes/requests.received.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    requests.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "You don't have any pending requests." }, void 0, false, {
      fileName: "app/routes/requests.received.tsx",
      lineNumber: 44,
      columnNumber: 32
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: requests.map((request) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border rounded-lg p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-semibold", children: request.mentee.name }, void 0, false, {
          fileName: "app/routes/requests.received.tsx",
          lineNumber: 48,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mt-1", children: request.message }, void 0, false, {
          fileName: "app/routes/requests.received.tsx",
          lineNumber: 49,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-gray-500", children: [
          "Skills: ",
          request.mentee.skills?.join(", ") || "Not specified"
        ] }, void 0, true, {
          fileName: "app/routes/requests.received.tsx",
          lineNumber: 51,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/requests.received.tsx",
          lineNumber: 50,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm text-gray-500", children: [
          "Goals: ",
          request.mentee.goals?.join(", ") || "Not specified"
        ] }, void 0, true, {
          fileName: "app/routes/requests.received.tsx",
          lineNumber: 56,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/requests.received.tsx",
          lineNumber: 55,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/requests.received.tsx",
        lineNumber: 47,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/requests.received.tsx",
        lineNumber: 46,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 flex space-x-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", action: `/requests/${request._id}/respond`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "status", value: "ACCEPTED" }, void 0, false, {
            fileName: "app/routes/requests.received.tsx",
            lineNumber: 64,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600", children: "Accept" }, void 0, false, {
            fileName: "app/routes/requests.received.tsx",
            lineNumber: 65,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/requests.received.tsx",
          lineNumber: 63,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", action: `/requests/${request._id}/respond`, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "status", value: "REJECTED" }, void 0, false, {
            fileName: "app/routes/requests.received.tsx",
            lineNumber: 70,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600", children: "Reject" }, void 0, false, {
            fileName: "app/routes/requests.received.tsx",
            lineNumber: 71,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/requests.received.tsx",
          lineNumber: 69,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/requests.received.tsx",
        lineNumber: 62,
        columnNumber: 15
      }, this)
    ] }, request._id, true, {
      fileName: "app/routes/requests.received.tsx",
      lineNumber: 45,
      columnNumber: 36
    }, this)) }, void 0, false, {
      fileName: "app/routes/requests.received.tsx",
      lineNumber: 44,
      columnNumber: 104
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/requests.received.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
}
_s(ReceivedRequests, "nAwy8qSyIsJpsiLKDjXpybga/FM=", false, function() {
  return [useLoaderData];
});
_c = ReceivedRequests;
var _c;
$RefreshReg$(_c, "ReceivedRequests");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  ReceivedRequests as default
};
//# sourceMappingURL=/build/routes/requests.received-A277ODZU.js.map
