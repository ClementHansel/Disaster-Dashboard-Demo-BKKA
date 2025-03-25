// 📌 Earthquake sensor data mock
import { SensorData } from "../../types/dashboard";

export const earthquakeSensors: SensorData[] = [
  {
    id: 101,
    name: "Seismic Station Alpha",
    category: "Seismic", // ✅ Changed `type` to `category`
    unit: "Magnitude", // ✅ Added required `unit`
    value: 5.2, // ✅ Added required `value`
    lat: -6.2146,
    lng: 106.8451,
    disasterCategory: "Earthquake",
    type: "Earthquake",
    severity: "Moderate",
    status: "Active",
    batteryLevel: 85,
    location: "Jakarta, Indonesia",
    lastUpdated: "2025-03-20T12:00:00Z",
    history: [], // ✅ Added missing `history`
  },
  {
    id: 102,
    name: "Seismic Station Beta",
    category: "Seismic", // ✅ Changed `type` to `category`
    unit: "Magnitude", // ✅ Added required `unit`
    value: 6.1, // ✅ Added required `value`
    lat: -7.2504,
    lng: 112.7688,
    disasterCategory: "Earthquake",
    type: "Earthquake",
    severity: "High",
    status: "Active",
    batteryLevel: 78,
    location: "Surabaya, Indonesia",
    lastUpdated: "2025-03-20T12:30:00Z",
    history: [], // ✅ Added missing `history`
  },
];
