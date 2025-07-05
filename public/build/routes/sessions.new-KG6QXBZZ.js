import {
  require_sessions
} from "/build/_shared/chunk-BASD6ALX.js";
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
  useActionData,
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
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/sessions.new.tsx
var import_node = __toESM(require_node(), 1);
var import_session = __toESM(require_session(), 1);
var import_sessions = __toESM(require_sessions(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_db = __toESM(require_db(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\sessions.new.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\sessions.new.tsx"
  );
  import.meta.hot.lastModified = "1751739445761.0198";
}
function NewSession() {
  _s();
  const {
    user,
    mentors
  } = useLoaderData();
  const actionData = useActionData();
  const [selectedMentor, setSelectedMentor] = (0, import_react2.useState)("");
  const [selectedDate, setSelectedDate] = (0, import_react2.useState)("");
  const [availableSlots, setAvailableSlots] = (0, import_react2.useState)([]);
  const [isLoading, setIsLoading] = (0, import_react2.useState)(false);
  const handleMentorChange = (e) => {
    setSelectedMentor(e.target.value);
    setSelectedDate("");
    setAvailableSlots([]);
  };
  const handleDateChange = async (e) => {
    const date = e.target.value;
    setSelectedDate(date);
    if (selectedMentor && date) {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/available-slots?mentorId=${selectedMentor}&date=${date}`);
        const slots = await response.json();
        setAvailableSlots(slots);
      } catch (error) {
        console.error("Failed to fetch available slots:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-semibold mb-6", children: "Schedule New Session" }, void 0, false, {
      fileName: "app/routes/sessions.new.tsx",
      lineNumber: 143,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "bg-white rounded-lg p-6 shadow", children: [
      actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4 p-2 bg-red-100 text-red-700 rounded", children: actionData.error }, void 0, false, {
        fileName: "app/routes/sessions.new.tsx",
        lineNumber: 146,
        columnNumber: 31
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Select Mentor" }, void 0, false, {
          fileName: "app/routes/sessions.new.tsx",
          lineNumber: 151,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "mentorId", className: "w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500", value: selectedMentor, onChange: handleMentorChange, required: true, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "", children: "-- Select a Mentor --" }, void 0, false, {
            fileName: "app/routes/sessions.new.tsx",
            lineNumber: 155,
            columnNumber: 13
          }, this),
          mentors.map((mentor) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: mentor.id, children: [
            mentor.name,
            " ",
            mentor.hasAvailability ? "" : "(No availability set)"
          ] }, mentor.id, true, {
            fileName: "app/routes/sessions.new.tsx",
            lineNumber: 156,
            columnNumber: 36
          }, this))
        ] }, void 0, true, {
          fileName: "app/routes/sessions.new.tsx",
          lineNumber: 154,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/sessions.new.tsx",
        lineNumber: 150,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Date" }, void 0, false, {
          fileName: "app/routes/sessions.new.tsx",
          lineNumber: 163,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "date", name: "date", className: "w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500", value: selectedDate, onChange: handleDateChange, min: (/* @__PURE__ */ new Date()).toISOString().split("T")[0], required: true, disabled: !selectedMentor }, void 0, false, {
          fileName: "app/routes/sessions.new.tsx",
          lineNumber: 166,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/sessions.new.tsx",
        lineNumber: 162,
        columnNumber: 9
      }, this),
      isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4 p-4 text-center text-gray-500", children: "Loading available time slots..." }, void 0, false, {
        fileName: "app/routes/sessions.new.tsx",
        lineNumber: 169,
        columnNumber: 22
      }, this) : availableSlots.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Available Time Slots" }, void 0, false, {
          fileName: "app/routes/sessions.new.tsx",
          lineNumber: 172,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2", children: availableSlots.map((slot, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "flex items-center p-3 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "radio", name: "startTime", value: slot.startTime, required: true, className: "h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300" }, void 0, false, {
            fileName: "app/routes/sessions.new.tsx",
            lineNumber: 177,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-2 block text-sm text-gray-700", children: [
            formatTime(slot.startTime),
            " - ",
            formatTime(slot.endTime)
          ] }, void 0, true, {
            fileName: "app/routes/sessions.new.tsx",
            lineNumber: 178,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "endTime", value: slot.endTime }, void 0, false, {
            fileName: "app/routes/sessions.new.tsx",
            lineNumber: 181,
            columnNumber: 19
          }, this)
        ] }, index, true, {
          fileName: "app/routes/sessions.new.tsx",
          lineNumber: 176,
          columnNumber: 52
        }, this)) }, void 0, false, {
          fileName: "app/routes/sessions.new.tsx",
          lineNumber: 175,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/sessions.new.tsx",
        lineNumber: 171,
        columnNumber: 48
      }, this) : selectedDate ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4 p-2 bg-yellow-50 text-yellow-700 rounded text-sm", children: "No available time slots for this date" }, void 0, false, {
        fileName: "app/routes/sessions.new.tsx",
        lineNumber: 184,
        columnNumber: 35
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Agenda" }, void 0, false, {
          fileName: "app/routes/sessions.new.tsx",
          lineNumber: 189,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { name: "agenda", className: "w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500", rows: 4, placeholder: "What would you like to discuss in this session?", required: true }, void 0, false, {
          fileName: "app/routes/sessions.new.tsx",
          lineNumber: 192,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/sessions.new.tsx",
        lineNumber: 188,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50", disabled: availableSlots.length === 0, children: "Schedule Session" }, void 0, false, {
        fileName: "app/routes/sessions.new.tsx",
        lineNumber: 195,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/sessions.new.tsx",
      lineNumber: 145,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/sessions.new.tsx",
    lineNumber: 142,
    columnNumber: 10
  }, this);
}
_s(NewSession, "xUW2ZN2hsVfflMHNf8e2yp8TX/A=", false, function() {
  return [useLoaderData, useActionData];
});
_c = NewSession;
function formatTime(timeString) {
  const [hours, minutes] = timeString.split(":");
  const hourNum = parseInt(hours, 10);
  const ampm = hourNum >= 12 ? "PM" : "AM";
  const displayHour = hourNum % 12 || 12;
  return `${displayHour}:${minutes} ${ampm}`;
}
var _c;
$RefreshReg$(_c, "NewSession");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  NewSession as default
};
//# sourceMappingURL=/build/routes/sessions.new-KG6QXBZZ.js.map
