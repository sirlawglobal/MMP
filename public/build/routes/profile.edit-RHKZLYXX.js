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
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/profile.edit.tsx
var import_node = __toESM(require_node(), 1);
var import_session = __toESM(require_session(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\profile.edit.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\profile.edit.tsx"
  );
  import.meta.hot.lastModified = "1751221948182.5203";
}
function EditProfile() {
  _s();
  const {
    user
  } = useLoaderData();
  const actionData = useActionData();
  return (
    // <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow">
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white p-6 rounded shadow max-w-2xl w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold mb-4 text-purple-800", children: "Edit Profile" }, void 0, false, {
        fileName: "app/routes/profile.edit.tsx",
        lineNumber: 76,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium mb-1", children: "Name" }, void 0, false, {
            fileName: "app/routes/profile.edit.tsx",
            lineNumber: 80,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "name", defaultValue: user.name, className: "w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400", required: true }, void 0, false, {
            fileName: "app/routes/profile.edit.tsx",
            lineNumber: 81,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.edit.tsx",
          lineNumber: 79,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium mb-1", children: "Bio" }, void 0, false, {
            fileName: "app/routes/profile.edit.tsx",
            lineNumber: 85,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { name: "bio", defaultValue: user.bio, rows: 3, className: "w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400" }, void 0, false, {
            fileName: "app/routes/profile.edit.tsx",
            lineNumber: 86,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.edit.tsx",
          lineNumber: 84,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium mb-1", children: "Skills (comma-separated)" }, void 0, false, {
            fileName: "app/routes/profile.edit.tsx",
            lineNumber: 90,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "skills", defaultValue: user.skills?.join(", "), className: "w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400" }, void 0, false, {
            fileName: "app/routes/profile.edit.tsx",
            lineNumber: 91,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.edit.tsx",
          lineNumber: 89,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium mb-1", children: "Goals (comma-separated)" }, void 0, false, {
            fileName: "app/routes/profile.edit.tsx",
            lineNumber: 95,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "goals", defaultValue: user.goals?.join(", "), className: "w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400" }, void 0, false, {
            fileName: "app/routes/profile.edit.tsx",
            lineNumber: 96,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.edit.tsx",
          lineNumber: 94,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition", children: "Save Changes" }, void 0, false, {
          fileName: "app/routes/profile.edit.tsx",
          lineNumber: 99,
          columnNumber: 9
        }, this),
        actionData?.success && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-green-600 text-sm mt-2 text-center", children: "Profile updated successfully!" }, void 0, false, {
          fileName: "app/routes/profile.edit.tsx",
          lineNumber: 103,
          columnNumber: 33
        }, this),
        actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-600 text-sm mt-2 text-center", children: actionData.error }, void 0, false, {
          fileName: "app/routes/profile.edit.tsx",
          lineNumber: 104,
          columnNumber: 31
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/profile.edit.tsx",
        lineNumber: 78,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/profile.edit.tsx",
      lineNumber: 74,
      columnNumber: 5
    }, this)
  );
}
_s(EditProfile, "XgBh3bAPUSBzbv3LvmQayqe+1zE=", false, function() {
  return [useLoaderData, useActionData];
});
_c = EditProfile;
var _c;
$RefreshReg$(_c, "EditProfile");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  EditProfile as default
};
//# sourceMappingURL=/build/routes/profile.edit-RHKZLYXX.js.map
