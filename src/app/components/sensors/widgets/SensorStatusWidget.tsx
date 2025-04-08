import { Card, CardContent } from "@/app/components/ui/card";

type SensorStatusWidgetProps = {
  total: number;
  online: number;
  offline: number;
  issues: number;
};

export default function SensorStatusWidget({
  total,
  online,
  offline,
  issues,
}: SensorStatusWidgetProps) {
  return (
    <Card className="p-4 rounded-2xl shadow-md">
      <CardContent className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-muted-foreground">Total</h2>
          <p className="text-2xl font-bold text-primary">{total}</p>
        </div>
        <div className="text-center">
          <h2 className="text-lg font-semibold text-muted-foreground">
            Online
          </h2>
          <p className="text-2xl font-bold text-green-600">{online}</p>
        </div>
        <div className="text-center">
          <h2 className="text-lg font-semibold text-muted-foreground">
            Offline
          </h2>
          <p className="text-2xl font-bold text-red-500">{offline}</p>
        </div>
        <div className="text-center">
          <h2 className="text-lg font-semibold text-muted-foreground">
            Issues
          </h2>
          <p className="text-2xl font-bold text-yellow-500">{issues}</p>
        </div>
      </CardContent>
    </Card>
  );
}
