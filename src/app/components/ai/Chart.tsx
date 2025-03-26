import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";
import { SensorData } from "@/app/types/ai/annotation";
import { getFilteredSensorData } from "@/app/lib/ai/aiDataUtils";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale
);

interface Filters {
  site: string;
  sensor: string;
  dateFrom: string;
  dateTo: string;
  timeFrom: string;
  timeTo: string;
}

interface ChartProps {
  filters: Filters;
}

export default function Chart({ filters }: ChartProps) {
  const data: SensorData[] = getFilteredSensorData(filters);

  if (data.length === 0) {
    return (
      <p className="text-center text-gray-500">
        Please select a site and sensor to view the chart.
      </p>
    );
  }

  const labels: string[] = data.map((entry) => entry.timestamp);
  const values: number[] = data.map((entry) => entry.value);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Sensor Readings",
        data: values,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      x: { title: { display: true, text: "Timestamp" } },
      y: { title: { display: true, text: "Value" } },
    },
  };

  return (
    <div className="w-full h-[400px] p-4 bg-white shadow rounded-lg">
      <Line data={chartData} options={options} />
    </div>
  );
}
