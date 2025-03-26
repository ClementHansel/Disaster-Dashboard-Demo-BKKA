"use client";

import React, { useState } from "react";

const SecuritySettings: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mfaEnabled, setMfaEnabled] = useState(false);

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("New password and confirmation do not match.");
      return;
    }
    // Call API to update password and MFA settings
    console.log({ currentPassword, newPassword, mfaEnabled });
    alert("Security settings updated!");
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4">Security Settings</h2>
      <form onSubmit={handlePasswordChange} className="space-y-4">
        <div>
          <label
            htmlFor="currentPassword"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Current Password
          </label>
          <input
            id="currentPassword"
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="p-2 border rounded w-full"
            placeholder="Enter current password"
            aria-label="Current Password"
          />
        </div>
        <div>
          <label
            htmlFor="newPassword"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            New Password
          </label>
          <input
            id="newPassword"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="p-2 border rounded w-full"
            placeholder="Enter new password"
            aria-label="New Password"
          />
        </div>
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Confirm New Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="p-2 border rounded w-full"
            placeholder="Confirm new password"
            aria-label="Confirm New Password"
          />
        </div>
        <div className="flex items-center">
          <input
            id="mfa"
            type="checkbox"
            checked={mfaEnabled}
            onChange={(e) => setMfaEnabled(e.target.checked)}
            className="mr-2"
            aria-label="Enable Multi-Factor Authentication"
          />
          <label htmlFor="mfa" className="text-sm font-medium text-gray-700">
            Enable Multi-Factor Authentication (MFA)
          </label>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Update Security Settings
        </button>
      </form>
    </div>
  );
};

export default SecuritySettings;
