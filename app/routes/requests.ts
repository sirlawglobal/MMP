// app/routes/requests.ts
import { json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { getSession } from "~/utils/session.server";
import { createRequest } from "~/utils/requests.server";
import type { ActionFunctionArgs } from "@remix-run/node";

export const action = async ({ request }: ActionFunctionArgs) => {
  try {
    const session = await getSession(request);
    const userId = session.get("userId");
    const role = session.get("role");

    console.log("Session retrieved:", { userId, role });

    if (!userId || role !== "mentee") {
      console.warn("Unauthorized access attempt", { userId, role });
      return json({ error: "Only mentees can send requests" }, { status: 403 });
    }

    const formData = await request.formData();
    const mentorId = formData.get("mentorId");
    const message = formData.get("message");

    console.log("Form data received:", { mentorId, message });

    if (!mentorId || !message) {
      console.warn("Missing required fields", { mentorId, message });
      return json({ error: "Missing required fields" }, { status: 400 });
    }

    const requestPayload = {
      menteeId: userId,
      mentorId: mentorId.toString(),
      message: message.toString()
    };

    console.log("Creating request with payload:", requestPayload);

    await createRequest(requestPayload);

    console.log("Request successfully created");
    return redirect("/requests/sent");

  } catch (error) {
    console.error("Error occurred while creating request:", error);
    return json({ 
      error: error instanceof Error ? error.message : "Unknown error occurred" 
    }, { status: 400 });
  }
};
