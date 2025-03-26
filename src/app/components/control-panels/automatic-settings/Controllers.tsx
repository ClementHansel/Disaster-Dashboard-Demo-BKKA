"use client";

import React, { useState } from "react";

export interface Controller {
  id: string;
  name: string;
  status: "active" | "inactive";
  setting: number; // A generic setting value (0 to 100)
}

interface ControllersProps {
  controllersData: Controller[];
  onUpdateController?: (controller: Controller) => void;
}

const Controllers: React.FC<ControllersProps> = ({
  controllersData,
  onUpdateController,
}) => {
  const initialControllers: Controller[] = controllersData.map((ctrl) => ({
    ...ctrl,
    status: ctrl.status === "active" ? "active" : "inactive",
  }));
  const [controllers, setControllers] =
    useState<Controller[]>(initialControllers);

  const toggleAutomaticController = (id: string) => {
    const updatedControllers = controllers.map((ctrl) => {
      if (ctrl.id === id) {
        const newStatus: "active" | "inactive" =
          ctrl.status === "active" ? "inactive" : "active";
        const updatedController: Controller = { ...ctrl, status: newStatus };
        if (onUpdateController) onUpdateController(updatedController);
        return updatedController;
      }
      return ctrl;
    });
    setControllers(updatedControllers);
  };

  const updateAutomaticControllerSetting = (id: string, newSetting: number) => {
    const updatedControllers = controllers.map((ctrl) => {
      if (ctrl.id === id) {
        const updatedController: Controller = { ...ctrl, setting: newSetting };
        if (onUpdateController) onUpdateController(updatedController);
        return updatedController;
      }
      return ctrl;
    });
    setControllers(updatedControllers);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">
        Controller Settings (Automatic)
      </h2>
      {controllers.length === 0 ? (
        <p>No controllers configured for this site.</p>
      ) : (
        <div className="space-y-4">
          {controllers.map((ctrl) => (
            <div key={ctrl.id} className="flex flex-col border p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm">{ctrl.name}</span>
                <button
                  onClick={() => toggleAutomaticController(ctrl.id)}
                  className={`px-3 py-1 rounded text-white text-sm ${
                    ctrl.status === "active" ? "bg-green-500" : "bg-red-500"
                  }`}
                >
                  {ctrl.status === "active" ? "ACTIVE" : "INACTIVE"}
                </button>
              </div>
              <div className="mt-2">
                <label
                  htmlFor={`controller-setting-${ctrl.id}`}
                  className="block text-xs mb-1"
                >
                  Setting: {ctrl.setting}
                </label>
                <input
                  id={`controller-setting-${ctrl.id}`}
                  type="range"
                  min="0"
                  max="100"
                  value={ctrl.setting}
                  onChange={(e) =>
                    updateAutomaticControllerSetting(
                      ctrl.id,
                      Number(e.target.value)
                    )
                  }
                  className="w-full"
                />
                <input
                  type="number"
                  value={ctrl.setting}
                  onChange={(e) =>
                    updateAutomaticControllerSetting(
                      ctrl.id,
                      Number(e.target.value)
                    )
                  }
                  className="mt-2 p-1 border rounded w-full text-center"
                  min="0"
                  max="100"
                  aria-label="Controller setting"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Controllers;
