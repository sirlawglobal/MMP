// app/routes/requests.ts
import { json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { getSession } from "~/utils/session.server";
import { createRequest } from "~/utils/requests.server";

export const action = async ({ request }) => {
  const session = await getSession(request);
  const userId = session.get("userId");
  const role = session.get("role");

  if (role !== "mentee") {
    return json({ error: "Only mentees can send requests" }, { status: 403 });
  }

  const formData = await request.formData();
  const mentorId = formData.get("mentorId");
  const message = formData.get("message");

  if (!mentorId || !message) {
    return json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    await createRequest({
      menteeId: userId,
      mentorId: mentorId.toString(),
      message: message.toString()
    });
    return redirect("/requests/sent");
  } catch (error) {
    return json({ error: error.message }, { status: 400 });
  }
};