import { SensorData } from "@/app/types/dashboard";

// 📌 Mock data for Urban Fire-related sensors
export const urbanFireSensors: SensorData[] = [
  {
    id: 401,
    name: "Temperature Sensor - Downtown",
    category: "Temperature",
    unit: "°C",
    value: 48.2,
    lat: -6.2001,
    lng: 106.8002,
    disasterCategory: "Urban Fire",
    type: "Urban Fire",
    temperature: 48.2, // 🔥 Matches temperature field
    severity: "High",
    status: "Active",
    batteryLevel: 75,
    location: "Downtown Commercial Area",
    lastUpdated: "2025-03-20T12:10:00Z",
    history: [],
  },
  {
    id: 402,
    name: "Smoke Detector - Apartment Block 5",
    category: "Gas Emission",
    unit: "PPM",
    value: 450, // Assuming PPM for gas sensors
    lat: -6.2025,
    lng: 106.805,
    disasterCategory: "Urban Fire",
    type: "Urban Fire",
    severity: "High",
    status: "Active",
    batteryLevel: 80,
    location: "Apartment Block 5, 3rd Floor",
    lastUpdated: "2025-03-20T12:20:00Z",
    history: [],
  },
  {
    id: 403,
    name: "Fire Hydrant Pressure Sensor - Industrial Zone",
    category: "Water Pressure",
    unit: "Bar",
    value: 2.5,
    lat: -6.2085,
    lng: 106.8105,
    disasterCategory: "Urban Fire",
    type: "Urban Fire",
    waterLevel: 2.5, // 🚰 Matches waterLevel field
    severity: "Low",
    status: "Maintenance",
    batteryLevel: 88,
    location: "Industrial Zone, Fire Safety Hub",
    lastUpdated: "2025-03-20T11:55:00Z",
    history: [],
  },
];
