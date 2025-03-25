import { SensorData } from "@/app/types/dashboard";

// 📌 Mock data for Cyclone & Storm disaster
export const cycloneStormSensors: SensorData[] = [
  {
    id: 1,
    name: "Wind Speed Sensor - Coastal Area",
    type: "Cyclone & Storm", // ✅ Added `type`
    category: "Wind Speed",
    unit: "km/h",
    value: 120,
    lat: -8.4095,
    lng: 115.1889,
    disasterCategory: "Cyclone & Storm",
    windSpeed: 120, // km/h
    severity: "High",
    status: "Active",
    batteryLevel: 85,
    location: "Bali Coast",
    lastUpdated: "2025-03-20T14:00:00Z",
    history: [],
  },
  {
    id: 2,
    name: "Barometric Pressure Sensor - Offshore",
    type: "Cyclone & Storm", // ✅ Added `type`
    category: "Other",
    unit: "hPa",
    value: 1010,
    lat: -10.0,
    lng: 118.0,
    disasterCategory: "Cyclone & Storm",
    severity: "Moderate",
    status: "Active",
    batteryLevel: 90,
    location: "Offshore Monitoring Station",
    lastUpdated: "2025-03-20T14:10:00Z",
    history: [],
  },
  {
    id: 3,
    name: "Rain Gauge - Storm Monitoring",
    type: "Cyclone & Storm", // ✅ Added `type`
    category: "Rain Gauge",
    unit: "mm",
    value: 50,
    lat: -6.2088,
    lng: 106.8456,
    disasterCategory: "Cyclone & Storm",
    waterLevel: 50, // mm rainfall
    severity: "Moderate",
    status: "Active",
    batteryLevel: 75,
    location: "Jakarta",
    lastUpdated: "2025-03-20T14:15:00Z",
    history: [],
  },
];
