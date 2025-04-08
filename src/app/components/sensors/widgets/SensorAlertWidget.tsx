import { Card, CardContent } from "@/app/components/ui/card";
import { SensorAlertWidgetProps } from "@/app/types/sensors/sensor";

export default function SensorAlertWidget({
  totalAlerts,
  critical,
  warning,
  topAffected,
}: SensorAlertWidgetProps) {
  return (
    <Card className="p-4 rounded-2xl shadow-md">
      <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <div>
          <h2 className="text-lg font-semibold text-muted-foreground">
            Total Alerts
          </h2>
          <p className="text-2xl font-bold text-red-600">{totalAlerts}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-muted-foreground">
            Critical
          </h2>
          <p className="text-2xl font-bold text-red-500">{critical}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-muted-foreground">
            Warnings
          </h2>
          <p className="text-2xl font-bold text-yellow-500">{warning}</p>
        </div>
      </CardContent>

      {topAffected && (
        <p className="text-sm text-muted-foreground text-center mt-2">
          Most affected: <span className="font-semibold">{topAffected}</span>
        </p>
      )}
    </Card>
  );
}
