"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import mockEvents from "@/app/data/mockEvents";
import EventOverview from "@/app/components/events/EventOverview";
import ResponseActions from "@/app/components/events/ResponseActions";
import SensorDataComponent from "@/app/components/events/SensorData";
import EmergencyResources from "@/app/components/events/EmergencyResources";
import { DisasterEvent, SensorData } from "@/app/types/dashboard";

export default function EventDetailsPage() {
  const params = useParams();
  const id = params?.id;

  // Convert id to number safely
  const eventId = typeof id === "string" ? parseInt(id, 10) : NaN;

  const [eventData, setEventData] = useState<DisasterEvent | null>(null);

  useEffect(() => {
    if (!isNaN(eventId)) {
      const event = mockEvents.find((e) => e.id === eventId) || null;
      setEventData(event);
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

      {/* Ensure mapped `sensors` include all required properties */}
      <SensorDataComponent
        sensors={(eventData.sensors || []).map(
          (sensor): SensorData => ({
            id: sensor.id,
            name: sensor.name || "Unknown Sensor",
            category: sensor.category,
            disasterCategory: sensor.disasterCategory,
            unit: sensor.unit || "N/A",
            value: sensor.value ?? 0,
            lat: sensor.lat ?? 0,
            lng: sensor.lng ?? 0,
            type: sensor.disasterCategory,
            severity: sensor.severity,
            status: (["Active", "Inactive", "Maintenance"].includes(
              sensor.status
            )
              ? sensor.status
              : "Active") as "Active" | "Inactive" | "Maintenance",
            lastUpdated: sensor.lastUpdated || new Date().toISOString(),
            batteryLevel: sensor.batteryLevel ?? undefined,
            location: sensor.location ?? undefined,
            history: Array.isArray(sensor.history) ? sensor.history : [],
            eventId: sensor.eventId ?? undefined,

            // Disaster-specific properties (optional)
            waterLevel: sensor.waterLevel ?? undefined,
            moistureLevel: sensor.moistureLevel ?? undefined,
            magnitude: sensor.magnitude ?? undefined,
            temperature: sensor.temperature ?? undefined,
            windSpeed: sensor.windSpeed ?? undefined,
            capacity: sensor.capacity ?? undefined,
          })
        )}
      />

      <EmergencyResources event={eventData} />
    </div>
  );
}
