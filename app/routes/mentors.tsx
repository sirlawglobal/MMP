// app/routes/mentors.tsx
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getSession } from "~/utils/session.server";
import { connectDB } from "~/utils/db.server";
import { User } from "~/models/User";
import { MentorCard } from "~/components/MentorCard";
import type { LoaderFunctionArgs } from "@remix-run/node";
import type { MentorType } from "~/types/mentor";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await connectDB();
  const session = await getSession(request);
  const currentUserId = session.get("userId");

  const mentors = await User.find({ 
    role: 'mentor',
    _id: { $ne: currentUserId }
  }).lean();

  return json({ mentors });
};

export default function MentorsPage() {
  const { mentors } = useLoaderData<{ mentors: MentorType[] }>();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Find Mentors</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentors.map((mentor) => (
          <MentorCard key={mentor._id} mentor={mentor} />
        ))}
      </div>
    </div>
  );
}