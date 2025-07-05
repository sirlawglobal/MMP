//route/session.$sessionId.cancel.tsx
import { ActionFunction, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { getSession } from "~/utils/session.server"; // User session management
import { getCurrentUser } from "~/utils/auth.server";
import { connectDB } from "~/utils/db.server";
import { Session } from "~/models/Session";

export const action: ActionFunction = async ({ request, params }) => {
  const session = await getSession(request);
  const email = session.get("email");
  if (!email) return redirect("/login");

  const user = await getCurrentUser(email);
  if (!user) return redirect("/login");

  await connectDB();
  const sessionData = await Session.findById(params.sessionId);
  if (!sessionData) {
    throw new Response("Session not found", { status: 404 });
  }

  // Only allow mentor or mentee to cancel
  if (
    sessionData.mentor.toString() !== user.id &&
    sessionData.mentee.toString() !== user.id
  ) {
    throw new Response("Unauthorized", { status: 403 });
  }

  await Session.findByIdAndUpdate(params.sessionId, { status: "cancelled" });

  return redirect(user.role === "mentor" ? "/sessions" : "/my-sessions");
};

export default function CancelSession() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6 text-purple-800">Cancel Session</h1>
      <div className="bg-white rounded-lg p-6 shadow">
        <p className="text-gray-600 mb-4">Are you sure you want to cancel this session?</p>
        <Form method="post">
          <button
            type="submit"
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Confirm Cancel
          </button>
        </Form>
      </div>
    </div>
  );
}