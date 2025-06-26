import {
  require_session
} from "/build/_shared/chunk-V22J52NZ.js";
import {
  require_auth,
  require_node
} from "/build/_shared/chunk-AOWKTJXZ.js";
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
  import.meta.hot.lastModified = "1750965227006.3364";
}
var skillsOptions = ["Marketing", "UI/UX", "Product Design", "Software Development", "Business Strategy", "Finance", "Leadership"];
function EditProfile() {
  _s();
  const {
    user
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex min-h-screen bg-gray-100", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", { className: "w-60 bg-purple-700 text-white flex flex-col p-4" }, void 0, false, {
      fileName: "app/routes/profile.edit.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex-1 p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-xl font-semibold mb-6 text-purple-800", children: "EDIT PROFILE" }, void 0, false, {
        fileName: "app/routes/profile.edit.tsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "bg-white rounded-lg p-6 shadow", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-gray-700 mb-2", htmlFor: "name", children: "Full Name" }, void 0, false, {
            fileName: "app/routes/profile.edit.tsx",
            lineNumber: 73,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", id: "name", name: "name", defaultValue: user.name, className: "w-full p-2 border rounded", required: true }, void 0, false, {
            fileName: "app/routes/profile.edit.tsx",
            lineNumber: 76,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.edit.tsx",
          lineNumber: 72,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-gray-700 mb-2", htmlFor: "bio", children: "Bio" }, void 0, false, {
            fileName: "app/routes/profile.edit.tsx",
            lineNumber: 80,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { id: "bio", name: "bio", defaultValue: user.bio, className: "w-full p-2 border rounded", rows: 3, required: true }, void 0, false, {
            fileName: "app/routes/profile.edit.tsx",
            lineNumber: 83,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.edit.tsx",
          lineNumber: 79,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-gray-700 mb-2", children: "Skills" }, void 0, false, {
            fileName: "app/routes/profile.edit.tsx",
            lineNumber: 87,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 gap-2", children: skillsOptions.map((skill) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", id: `skill-${skill}`, name: "skills", value: skill, defaultChecked: user.skills?.includes(skill), className: "mr-2" }, void 0, false, {
              fileName: "app/routes/profile.edit.tsx",
              lineNumber: 92,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: `skill-${skill}`, children: skill }, void 0, false, {
              fileName: "app/routes/profile.edit.tsx",
              lineNumber: 93,
              columnNumber: 19
            }, this)
          ] }, skill, true, {
            fileName: "app/routes/profile.edit.tsx",
            lineNumber: 91,
            columnNumber: 43
          }, this)) }, void 0, false, {
            fileName: "app/routes/profile.edit.tsx",
            lineNumber: 90,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.edit.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-gray-700 mb-2", htmlFor: "goals", children: "Goals (comma separated)" }, void 0, false, {
            fileName: "app/routes/profile.edit.tsx",
            lineNumber: 99,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { id: "goals", name: "goals", defaultValue: user.goals?.join(", "), className: "w-full p-2 border rounded", rows: 2, required: true }, void 0, false, {
            fileName: "app/routes/profile.edit.tsx",
            lineNumber: 102,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500 mt-1", children: "Example: Improve product design skills, Learn marketing strategies" }, void 0, false, {
            fileName: "app/routes/profile.edit.tsx",
            lineNumber: 103,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/profile.edit.tsx",
          lineNumber: 98,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700", children: "Save Profile" }, void 0, false, {
          fileName: "app/routes/profile.edit.tsx",
          lineNumber: 107,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/profile.edit.tsx",
          lineNumber: 106,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/profile.edit.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/profile.edit.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/profile.edit.tsx",
    lineNumber: 61,
    columnNumber: 10
  }, this);
}
_s(EditProfile, "FpjQZylbefWQChk+MjGNfSb2jDo=", false, function() {
  return [useLoaderData];
});
_c = EditProfile;
var _c;
$RefreshReg$(_c, "EditProfile");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  EditProfile as default
};
//# sourceMappingURL=/build/routes/profile.edit-JQ4GQFQ4.js.map
