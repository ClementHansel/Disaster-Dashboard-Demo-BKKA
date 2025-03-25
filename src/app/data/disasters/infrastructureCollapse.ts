import { SensorData } from "@/app/types/dashboard";

// 📌 Mock data for Infrastructure Collapse-related sensors
export const infrastructureCollapseSensors: SensorData[] = [
  {
    id: 301,
    name: "Bridge Structural Integrity Sensor",
    category: "Seismic", // ✅ Changed `type` to `category`
    unit: "Richter", // ✅ Added required `unit`
    value: 3.2, // ✅ Added required `value`
    lat: -6.2001,
    lng: 106.8453,
    disasterType: "Infrastructure Collapse",
    risk: "Medium",
    status: "Active",
    batteryLevel: 85,
    location: "Jakarta, Indonesia",
    lastUpdated: "2025-03-20T12:00:00Z",
    history: [], // ✅ Added missing `history`
  },
  {
    id: 302,
    name: "Building Structural Monitor",
    category: "Seismic", // ✅ Changed `type` to `category`
    unit: "Richter", // ✅ Added required `unit`
    value: 2.8, // ✅ Added required `value`
    lat: -6.9147,
    lng: 107.6098,
    disasterType: "Infrastructure Collapse",
    risk: "Low",
    status: "Active",
    batteryLevel: 90,
    location: "Bandung, Indonesia",
    lastUpdated: "2025-03-20T12:15:00Z",
    history: [], // ✅ Added missing `history`
  },
  {
    id: 303,
    name: "Road Subsidence Sensor",
    category: "Water Level", // ✅ Changed `type` to `category`
    unit: "m", // ✅ Added required `unit`
    value: 0.4, // ✅ Added required `value`
    lat: -7.2504,
    lng: 112.7688,
    disasterType: "Infrastructure Collapse",
    risk: "High",
    status: "Maintenance",
    batteryLevel: 60,
    location: "Surabaya, Indonesia",
    lastUpdated: "2025-03-20T11:45:00Z",
    history: [], // ✅ Added missing `history`
  },
];
