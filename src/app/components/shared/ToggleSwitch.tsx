"use client";

import React from "react";

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked,
  onChange,
  label,
}) => {
  return (
    <div className="flex items-center gap-2">
      {label && <span className="text-sm">{label}</span>}
      <label
        className="relative inline-flex items-center cursor-pointer"
        title="Toggle Switch"
      >
        <span className="sr-only">Toggle Switch</span>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only peer"
          aria-label="Toggle Switch"
        />
        <div
          className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full dark:bg-gray-700
          peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600
          peer-checked:bg-blue-600"
        ></div>
      </label>
    </div>
  );
};

export default ToggleSwitch;
