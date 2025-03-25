// 📌 src/app/types/sensor.ts

import { SensorCategory } from "./dashboard";

export type SensorHistory = {
  timestamp: string;
  value: number;
};

export type Sensor = {
  id: number;
  name: string;
  category: SensorCategory;
  lat: number;
  lng: number;
  lastUpdated: string;
  value: number;
  unit: string;
  status: "Active" | "Inactive" | "Maintenance";
  risk: "Low" | "Moderate" | "High" | "Critical";
  history: SensorHistory[];
};
