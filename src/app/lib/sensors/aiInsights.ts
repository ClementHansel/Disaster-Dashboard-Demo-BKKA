// libs/sensors/aiInsights.ts

type SensorData = {
  id: string;
  site: string;
  sensorType: string;
  value: number;
  timestamp: string;
  disasterType?: string;
};

export type AIInsight = {
  title: string;
  summary: string;
  severity: "low" | "medium" | "high";
  recommendation: string;
};

export function generateMockAIInsights(data: SensorData[]): AIInsight[] {
  // You can later replace this with real AI model output.
  if (!data || data.length === 0) {
    return [
      {
        title: "No Data Available",
        summary: "There is no data to analyze at this time.",
        severity: "low",
        recommendation: "Please adjust your filters or try again later.",
      },
    ];
  }

  const waterLevelReadings = data.filter((d) => d.sensorType === "Water Level");
  const tempReadings = data.filter((d) => d.sensorType === "Temperature");

  const insights: AIInsight[] = [];

  if (waterLevelReadings.length > 0) {
    const highCount = waterLevelReadings.filter((r) => r.value > 80).length;
    if (highCount > 0) {
      insights.push({
        title: "High Water Levels Detected",
        summary: `${highCount} readings exceeded safe thresholds.`,
        severity: "high",
        recommendation:
          "Monitor flood-prone areas and prepare emergency protocols.",
      });
    } else {
      insights.push({
        title: "Water Levels Normal",
        summary: "All water level sensors are within safe limits.",
        severity: "low",
        recommendation: "Continue monitoring as usual.",
      });
    }
  }

  if (tempReadings.length > 0) {
    const avg =
      tempReadings.reduce((sum, t) => sum + t.value, 0) / tempReadings.length;
    insights.push({
      title: "Temperature Trend",
      summary: `Average temperature is ${avg.toFixed(1)}°C.`,
      severity: avg > 35 ? "medium" : "low",
      recommendation:
        avg > 35
          ? "Watch for heatwaves in vulnerable areas."
          : "No abnormal temperature trends detected.",
    });
  }

  return insights;
}
