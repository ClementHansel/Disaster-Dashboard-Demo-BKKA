import { SensorData } from "@/app/types/dashboard";

// 📌 Mock data for Coastal Erosion sensors
export const coastalErosionSensors: SensorData[] = [
  {
    id: 301,
    name: "Shoreline Erosion Monitor - West Beach",
    category: "Water Level",
    unit: "m",
    value: 1.2,
    lat: -6.2,
    lng: 106.8,
    type: "Coastal Erosion",
    waterLevel: 1.2,
    severity: "Moderate",
    status: "Active",
    batteryLevel: 78,
    location: "West Beach",
    lastUpdated: "2025-03-20T12:00:00Z",
    history: [],
    disasterCategory: "Coastal Erosion", // ✅ Added
  },
  {
    id: 302,
    name: "Sediment Monitoring Station - Delta Zone",
    category: "Other",
    unit: "N/A",
    value: 0,
    lat: -6.35,
    lng: 106.92,
    type: "Coastal Erosion",
    severity: "High",
    status: "Active",
    batteryLevel: 82,
    location: "Delta Zone",
    lastUpdated: "2025-03-20T12:10:00Z",
    history: [],
    disasterCategory: "Coastal Erosion", // ✅ Added
  },
  {
    id: 303,
    name: "Wave Impact Sensor - Cliffside",
    category: "Water Pressure",
    unit: "Pa",
    value: 50,
    lat: -6.15,
    lng: 106.75,
    type: "Coastal Erosion",
    severity: "Low",
    status: "Active",
    batteryLevel: 85,
    location: "Cliffside",
    lastUpdated: "2025-03-20T12:15:00Z",
    history: [],
    disasterCategory: "Coastal Erosion", // ✅ Added
  },
];
