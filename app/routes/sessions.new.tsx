// File: app/routes/sessions.new.tsx
import { Form, useLoaderData, useActionData } from "@remix-run/react";
import type { LoaderFunction, ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { getSession } from "~/utils/session.server"; // User session management
import { createSession } from "~/utils/sessions.server"; // Session data management
import { getCurrentUser, getUserRole } from "~/utils/auth.server";
import { connectDB } from "~/utils/db.server";
import { User } from "~/models/User";

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getSession(request);
  const email = session.get("email");
  if (!email) return redirect("/login");

  await connectDB();
  const user = await getCurrentUser(email);
  const role = await getUserRole(email);
  if (!user) return redirect("/login");

  const mentors = role === "mentee" ? await User.find({ role: "mentor" }, "name id") : [];

  return json({ user, role, mentors });
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const mentorId = formData.get("mentorId") as string;
  const date = formData.get("date") as string;
  const startTime = formData.get("startTime") as string;
  const endTime = formData.get("endTime") as string;

  if (!mentorId || !date || !startTime || !endTime) {
    return json({ error: "All fields are required" }, { status: 400 });
  }

  const session = await getSession(request);
  const email = session.get("email");
  const user = await getCurrentUser(email);
  if (!user) return redirect("/login");

  try {
    const newSession = await createSession({
      mentorId,
      menteeId: user.id,
      date: new Date(date),
      startTime,
      endTime,
    });

    if (!newSession) {
      return json({ error: "Invalid mentor or scheduling conflict" }, { status: 400 });
    }

    return redirect(user.role === "mentor" ? "/sessions" : "/my-sessions");
  } catch (error: any) {
    return json({ error: error.message }, { status: 400 });
  }
};

export default function NewSession() {
  const { user, role, mentors } = useLoaderData<typeof loader>();
  const actionData = useActionData<{ error?: string }>();

  if (role !== "mentee") {
    return <div>Only mentees can schedule sessions.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6 text-purple-800">Schedule a New Session</h1>
      <Form method="post" className="bg-white rounded-lg p-6 shadow">
        <div className="mb-4">
          <label className="block text-gray-700">Select Mentor</label>
          <select name="mentorId" className="w-full p-2 border rounded">
            {mentors.map((mentor: any) => (
              <option key={mentor.id} value={mentor.id}>{mentor.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Date</label>
          <input type="date" name="date" className="w-full p-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Start Time</label>
          <input type="time" name="startTime" className="w-full p-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">End Time</label>
          <input type="time" name="endTime" className="w-full p-2 border rounded" required />
        </div>
        {actionData?.error && <p className="text-red-600">{actionData.error}</p>}
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Schedule Session
        </button>
      </Form>
    </div>
  );
}