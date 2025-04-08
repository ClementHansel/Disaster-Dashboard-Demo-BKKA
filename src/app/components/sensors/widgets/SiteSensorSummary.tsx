import { Card, CardContent } from "@/app/components/ui/card";
import { SiteSensorSummaryProps } from "@/app/types/sensors/sensor";

export default function SiteSensorSummary({ data }: SiteSensorSummaryProps) {
  return (
    <div className="">
      {data.map((site, i) => (
        <Card key={i} className="p-4 rounded-2xl shadow-md">
          <CardContent className="space-y-2">
            <h2 className="text-xl font-bold">{site.siteName}</h2>
            <div className="text-sm text-muted-foreground">
              Last update: {site.lastUpdate}
            </div>
            <div className="flex justify-between pt-2">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Total</p>
                <p className="text-lg font-semibold">{site.totalSensors}</p>
              </div>
              <div className="text-center text-green-600">
                <p className="text-sm">Active</p>
                <p className="text-lg font-semibold">{site.active}</p>
              </div>
              <div className="text-center text-red-500">
                <p className="text-sm">Inactive</p>
                <p className="text-lg font-semibold">{site.inactive}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
