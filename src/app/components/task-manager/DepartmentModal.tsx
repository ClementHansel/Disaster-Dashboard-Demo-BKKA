import { Department } from "@/app/types/task-manager/department";
import { Site } from "@/app/types/task-manager/site";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";

interface DepartmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (department: Department) => void;
  department: Department | null;
  sites: Site[];
}

const DepartmentModal: React.FC<DepartmentModalProps> = ({
  isOpen,
  onClose,
  onSave,
  department,
  sites,
}) => {
  const [name, setName] = useState("");
  const [siteId, setSiteId] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (department) {
      setName(department.name);
      setSiteId(department.siteId);
      setDescription(department.description);
    } else {
      setName("");
      setSiteId("");
      setDescription("");
    }
  }, [department]);

  const handleSave = () => {
    if (name && siteId && description) {
      const newDepartment = {
        id: department?.id || Date.now().toString(),
        name,
        siteId,
        description,
      };
      onSave(newDepartment);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4">
          {department ? "Edit" : "Add"} Department
        </h3>

        <label
          htmlFor="department-name"
          className="block text-sm font-medium text-gray-700"
        >
          Department Name
        </label>
        <input
          id="department-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Department Name"
          className="w-full p-2 border rounded mb-2"
        />

        {/* ✅ Fix: Add a label for site selection */}
        <label
          htmlFor="site-selection"
          className="block text-sm font-medium text-gray-700"
        >
          Select Site
        </label>
        <select
          id="site-selection"
          value={siteId}
          onChange={(e) => setSiteId(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        >
          <option value="">Select Site</option>
          {sites.map((site) => (
            <option key={site.id} value={site.id}>
              {site.name} - {site.location}
            </option>
          ))}
        </select>

        <label
          htmlFor="department-description"
          className="block text-sm font-medium text-gray-700"
        >
          Department Description
        </label>
        <textarea
          id="department-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Department Description"
          className="w-full p-2 border rounded mb-2"
        />

        <div className="flex justify-end">
          <Button onClick={handleSave} className="mr-2">
            Save
          </Button>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DepartmentModal;
