import React from "react";
import "./UpcomingEvents.css";
import { Calendar } from "./Calendar/Calendar";
import { EventCard } from "./EventCard/EventCard";

export const UpcomingEvents = () => {
  return (
    <div className="upcoming-events">
      <div className="event-card-list">
        <div className="upcoming-events-title">Upcoming Events</div>
        <EventCard />
        <EventCard />
        <EventCard />
      </div>

      <Calendar />
    </div>
  );
};
