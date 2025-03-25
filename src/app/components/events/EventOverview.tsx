import { DisasterEvent } from "@/app/types/dashboard";
import React from "react";

type EventOverviewProps = {
  event: DisasterEvent;
};

const severityColors = {
  Low: "bg-green-500",
  Medium: "bg-yellow-500",
  High: "bg-red-500",
};

const EventOverview: React.FC<EventOverviewProps> = ({ event }) => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg border">
      <h2 className="text-xl font-semibold">{event.name}</h2>
      <p className="text-gray-600">📍 {event.location}</p>
      <p className="text-gray-600">
        🕒 {new Date(event.timestamp).toLocaleString()}
      </p>
      <span
        className={`inline-block px-3 py-1 text-white text-sm font-medium rounded-full mt-2 ${
          severityColors[event.status as keyof typeof severityColors] ||
          "bg-gray-500"
        }`}
      >
        {event.status} Severity
      </span>
    </div>
  );
};

export default EventOverview;
