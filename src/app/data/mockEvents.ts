import { EventType } from "../types/dashboard";

const mockEvents: EventType[] = [
  {
    id: 1,
    name: "Jakarta Flood Warning",
    description:
      "Heavy rainfall has caused water levels to rise significantly.",
    type: "Flood",
    disasterCategory: "Flood", // ✅ Added
    severity: "High",
    timestamp: "2025-03-20T10:00:00Z",
    reportedAt: "2025-03-20T09:50:00Z", // ✅ Added
    date: "2025-03-20",
    location: {
      lat: -6.2088,
      lng: 106.8456,
      name: "Jakarta, Indonesia",
    },
    status: "Active",
    source: "Manual", // ✅ Added
    sensors: [
      {
        id: 101,
        name: "Water Level Sensor",
        category: "Water Level",
        disasterCategory: "Flood",
        type: "Flood",
        lat: -6.2088,
        lng: 106.8456,
        waterLevel: 3.2,
        severity: "High",
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
    name: "Bali Earthquake Alert",
    description: "A magnitude 6.5 earthquake was detected near Bali.",
    type: "Earthquake",
    disasterCategory: "Earthquake", // ✅ Added
    severity: "Critical",
    timestamp: "2025-03-15T11:30:00Z",
    reportedAt: "2025-03-15T11:00:00Z", // ✅ Added
    date: "2025-03-15",
    location: {
      lat: -8.3405,
      lng: 115.092,
      name: "Bali, Indonesia",
    },
    status: "Resolved",
    source: "Manual", // ✅ Added
    sensors: [
      {
        id: 102,
        name: "Seismic Sensor",
        category: "Seismic",
        disasterCategory: "Earthquake",
        type: "Earthquake",
        lat: -8.3405,
        lng: 115.092,
        magnitude: 6.5,
        severity: "Critical",
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
