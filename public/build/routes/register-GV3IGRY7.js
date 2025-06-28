import {
  require_auth,
  require_node,
  require_session
} from "/build/_shared/chunk-LMQZW5TR.js";
import {
  Form,
  useActionData,
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

// app/routes/register.tsx
var import_node = __toESM(require_node(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_session = __toESM(require_session(), 1);
var import_auth2 = __toESM(require_auth(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\register.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\register.tsx"
  );
  import.meta.hot.lastModified = "1750988748023.5217";
}
function RegisterPage() {
  _s();
  const actionData = useActionData();
  const loaderData = useLoaderData();
  const isAdmin = loaderData.access === "admin";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen flex items-center justify-center bg-gray-100 px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-md bg-white p-8 rounded shadow", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold mb-6 text-center", children: isAdmin ? "Add New User" : "Register" }, void 0, false, {
      fileName: "app/routes/register.tsx",
      lineNumber: 79,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium mb-1", children: "Email" }, void 0, false, {
          fileName: "app/routes/register.tsx",
          lineNumber: 84,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "email", type: "email", placeholder: "Email", required: true, className: "w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400" }, void 0, false, {
          fileName: "app/routes/register.tsx",
          lineNumber: 85,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/register.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium mb-1", children: "Password" }, void 0, false, {
          fileName: "app/routes/register.tsx",
          lineNumber: 89,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "password", type: "password", placeholder: "Password", required: true, className: "w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400" }, void 0, false, {
          fileName: "app/routes/register.tsx",
          lineNumber: 90,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/register.tsx",
        lineNumber: 88,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium mb-1", children: "Role" }, void 0, false, {
          fileName: "app/routes/register.tsx",
          lineNumber: 94,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "role", required: true, className: "w-full px-4 py-2 border rounded bg-white focus:outline-none focus:ring focus:border-blue-400", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "Select role" }, void 0, false, {
            fileName: "app/routes/register.tsx",
            lineNumber: 96,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "mentee", children: "Mentee" }, void 0, false, {
            fileName: "app/routes/register.tsx",
            lineNumber: 97,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "mentor", children: "Mentor" }, void 0, false, {
            fileName: "app/routes/register.tsx",
            lineNumber: 98,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/register.tsx",
          lineNumber: 95,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/register.tsx",
        lineNumber: 93,
        columnNumber: 11
      }, this),
      actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-500 text-sm", children: actionData.error }, void 0, false, {
        fileName: "app/routes/register.tsx",
        lineNumber: 102,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition", children: isAdmin ? "Add New User" : "Register" }, void 0, false, {
        fileName: "app/routes/register.tsx",
        lineNumber: 104,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/register.tsx",
      lineNumber: 82,
      columnNumber: 9
    }, this),
    loaderData.access === "public" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-4 text-center text-sm", children: [
      "Already have an account?",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/login", className: "text-blue-600 hover:underline", children: "Login here" }, void 0, false, {
        fileName: "app/routes/register.tsx",
        lineNumber: 111,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/register.tsx",
      lineNumber: 109,
      columnNumber: 44
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/register.tsx",
    lineNumber: 78,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/register.tsx",
    lineNumber: 77,
    columnNumber: 10
  }, this);
}
_s(RegisterPage, "qo01Qi6sIko5PX2IpWLAxdk5Zac=", false, function() {
  return [useActionData, useLoaderData];
});
_c = RegisterPage;
var _c;
$RefreshReg$(_c, "RegisterPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  RegisterPage as default
};
//# sourceMappingURL=/build/routes/register-GV3IGRY7.js.map
