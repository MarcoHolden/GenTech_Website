import React from "react";
import "./UpcomingEvents.css";
import { Calendar } from "./Calendar/Calendar";
import { EventCard } from "./EventCard/EventCard";

export const UpcomingEvents = () => {
  return (
    <>
      <h1 className="upcoming-events-title">Upcoming Events</h1>
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
