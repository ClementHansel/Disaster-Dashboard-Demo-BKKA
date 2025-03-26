"use client";

import React, { useState } from "react";

const NotificationPreferences: React.FC = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4">Notification Preferences</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm">Email Notifications</span>
          <button
            onClick={() => setEmailNotifications(!emailNotifications)}
            className={`p-2 rounded ${
              emailNotifications ? "bg-green-500 text-white" : "bg-gray-300"
            }`}
            aria-label="Toggle Email Notifications"
          >
            {emailNotifications ? "On" : "Off"}
          </button>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm">SMS Notifications</span>
          <button
            onClick={() => setSmsNotifications(!smsNotifications)}
            className={`p-2 rounded ${
              smsNotifications ? "bg-green-500 text-white" : "bg-gray-300"
            }`}
            aria-label="Toggle SMS Notifications"
          >
            {smsNotifications ? "On" : "Off"}
          </button>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm">Push Notifications</span>
          <button
            onClick={() => setPushNotifications(!pushNotifications)}
            className={`p-2 rounded ${
              pushNotifications ? "bg-green-500 text-white" : "bg-gray-300"
            }`}
            aria-label="Toggle Push Notifications"
          >
            {pushNotifications ? "On" : "Off"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationPreferences;
