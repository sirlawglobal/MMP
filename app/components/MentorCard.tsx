// app/components/MentorCard.tsx
import { useFetcher } from "@remix-run/react";
import { useState } from "react";
import type { MentorType } from "~/types/mentor";

type BookingResponse = {
  success?: boolean;
  error?: string;
  session?: any;
};

export function MentorCard({ mentor }: { mentor: MentorType }) {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [agenda, setAgenda] = useState("");
  
  const fetcher = useFetcher<BookingResponse>();

  const hasAvailability = mentor.availability && 
    Object.values(mentor.availability).some((day) => day?.enabled);

  const availableDays = mentor.availability ? 
    Object.entries(mentor.availability)
      .filter(([_, day]) => day?.enabled)
      .map(([day]) => day.charAt(0).toUpperCase() + day.slice(1))
    : [];

  const handleSlotSelection = (slot: string) => {
    setSelectedSlot(slot === selectedSlot ? null : slot);
  };

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    return `${hour > 12 ? hour - 12 : hour}:${minutes} ${hour >= 12 ? 'PM' : 'AM'}`;
  };

  const generateTimeSlots = () => {
    if (!mentor.availability || !selectedDate) return [];
    
    const dayOfWeek = new Date(selectedDate).toLocaleString('en-us', { weekday: 'long' }).toLowerCase();
    const dayAvailability = mentor.availability[dayOfWeek];
    
    if (!dayAvailability?.enabled || !dayAvailability.startTime || !dayAvailability.endTime) return [];
    
    const slots = [];
    const start = new Date(`${selectedDate}T${dayAvailability.startTime}`);
    const end = new Date(`${selectedDate}T${dayAvailability.endTime}`);
    
    // Generate 30-minute slots
    for (let time = new Date(start); time < end; time.setMinutes(time.getMinutes() + 30)) {
      const timeString = time.toTimeString().slice(0, 5);
      slots.push(timeString);
    }
    
    return slots;
  };

  return (
    <div className="border rounded-lg p-6 shadow-sm bg-white hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold">{mentor.name}</h3>
          <p className="text-gray-600 mb-2">{mentor.role}</p>
          <p className="text-gray-700 mb-4">{mentor.bio}</p>
          
          {mentor.skills && mentor.skills.length > 0 && (
            <div className="mb-4">
              <h4 className="font-medium text-gray-800 mb-1">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {mentor.skills.map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {hasAvailability ? (
            <div className="mb-4">
              <h4 className="font-medium text-gray-800 mb-1">Available Days</h4>
              <p>{availableDays.join(', ')}</p>
            </div>
          ) : (
            <p className="text-yellow-600">No availability set</p>
          )}
        </div>
      </div>

      {hasAvailability && (
        <button
          onClick={() => setShowBookingForm(!showBookingForm)}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
        >
          {showBookingForm ? 'Hide Booking' : 'Book Session'}
        </button>
      )}

      {showBookingForm && hasAvailability && (
        <div className="mt-4 pt-4 border-t">
          <fetcher.Form method="post" action="/bookings">
            <input type="hidden" name="mentorId" value={mentor._id} />
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Date</label>
              <input
                type="date"
                name="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full p-2 border rounded"
                required
              />
            </div>

            {generateTimeSlots().length > 0 ? (
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Time Slot</label>
                <div className="grid grid-cols-2 gap-2">
                  {generateTimeSlots().map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => handleSlotSelection(slot)}
                      className={`p-2 border rounded text-center ${
                        selectedSlot === slot
                          ? 'bg-blue-100 border-blue-500'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      {formatTime(slot)}
                    </button>
                  ))}
                </div>
                <input type="hidden" name="timeSlot" value={selectedSlot || ''} />
              </div>
            ) : (
              <p className="text-red-500 mb-4">No available slots for this day</p>
            )}

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Agenda</label>
              <textarea
                name="agenda"
                value={agenda}
                onChange={(e) => setAgenda(e.target.value)}
                className="w-full p-2 border rounded"
                rows={3}
                required
              />
            </div>

            <button
              type="submit"
              disabled={!selectedSlot || fetcher.state === "submitting"}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded disabled:bg-gray-400 transition-colors"
            >
              {fetcher.state === "submitting" ? 'Booking...' : 'Confirm Booking'}
            </button>
          </fetcher.Form>
        </div>
      )}

      {fetcher.state === "submitting" ? (
        <div className="mt-3 text-blue-600 text-sm">Processing...</div>
      ) : (
        <>
          {fetcher.data?.success && (
            <div className="mt-3 text-green-600 text-sm">
              Booking confirmed! Check your sessions.
            </div>
          )}
          {fetcher.data?.error && (
            <div className="mt-3 text-red-500 text-sm">
              Error: {fetcher.data.error}
            </div>
          )}
        </>
      )}
    </div>
  );
}