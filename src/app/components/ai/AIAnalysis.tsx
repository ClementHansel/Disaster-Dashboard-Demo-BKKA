import { mockSensorData } from "@/app/data/ai/mockData";
import { getAIAnalysis } from "@/app/lib/ai/aiUtils";
import { AIAnalysisResult } from "@/app/types/ai/annotation";
import { useState, useEffect } from "react";

interface Filters {
  site: string;
  sensor: string;
  dateFrom: string;
  dateTo: string;
  timeFrom: string;
  timeTo: string;
}

interface AIAnalysisProps {
  filters: Filters;
}

export default function AIAnalysis({ filters }: AIAnalysisProps) {
  const [analysisResult, setAnalysisResult] = useState<AIAnalysisResult | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        // ✅ Properly filtering the mockSensorData array
        const filteredData = mockSensorData.filter((data) => {
          const timestamp = new Date(data.timestamp).getTime();
          const dateFrom = new Date(
            `${filters.dateFrom}T${filters.timeFrom}`
          ).getTime();
          const dateTo = new Date(
            `${filters.dateTo}T${filters.timeTo}`
          ).getTime();

          return (
            data.site === filters.site &&
            data.sensorId === filters.sensor &&
            timestamp >= dateFrom &&
            timestamp <= dateTo
          );
        });

        const result = await getAIAnalysis(filteredData); // Pass filtered data to AI analysis
        setAnalysisResult(result);
      } catch (error) {
        console.error("Error fetching AI analysis:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filters]);

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="font-bold mb-2">AI Analysis</h2>

      {loading ? (
        <p className="text-gray-500">Loading AI analysis...</p>
      ) : analysisResult ? (
        <div>
          <p>
            <strong>Summary:</strong> {analysisResult.summary}
          </p>
          <p>
            <strong>Comparison:</strong> {analysisResult.comparison}
          </p>
          <p>
            <strong>Conclusion:</strong> {analysisResult.conclusion}
          </p>
        </div>
      ) : (
        <p className="text-gray-500">
          No analysis available for the selected filters.
        </p>
      )}
    </div>
  );
}
