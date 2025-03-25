import { SensorData } from "@/app/types/dashboard";

export const floodSensors: SensorData[] = [
  {
    id: 1,
    name: "Ciliwung River - Kampung Melayu",
    lat: -6.2297,
    lng: 106.869,
    value: 4.2, // ✅ Renamed from waterLevel
    unit: "m", // ✅ Added unit for measurement
    severity: "High",
    location: "Jakarta",
    status: "Active",
    batteryLevel: 78,
    category: "Water Level",
    disasterCategory: "Flood",
    type: "Flood",
    lastUpdated: "2025-03-20T08:30:00Z",
    history: [
      { timestamp: "2025-03-19T08:30:00Z", value: 3.9 },
      { timestamp: "2025-03-18T08:30:00Z", value: 3.5 },
    ],
  },
  {
    id: 2,
    name: "Pesanggrahan River - Bintaro",
    lat: -6.2765,
    lng: 106.7642,
    value: 2.8, // ✅ Renamed from waterLevel
    unit: "m", // ✅ Added unit
    severity: "Moderate",
    location: "South Jakarta",
    status: "Active",
    batteryLevel: 85,
    category: "Water Level",
    disasterCategory: "Flood",
    type: "Flood",
    lastUpdated: "2025-03-20T08:45:00Z",
    history: [
      { timestamp: "2025-03-19T08:45:00Z", value: 2.5 },
      { timestamp: "2025-03-18T08:45:00Z", value: 2.3 },
    ],
  },
  {
    id: 3,
    name: "Bekasi River - Perumahan Harapan Indah",
    lat: -6.1889,
    lng: 107.0124,
    value: 5.1, // ✅ Renamed from waterLevel
    unit: "m", // ✅ Added unit
    severity: "High",
    location: "Bekasi",
    status: "Inactive",
    batteryLevel: 60,
    category: "Water Level",
    disasterCategory: "Flood",
    type: "Flood",
    lastUpdated: "2025-03-20T09:00:00Z",
    history: [
      { timestamp: "2025-03-19T09:00:00Z", value: 4.8 },
      { timestamp: "2025-03-18T09:00:00Z", value: 4.3 },
    ],
  },
  {
    id: 4,
    name: "Cisadane River - Serpong",
    lat: -6.3028,
    lng: 106.6525,
    value: 3.4, // ✅ Renamed from waterLevel
    unit: "m", // ✅ Added unit
    severity: "Moderate",
    location: "Tangerang",
    status: "Active",
    batteryLevel: 72,
    category: "Water Level",
    disasterCategory: "Flood",
    type: "Flood",
    lastUpdated: "2025-03-20T09:15:00Z",
    history: [
      { timestamp: "2025-03-19T09:15:00Z", value: 3.1 },
      { timestamp: "2025-03-18T09:15:00Z", value: 2.9 },
    ],
  },
  {
    id: 5,
    name: "Jakarta River Sensor",
    lat: -6.2297,
    lng: 106.869,
    waterLevel: 2.5,
    value: 2.5, // Use waterLevel as the value
    unit: "m", // Unit for water level in meters
    severity: "Moderate",
    location: "Jakarta",
    status: "Active",
    batteryLevel: 85,
    category: "Water Level", // Updated from "type" to "category"
    disasterCategory: "Flood",
    type: "Flood",
    lastUpdated: "2025-03-20T12:00:00Z",
    history: [
      { timestamp: "2025-03-19T08:30:00Z", value: 3.9 },
      { timestamp: "2025-03-18T08:30:00Z", value: 3.5 },
    ],
  },
  {
    id: 6,
    name: "Bandung Drainage",
    lat: -6.9,
    lng: 107.6,
    // For pumps, waterLevel might not apply, so we omit it and provide default value/unit
    value: 0, // Default value (adjust if needed)
    unit: "L/s", // Default unit for pumps (adjust as needed)
    severity: "Low",
    location: "South Bandung",
    status: "Maintenance",
    batteryLevel: 80,
    category: "Pump", // Updated from "type" to "category"
    disasterCategory: "Flood",
    type: "Flood",
    lastUpdated: "2025-03-19T09:30:00Z",
    history: [], // Empty history array if no historical data available
  },
];
