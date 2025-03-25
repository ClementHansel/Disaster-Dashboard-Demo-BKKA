import { SensorData } from "@/app/types/dashboard";

// 📌 Function to filter sensors by severity level
export function filterSensorsByseverity(
  sensors: SensorData[],
  severityLevel: "Low" | "Medium" | "High"
) {
  return sensors.filter((sensor) => sensor.severity === severityLevel);
}

// 📌 Function to filter sensors by type (Flood, Tsunami, Earthquake, etc.)
export function filterSensorsByType(sensors: SensorData[], type: string) {
  return sensors.filter((sensor) => sensor.type === type);
}

// 📌 Function to calculate the average water level (only for sensors that measure water)
export function calculateAverageWaterLevel(sensors: SensorData[]): number {
  const waterSensors = sensors.filter(
    (sensor) => sensor.waterLevel !== undefined
  );
  const totalWaterLevel = waterSensors.reduce(
    (sum, sensor) => sum + (sensor.waterLevel ?? 0),
    0
  );
  return waterSensors.length ? totalWaterLevel / waterSensors.length : 0;
}

// 📌 Function to get active sensors
export function getActiveSensors(sensors: SensorData[]) {
  return sensors.filter((sensor) => sensor.status === "Active");
}

// 📌 Function to get battery level percentage for active sensors
export function getAverageBatteryLevel(sensors: SensorData[]): number {
  const activeSensors = sensors.filter(
    (sensor) => sensor.status === "Active" && sensor.batteryLevel !== undefined
  );
  const totalBattery = activeSensors.reduce(
    (sum, sensor) => sum + (sensor.batteryLevel ?? 0),
    0
  );
  return activeSensors.length ? totalBattery / activeSensors.length : 0;
}
