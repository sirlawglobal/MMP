import {
  require_db
} from "/build/_shared/chunk-KONDUBG3.js";
import {
  require_node,
  require_session
} from "/build/_shared/chunk-XU4A42D2.js";
import {
  useFetcher,
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

// app/routes/account.availability.tsx
var import_node = __toESM(require_node(), 1);
var import_session = __toESM(require_session(), 1);
var import_db = __toESM(require_db(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\account.availability.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\account.availability.tsx"
  );
  import.meta.hot.lastModified = "1751745885008.9187";
}
function AvailabilitySettings() {
  _s();
  const {
    availability
  } = useLoaderData();
  const fetcher = useFetcher();
  const days = [{
    id: "monday",
    name: "Monday"
  }, {
    id: "tuesday",
    name: "Tuesday"
  }, {
    id: "wednesday",
    name: "Wednesday"
  }, {
    id: "thursday",
    name: "Thursday"
  }, {
    id: "friday",
    name: "Friday"
  }, {
    id: "saturday",
    name: "Saturday"
  }, {
    id: "sunday",
    name: "Sunday"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-2xl mx-auto p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold mb-6", children: "Set Your Availability" }, void 0, false, {
      fileName: "app/routes/account.availability.tsx",
      lineNumber: 157,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border rounded-lg p-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "font-medium text-lg mb-3", children: "Meeting Buffer Times" }, void 0, false, {
            fileName: "app/routes/account.availability.tsx",
            lineNumber: 163,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Before Meetings (minutes)" }, void 0, false, {
                fileName: "app/routes/account.availability.tsx",
                lineNumber: 166,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", name: "bufferBefore", defaultValue: availability.bufferBefore, min: "0", max: "60", className: "w-full p-2 border rounded" }, void 0, false, {
                fileName: "app/routes/account.availability.tsx",
                lineNumber: 169,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/account.availability.tsx",
              lineNumber: 165,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "After Meetings (minutes)" }, void 0, false, {
                fileName: "app/routes/account.availability.tsx",
                lineNumber: 172,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "number", name: "bufferAfter", defaultValue: availability.bufferAfter, min: "0", max: "60", className: "w-full p-2 border rounded" }, void 0, false, {
                fileName: "app/routes/account.availability.tsx",
                lineNumber: 175,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/account.availability.tsx",
              lineNumber: 171,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/account.availability.tsx",
            lineNumber: 164,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/account.availability.tsx",
          lineNumber: 162,
          columnNumber: 11
        }, this),
        days.map((day) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border rounded-lg p-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between mb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "flex items-center space-x-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "checkbox", name: `${day.id}-enabled`, defaultChecked: availability[day.id].enabled, onChange: (e) => {
              const newValue = e.target.checked;
              const availabilityInput = document.querySelector(`input[name="availability"]`);
              const currentValue = JSON.parse(availabilityInput.value);
              currentValue[day.id].enabled = newValue;
              availabilityInput.value = JSON.stringify(currentValue);
            }, className: "h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" }, void 0, false, {
              fileName: "app/routes/account.availability.tsx",
              lineNumber: 184,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-medium", children: day.name }, void 0, false, {
              fileName: "app/routes/account.availability.tsx",
              lineNumber: 191,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/account.availability.tsx",
            lineNumber: 183,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/account.availability.tsx",
            lineNumber: 182,
            columnNumber: 15
          }, this),
          availability[day.id].enabled && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Start Time" }, void 0, false, {
                fileName: "app/routes/account.availability.tsx",
                lineNumber: 197,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "time", name: `${day.id}-startTime`, defaultValue: availability[day.id].startTime, onChange: (e) => {
                const newValue = e.target.value;
                const availabilityInput = document.querySelector(`input[name="availability"]`);
                const currentValue = JSON.parse(availabilityInput.value);
                currentValue[day.id].startTime = newValue;
                availabilityInput.value = JSON.stringify(currentValue);
              }, className: "w-full p-2 border rounded" }, void 0, false, {
                fileName: "app/routes/account.availability.tsx",
                lineNumber: 200,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/account.availability.tsx",
              lineNumber: 196,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "End Time" }, void 0, false, {
                fileName: "app/routes/account.availability.tsx",
                lineNumber: 209,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "time", name: `${day.id}-endTime`, defaultValue: availability[day.id].endTime, onChange: (e) => {
                const newValue = e.target.value;
                const availabilityInput = document.querySelector(`input[name="availability"]`);
                const currentValue = JSON.parse(availabilityInput.value);
                currentValue[day.id].endTime = newValue;
                availabilityInput.value = JSON.stringify(currentValue);
              }, className: "w-full p-2 border rounded" }, void 0, false, {
                fileName: "app/routes/account.availability.tsx",
                lineNumber: 212,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/account.availability.tsx",
              lineNumber: 208,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/account.availability.tsx",
            lineNumber: 195,
            columnNumber: 48
          }, this)
        ] }, day.id, true, {
          fileName: "app/routes/account.availability.tsx",
          lineNumber: 181,
          columnNumber: 28
        }, this))
      ] }, void 0, true, {
        fileName: "app/routes/account.availability.tsx",
        lineNumber: 160,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "availability", value: JSON.stringify({
        monday: availability.monday,
        tuesday: availability.tuesday,
        wednesday: availability.wednesday,
        thursday: availability.thursday,
        friday: availability.friday,
        saturday: availability.saturday,
        sunday: availability.sunday
      }) }, void 0, false, {
        fileName: "app/routes/account.availability.tsx",
        lineNumber: 224,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: fetcher.state === "submitting", className: "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-400", children: fetcher.state === "submitting" ? "Saving..." : "Save Availability" }, void 0, false, {
          fileName: "app/routes/account.availability.tsx",
          lineNumber: 235,
          columnNumber: 11
        }, this),
        fetcher.data?.success && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-green-600", children: "Availability saved successfully!" }, void 0, false, {
          fileName: "app/routes/account.availability.tsx",
          lineNumber: 239,
          columnNumber: 37
        }, this),
        fetcher.data?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-red-600", children: fetcher.data.error }, void 0, false, {
          fileName: "app/routes/account.availability.tsx",
          lineNumber: 240,
          columnNumber: 35
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/account.availability.tsx",
        lineNumber: 234,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/account.availability.tsx",
      lineNumber: 159,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/account.availability.tsx",
    lineNumber: 156,
    columnNumber: 10
  }, this);
}
_s(AvailabilitySettings, "tYVaYJ7tDMP7D1wH0FVD9qF2Kuw=", false, function() {
  return [useLoaderData, useFetcher];
});
_c = AvailabilitySettings;
var _c;
$RefreshReg$(_c, "AvailabilitySettings");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AvailabilitySettings as default
};
//# sourceMappingURL=/build/routes/account.availability-QAH5UAAL.js.map
