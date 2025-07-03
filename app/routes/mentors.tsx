// app/routes/mentors.tsx
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getSession } from "~/utils/session.server";
import { connectDB } from "~/utils/db.server";
import { User } from "~/models/User";
import { MentorCard } from "~/components/MentorCard";

export const loader = async ({ request }) => {
  await connectDB();
  const session = await getSession(request);
  const currentUserId = session.get("userId");

  // Get all mentors except the current user
  const mentors = await User.find({ 
    role: 'mentor',
    _id: { $ne: currentUserId }
  }).lean();

  return json({ mentors });
};

export default function MentorsPage() {
  const { mentors } = useLoaderData<typeof loader>();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Find Mentors</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentors.map((mentor: any) => (
          <MentorCard key={mentor._id} mentor={mentor} />
        ))}
      </div>
    </div>
  );
}