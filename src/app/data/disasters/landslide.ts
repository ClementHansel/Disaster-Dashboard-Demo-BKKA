import { SensorData } from "@/app/types/dashboard";

// 📌 Mock data for Landslide-related sensors
export const landslideSensors: SensorData[] = [
  {
    id: 801,
    name: "Soil Movement Detector - Mountain Region",
    category: "Seismic", // ✅ Changed `type` to `category`
    unit: "Richter", // ✅ Added required `unit`
    value: 3.8, // ✅ Added required `value`
    lat: -6.6,
    lng: 106.8,
    disasterCategory: "Landslide",
    type: "Landslide",
    severity: "High",
    status: "Active",
    batteryLevel: 90,
    location: "Mountain Slope",
    lastUpdated: "2025-03-20T12:00:00Z",
    history: [], // ✅ Added missing `history`
  },
  {
    id: 802,
    name: "Rainfall Intensity Sensor - Hillside",
    category: "Weather Monitoring", // ✅ Changed `type` to `category`
    unit: "mm/h", // ✅ Added required `unit`
    value: 120.5, // ✅ Added required `value`
    lat: -6.55,
    lng: 106.75,
    disasterCategory: "Landslide",
    type: "Landslide",
    severity: "Moderate",
    status: "Active",
    batteryLevel: 85,
    location: "Hillside Village",
    lastUpdated: "2025-03-20T12:15:00Z",
    history: [], // ✅ Added missing `history`
  },
  {
    id: 803,
    name: "Groundwater Pressure Sensor - Cliffside",
    category: "Geotechnical", // ✅ Changed `type` to `category`
    unit: "kPa", // ✅ Added required `unit`
    value: 250, // ✅ Added required `value`
    lat: -6.5,
    lng: 106.7,
    disasterCategory: "Landslide",
    type: "Landslide",
    severity: "High",
    status: "Active",
    batteryLevel: 82,
    location: "Cliffside Settlement",
    lastUpdated: "2025-03-20T12:30:00Z",
    history: [], // ✅ Added missing `history`
  },
];
