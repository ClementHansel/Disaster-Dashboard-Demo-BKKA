"use client";

import { AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { Card } from "@/app/components/ui/card";
import { cn } from "@/lib/utils";
import { NotificationListProps } from "@/app/types/sensors/sensor";

export default function NotificationList({
  notifications,
}: NotificationListProps) {
  const statusIcon = {
    alert: <AlertTriangle className="text-yellow-600 h-5 w-5" />,
    normal: <CheckCircle className="text-green-600 h-5 w-5" />,
    offline: <XCircle className="text-red-600 h-5 w-5" />,
    Resolved: <CheckCircle className="text-blue-500" />,
    Unresolved: <AlertTriangle className="text-orange-500" />,
  };

  return (
    <div className="space-y-3">
      {notifications.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          No notifications to show.
        </p>
      ) : (
        notifications.map((notif) => (
          <Card
            key={notif.id}
            className={cn(
              "p-4 flex items-start gap-4 rounded-xl shadow-sm",
              notif.status === "alert" && "border-yellow-500/50",
              notif.status === "offline" && "border-red-500/50",
              notif.status === "normal" && "border-green-500/50"
            )}
          >
            <div className="mt-1">{statusIcon[notif.status]}</div>
            <div className="space-y-1">
              <p className="text-sm font-medium">{notif.message}</p>
              <p className="text-xs text-muted-foreground">
                {notif.timestamp} — {notif.site} — {notif.sensorName} (
                {notif.sensorType})
              </p>
            </div>
          </Card>
        ))
      )}
    </div>
  );
}
