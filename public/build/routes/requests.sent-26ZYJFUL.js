import {
  require_requests
} from "/build/_shared/chunk-ZASB4IMB.js";
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

// app/routes/requests.sent.tsx
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
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\requests.sent.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\requests.sent.tsx"
  );
  import.meta.hot.lastModified = "1751717613938.4834";
}
function SentRequests() {
  _s();
  const {
    requests
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold mb-6", children: "My Requests" }, void 0, false, {
      fileName: "app/routes/requests.sent.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    requests.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: "You haven't sent any requests yet." }, void 0, false, {
      fileName: "app/routes/requests.sent.tsx",
      lineNumber: 52,
      columnNumber: 32
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: requests.map((request) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border rounded-lg p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-start", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-semibold", children: request.mentor.name }, void 0, false, {
            fileName: "app/routes/requests.sent.tsx",
            lineNumber: 56,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mt-1", children: request.message }, void 0, false, {
            fileName: "app/routes/requests.sent.tsx",
            lineNumber: 57,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/requests.sent.tsx",
          lineNumber: 55,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-3 py-1 rounded-full text-sm ${request.status === "PENDING" ? "bg-yellow-100 text-yellow-800" : request.status === "ACCEPTED" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`, children: request.status }, void 0, false, {
          fileName: "app/routes/requests.sent.tsx",
          lineNumber: 59,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/requests.sent.tsx",
        lineNumber: 54,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 text-sm text-gray-500", children: [
        "Sent on ",
        new Date(request.createdAt).toLocaleDateString()
      ] }, void 0, true, {
        fileName: "app/routes/requests.sent.tsx",
        lineNumber: 63,
        columnNumber: 15
      }, this),
      request.status === "ACCEPTED" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/sessions/new?mentorId=${request.mentor._id}`, className: "mt-3 inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700", children: "Schedule Session" }, void 0, false, {
        fileName: "app/routes/requests.sent.tsx",
        lineNumber: 66,
        columnNumber: 49
      }, this)
    ] }, request._id, true, {
      fileName: "app/routes/requests.sent.tsx",
      lineNumber: 53,
      columnNumber: 36
    }, this)) }, void 0, false, {
      fileName: "app/routes/requests.sent.tsx",
      lineNumber: 52,
      columnNumber: 102
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/requests.sent.tsx",
    lineNumber: 50,
    columnNumber: 10
  }, this);
}
_s(SentRequests, "nAwy8qSyIsJpsiLKDjXpybga/FM=", false, function() {
  return [useLoaderData];
});
_c = SentRequests;
var _c;
$RefreshReg$(_c, "SentRequests");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  SentRequests as default
};
//# sourceMappingURL=/build/routes/requests.sent-26ZYJFUL.js.map
