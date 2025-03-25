import { SensorData } from "@/app/types/dashboard";

// 📌 Mock data for Drought & Water Crisis-related sensors
export const droughtWaterCrisisSensors: SensorData[] = [
  {
    id: 601,
    name: "Soil Moisture Sensor - Agricultural Field",
    category: "Soil Moisture", // ✅ Replaced `type` with `category`
    unit: "%", // ✅ Added required `unit`
    value: 12, // ✅ Added required `value`
    lat: -6.4001,
    lng: 107.0002,
    disasterType: "Drought & Water Crisis",
    risk: "High",
    status: "Active",
    batteryLevel: 65,
    location: "Agricultural Field, Central Region",
    lastUpdated: "2025-03-20T12:00:00Z",
    history: [], // ✅ Added missing `history`
  },
  {
    id: 602,
    name: "Water Well Sensor - Rural Village",
    category: "Water Level", // ✅ Replaced `type` with `category`
    unit: "m", // ✅ Added required `unit`
    value: 1.5, // ✅ Added required `value`
    lat: -6.405,
    lng: 107.005,
    disasterType: "Drought & Water Crisis",
    risk: "Critical",
    status: "Active",
    batteryLevel: 72,
    location: "Rural Village, Community Well",
    lastUpdated: "2025-03-20T12:10:00Z",
    history: [], // ✅ Added missing `history`
  },
  {
    id: 603,
    name: "Reservoir Capacity Sensor - City Dam",
    category: "Water Storage", // ✅ Replaced `type` with `category`
    unit: "%", // ✅ Added required `unit`
    value: 35, // ✅ Added required `value`
    lat: -6.4105,
    lng: 107.0105,
    disasterType: "Drought & Water Crisis",
    risk: "Medium",
    status: "Maintenance",
    batteryLevel: 80,
    location: "City Dam, West Section",
    lastUpdated: "2025-03-20T11:45:00Z",
    history: [], // ✅ Added missing `history`
  },
];
