"use client";
import { useState } from "react";
import CreateGroup from "@/app/components/data-sets/CreateGroup"; // ✅ Updated import
import SensorSelector from "@/app/components/data-sets/SensorSelector";
import SiteSelector from "@/app/components/data-sets/SiteSelector";
import GroupManager from "@/app/components/data-sets/GroupManager";
import CreateGroupModal from "@/app/components/data-sets/CreateGroupModal"; // ✅ Added import

import {
  mockDatasetGroups,
  mockSites,
  mockSensors,
  mockAnnotations, // ✅ Import mock annotations
} from "@/app/data/ai/data-sets/mockDatasets";

import {
  DatasetGroup,
  Site,
  Sensor,
  Annotation,
} from "@/app/types/ai/data-sets/dataset";

const DatasetPage = () => {
  const [selectedSite, setSelectedSite] = useState<Site | null>(null);
  const [selectedSensors, setSelectedSensors] = useState<string[]>([]);
  const [datasetGroups, setDatasetGroups] =
    useState<DatasetGroup[]>(mockDatasetGroups);
  const [isModalOpen, setIsModalOpen] = useState(false); // ✅ State for modal

  // ✅ Full list of annotations
  const allAnnotations: Annotation[] = mockAnnotations;

  // ✅ Track selected annotations (sensorId -> selected annotation IDs)
  const [selectedAnnotations, setSelectedAnnotations] = useState<
    Record<string, string[]>
  >({});

  // ✅ Handle annotation selection toggle
  const handleToggleAnnotation = (sensorId: string, annotationId: string) => {
    setSelectedAnnotations((prev) => {
      const currentSelection = prev[sensorId] || [];
      const isSelected = currentSelection.includes(annotationId);

      return {
        ...prev,
        [sensorId]: isSelected
          ? currentSelection.filter((id) => id !== annotationId) // Remove selection
          : [...currentSelection, annotationId], // Add selection
      };
    });
  };

  // ✅ Filter sensors based on selected site
  const filteredSensors: Sensor[] = mockSensors.filter(
    (sensor) => !selectedSite || sensor.siteId === selectedSite.id
  );

  // ✅ Filter datasets based on selected sensors
  const filteredDatasets: DatasetGroup[] = datasetGroups.filter((dataset) =>
    selectedSensors.includes(dataset.sensorId)
  );

  // ✅ Handle dataset group updates (edit, delete)
  const handleEditGroup = (id: string) => {
    console.log("Edit group:", id);
    // Implement edit functionality here
  };

  const handleDeleteGroup = (id: string) => {
    setDatasetGroups((prev) => prev.filter((group) => group.id !== id));
  };

  const handleDeleteMultipleGroups = (ids: string[]) => {
    setDatasetGroups((prev) => prev.filter((group) => !ids.includes(group.id)));
  };

  // ✅ Handle new group creation
  const handleCreateGroup = (groupName: string) => {
    const newGroup: DatasetGroup = {
      id: `group-${Date.now()}`,
      name: groupName,
      sensorId: selectedSensors[0] || "",
      annotations: [],
      datasets: [], // Add this (empty by default or however you structure it)
      uploadedAt: new Date().toISOString(), // Add this (current time for now)
    };

    setDatasetGroups((prev) => [...prev, newGroup]);
    setIsModalOpen(false); // Close modal after creation
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Dataset Management</h1>

      {/* ✅ Site & Sensor Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SiteSelector sites={mockSites} onSelect={setSelectedSite} />
        <SensorSelector
          site={selectedSite?.id ?? null} // ✅ Pass correct site ID
          sensors={filteredSensors} // ✅ Pass filtered sensors
          onSelect={setSelectedSensors}
        />
      </div>

      {/* ✅ Create Group Section */}
      <CreateGroup
        datasets={filteredDatasets}
        allAnnotations={allAnnotations} // ✅ Pass full list of annotations
        selectedAnnotations={selectedAnnotations}
        onToggleAnnotation={handleToggleAnnotation}
        onCreateGroup={() => setIsModalOpen(true)} // ✅ Open modal on click
      />

      {/* ✅ Group Management */}
      <GroupManager
        datasetGroups={datasetGroups}
        onEditGroup={handleEditGroup}
        onDeleteGroup={handleDeleteGroup}
        onDeleteMultipleGroups={handleDeleteMultipleGroups}
      />

      {/* ✅ Create Group Modal */}
      <CreateGroupModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreateGroup={handleCreateGroup}
      />
    </div>
  );
};

export default DatasetPage;
