"use client";

import React from "react";
import { Alert } from "@/app/types/dashboard";
import { Bell, AlertTriangle, ShieldAlert } from "lucide-react"; // Icons for different severity levels

interface NotificationPanelProps {
  alerts: Alert[];
  selectedDisaster: string;
}

const NotificationPanel: React.FC<NotificationPanelProps> = ({
  alerts,
  selectedDisaster,
}) => {
  // Filter notifications based on selected disaster type
  const filteredAlerts =
    selectedDisaster === "All"
      ? alerts
      : alerts.filter((alert) => alert.type === selectedDisaster);

  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Notifications</h2>

      {filteredAlerts.length === 0 ? (
        <p className="text-gray-500 text-center">
          No alerts for {selectedDisaster}.
        </p>
      ) : (
        <ul className="space-y-3">
          {filteredAlerts.map((alert) => (
            <li
              key={alert.id}
              className={`flex items-start space-x-3 p-3 rounded-md ${
                alert.severity === "Critical"
                  ? "bg-red-100 text-red-600"
                  : alert.severity === "Moderate"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-blue-100 text-blue-700"
              }`}
            >
              {/* Severity Icon */}
              <div>
                {alert.severity === "Critical" ? (
                  <ShieldAlert className="w-5 h-5 text-red-600" />
                ) : alert.severity === "Moderate" ? (
                  <AlertTriangle className="w-5 h-5 text-yellow-700" />
                ) : (
                  <Bell className="w-5 h-5 text-blue-700" />
                )}
              </div>

              {/* Notification Content */}
              <div>
                <p className="font-semibold">{alert.message}</p>
                <p className="text-xs text-gray-500">
                  {new Date(alert.timestamp).toLocaleString()}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotificationPanel;
