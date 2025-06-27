import {
  require_auth,
  require_node,
  require_session
} from "/build/_shared/chunk-LMQZW5TR.js";
import {
  Form,
  useActionData,
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
  import.meta.hot.lastModified = "1750989555079.861";
}
function EditProfile() {
  _s();
  const {
    user
  } = useLoaderData();
  const actionData = useActionData();
  return (
    // <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow">
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white p-8 rounded-xl shadow-lg w-full max-w-2xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-purple-800 mb-8 text-center", children: "Edit Profile" }, void 0, false, {
        fileName: "app/routes/profile.edit.tsx",
        lineNumber: 76,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "name", defaultValue: user.name, required: true, className: "peer w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-purple-600 transition", placeholder: "Name" }, void 0, false, {
            fileName: "app/routes/profile.edit.tsx",
            lineNumber: 81,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "absolute left-0 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-purple-600", children: "Name" }, void 0, false, {
            fileName: "app/routes/profile.edit.tsx",
            lineNumber: 82,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.edit.tsx",
          lineNumber: 80,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { name: "bio", rows: 3, defaultValue: user.bio, placeholder: "Bio", className: "peer w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-purple-600 transition resize-none" }, void 0, false, {
            fileName: "app/routes/profile.edit.tsx",
            lineNumber: 89,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "absolute left-0 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-purple-600", children: "Bio" }, void 0, false, {
            fileName: "app/routes/profile.edit.tsx",
            lineNumber: 90,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.edit.tsx",
          lineNumber: 88,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "skills", defaultValue: user.skills?.join(", "), placeholder: "e.g. React, Node.js, MongoDB", className: "peer w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-purple-600 transition" }, void 0, false, {
            fileName: "app/routes/profile.edit.tsx",
            lineNumber: 97,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "absolute left-0 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-purple-600", children: "Skills (comma-separated)" }, void 0, false, {
            fileName: "app/routes/profile.edit.tsx",
            lineNumber: 98,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.edit.tsx",
          lineNumber: 96,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "goals", defaultValue: user.goals?.join(", "), placeholder: "e.g. Learn TypeScript, Improve UI Design", className: "peer w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-purple-600 transition" }, void 0, false, {
            fileName: "app/routes/profile.edit.tsx",
            lineNumber: 105,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "absolute left-0 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-1 peer-focus:text-sm peer-focus:text-purple-600", children: "Goals (comma-separated)" }, void 0, false, {
            fileName: "app/routes/profile.edit.tsx",
            lineNumber: 106,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.edit.tsx",
          lineNumber: 104,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "w-full py-2 bg-purple-700 hover:bg-purple-800 text-white rounded-md transition", children: "Save Changes" }, void 0, false, {
          fileName: "app/routes/profile.edit.tsx",
          lineNumber: 112,
          columnNumber: 7
        }, this),
        actionData?.success && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-green-600 text-sm text-center", children: "Profile updated successfully!" }, void 0, false, {
          fileName: "app/routes/profile.edit.tsx",
          lineNumber: 117,
          columnNumber: 31
        }, this),
        actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-600 text-sm text-center", children: actionData.error }, void 0, false, {
          fileName: "app/routes/profile.edit.tsx",
          lineNumber: 118,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/profile.edit.tsx",
        lineNumber: 78,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/profile.edit.tsx",
      lineNumber: 75,
      columnNumber: 3
    }, this) }, void 0, false, {
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
//# sourceMappingURL=/build/routes/profile.edit-RVCSLBY4.js.map
