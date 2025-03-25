import { SensorData } from "@/app/types/dashboard";

export const volcanicEruptionSensors: SensorData[] = [
  {
    id: 1,
    name: "Seismic Activity Sensor",
    category: "Seismic",
    disasterCategory: "Volcanic Eruption",
    unit: "Richter",
    value: 5.1,
    lat: -7.9425,
    lng: 112.9531,
    type: "Volcanic Eruption",
    severity: "High",
    status: "Active",
    lastUpdated: "2025-03-26T14:00:00Z",
    batteryLevel: 82,
    location: "Mount Bromo, East Java",
    history: [
      { timestamp: "2025-03-26T13:00:00Z", value: 4.7 },
      { timestamp: "2025-03-26T12:00:00Z", value: 4.9 },
    ],
  },
  {
    id: 2,
    name: "Gas Emission Sensor",
    category: "Gas Emission",
    disasterCategory: "Volcanic Eruption",
    unit: "PPM",
    value: 2000,
    lat: -7.5417,
    lng: 110.4453,
    type: "Volcanic Eruption",
    severity: "Critical",
    status: "Active",
    lastUpdated: "2025-03-26T14:05:00Z",
    batteryLevel: 72,
    location: "Mount Merapi, Central Java",
    history: [
      { timestamp: "2025-03-26T13:05:00Z", value: 1900 },
      { timestamp: "2025-03-26T12:05:00Z", value: 1750 },
    ],
  },
];
