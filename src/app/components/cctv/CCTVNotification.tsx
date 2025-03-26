"use client";

import React, { useState } from "react";

export interface CCTVNotificationData {
  id: string;
  siteName: string;
  cameraName: string;
  streamUrl: string;
  status: "online" | "offline" | "error";
  description: string;
  severity: "low" | "moderate" | "severe";
}

interface CCTVNotificationProps {
  notifications: CCTVNotificationData[];
}

const CCTVNotification: React.FC<CCTVNotificationProps> = ({
  notifications,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [severityFilter, setSeverityFilter] = useState<
    "all" | "low" | "moderate" | "severe"
  >("all");

  const filteredNotifications = notifications.filter(
    (item) =>
      (severityFilter === "all" || item.severity === severityFilter) &&
      (item.siteName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.cameraName.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-3">📢 CCTV Notifications</h2>
      <div className="flex gap-2 mb-3">
        <input
          type="text"
          placeholder="🔍 Search notifications..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded w-full"
          aria-label="Search CCTV Notifications"
        />
        <select
          value={severityFilter}
          onChange={(e) =>
            setSeverityFilter(
              e.target.value as "all" | "low" | "moderate" | "severe"
            )
          }
          className="p-2 border rounded"
          aria-label="Filter by Severity"
        >
          <option value="all">All Severities</option>
          <option value="low">Low</option>
          <option value="moderate">Moderate</option>
          <option value="severe">Severe</option>
        </select>
      </div>
      {filteredNotifications.length === 0 ? (
        <p className="text-gray-500">No notifications found.</p>
      ) : (
        <ul className="space-y-2">
          {filteredNotifications.map((notif) => (
            <li
              key={notif.id}
              className="p-2 border-b flex justify-between items-center"
            >
              <div>
                <strong>
                  {notif.siteName} - {notif.cameraName}
                </strong>{" "}
                - {notif.description}
              </div>
              <span
                className={`px-2 py-1 rounded text-white ${
                  notif.severity === "severe"
                    ? "bg-red-500"
                    : notif.severity === "moderate"
                    ? "bg-orange-500"
                    : "bg-yellow-500"
                }`}
              >
                {notif.severity.toUpperCase()}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CCTVNotification;
