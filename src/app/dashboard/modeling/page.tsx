// src/app/dashboard/modeling/page.tsx

"use client";

import React, { useState } from "react";
import {
  mockDatasetGroups as initialGroups,
  mockAnnotations,
  mockSensors,
  mockSites,
} from "@/app/data/ai/data-sets/mockDatasets";
import { DatasetGroup, Sensor, Site } from "@/app/types/ai/data-sets/dataset";
import {
  createDatasetGroup,
  updateDatasetGroup,
  deleteDatasetGroup,
} from "@/app/lib/ai/data-sets/datasetUtils";

const ModelingPage = () => {
  const [datasetGroups, setDatasetGroups] =
    useState<DatasetGroup[]>(initialGroups);
  const [selectedGroupIds, setSelectedGroupIds] = useState<string[]>([]);
  const [newGroupModal, setNewGroupModal] = useState(false);
  const [newGroupName, setNewGroupName] = useState("");
  const [newSensorId, setNewSensorId] = useState("");

  const getSensorById = (sensorId: string): Sensor | undefined =>
    mockSensors.find((sensor) => sensor.id === sensorId);

  const getSiteBySensorId = (sensorId: string): Site | undefined => {
    const sensor = getSensorById(sensorId);
    return sensor
      ? mockSites.find((site) => site.id === sensor.siteId)
      : undefined;
  };

  const getAnnotationCount = (annotationIds: string[]): number =>
    annotationIds.filter((id) => mockAnnotations.some((a) => a.id === id))
      .length;

  const handleAddGroup = () => {
    setNewGroupModal(true);
  };

  const handleCreateGroup = () => {
    if (!newGroupName || !newSensorId) return;
    const newGroup = createDatasetGroup(newGroupName, newSensorId, []);
    setDatasetGroups((prev) => [...prev, newGroup]);
    setNewGroupModal(false);
    setNewGroupName("");
    setNewSensorId("");
  };

  const handleEditGroup = (id: string) => {
    const name = prompt("Enter new name for this group:");
    if (!name) return;
    setDatasetGroups((prev) => updateDatasetGroup(prev, id, name));
  };

  const handleDeleteGroup = (id: string) => {
    if (!confirm("Are you sure you want to delete this group?")) return;
    setDatasetGroups((prev) => deleteDatasetGroup(prev, id));
    setSelectedGroupIds((prev) => prev.filter((gid) => gid !== id));
  };

  const handleSelectGroup = (id: string) => {
    setSelectedGroupIds((prev) =>
      prev.includes(id) ? prev.filter((gid) => gid !== id) : [...prev, id]
    );
  };

  const handleSendToTraining = () => {
    if (selectedGroupIds.length === 0) {
      alert("No dataset groups selected for training.");
      return;
    }
    alert(`Sending ${selectedGroupIds.length} group(s) to training...`);
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Modeling Workspace</h1>
          <p className="text-gray-700">
            Select or prepare dataset groups before sending them to training.
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleAddGroup}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            + Add Group
          </button>
          <button
            onClick={handleSendToTraining}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            📤 Send to Training
          </button>
        </div>
      </div>

      <section>
        <h2 className="text-xl font-semibold mb-2">Dataset Groups</h2>
        {datasetGroups.length === 0 ? (
          <p className="text-gray-500">No dataset groups available.</p>
        ) : (
          <ul className="space-y-4">
            {datasetGroups.map((group) => {
              const sensor = getSensorById(group.sensorId);
              const site = getSiteBySensorId(group.sensorId);
              const annotationCount = getAnnotationCount(group.annotations);

              return (
                <li
                  key={group.id}
                  className="border p-4 rounded-md bg-white shadow-sm flex justify-between items-start"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <input
                        id={`checkbox-${group.id}`}
                        type="checkbox"
                        aria-label={`Select ${group.name}`}
                        checked={selectedGroupIds.includes(group.id)}
                        onChange={() => handleSelectGroup(group.id)}
                      />
                      <label
                        htmlFor={`checkbox-${group.id}`}
                        className="sr-only"
                      >
                        Select {group.name}
                      </label>
                      <div className="font-semibold text-lg">{group.name}</div>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      Sensor: {sensor?.name || "Unknown"} — Site:{" "}
                      {site?.name || "Unknown"}
                    </div>
                    <div className="text-sm text-gray-600">
                      {annotationCount} annotation
                      {annotationCount !== 1 ? "s" : ""}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditGroup(group.id)}
                      className="text-blue-600 hover:underline text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteGroup(group.id)}
                      className="text-red-600 hover:underline text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      {newGroupModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">
              Add New Dataset Group
            </h3>
            <div className="mb-4">
              <label
                htmlFor="group-name"
                className="block text-sm font-medium text-gray-700"
              >
                Group Name
              </label>
              <input
                id="group-name"
                type="text"
                value={newGroupName}
                onChange={(e) => setNewGroupName(e.target.value)}
                placeholder="Enter dataset group name"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="sensor-id"
                className="block text-sm font-medium text-gray-700"
              >
                Sensor ID
              </label>
              <input
                id="sensor-id"
                type="text"
                value={newSensorId}
                onChange={(e) => setNewSensorId(e.target.value)}
                placeholder="Enter sensor ID (e.g. sensor1)"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setNewGroupModal(false)}
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateGroup}
                className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModelingPage;
