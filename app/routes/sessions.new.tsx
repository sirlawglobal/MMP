// app/routes/sessions.new.tsx
import { Form, useLoaderData, useActionData } from "@remix-run/react";
import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { getSession } from "~/utils/session.server";
import { createSession } from "~/utils/sessions.server";
import { getCurrentUser, getUserRole } from "~/utils/auth.server";
import { connectDB } from "~/utils/db.server";
import { User } from "~/models/User";
import { Availability } from "~/models/Availability";
import { useState } from "react";

// Type definitions
type MentorWithAvailability = {
  id: string;
  name: string;
  hasAvailability: boolean;
};

type TimeSlot = {
  startTime: string;
  endTime: string;
};

type LoaderData = {
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
  mentors: MentorWithAvailability[];
};

type ActionData = {
  error?: string;
};

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request);
  const email = session.get("email");
  if (!email) return redirect("/login");

  await connectDB();
  const user = await getCurrentUser(email);
  const role = await getUserRole(email);
  if (!user) return redirect("/login");

  if (role !== "mentee") {
    return redirect("/dashboard");
  }

  const mentors = await User.find({ role: "mentor" }).select("name _id");
  const mentorsWithAvailability = await Promise.all(
    mentors.map(async (mentor) => {
      const availability = await Availability.findOne({ userId: mentor._id });
      return {
        id: mentor._id.toString(),
        name: mentor.name,
        hasAvailability: !!availability,
      };
    })
  );

  return json<LoaderData>({ 
    user: {
  id: user.id.toString(),
  name: user.name ?? "",   // fallback if name is undefined
  email: user.email ?? "",
  role: user.role ?? ""
},
    mentors: mentorsWithAvailability 
  });
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const mentorId = formData.get("mentorId") as string;
  const date = formData.get("date") as string;
  const startTime = formData.get("startTime") as string;
  const endTime = formData.get("endTime") as string;
  const agenda = formData.get("agenda") as string;

  if (!mentorId || !date || !startTime || !endTime || !agenda) {
    return json<ActionData>({ error: "All fields are required" }, { status: 400 });
  }

  const session = await getSession(request);
  const email = session.get("email");
  const user = await getCurrentUser(email);
  if (!user) return redirect("/login");

  try {
    await createSession({
      mentorId,
      menteeId: user.id.toString(),
      date: new Date(date),
      startTime,
      endTime,
      agenda,
    });
    return redirect("/my-sessions");
  } catch (error: any) {
    return json<ActionData>({ error: error.message }, { status: 400 });
  }
};

export default function NewSession() {
  const { user, mentors } = useLoaderData<LoaderData>();
  const actionData = useActionData<ActionData>();
  const [selectedMentor, setSelectedMentor] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleMentorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMentor(e.target.value);
    setSelectedDate("");
    setAvailableSlots([]);
  };

  const handleDateChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    setSelectedDate(date);
    
    if (selectedMentor && date) {
      setIsLoading(true);
      try {
        const response = await fetch(
          `/api/available-slots?mentorId=${selectedMentor}&date=${date}`
        );
        const slots = await response.json();
        setAvailableSlots(slots);
      } catch (error) {
        console.error("Failed to fetch available slots:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Schedule New Session</h1>
      
      <Form method="post" className="bg-white rounded-lg p-6 shadow">
        {actionData?.error && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
            {actionData.error}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Mentor
          </label>
          <select
            name="mentorId"
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
            value={selectedMentor}
            onChange={handleMentorChange}
            required
          >
            <option value="">-- Select a Mentor --</option>
            {mentors.map((mentor) => (
              <option key={mentor.id} value={mentor.id}>
                {mentor.name} {mentor.hasAvailability ? "" : "(No availability set)"}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date
          </label>
          <input
            type="date"
            name="date"
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
            value={selectedDate}
            onChange={handleDateChange}
            min={new Date().toISOString().split('T')[0]}
            required
            disabled={!selectedMentor}
          />
        </div>

        {isLoading ? (
          <div className="mb-4 p-4 text-center text-gray-500">
            Loading available time slots...
          </div>
        ) : availableSlots.length > 0 ? (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Available Time Slots
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {availableSlots.map((slot, index) => (
                <label 
                  key={index} 
                  className="flex items-center p-3 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="startTime"
                    value={slot.startTime}
                    required
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                  />
                  <span className="ml-2 block text-sm text-gray-700">
                    {formatTime(slot.startTime)} - {formatTime(slot.endTime)}
                  </span>
                  <input type="hidden" name="endTime" value={slot.endTime} />
                </label>
              ))}
            </div>
          </div>
        ) : selectedDate ? (
          <div className="mb-4 p-2 bg-yellow-50 text-yellow-700 rounded text-sm">
            No available time slots for this date
          </div>
        ) : null}

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Agenda
          </label>
          <textarea
            name="agenda"
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
            rows={4}
            placeholder="What would you like to discuss in this session?"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50"
          disabled={availableSlots.length === 0}
        >
          Schedule Session
        </button>
      </Form>
    </div>
  );
}

// Helper function to format time (HH:MM to 12-hour format)
function formatTime(timeString: string): string {
  const [hours, minutes] = timeString.split(':');
  const hourNum = parseInt(hours, 10);
  const ampm = hourNum >= 12 ? 'PM' : 'AM';
  const displayHour = hourNum % 12 || 12;
  return `${displayHour}:${minutes} ${ampm}`;
}