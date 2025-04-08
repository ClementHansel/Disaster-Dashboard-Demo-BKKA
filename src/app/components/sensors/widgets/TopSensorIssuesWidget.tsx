import { Card, CardContent } from "@/app/components/ui/card";
import { TopSensorIssuesWidgetProps } from "@/app/types/sensors/sensor";

export default function TopSensorIssuesWidget({
  sensors,
}: TopSensorIssuesWidgetProps) {
  return (
    <Card className="p-4 rounded-2xl shadow-md">
      <CardContent>
        <h2 className="text-lg font-semibold mb-4">Top Sensor Issues</h2>
        <div className="space-y-3 max-h-[300px] overflow-y-auto">
          {sensors.length === 0 ? (
            <p className="text-muted-foreground text-sm">
              No sensor issues found.
            </p>
          ) : (
            sensors.map((sensor) => (
              <div
                key={sensor.id}
                className="border border-border rounded-xl px-3 py-2 hover:bg-muted/30 transition"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{sensor.name}</p>
                    <p className="text-xs text-muted-foreground">
                      Site: {sensor.site}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-red-600 space-y-1">
                      {sensor.issues.map((issue, index) => (
                        <div key={index}>{issue}</div>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Last: {sensor.lastIssue}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}
