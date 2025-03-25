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

// These two imports are likely DisasterEvent[] instead of SensorData[]
import militaryEmergencyData from "@/app/data/disasters/militaryEmergency";
import riotEvents from "@/app/data/disasters/riot";

/**
 * Helper function to map a DisasterEvent into SensorData format.
 */
function mapDisasterEventToSensorData(event: DisasterEvent): SensorData {
  return {
    id: event.id,
    name: event.name || "Detected Event",
    category: "Other" as SensorCategory,
    disasterCategory: event.disasterCategory,
    unit: "N/A",
    value: 0,
    lat: event.location.lat,
    lng: event.location.lng,
    type: event.disasterCategory,
    severity: event.severity,
    status: "Active",
    lastUpdated: event.timestamp,
    batteryLevel: undefined,
    location: event.location.name,
    history: [],
    eventId: event.id,
    waterLevel: undefined,
    moistureLevel: undefined,
    magnitude: undefined,
    temperature: undefined,
    windSpeed: undefined,
    capacity: undefined,
  };
}

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

// Centralized sensor data from various disaster sources.
// Notice we map the militaryEmergencyData and riotEvents arrays to SensorData
const allSensors: Record<DisasterCategory, SensorData[]> = {
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
  "Military Emergency": militaryEmergencyData.map(mapDisasterEventToSensorData),
  "Pandemic & Outbreak": pandemicOutbreakEvents,
  Riot: riotEvents.map(mapDisasterEventToSensorData),
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
    ...militaryEmergencyData.map(mapDisasterEventToSensorData),
    ...pandemicOutbreakEvents,
    ...riotEvents.map(mapDisasterEventToSensorData),
  ],
};

export default function DashboardPage() {
  const [activeDisaster, setActiveDisaster] = useState<DisasterCategory>("All");
  const [alerts] = useState<Alert[]>([]);
  // Disaster events would typically be loaded from an API; here we use an empty array as a placeholder.
  const [disasterEvents] = useState<DisasterEvent[]>([]);

  // Filter real sensor data based on the active disaster category.
  const filteredSensors: SensorData[] =
    activeDisaster === "All"
      ? allSensors.All
      : allSensors[activeDisaster] || [];

  // Filter disaster events based on the active disaster category.
  const filteredEvents: DisasterEvent[] =
    activeDisaster === "All"
      ? disasterEvents
      : disasterEvents.filter(
          (event) => event.disasterCategory === activeDisaster
        );

  // Map disaster events into SensorData format for DashboardStats and SensorList.
  const eventSensors: SensorData[] = filteredEvents.map(
    mapDisasterEventToSensorData
  );

  // Merge real sensor data with event-based sensor data.
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

      {/* For MapView we pass the raw disaster events so it can handle them separately */}
      <MapView
        sensors={filteredSensors}
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
