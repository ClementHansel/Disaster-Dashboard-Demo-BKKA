"use client";

import { useState } from "react";

import DashboardStats from "@/app/components/widgets/DashboardStats";
import NotificationPanel from "@/app/components/widgets/NotificationPanel";
import SensorList from "@/app/components/widgets/SensorList";
import DisasterSection from "@/app/components/widgets/DisasterSection";
import MapView from "../components/map/MapView";

import type {
  Alert,
  DisasterCategory,
  DisasterEvent,
  SensorData,
  SensorCategory,
  Severity,
  Status,
} from "@/app/types/dashboard";

import {
  coastalErosionSensors,
  cycloneStormSensors,
  droughtWaterCrisisSensors,
  earthquakeSensors,
  floodSensors,
  forestFireSensors,
  infrastructureCollapseSensors,
  landslideSensors,
  pandemicOutbreakEvents,
  tsunamiSensors,
  urbanFireSensors,
} from "@/app/data/disasters";

import militaryEmergencyData from "@/app/data/disasters/militaryEmergency";
import riotEvents from "@/app/data/disasters/riot";

// List of disaster categories (for filtering)
const disasterTypes: DisasterCategory[] = [
  "All",
  "Flood",
  "Earthquake",
  "Landslide",
  "Forest Fire",
  "Urban Fire",
  "Tsunami",
  "Riot",
  "Military Emergency",
  "Volcanic Eruption",
  "Cyclone & Storm",
  "Drought & Water Crisis",
  "Pandemic & Outbreak",
  "Coastal Erosion",
  "Infrastructure Collapse",
];

// Gather real sensor data from various sources
const allSensors: Record<DisasterCategory, (DisasterEvent | SensorData)[]> = {
  Flood: floodSensors,
  Earthquake: earthquakeSensors,
  Tsunami: tsunamiSensors,
  Landslide: landslideSensors,
  "Forest Fire": forestFireSensors,
  "Urban Fire": urbanFireSensors,
  "Cyclone & Storm": cycloneStormSensors,
  "Drought & Water Crisis": droughtWaterCrisisSensors,
  "Coastal Erosion": coastalErosionSensors,
  "Infrastructure Collapse": infrastructureCollapseSensors,
  "Military Emergency": militaryEmergencyData,
  "Pandemic & Outbreak": pandemicOutbreakEvents,
  Riot: riotEvents,
  "Volcanic Eruption": [],
  All: [
    ...floodSensors,
    ...earthquakeSensors,
    ...tsunamiSensors,
    ...landslideSensors,
    ...forestFireSensors,
    ...urbanFireSensors,
    ...cycloneStormSensors,
    ...droughtWaterCrisisSensors,
    ...coastalErosionSensors,
    ...infrastructureCollapseSensors,
    ...militaryEmergencyData,
    ...pandemicOutbreakEvents,
    ...riotEvents,
  ],
};

/**
 * Helper function to convert a DisasterEvent into a SensorData object.
 * We extract the lat, lng, and location from the event’s location object.
 * Some sensor-specific properties are taken from a related sensor if available;
 * otherwise, defaults are provided.
 */
function mapDisasterEventsToSensorData(
  events: DisasterEvent[],
  fallbackSensors: SensorData[]
): SensorData[] {
  return events.map((event) => {
    // Try to find a related sensor in the fallback array based on event id or matching coordinates
    const relatedSensor = fallbackSensors.find(
      (sensor) =>
        sensor.eventId === event.id ||
        (sensor.lat === event.location.lat && sensor.lng === event.location.lng)
    );

    return {
      id: event.id,
      name: event.name || "Detected Event",
      // Use related sensor’s category if found; otherwise, default to "Other" (make sure "Other" is valid in SensorCategory)
      category: (relatedSensor?.category || "Other") as SensorCategory,
      disasterCategory: event.disasterCategory,
      unit: relatedSensor?.unit || "N/A",
      value: relatedSensor?.value || 0,
      lat: event.location.lat,
      lng: event.location.lng,
      type: event.disasterCategory,
      severity: event.severity,
      // For mapped events we set status to "Active" (since they are detected real time)
      status: "Active" as Extract<
        Status,
        "Active" | "Inactive" | "Maintenance"
      >,
      lastUpdated: event.timestamp || new Date().toISOString(),
      history: relatedSensor?.history || [],
      eventId: event.id,
      // Optional sensor-specific properties (if any related sensor exists)
      waterLevel: relatedSensor?.waterLevel,
      moistureLevel: relatedSensor?.moistureLevel,
      magnitude: relatedSensor?.magnitude,
      temperature: relatedSensor?.temperature,
      windSpeed: relatedSensor?.windSpeed,
      capacity: relatedSensor?.capacity,
      batteryLevel: relatedSensor?.batteryLevel,
      location: event.location.name,
    };
  });
}

export default function DashboardPage() {
  const [activeDisaster, setActiveDisaster] = useState<DisasterCategory>("All");
  const [alerts] = useState<Alert[]>([]);
  // Disaster events would typically be loaded from an API.
  // For this example, we assume an empty array.
  const [disasterEvents] = useState<DisasterEvent[]>([]);

  // Filter real sensor data based on the active disaster category
  const filteredSensors: SensorData[] =
    activeDisaster === "All"
      ? allSensors.All.filter((item): item is SensorData => "category" in item)
      : allSensors[activeDisaster].filter(
          (item): item is SensorData => "category" in item
        ) || [];

  // Filter disaster events based on active disaster category
  const filteredEvents: DisasterEvent[] =
    activeDisaster === "All"
      ? disasterEvents
      : disasterEvents.filter(
          (event) => event.disasterCategory === activeDisaster
        );

  // Convert disaster events into SensorData format
  const eventSensors: SensorData[] = mapDisasterEventsToSensorData(
    filteredEvents,
    filteredSensors
  );

  // Merge sensor data from both sources into one unified array
  const allFilteredSensors: SensorData[] = [
    ...filteredSensors,
    ...eventSensors,
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Disaster Management Dashboard</h1>

      <DashboardStats
        sensors={allFilteredSensors}
        selectedDisaster={activeDisaster}
      />

      <MapView
        sensors={allFilteredSensors}
        disasterEvents={filteredEvents}
        selectedDisaster={activeDisaster}
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {disasterTypes.map((type) => (
          <button
            key={type}
            onClick={() => setActiveDisaster(type)}
            className={`px-4 py-2 rounded-lg transition-all text-sm font-medium shadow-sm ${
              activeDisaster === type
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <DisasterSection type={activeDisaster} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SensorList
          sensors={allFilteredSensors}
          selectedDisaster={activeDisaster}
        />
        <NotificationPanel alerts={alerts} selectedDisaster={activeDisaster} />
      </div>
    </div>
  );
}
