import { AIInsight, SensorData } from "@/app/types/dashboard";

// Mock AI analysis function
export function generateAIInsights(sensors: SensorData[]): AIInsight[] {
  return sensors.map((sensor) => ({
    id: sensor.id,
    prediction: `Flood risk ${sensor.risk} at ${sensor.name}`,
    confidence:
      Math.floor(Math.random() * 30) + (sensor.risk === "High" ? 70 : 40), // Higher confidence for high-risk areas
  }));
}
