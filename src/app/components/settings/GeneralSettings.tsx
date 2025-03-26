"use client";

import React, { useState } from "react";

const GeneralSettings: React.FC = () => {
  const [theme, setTheme] = useState("light"); // "light" or "dark"
  const [language, setLanguage] = useState("en");
  const [timeZone, setTimeZone] = useState("UTC");

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">General Settings</h2>
      <div className="space-y-4">
        <div>
          <label
            htmlFor="themeSelect"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Theme
          </label>
          <select
            id="themeSelect"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="p-2 border rounded w-full"
            aria-label="Select Theme"
          >
            <option value="light">Light Mode</option>
            <option value="dark">Dark Mode</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="languageSelect"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Language
          </label>
          <select
            id="languageSelect"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="p-2 border rounded w-full"
            aria-label="Select Language"
          >
            <option value="en">English</option>
            <option value="id">Indonesian</option>
            <option value="es">Spanish</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="timeZoneSelect"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Time Zone
          </label>
          <select
            id="timeZoneSelect"
            value={timeZone}
            onChange={(e) => setTimeZone(e.target.value)}
            className="p-2 border rounded w-full"
            aria-label="Select Time Zone"
          >
            <option value="UTC">UTC</option>
            <option value="WIB">WIB (Western Indonesia Time)</option>
            <option value="WITA">WITA (Central Indonesia Time)</option>
            <option value="WIT">WIT (Eastern Indonesia Time)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default GeneralSettings;
