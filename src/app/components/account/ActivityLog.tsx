"use client";

import React from "react";

export interface Activity {
  id: string;
  timestamp: string;
  action: string;
  details: string;
}

const mockActivityLogs: Activity[] = [
  {
    id: "1",
    timestamp: "2025-03-11 10:00",
    action: "Login",
    details: "User logged in successfully.",
  },
  {
    id: "2",
    timestamp: "2025-03-11 10:15",
    action: "Profile Update",
    details: "User updated email address.",
  },
  {
    id: "3",
    timestamp: "2025-03-11 10:30",
    action: "Password Change",
    details: "User changed password.",
  },
  {
    id: "4",
    timestamp: "2025-03-11 11:00",
    action: "Settings Update",
    details: "User updated notification preferences.",
  },
];

const ActivityLog: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4">Activity Log</h2>
      {mockActivityLogs.length === 0 ? (
        <p className="text-gray-500">No recent activity.</p>
      ) : (
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Timestamp
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Details
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockActivityLogs.map((log) => (
              <tr key={log.id}>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                  {log.timestamp}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                  {log.action}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-700">
                  {log.details}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ActivityLog;
