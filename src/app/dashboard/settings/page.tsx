"use client";

import DeviceConfiguration from "@/app/components/settings/DeviceConfiguration";
import GeneralSettings from "@/app/components/settings/GeneralSettings";
import NotificationPreferences from "@/app/components/settings/NotificationPreferences";
import React from "react";

const SettingsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div className="space-y-6">
        <GeneralSettings />
        <NotificationPreferences />
        <DeviceConfiguration />
      </div>
    </div>
  );
};

export default SettingsPage;
