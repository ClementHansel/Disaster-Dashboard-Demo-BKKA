import { SensorData } from "@/app/types/dashboard";

// 📌 Mock data for Forest Fire-related sensors
export const forestFireSensors: SensorData[] = [
  {
    id: 301,
    name: "Temperature Sensor - National Park",
    category: "Temperature", // ✅ Changed `type` to `category`
    unit: "°C", // ✅ Added required `unit`
    value: 42.5, // ✅ Added required `value`
    lat: -6.1001,
    lng: 106.1502,
    disasterCategory: "Forest Fire",
    type: "Forest Fire",
    severity: "High",
    status: "Active",
    batteryLevel: 78,
    location: "National Park, Sector A",
    lastUpdated: "2025-03-20T12:30:00Z",
    history: [], // ✅ Added missing `history`
  },
  {
    id: 302,
    name: "Smoke Detector - Wildlife Reserve",
    category: "Gas Emission", // ✅ Changed `type` to `category`
    unit: "PPM", // ✅ Added required `unit`
    value: 39.2, // ✅ Added required `value`
    lat: -6.1025,
    lng: 106.151,
    disasterCategory: "Forest Fire",
    type: "Forest Fire",
    severity: "Moderate",
    status: "Active",
    batteryLevel: 82,
    location: "Wildlife Reserve, Zone B",
    lastUpdated: "2025-03-20T12:45:00Z",
    history: [], // ✅ Added missing `history`
  },
  {
    id: 303,
    name: "Wind Speed Sensor - Forest Edge",
    category: "Wind Speed", // ✅ Changed `type` to `category`
    unit: "km/h", // ✅ Added required `unit`
    value: 22, // ✅ Added required `value`
    lat: -6.1085,
    lng: 106.1555,
    disasterCategory: "Forest Fire",
    type: "Forest Fire",
    severity: "Moderate",
    status: "Maintenance",
    batteryLevel: 90,
    location: "Forest Edge, Southern Border",
    lastUpdated: "2025-03-20T11:50:00Z",
    history: [], // ✅ Added missing `history`
  },
];
