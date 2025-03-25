"use client";

import { useEffect, useState } from "react";
import {
  DisasterEvent,
  DisasterCategory,
  Severity,
  Sensor,
} from "@/app/types/dashboard";
import mockEvents from "@/app/data/mockEvents"; // Ensure mockEvents aligns with DisasterEvent type

const EventDetailsPage = ({ params }: { params: { eventId: string } }) => {
  const eventId = parseInt(params.eventId, 10);
  const [eventData, setEventData] = useState<DisasterEvent | null>(null);

  useEffect(() => {
    if (!isNaN(eventId)) {
      const event = mockEvents.find((e) => e.id === eventId);

      if (event) {
        const mappedEvent: DisasterEvent = {
          id: event.id,
          name: event.name,
          description: event.description || "No description available.",
          disasterCategory: (event.type as DisasterCategory) || "All", // Ensure valid DisasterCategory
          severity: (event.severity as Severity) || "Low", // Ensure valid Severity
          timestamp: event.timestamp,
          status: (["Active", "Resolved", "Pending"].includes(event.status)
            ? event.status
            : "Active") as "Active" | "Resolved" | "Pending",
          location:
            typeof event.location === "string"
              ? { lat: 0, lng: 0, name: event.location } // Fallback for string locations
              : event.location,
          source:
            event.sensors && event.sensors.length > 0 ? "Sensor" : "Manual", // Assign based on sensors
          sensors: event.sensors || [], // Ensure it's always an array
        };

        setEventData(mappedEvent);
      } else {
        setEventData(null);
      }
    }
  }, [eventId]);

  if (!eventData) {
    return <div className="p-4">Event not found.</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{eventData.name}</h1>
      <p className="text-gray-600">{eventData.description}</p>

      <div className="mt-4">
        <p>
          <strong>Category:</strong> {eventData.disasterCategory}
        </p>
        <p>
          <strong>Severity:</strong> {eventData.severity}
        </p>
        <p>
          <strong>Status:</strong> {eventData.status}
        </p>
        <p>
          <strong>Timestamp:</strong>{" "}
          {new Date(eventData.timestamp).toLocaleString()}
        </p>
        <p>
          <strong>Source:</strong> {eventData.source}
        </p>
        <p>
          <strong>Location:</strong> {eventData.location.name} (
          {eventData.location.lat}, {eventData.location.lng})
        </p>
      </div>

      {eventData.sensors.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Associated Sensors</h2>
          <ul className="list-disc list-inside">
            {eventData.sensors.map((sensor: Sensor) => (
              <li key={sensor.id}>
                {sensor.name} - {sensor.category} ({sensor.value} {sensor.unit})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EventDetailsPage;
