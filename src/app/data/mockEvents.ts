// 📌 src/app/data/mockEvents.ts
import type { EventType } from "@/app/types/dashboard";

const mockEvents: EventType[] = [
  {
    id: 1,
    name: "Flood in Jakarta",
    description: "Severe flooding due to heavy rain.",
    type: "Flood",
    severity: "Severe",
    timestamp: "2025-03-20T10:00:00Z",
    date: "2025-03-20",
    location: "North Jakarta, Indonesia",
    status: "Active",
    sensors: [
      {
        id: 101,
        name: "Water Level Sensor",
        category: "Water Level", // ✅ Added category field
        lat: -6.2088,
        lng: 106.8456,
        disasterType: "Flood",
        waterLevel: 3.2, // Relevant data for flood monitoring
        risk: "High",
        status: "Active",
        batteryLevel: 85,
        lastUpdated: "2025-03-20T10:05:00Z",
        value: 3.2,
        unit: "m",
        history: [
          { timestamp: "2025-03-20T09:50:00Z", value: 3.0 },
          { timestamp: "2025-03-20T10:00:00Z", value: 3.2 },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Earthquake in Bali",
    description: "Magnitude 6.5 earthquake struck Bali.",
    type: "Earthquake",
    severity: "Critical",
    timestamp: "2025-03-15T11:00:00Z",
    date: "2025-03-15",
    location: "Bali, Indonesia",
    status: "Resolved",
    sensors: [
      {
        id: 102,
        name: "Seismic Sensor",
        category: "Seismic", // ✅ Added category field
        lat: -8.3405,
        lng: 115.092,
        disasterType: "Earthquake",
        magnitude: 6.5, // Relevant data for earthquake monitoring
        risk: "Critical",
        status: "Active",
        batteryLevel: 92,
        lastUpdated: "2025-03-15T11:30:00Z",
        value: 6.5,
        unit: "Richter",
        history: [
          { timestamp: "2025-03-15T11:00:00Z", value: 6.3 },
          { timestamp: "2025-03-15T11:30:00Z", value: 6.5 },
        ],
      },
    ],
  },
];

export default mockEvents;
