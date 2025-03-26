import { AIAnalysisResult, SensorData } from "@/app/types/ai/annotation";

/**
 * Performs AI-based analysis on sensor data.
 */
export const getAIAnalysis = async (
  data: SensorData[]
): Promise<AIAnalysisResult> => {
  if (!data.length) {
    return {
      summary: "No data available for analysis.",
      comparison: "No comparison possible.",
      conclusion: "Please select a sensor and time range.",
    };
  }

  // Extract values
  const values = data.map((point) => point.value);

  // Compute statistics
  const totalValues = values.reduce((sum, val) => sum + val, 0);
  const avgValue = totalValues / values.length;
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);

  // Detect trend (increasing, decreasing, stable)
  const firstValue = values[0];
  const lastValue = values[values.length - 1];
  let trend: "increasing" | "decreasing" | "stable" = "stable";

  if (lastValue > firstValue * 1.05) trend = "increasing";
  else if (lastValue < firstValue * 0.95) trend = "decreasing";

  // Compute standard deviation for fluctuations
  const variance =
    values.reduce((sum, val) => sum + Math.pow(val - avgValue, 2), 0) /
    values.length;
  const stdDev = Math.sqrt(variance);

  // AI Conclusion
  let conclusion = "Sensor readings are within a safe range.";
  if (avgValue > 75 || stdDev > 10)
    conclusion = "⚠️ Warning: High or fluctuating sensor readings detected.";

  return {
    summary: `Analyzed ${data.length} readings: Avg ${avgValue.toFixed(
      2
    )}, Min ${minValue}, Max ${maxValue}.`,
    comparison: `Trend detected: ${trend}.`,
    conclusion,
  };
};
