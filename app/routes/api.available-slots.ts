// app/routes/api.available-slots.ts
import { json } from "@remix-run/node";
import { getAvailableSlots } from "~/utils/sessions.server";
import { connectDB } from "~/utils/db.server";

export const loader = async ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const mentorId = url.searchParams.get("mentorId");
  const dateParam = url.searchParams.get("date");

  if (!mentorId || !dateParam) {
    return json({ error: "Missing parameters" }, { status: 400 });
  }

  await connectDB();
  const date = new Date(dateParam);
  const slots = await getAvailableSlots(mentorId, date);

  return json(slots.map(slot => ({
    startTime: formatTime(slot.start),
    endTime: formatTime(slot.end),
  })));
};

function formatTime(date: Date) {
  return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
}