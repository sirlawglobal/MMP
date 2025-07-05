// app/routes/requests.sent.tsx
import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { getSession } from "~/utils/session.server";
import { getSentRequests } from "~/utils/requests.server";
import type { LoaderFunctionArgs } from "@remix-run/node";

// export const loader = async ({ request }) => {
//   const session = await getSession(request);
//   const userId = session.get("userId");
  
//   const requests = await getSentRequests(userId);
//   return json({ requests });
// };

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const session = await getSession(request);
  const userId = session.get("userId");
  
  const requests = await getSentRequests(userId);
  return json({ requests });
};
export default function SentRequests() {
  const { requests } = useLoaderData<typeof loader>();
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">My Requests</h1>
      {requests.length === 0 ? (
        <p className="text-gray-600">You haven't sent any requests yet.</p>
      ) : (
        <div className="space-y-4">
          {requests.map((request: any) => (
            <div key={request._id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-semibold">{request.mentor.name}</h2>
                  <p className="text-gray-600 mt-1">{request.message}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  request.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
                  request.status === 'ACCEPTED' ? 'bg-green-100 text-green-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {request.status}
                </span>
              </div>
              <div className="mt-3 text-sm text-gray-500">
                Sent on {new Date(request.createdAt).toLocaleDateString()}
              </div>
              {request.status === 'ACCEPTED' && (
                <Link 
                  to={`/sessions/new?mentorId=${request.mentor._id}`}
                  className="mt-3 inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
                >
                  Schedule Session
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}