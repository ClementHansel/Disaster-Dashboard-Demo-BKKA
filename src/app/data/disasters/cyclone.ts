import { SensorData } from "@/app/types/dashboard";

// 📌 Mock data for Cyclone & Storm disaster
export const cycloneStormSensors: SensorData[] = [
  {
    id: 1,
    name: "Wind Speed Sensor - Coastal Area",
    category: "Wind Speed", // ✅ Replaced `type` with `category`
    unit: "km/h", // ✅ Added required `unit`
    value: 120, // ✅ Added `value` to match `SensorData`
    lat: -8.4095,
    lng: 115.1889,
    disasterType: "Cyclone & Storm",
    windSpeed: 120, // km/h
    risk: "High",
    status: "Active",
    batteryLevel: 85,
    location: "Bali Coast",
    lastUpdated: "2025-03-20T14:00:00Z",
    history: [], // ✅ Added missing `history`
  },
  {
    id: 2,
    name: "Barometric Pressure Sensor - Offshore",
    category: "Other", // ✅ Replaced `type` with `category`
    unit: "hPa", // ✅ Placeholder unit
    value: 1010, // ✅ Placeholder value
    lat: -10.0,
    lng: 118.0,
    disasterType: "Cyclone & Storm",
    risk: "Medium",
    status: "Active",
    batteryLevel: 90,
    location: "Offshore Monitoring Station",
    lastUpdated: "2025-03-20T14:10:00Z",
    history: [], // ✅ Added missing `history`
  },
  {
    id: 3,
    name: "Rain Gauge - Storm Monitoring",
    category: "Rain Gauge", // ✅ Replaced `type` with `category`
    unit: "mm", // ✅ Added required `unit`
    value: 50, // ✅ Added `value`
    lat: -6.2088,
    lng: 106.8456,
    disasterType: "Cyclone & Storm",
    waterLevel: 50, // mm rainfall
    risk: "Medium",
    status: "Active",
    batteryLevel: 75,
    location: "Jakarta",
    lastUpdated: "2025-03-20T14:15:00Z",
    history: [], // ✅ Added missing `history`
  },
];
