import { LoaderFunction, json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getSession } from "~/utils/session.server"; // User session management
import { getCurrentUser } from "~/utils/auth.server";
import { connectDB } from "~/utils/db.server";
import { Session } from "~/models/Session";

type LoaderData = {
  session: {
    id: string;
    mentor: { id: string; name: string };
    mentee: { id: string; name: string };
    date: Date;
    startTime: string;
    endTime: string;
    status: string;
    feedback?: { rating?: number; comment?: string };
  };
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const session = await getSession(request);
  const email = session.get("email");
  if (!email) return redirect("/login");

  const user = await getCurrentUser(email);
  if (!user) return redirect("/login");

  await connectDB();
  const sessionData = await Session.findById(params.sessionId)
    .populate("mentor", "name")
    .populate("mentee", "name");

  if (!sessionData) {
    throw new Response("Session not found", { status: 404 });
  }

  // Ensure user is mentor, mentee, or admin
  if (
    sessionData.mentor._id.toString() !== user.id &&
    sessionData.mentee._id.toString() !== user.id &&
    user.role !== "admin"
  ) {
    throw new Response("Unauthorized", { status: 403 });
  }

  return json<LoaderData>({
    session: {
      id: sessionData._id.toString(),
      mentor: { id: sessionData.mentor._id.toString(), name: sessionData.mentor.name },
      mentee: { id: sessionData.mentee._id.toString(), name: sessionData.mentee.name },
      date: sessionData.date,
      startTime: sessionData.startTime,
      endTime: sessionData.endTime,
      status: sessionData.status,
      feedback: sessionData.feedback,
    },
  });
};

export default function SessionDetails() {
  const { session } = useLoaderData<LoaderData>();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6 text-purple-800">Session Details</h1>
      <div className="bg-white rounded-lg p-6 shadow">
        <h2 className="text-lg font-medium mb-4">
          Session with {session.mentor.name} and {session.mentee.name}
        </h2>
        <p className="text-gray-600">Date: {formatDate(session.date.toString())}</p>
        <p className="text-gray-600">Time: {session.startTime} - {session.endTime}</p>
        <p className="text-gray-600">
          Status: {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
        </p>
        {session.feedback && (
          <div className="mt-4">
            <p className="text-gray-600">Feedback Rating: {session.feedback.rating || "N/A"}</p>
            <p className="text-gray-600">Feedback Comment: {session.feedback.comment || "N/A"}</p>
          </div>
        )}
      </div>
    </div>
  );
}