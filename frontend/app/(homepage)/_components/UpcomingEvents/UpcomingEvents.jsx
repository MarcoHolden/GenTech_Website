import React from "react";
import "./UpcomingEvents.css";
import { Calendar } from "./Calendar/Calendar";
import { EventCard } from "./EventCard/EventCard";

export const UpcomingEvents = () => {
  return (
    <>
      <div className="upcoming-events-title">Upcoming Events</div>
      <div className="upcoming-events">
        <div className="event-card-list">
          <EventCard />
          <EventCard />
          <EventCard />
        </div>

        <Calendar />
      </div>
    </>
  );
};
