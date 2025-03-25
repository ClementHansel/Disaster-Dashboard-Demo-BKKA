import { AIInsight, SensorData } from "@/app/types/dashboard";

// Mock AI analysis function
export function generateAIInsights(sensors: SensorData[]): AIInsight[] {
  return sensors.map((sensor) => {
    // Use severity instead of risk
    const riskLevel = sensor.severity || "Low"; // Default to "Low" if undefined

    return {
      id: sensor.id,
      prediction: `Flood risk ${riskLevel} at ${sensor.name}`,
      confidence:
        Math.floor(Math.random() * 30) + (riskLevel === "High" ? 70 : 40), // Higher confidence for high-risk areas
      generatedAt: new Date().toISOString(), // ✅ Added missing 'generatedAt'
    };
  });
}
