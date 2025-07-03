// app/routes/requests.$id.respond.ts
import { json, redirect } from "@remix-run/node";
import { getSession } from "~/utils/session.server";
import { updateRequestStatus } from "~/utils/requests.server";

export const action = async ({ request, params }) => {
  const session = await getSession(request);
  const userId = session.get("userId");
  const role = session.get("role");

  if (role !== "mentor") {
    return json({ error: "Only mentors can respond to requests" }, { status: 403 });
  }

  const formData = await request.formData();
  const status = formData.get("status");

  if (status !== "ACCEPTED" && status !== "REJECTED") {
    return json({ error: "Invalid status" }, { status: 400 });
  }

  try {
    await updateRequestStatus(params.id, status, userId);
    return redirect("/requests/received");
  } catch (error) {
    return json({ error: error.message }, { status: 400 });
  }
};