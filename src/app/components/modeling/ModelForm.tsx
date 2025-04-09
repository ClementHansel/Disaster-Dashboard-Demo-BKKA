"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import UploadDownloadControls from "./UploadDownloadControls";
import DatasetTable from "./DatasetTable";
import { DatasetGroup } from "@/app/types/ai/data-sets/dataset";
import { mockDatasetGroups as initialGroups } from "@/app/data/ai/data-sets/mockDatasets";

type ModelFormProps = {
  onSubmit: (data: {
    name: string;
    version: string;
    description?: string;
    datasetsType: "group" | "upload";
  }) => void;
  initialData?: {
    name: string;
    version: string;
    description?: string;
    datasetsType?: "group" | "upload";
  };
};

export default function ModelForm({ onSubmit, initialData }: ModelFormProps) {
  const [name, setName] = useState(initialData?.name || "");
  const [version, setVersion] = useState(initialData?.version || "");
  const [description, setDescription] = useState(
    initialData?.description || ""
  );
  const [datasetsType, setDatasetsType] = useState<"group" | "upload">(
    initialData?.datasetsType || "group"
  );

  // Dataset group management
  const [datasetGroups, setDatasetGroups] =
    useState<DatasetGroup[]>(initialGroups);
  const [selectedGroupIds, setSelectedGroupIds] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !version || !datasetsType) return;
    onSubmit({ name, version, description, datasetsType });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full space-y-6 bg-white p-4 md:p-6 rounded-xl shadow-sm border"
    >
      <h3 className="text-lg font-semibold">➕ Create New Model</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <Label htmlFor="model-name">Model Name</Label>
          <Input
            id="model-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. CortheaGPT"
            required
          />
        </div>

        <div>
          <Label htmlFor="model-version">Version</Label>
          <Input
            id="model-version"
            value={version}
            onChange={(e) => setVersion(e.target.value)}
            placeholder="e.g. v1.0.0"
            required
          />
        </div>

        <div>
          <Label htmlFor="model-description">Description</Label>
          <Input
            id="model-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Short summary of the model..."
          />
        </div>

        <div>
          <Label htmlFor="datasets-type">Datasets Type</Label>
          <Select
            value={datasetsType}
            onValueChange={(value) =>
              setDatasetsType(value as "group" | "upload")
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select datasets type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="group">Group</SelectItem>
              <SelectItem value="upload">Upload</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* 📊 Dataset Groups */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          📦 Dataset Groups
        </h2>
        <div className="bg-white shadow rounded-xl p-4 border border-gray-100">
          <DatasetTable
            datasetGroups={datasetGroups}
            setDatasetGroups={setDatasetGroups}
            selectedGroupIds={selectedGroupIds}
            setSelectedGroupIds={setSelectedGroupIds}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <UploadDownloadControls
          onUploadClick={() => console.log("Upload clicked")}
          onDownloadClick={() => console.log("Download clicked")}
        />
        <Button type="submit" className="w-full md:w-auto">
          💾 Save Model
        </Button>
      </div>
    </form>
  );
}
