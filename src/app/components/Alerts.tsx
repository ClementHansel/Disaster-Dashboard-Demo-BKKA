import React from "react";
import { Alert } from "@/app/types/dashboard";
import mockData from "@/app/data/mockData";

const Alerts: React.FC = () => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-lg w-full">
      <h2 className="text-lg font-semibold mb-2">Emergency Alerts</h2>
      <ul className="space-y-2">
        {mockData.alerts.map((alert: Alert) => (
          <li
            key={alert.id}
            className={`p-3 rounded-lg text-white ${
              alert.severity === "Critical"
                ? "bg-red-600"
                : alert.severity === "Moderate"
                ? "bg-yellow-500"
                : "bg-blue-500"
            }`}
          >
            <span className="font-medium">{alert.message}</span>
            <span className="block text-sm opacity-80">
              {new Date(alert.timestamp).toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Alerts;
