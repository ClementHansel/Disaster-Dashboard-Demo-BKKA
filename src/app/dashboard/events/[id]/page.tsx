"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import mockEvents from "@/app/data/mockEvents";
import EventOverview from "@/app/components/events/EventOverview";
import ResponseActions from "@/app/components/events/ResponseActions";
import SensorDataComponent from "@/app/components/events/SensorData";
import EmergencyResources from "@/app/components/events/EmergencyResources";
import {
  DisasterEvent,
  SensorData,
  DisasterCategory,
  Severity,
} from "@/app/types/dashboard";

export default function EventDetailsPage() {
  const params = useParams();
  const id = params?.id;
  const eventId = typeof id === "string" ? Number(id) : NaN;

  const [eventData, setEventData] = useState<DisasterEvent | null>(null);

  useEffect(() => {
    if (!isNaN(eventId)) {
      const event = mockEvents.find((e) => e.id === eventId) || null;

      if (event) {
        const mappedEvent: DisasterEvent = {
          id: event.id,
          name: event.name,
          description: event.description ?? "No description available",
          location:
            typeof event.location === "object" && event.location !== null
              ? event.location
              : {
                  lat: 0,
                  lng: 0,
                  name:
                    typeof event.location === "string"
                      ? event.location
                      : "Unknown",
                },
          severity: (event.severity ?? "Low") as Severity, // ✅ Use Severity
          status: ["Active", "Resolved", "Pending"].includes(event.status)
            ? (event.status as "Active" | "Resolved" | "Pending")
            : "Active",
          disasterCategory: (event.disasterCategory ??
            "Unknown") as DisasterCategory, // ✅ Use DisasterCategory
          type: event.disasterCategory ?? "Unknown",
          timestamp: event.timestamp,
          date: event.date ?? event.timestamp,
          reportedAt: event.reportedAt ?? event.timestamp,
          source: ["Sensor", "Manual"].includes(event.source)
            ? event.source
            : "Sensor",
          sensors: Array.isArray(event.sensors) ? event.sensors : [],
          reportedBy: event.reportedBy,
          affectedAreas: event.affectedAreas,
        };

        setEventData(mappedEvent);
      }
    }
  }, [eventId]);

  if (!eventData) {
    return (
      <p className="text-center text-gray-500">Loading event details...</p>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Disaster Event Details</h1>
      <EventOverview event={eventData} />
      <ResponseActions event={eventData} />

      {/* Map sensors ensuring they conform to SensorData type */}
      <SensorDataComponent
        sensors={eventData.sensors.map(
          (sensor): SensorData => ({
            id: sensor.id,
            name: sensor.name || "Unknown Sensor",
            category: sensor.category,
            disasterCategory: sensor.disasterCategory,
            unit: sensor.unit ?? "N/A",
            value: sensor.value ?? 0,
            lat: sensor.lat ?? 0,
            lng: sensor.lng ?? 0,
            type: sensor.disasterCategory,
            severity: sensor.severity ?? "Low",
            // For sensors, status is limited to "Active", "Inactive", or "Maintenance"
            status: (["Active", "Inactive", "Maintenance"].includes(
              sensor.status
            )
              ? sensor.status
              : "Active") as "Active" | "Inactive" | "Maintenance",
            lastUpdated: sensor.lastUpdated ?? new Date().toISOString(),
            batteryLevel: sensor.batteryLevel ?? 100,
            // Ensure sensor.location is a string; if it's not, fallback to "Unknown"
            location:
              typeof sensor.location === "string" ? sensor.location : "Unknown",
            history: Array.isArray(sensor.history) ? sensor.history : [],
            eventId: sensor.eventId ?? eventData.id,
            waterLevel: sensor.waterLevel,
            moistureLevel: sensor.moistureLevel,
            magnitude: sensor.magnitude,
            temperature: sensor.temperature,
            windSpeed: sensor.windSpeed,
            capacity: sensor.capacity,
          })
        )}
      />

      <EmergencyResources event={eventData} />
    </div>
  );
}
