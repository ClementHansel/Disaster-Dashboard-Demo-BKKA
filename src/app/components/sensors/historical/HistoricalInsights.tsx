import { Card, CardContent } from "@/app/components/ui/card";
import { HistoricalSummaryProps } from "@/app/types/sensors/sensor";

export default function HistoricalSummary({
  data,
  sensorName = "Sensor",
  unit = "",
}: HistoricalSummaryProps) {
  if (data.length === 0) {
    return (
      <Card className="p-4 rounded-2xl shadow-md">
        <CardContent>
          <h2 className="text-lg font-semibold mb-2">Summary: {sensorName}</h2>
          <p className="text-sm text-muted-foreground">No data available.</p>
        </CardContent>
      </Card>
    );
  }

  const values = data.map((d) => d.value);
  const average = (
    values.reduce((sum, val) => sum + val, 0) / values.length
  ).toFixed(2);
  const max = Math.max(...values).toFixed(2);
  const min = Math.min(...values).toFixed(2);
  const timeStart = data[0].timestamp;
  const timeEnd = data[data.length - 1].timestamp;

  return (
    <Card className="p-4 rounded-2xl shadow-md">
      <CardContent className="space-y-4">
        <h2 className="text-lg font-semibold">Summary: {sensorName}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Average</p>
            <p>
              {average} {unit}
            </p>
          </div>
          <div>
            <p className="text-muted-foreground">Max</p>
            <p>
              {max} {unit}
            </p>
          </div>
          <div>
            <p className="text-muted-foreground">Min</p>
            <p>
              {min} {unit}
            </p>
          </div>
          <div className="col-span-2 sm:col-span-1 sm:col-start-4">
            <p className="text-muted-foreground">Time Range</p>
            <p className="break-words">
              {timeStart} → {timeEnd}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
