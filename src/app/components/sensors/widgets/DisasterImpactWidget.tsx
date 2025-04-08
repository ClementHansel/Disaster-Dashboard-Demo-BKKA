import { Card, CardContent } from "@/app/components/ui/card";
import { DisasterImpactWidgetProps } from "@/app/types/sensors/sensor";

export default function DisasterImpactWidget({
  impacts,
}: DisasterImpactWidgetProps) {
  return (
    <Card className="p-4 rounded-2xl shadow-md">
      <CardContent>
        <h2 className="text-lg font-semibold mb-4">
          Disaster Impact on Sensors
        </h2>
        <div className="space-y-3 max-h-[300px] overflow-y-auto">
          {impacts.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No active disasters impacting sensors.
            </p>
          ) : (
            impacts.map((impact) => (
              <div
                key={impact.id}
                className="border border-border rounded-xl px-3 py-2 hover:bg-muted/30 transition"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{impact.name}</p>
                    <p className="text-xs text-muted-foreground">
                      Sites: {impact.affectedSites} | Sensors:{" "}
                      {impact.affectedSensors}
                    </p>
                  </div>
                  {impact.severity && (
                    <div className="text-sm font-semibold text-right text-destructive">
                      {impact.severity}
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}
