import { Card, CardContent } from "@/app/components/ui/card";
import { LastUpdatedSensorsWidgetProps } from "@/app/types/sensors/sensor";

export default function LastUpdatedSensorsWidget({
  sensors,
}: LastUpdatedSensorsWidgetProps) {
  return (
    <Card className="p-4 rounded-2xl shadow-md">
      <CardContent>
        <h2 className="text-lg font-semibold mb-4">Last Updated Sensors</h2>
        <div className="space-y-3 max-h-[300px] overflow-y-auto">
          {sensors.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No recent updates found.
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
                    <p className="text-xs text-muted-foreground">
                      {sensor.lastUpdated}
                    </p>
                    {sensor.value && (
                      <p className="text-sm font-medium">{sensor.value}</p>
                    )}
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
