// app/components/MentorCard.tsx
import { Form } from "@remix-run/react";

export function MentorCard({ mentor }: { mentor: any }) {
  return (
    <div className="border rounded-lg p-6 shadow-sm bg-white">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold">{mentor.name}</h3>
          <p className="text-gray-600 mb-3">{mentor.bio}</p>
        </div>
        <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
          {mentor.role}
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {mentor.skills?.map((skill: string) => (
          <span key={skill} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
            {skill}
          </span>
        ))}
      </div>
      
      <Form method="post" action="/requests">
        <input type="hidden" name="mentorId" value={mentor._id} />
        <textarea
          name="message"
          placeholder="Why do you want to connect with this mentor?"
          className="w-full p-2 border rounded mb-3 text-sm"
          rows={3}
          required
        />
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 text-sm"
        >
          Request Mentorship
        </button>
      </Form>
    </div>
  );
}