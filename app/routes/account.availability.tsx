// app/routes/account.availability.tsx
import { json, redirect } from "@remix-run/node";
import { useLoaderData, useFetcher } from "@remix-run/react";
import { getSession } from "~/utils/session.server";
import { connectDB } from "~/utils/db.server";
import { Availability } from "~/models/Availability";
import { User } from "~/models/User";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";

export async function loader({ request }: LoaderFunctionArgs) {
  await connectDB();
  const session = await getSession(request);
  const userId = session.get("userId");

  if (!userId) {
    return redirect("/login");
  }

  const user = await User.findById(userId);
  if (!user || user.role !== "mentor") {
    return redirect("/");
  }

  // Get or create availability record
  let availability = await Availability.findOne({ userId });
  
  if (!availability) {
    availability = await Availability.create({ 
      userId,
      ...getDefaultAvailability(),
      bufferBefore: 15,
      bufferAfter: 15
    });
  }

  return json({ availability });
}

export async function action({ request }: ActionFunctionArgs) {
  await connectDB();
  const session = await getSession(request);
  const userId = session.get("userId");

  if (!userId) {
    return json({ error: "Not authenticated" }, { status: 401 });
  }

  const formData = await request.formData();
  const availabilityData = JSON.parse(formData.get("availability") as string);
  const bufferBefore = parseInt(formData.get("bufferBefore") as string);
  const bufferAfter = parseInt(formData.get("bufferAfter") as string);

  await Availability.findOneAndUpdate(
    { userId },
    { 
      ...availabilityData,
      bufferBefore,
      bufferAfter 
    },
    { upsert: true }
  );

  return json({ success: true });
}

function getDefaultAvailability() {
  return {
    monday: { enabled: false, startTime: "09:00", endTime: "17:00" },
    tuesday: { enabled: false, startTime: "09:00", endTime: "17:00" },
    wednesday: { enabled: false, startTime: "09:00", endTime: "17:00" },
    thursday: { enabled: false, startTime: "09:00", endTime: "17:00" },
    friday: { enabled: false, startTime: "09:00", endTime: "17:00" },
    saturday: { enabled: false, startTime: "09:00", endTime: "17:00" },
    sunday: { enabled: false, startTime: "09:00", endTime: "17:00" }
  };
}

export default function AvailabilitySettings() {
  const { availability } = useLoaderData<typeof loader>();
  const fetcher = useFetcher();

  const days = [
    { id: "monday", name: "Monday" },
    { id: "tuesday", name: "Tuesday" },
    { id: "wednesday", name: "Wednesday" },
    { id: "thursday", name: "Thursday" },
    { id: "friday", name: "Friday" },
    { id: "saturday", name: "Saturday" },
    { id: "sunday", name: "Sunday" }
  ];

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Set Your Availability</h1>
      
      <fetcher.Form method="post">
        <div className="space-y-4">
          {/* Buffer Settings */}
          <div className="border rounded-lg p-4">
            <h2 className="font-medium text-lg mb-3">Meeting Buffer Times</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Before Meetings (minutes)
                </label>
                <input
                  type="number"
                  name="bufferBefore"
                  defaultValue={availability.bufferBefore}
                  min="0"
                  max="60"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  After Meetings (minutes)
                </label>
                <input
                  type="number"
                  name="bufferAfter"
                  defaultValue={availability.bufferAfter}
                  min="0"
                  max="60"
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
          </div>

          {/* Daily Availability */}
          {days.map((day) => (
            <div key={day.id} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name={`${day.id}-enabled`}
                    defaultChecked={availability[day.id].enabled}
                    onChange={(e) => {
                      const newValue = e.target.checked;
                      const availabilityInput = document.querySelector(`input[name="availability"]`) as HTMLInputElement;
                      const currentValue = JSON.parse(availabilityInput.value);
                      currentValue[day.id].enabled = newValue;
                      availabilityInput.value = JSON.stringify(currentValue);
                    }}
                    className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="font-medium">{day.name}</span>
                </label>
              </div>

              {availability[day.id].enabled && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Start Time
                    </label>
                    <input
                      type="time"
                      name={`${day.id}-startTime`}
                      defaultValue={availability[day.id].startTime}
                      onChange={(e) => {
                        const newValue = e.target.value;
                        const availabilityInput = document.querySelector(`input[name="availability"]`) as HTMLInputElement;
                        const currentValue = JSON.parse(availabilityInput.value);
                        currentValue[day.id].startTime = newValue;
                        availabilityInput.value = JSON.stringify(currentValue);
                      }}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      End Time
                    </label>
                    <input
                      type="time"
                      name={`${day.id}-endTime`}
                      defaultValue={availability[day.id].endTime}
                      onChange={(e) => {
                        const newValue = e.target.value;
                        const availabilityInput = document.querySelector(`input[name="availability"]`) as HTMLInputElement;
                        const currentValue = JSON.parse(availabilityInput.value);
                        currentValue[day.id].endTime = newValue;
                        availabilityInput.value = JSON.stringify(currentValue);
                      }}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <input
          type="hidden"
          name="availability"
          value={JSON.stringify({
            monday: availability.monday,
            tuesday: availability.tuesday,
            wednesday: availability.wednesday,
            thursday: availability.thursday,
            friday: availability.friday,
            saturday: availability.saturday,
            sunday: availability.sunday
          })}
        />

        <div className="mt-6">
          <button
            type="submit"
            disabled={fetcher.state === "submitting"}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-400"
          >
            {fetcher.state === "submitting" ? "Saving..." : "Save Availability"}
          </button>
          
          {fetcher.data?.success && (
            <p className="mt-2 text-green-600">Availability saved successfully!</p>
          )}
          {fetcher.data?.error && (
            <p className="mt-2 text-red-600">{fetcher.data.error}</p>
          )}
        </div>
      </fetcher.Form>
    </div>
  );
}