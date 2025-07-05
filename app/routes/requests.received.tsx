// app/routes/requests.received.tsx
import { json } from "@remix-run/node";
import { useLoaderData, Form } from "@remix-run/react";
import { getSession } from "~/utils/session.server";
import { getReceivedRequests } from "~/utils/requests.server";
import type { LoaderFunctionArgs } from "@remix-run/node";

export const loader = async ({ request }:LoaderFunctionArgs) => {
  const session = await getSession(request);
  const userId = session.get("userId");
  
  const requests = await getReceivedRequests(userId);
  return json({ requests });
};

export default function ReceivedRequests() {
  const { requests } = useLoaderData<typeof loader>();
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Mentorship Requests</h1>
      {requests.length === 0 ? (
        <p className="text-gray-600">You don't have any pending requests.</p>
      ) : (
        <div className="space-y-4">
          {requests.map((request: any) => (
            <div key={request._id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg font-semibold">{request.mentee.name}</h2>
                  <p className="text-gray-600 mt-1">{request.message}</p>
                  <div className="mt-2">
                    <span className="text-sm text-gray-500">
                      Skills: {request.mentee.skills?.join(', ') || 'Not specified'}
                    </span>
                  </div>
                  <div className="mt-1">
                    <span className="text-sm text-gray-500">
                      Goals: {request.mentee.goals?.join(', ') || 'Not specified'}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex space-x-3">
                <Form method="post" action={`/requests/${request._id}/respond`}>
                  <input type="hidden" name="status" value="ACCEPTED" />
                  <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  >
                    Accept
                  </button>
                </Form>
                <Form method="post" action={`/requests/${request._id}/respond`}>
                  <input type="hidden" name="status" value="REJECTED" />
                  <button
                    type="submit"
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Reject
                  </button>
                </Form>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}