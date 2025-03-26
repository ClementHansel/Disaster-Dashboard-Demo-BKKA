"use client";

import React, { useState } from "react";

interface Notification {
  id: string;
  timestamp: string; // e.g., "2025-03-11 10:30"
  site: string;
  message: string;
  username: string;
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    timestamp: "2025-03-11 10:30",
    site: "Jakarta",
    message: "Sensor calibration completed.",
    username: "admin",
  },
  {
    id: "2",
    timestamp: "2025-03-11 11:00",
    site: "Bandung",
    message: "Pump turned off.",
    username: "operator1",
  },
  {
    id: "3",
    timestamp: "2025-03-11 11:15",
    site: "Jakarta",
    message: "Sluice gate opened.",
    username: "operator2",
  },
  {
    id: "4",
    timestamp: "2025-03-12 09:45",
    site: "Surabaya",
    message: "Connection error detected.",
    username: "techsupport",
  },
  // ... add more mock notifications as needed
];

const CPNotifications: React.FC = () => {
  // Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSite, setSelectedSite] = useState("All Sites");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedUsername, setSelectedUsername] = useState("All Users");

  // Dropdown options (you can later load these dynamically)
  const siteOptions = ["All Sites", "Jakarta", "Bandung", "Surabaya"];
  const usernameOptions = [
    "All Users",
    "admin",
    "operator1",
    "operator2",
    "techsupport",
  ];

  const filteredNotifications = mockNotifications.filter((notif) => {
    const searchMatch =
      notif.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notif.site.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notif.username.toLowerCase().includes(searchTerm.toLowerCase());
    const siteMatch =
      selectedSite === "All Sites" || notif.site === selectedSite;
    const dateMatch = !selectedDate || notif.timestamp.startsWith(selectedDate);
    const usernameMatch =
      selectedUsername === "All Users" || notif.username === selectedUsername;

    return searchMatch && siteMatch && dateMatch && usernameMatch;
  });

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Notifications</h2>
      {/* Filter Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Search notifications..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded flex-1"
          aria-label="Search Notifications"
        />
        <select
          value={selectedSite}
          onChange={(e) => setSelectedSite(e.target.value)}
          className="p-2 border rounded"
          aria-label="Filter by Site"
        >
          {siteOptions.map((site) => (
            <option key={site} value={site}>
              {site}
            </option>
          ))}
        </select>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="p-2 border rounded"
          aria-label="Filter by Date"
        />
        <select
          value={selectedUsername}
          onChange={(e) => setSelectedUsername(e.target.value)}
          className="p-2 border rounded"
          aria-label="Filter by Username"
        >
          {usernameOptions.map((user) => (
            <option key={user} value={user}>
              {user}
            </option>
          ))}
        </select>
      </div>
      {/* Notifications List */}
      {filteredNotifications.length === 0 ? (
        <p className="text-gray-500">No notifications found.</p>
      ) : (
        <ul className="space-y-3">
          {filteredNotifications.map((notif) => (
            <li key={notif.id} className="p-3 border rounded-md">
              <div className="text-xs text-gray-500">{notif.timestamp}</div>
              <div className="font-semibold">{notif.site}</div>
              <div>{notif.message}</div>
              <div className="text-sm text-gray-700">By: {notif.username}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CPNotifications;
