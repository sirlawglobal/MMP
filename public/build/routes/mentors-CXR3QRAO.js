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
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/mentors.tsx
var import_node = __toESM(require_node(), 1);
var import_session = __toESM(require_session(), 1);
var import_db = __toESM(require_db(), 1);

// app/components/MentorCard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\MentorCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\MentorCard.tsx"
  );
  import.meta.hot.lastModified = "1751512491836.3638";
}
function MentorCard({
  mentor
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border rounded-lg p-6 shadow-sm bg-white", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold", children: mentor.name }, void 0, false, {
          fileName: "app/components/MentorCard.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mb-3", children: mentor.bio }, void 0, false, {
          fileName: "app/components/MentorCard.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/MentorCard.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm", children: mentor.role }, void 0, false, {
        fileName: "app/components/MentorCard.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/MentorCard.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-2 mb-4", children: mentor.skills?.map((skill) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm", children: skill }, skill, false, {
      fileName: "app/components/MentorCard.tsx",
      lineNumber: 38,
      columnNumber: 38
    }, this)) }, void 0, false, {
      fileName: "app/components/MentorCard.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", action: "/requests", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "mentorId", value: mentor._id }, void 0, false, {
        fileName: "app/components/MentorCard.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { name: "message", placeholder: "Why do you want to connect with this mentor?", className: "w-full p-2 border rounded mb-3 text-sm", rows: 3, required: true }, void 0, false, {
        fileName: "app/components/MentorCard.tsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 text-sm", children: "Request Mentorship" }, void 0, false, {
        fileName: "app/components/MentorCard.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/MentorCard.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/MentorCard.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c = MentorCard;
var _c;
$RefreshReg$(_c, "MentorCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/mentors.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\mentors.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\mentors.tsx"
  );
  import.meta.hot.lastModified = "1751512518092.3232";
}
function MentorsPage() {
  _s();
  const {
    mentors
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container mx-auto p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-2xl font-bold mb-6", children: "Find Mentors" }, void 0, false, {
      fileName: "app/routes/mentors.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: mentors.map((mentor) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MentorCard, { mentor }, mentor._id, false, {
      fileName: "app/routes/mentors.tsx",
      lineNumber: 56,
      columnNumber: 32
    }, this)) }, void 0, false, {
      fileName: "app/routes/mentors.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/mentors.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
}
_s(MentorsPage, "eNzfjnibattr+q+oe68CSU2U2zs=", false, function() {
  return [useLoaderData];
});
_c2 = MentorsPage;
var _c2;
$RefreshReg$(_c2, "MentorsPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  MentorsPage as default
};
//# sourceMappingURL=/build/routes/mentors-CXR3QRAO.js.map
