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
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/mentors.tsx
var import_node = __toESM(require_node(), 1);
var import_session = __toESM(require_session(), 1);
var import_db = __toESM(require_db(), 1);

// app/components/MentorCard.tsx
var import_react2 = __toESM(require_react(), 1);
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
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\MentorCard.tsx"
  );
  import.meta.hot.lastModified = "1751746204920.0818";
}
function MentorCard({
  mentor
}) {
  _s();
  const [showBookingForm, setShowBookingForm] = (0, import_react2.useState)(false);
  const [selectedDate, setSelectedDate] = (0, import_react2.useState)((/* @__PURE__ */ new Date()).toISOString().split("T")[0]);
  const [selectedSlot, setSelectedSlot] = (0, import_react2.useState)(null);
  const [agenda, setAgenda] = (0, import_react2.useState)("");
  const fetcher = useFetcher();
  const hasAvailability = mentor.availability && Object.values(mentor.availability).some((day) => day?.enabled);
  const availableDays = mentor.availability ? Object.entries(mentor.availability).filter(([_, day]) => day?.enabled).map(([day]) => day.charAt(0).toUpperCase() + day.slice(1)) : [];
  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot === selectedSlot ? null : slot);
  };
  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    const hour = parseInt(hours);
    return `${hour > 12 ? hour - 12 : hour}:${minutes} ${hour >= 12 ? "PM" : "AM"}`;
  };
  const generateTimeSlots = () => {
    if (!mentor.availability || !selectedDate)
      return [];
    const dayOfWeek = new Date(selectedDate).toLocaleString("en-us", {
      weekday: "long"
    }).toLowerCase();
    const dayAvailability = mentor.availability[dayOfWeek];
    if (!dayAvailability?.enabled || !dayAvailability.startTime || !dayAvailability.endTime)
      return [];
    const slots = [];
    const start = /* @__PURE__ */ new Date(`${selectedDate}T${dayAvailability.startTime}`);
    const end = /* @__PURE__ */ new Date(`${selectedDate}T${dayAvailability.endTime}`);
    for (let time = new Date(start); time < end; time.setMinutes(time.getMinutes() + 30)) {
      const timeString = time.toTimeString().slice(0, 5);
      slots.push(timeString);
    }
    return slots;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border rounded-lg p-6 shadow-sm bg-white hover:shadow-md transition-shadow", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl font-semibold", children: mentor.name }, void 0, false, {
        fileName: "app/components/MentorCard.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 mb-2", children: mentor.role }, void 0, false, {
        fileName: "app/components/MentorCard.tsx",
        lineNumber: 66,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-700 mb-4", children: mentor.bio }, void 0, false, {
        fileName: "app/components/MentorCard.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this),
      mentor.skills && mentor.skills.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium text-gray-800 mb-1", children: "Skills" }, void 0, false, {
          fileName: "app/components/MentorCard.tsx",
          lineNumber: 70,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-2", children: mentor.skills.map((skill) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded", children: skill }, skill, false, {
          fileName: "app/components/MentorCard.tsx",
          lineNumber: 72,
          columnNumber: 45
        }, this)) }, void 0, false, {
          fileName: "app/components/MentorCard.tsx",
          lineNumber: 71,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/MentorCard.tsx",
        lineNumber: 69,
        columnNumber: 57
      }, this),
      hasAvailability ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-medium text-gray-800 mb-1", children: "Available Days" }, void 0, false, {
          fileName: "app/components/MentorCard.tsx",
          lineNumber: 79,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: availableDays.join(", ") }, void 0, false, {
          fileName: "app/components/MentorCard.tsx",
          lineNumber: 80,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/MentorCard.tsx",
        lineNumber: 78,
        columnNumber: 30
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-yellow-600", children: "No availability set" }, void 0, false, {
        fileName: "app/components/MentorCard.tsx",
        lineNumber: 81,
        columnNumber: 22
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/MentorCard.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/MentorCard.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    hasAvailability && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setShowBookingForm(!showBookingForm), className: "mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors", children: showBookingForm ? "Hide Booking" : "Book Session" }, void 0, false, {
      fileName: "app/components/MentorCard.tsx",
      lineNumber: 85,
      columnNumber: 27
    }, this),
    showBookingForm && hasAvailability && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 pt-4 border-t", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, { method: "post", action: "/bookings", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "mentorId", value: mentor._id }, void 0, false, {
        fileName: "app/components/MentorCard.tsx",
        lineNumber: 91,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-gray-700 mb-2", children: "Date" }, void 0, false, {
          fileName: "app/components/MentorCard.tsx",
          lineNumber: 94,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "date", name: "date", value: selectedDate, onChange: (e) => setSelectedDate(e.target.value), min: (/* @__PURE__ */ new Date()).toISOString().split("T")[0], className: "w-full p-2 border rounded", required: true }, void 0, false, {
          fileName: "app/components/MentorCard.tsx",
          lineNumber: 95,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/MentorCard.tsx",
        lineNumber: 93,
        columnNumber: 13
      }, this),
      generateTimeSlots().length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-gray-700 mb-2", children: "Time Slot" }, void 0, false, {
          fileName: "app/components/MentorCard.tsx",
          lineNumber: 99,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 gap-2", children: generateTimeSlots().map((slot) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => handleSlotSelection(slot), className: `p-2 border rounded text-center ${selectedSlot === slot ? "bg-blue-100 border-blue-500" : "hover:bg-gray-50"}`, children: formatTime(slot) }, slot, false, {
          fileName: "app/components/MentorCard.tsx",
          lineNumber: 101,
          columnNumber: 52
        }, this)) }, void 0, false, {
          fileName: "app/components/MentorCard.tsx",
          lineNumber: 100,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "timeSlot", value: selectedSlot || "" }, void 0, false, {
          fileName: "app/components/MentorCard.tsx",
          lineNumber: 105,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/MentorCard.tsx",
        lineNumber: 98,
        columnNumber: 47
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-500 mb-4", children: "No available slots for this day" }, void 0, false, {
        fileName: "app/components/MentorCard.tsx",
        lineNumber: 106,
        columnNumber: 24
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-gray-700 mb-2", children: "Agenda" }, void 0, false, {
          fileName: "app/components/MentorCard.tsx",
          lineNumber: 109,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { name: "agenda", value: agenda, onChange: (e) => setAgenda(e.target.value), className: "w-full p-2 border rounded", rows: 3, required: true }, void 0, false, {
          fileName: "app/components/MentorCard.tsx",
          lineNumber: 110,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/MentorCard.tsx",
        lineNumber: 108,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: !selectedSlot || fetcher.state === "submitting", className: "w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded disabled:bg-gray-400 transition-colors", children: fetcher.state === "submitting" ? "Booking..." : "Confirm Booking" }, void 0, false, {
        fileName: "app/components/MentorCard.tsx",
        lineNumber: 113,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/MentorCard.tsx",
      lineNumber: 90,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/MentorCard.tsx",
      lineNumber: 89,
      columnNumber: 46
    }, this),
    fetcher.state === "submitting" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 text-blue-600 text-sm", children: "Processing..." }, void 0, false, {
      fileName: "app/components/MentorCard.tsx",
      lineNumber: 119,
      columnNumber: 41
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      fetcher.data?.success && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 text-green-600 text-sm", children: "Booking confirmed! Check your sessions." }, void 0, false, {
        fileName: "app/components/MentorCard.tsx",
        lineNumber: 120,
        columnNumber: 37
      }, this),
      fetcher.data?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 text-red-500 text-sm", children: [
        "Error: ",
        fetcher.data.error
      ] }, void 0, true, {
        fileName: "app/components/MentorCard.tsx",
        lineNumber: 123,
        columnNumber: 35
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/MentorCard.tsx",
      lineNumber: 119,
      columnNumber: 107
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/MentorCard.tsx",
    lineNumber: 62,
    columnNumber: 10
  }, this);
}
_s(MentorCard, "fJlqLZXSDsZ2b7RZPNXCbWlfRuU=", false, function() {
  return [useFetcher];
});
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
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\mentors.tsx"
  );
  import.meta.hot.lastModified = "1751745200740.7156";
}
function MentorsPage() {
  _s2();
  const {
    mentors
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container mx-auto p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-2xl font-bold mb-6", children: "Find Mentors" }, void 0, false, {
      fileName: "app/routes/mentors.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: mentors.map((mentor) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MentorCard, { mentor }, mentor._id, false, {
      fileName: "app/routes/mentors.tsx",
      lineNumber: 54,
      columnNumber: 32
    }, this)) }, void 0, false, {
      fileName: "app/routes/mentors.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/mentors.tsx",
    lineNumber: 50,
    columnNumber: 10
  }, this);
}
_s2(MentorsPage, "eNzfjnibattr+q+oe68CSU2U2zs=", false, function() {
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
//# sourceMappingURL=/build/routes/mentors-LNGHJVCT.js.map
