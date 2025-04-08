// src/data/sensors/mockSensorsNotifications.ts

export interface SensorNotification {
  id: number;
  message: string;
  type: "error" | "warning" | "success";
  categories: string[];
  site: string;
  timestamp: string;
}

export const mockSensorsNotifications: SensorNotification[] = Array.from(
  { length: 25 },
  (_, i) => {
    const messages = [
      {
        message: "Sensor 3 requires calibration",
        categories: ["sensor status", "task status"],
      },
      {
        message: "Site A is offline",
        categories: ["site status", "connection status"],
      },
      {
        message: "Camera 5 is back online",
        categories: ["camera status", "connection status", "task status"],
      },
      { message: "Task completed: System check", categories: ["task status"] },
      {
        message: "Connection lost to Server 2",
        categories: ["connection status", "site status"],
      },
      {
        message: "New update available for Camera 3",
        categories: ["camera status", "task status"],
      },
    ];

    const data = messages[i % messages.length];

    return {
      id: i + 1,
      message: data.message,
      type: (["error", "warning", "success"] as const)[i % 3],
      categories: data.categories,
      site: `Site ${String.fromCharCode(65 + (i % 5))}`,
      timestamp: new Date(
        `2025-03-${String(11 - (i % 10)).padStart(2, "0")}T${
          10 + (i % 10)
        }:30:00Z`
      ).toISOString(),
    };
  }
).sort(
  (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
);
