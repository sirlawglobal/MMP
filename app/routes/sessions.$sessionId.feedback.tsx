//route/session.$sessionId.feeback.tsx

import { ActionFunction, LoaderFunction, json, redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { getSession } from "~/utils/session.server"; // User session management
import { getCurrentUser, getUserRole } from "~/utils/auth.server";
import { connectDB } from "~/utils/db.server";
import { Session } from "~/models/Session";

type LoaderData = {
  sessionId: string;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const session = await getSession(request);
  const email = session.get("email");
  if (!email) return redirect("/login");

  const user = await getCurrentUser(email);
  const role = await getUserRole(email);
  if (!user) return redirect("/login");

  if (role !== "mentee") {
    return redirect("/dashboard"); // Only mentees can submit feedback
  }

  if (!params.sessionId) {
    throw new Response("Session ID is required", { status: 404 });
  }

  await connectDB();
  const sessionData = await Session.findById(params.sessionId);
  if (!sessionData || sessionData.mentee.toString() !== user.id) {
    throw new Response("Session not found or unauthorized", { status: 404 });
  }

  return json<LoaderData>({ sessionId: params.sessionId });
};

export const action: ActionFunction = async ({ request, params }) => {
  const formData = await request.formData();
  const rating = parseInt(formData.get("rating") as string);
  const comment = formData.get("comment") as string;

  if (!rating || rating < 1 || rating > 5) {
    return json({ error: "Rating must be between 1 and 5" }, { status: 400 });
  }

  const session = await getSession(request);
  const email = session.get("email");
  const user = await getCurrentUser(email);
  if (!user) return redirect("/login");

  if (!params.sessionId) {
    throw new Response("Session ID is required", { status: 404 });
  }

  await connectDB();
  const sessionData = await Session.findById(params.sessionId);
  if (!sessionData || sessionData.mentee.toString() !== user.id) {
    throw new Response("Session not found or unauthorized", { status: 404 });
  }

  await Session.findByIdAndUpdate(params.sessionId, {
    feedback: { rating, comment },
  });

  return redirect("/my-sessions");
};

export default function SessionFeedback() {
  const { sessionId } = useLoaderData<LoaderData>();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6 text-purple-800">Submit Feedback</h1>
      <div className="bg-white rounded-lg p-6 shadow">
        <Form method="post" className="space-y-4">
          <div>
            <label className="block text-gray-700">Rating (1-5)</label>
            <input
              type="number"
              name="rating"
              min="1"
              max="5"
              required
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Comment</label>
            <textarea
              name="comment"
              className="w-full p-2 border rounded"
              rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            Submit Feedback
          </button>
        </Form>
      </div>
    </div>
  );
}