import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";

const UpcomingEvents = () => {
  const [upcomingEvent, setUpcomingEvent] = useState([]);

  useEffect(() => {
    fetch("/upcomingEventData.json")
      .then((Response) => Response.json())
      .then((data) => setUpcomingEvent(data));
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto my-20 ">
      {/* upcoming title */}
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold border-b-2 pb-3 w-fit ">
          Upcoming Events
        </h1>
      </div>
      {/* upcoming events card */}
      <div className="grid grid-cols-2 gap-5 mt-10">
        {upcomingEvent.map((event) => (
          <EventCard key={event.id} event={event}></EventCard>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
